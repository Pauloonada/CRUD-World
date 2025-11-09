import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import Toast from "react-native-toast-message";
import { View, Text, FlatList, TouchableOpacity, Alert, TextInput, ActivityIndicator } from "react-native";
import styles from "./styles";
import Cidade from "../../@types/Cidade";
import { getAllCidades, createCidade, updateCidade, deleteCidade } from "../../services/cidadesService";
import { getAllPaises } from "../../services/paisesService";
import ModalAdicionarCidade from "./ModalAdicionarCidade";
import ModalEditarCidade from "./ModalEditarCidade";
import ModalExcluirCidade from "./ModalExcluirCidade";
import ModalInfoCidade from "./ModalInfoCidade";
import { useTheme } from "../../contexts/ThemeContext";

export default function CidadesScreen(){
    const { apiKey } = Constants.expoConfig?.extra
    const { theme } = useTheme();

    const [cidades, setCidades] = useState<Cidade[]>([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [infoCidade, setInfoCidade] = useState<any>(null);
    const [modalAdicionarVisible, setModalAdicionarVisible] = useState(false);
    const [modalEditarVisible, setModalEditarVisible] = useState(false);
    const [modalDeletarVisible, setModalDeletarVisible] = useState(false);
    const [modalInfoVisible, setModalInfoVisible] = useState(false);
    const [novaCidade, setNovaCidade] = useState<Cidade>({
        nome: "",
        populacao: 0,
        id_pais: null,
    });
    const [cidadeEditada, setCidadeEditada] = useState<Cidade>({
        id: 0,
        nome: "",
        populacao: 0,
        id_pais: null,
    });
    const [cidadeDeletada, setCidadeDeletada] = useState<Cidade | null>(null);
    const [paises, setPaises] = useState<any[]>([]);

    async function loadMoreCidades(){
        if(loadingMore) return;
        setLoadingMore(true);

        try{
            const nextPage = page + 1;
            const lista = await getAllCidades(50, nextPage * 50, searchQuery);
            setCidades(prev => [...prev, ...lista]);
            setPage(nextPage);
        }
        finally{
            setLoadingMore(false);
        }
    }

    async function handleBuscarCidades(){
        setLoading(true);
        try{
            const lista = await getAllCidades(50, 0, searchQuery); // 50 Cidadees
            setCidades(lista);
            setPage(0);
        }catch(error){
            Alert.alert("Erro", "Não foi possível buscar cidades");
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    async function handleAdicionarCidade(){
        try{
            if(!novaCidade.nome.trim()){
                Alert.alert("Aviso", "Digite o nome do país");
                return;
            }

            const cidadeCriada = await createCidade(novaCidade);
            console.log(cidadeCriada);
            setCidades((prev) => [...prev, cidadeCriada]);
            setModalAdicionarVisible(false);
            setNovaCidade({
                nome: "",
                populacao: 0,
                id_pais: null,
            });
            Toast.show({ type: "success", text1: "Sucesso!", text2: "Cidade adicionada com sucesso! 👏" });
        }catch(error){
            Alert.alert("Error", "Falha ao adicionar cidade: ", error);
            Toast.show({ type: "error", text1: "Erro!", text2: "Falha ao adicionar cidade! ⚠️" });
            console.error(error);   
        }
    }

    async function handleEditarCidade(){
        try{
            if(!cidadeEditada.nome.trim()){
                Alert.alert("Aviso", "Digite o nome da cidade");
                return;
            }

            const cidadeAtualizada = await updateCidade(cidadeEditada.id!, cidadeEditada);

            setCidades((prev) => 
                prev.map((c) => (c.id === cidadeAtualizada.id ? cidadeAtualizada : c))
            );

            setModalEditarVisible(false);
            Toast.show({ type: "success", text1: "Sucesso!", text2: "Cidade editada com sucesso! 👏" });
        }catch(error){
            Alert.alert("Error", "Falha ao editar cidade");
            Toast.show({ type: "error", text1: "Erro!", text2: "Falha ao editar cidade! ⚠️" });
            console.error(error);
        }
    }

    async function handleExcluirCidade(id: number){
        if(!cidadeDeletada) return;
        try{
            await deleteCidade(cidadeDeletada.id!);
            setCidades((prev) => prev.filter((c) => c.id !== cidadeDeletada.id));
            setModalDeletarVisible(false);
            setCidadeDeletada(null);
            Toast.show({ type: "success", text1: "Sucesso!", text2: "Cidade excluida com sucesso! 👏" });
        }catch(error){
            Alert.alert("Erro", "Falha ao excluir a cidade");
            Toast.show({ type: "error", text1: "Erro!", text2: "Falha ao excluir cidade! ⚠️" });
            console.error(error);
        }
    }

    async function handleGetInfoCidade(cidade: string){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            if(data.cod !== 200){
                Alert.alert("Erro", data.message || "Não foi possível buscar informações da cidade");
                return;
            }

            setInfoCidade(data);
            setModalInfoVisible(true);
        }catch(error){
            console.error(error);
            Alert.alert("Erro", "Não foi possível buscar informações da cidade");
        }
    }

    function openModalEdit(cidade: Cidade){
        setCidadeEditada(cidade);
        setModalEditarVisible(true);
    }

    function openModalDelete(cidade: Cidade){
        setCidadeDeletada(cidade);
        setModalDeletarVisible(true);
    }

    function getNomePais(id_pais: number | null){
        if(!id_pais) return "Desconhecido";

        const pais = paises.find(p => p.id === id_pais);
        return pais ? pais.nome_oficial : "Desconhecido";
    }

    useEffect(() => {
        handleBuscarCidades(); // Busca as cidades ao entrar na aba

        async function carregarPaises(){
            try{
                const paises = await getAllPaises(300);
                setPaises(paises);
            } catch(error){
                console.error("Erro ao buscar países: ", error);
            }
        }

        carregarPaises();
    }, []);

    return(
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.buttonsRow}>
                <TextInput
                    style={[styles.searchInput, { backgroundColor: theme.inputBackground, color: theme.text }]}
                    placeholder="Digite o nome da cidade..."
                    placeholderTextColor={theme.placeholder}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />

                <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleBuscarCidades}>
                    <Text style={[styles.buttonText, { color: "#fff" }]}>Buscar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor: theme.success, marginLeft: 15}]} onPress={() => setModalAdicionarVisible(true)}>
                    <Text style={[styles.buttonText, { color: "#fff" }]}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            { !loading ? (
                <>
                    <FlatList
                        data={cidades}
                        keyExtractor={(item) => String(item.id)}
                        onEndReached={loadMoreCidades}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[styles.row, { backgroundColor: theme.card }]} onPress={() => handleGetInfoCidade(item.nome)}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.cell, { color: theme.text }]}>{item.nome}</Text>
                                    <Text style={[styles.subCell, { color: theme.subText }]}>
                                        {getNomePais(item.id_pais)} • População: {item.populacao.toLocaleString()}
                                    </Text>
                                </View>

                                <TouchableOpacity onPress={() => openModalEdit(item)}>
                                    <Text style={[styles.actionEdit, { color: theme.primary }]}>Editar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => openModalDelete(item)}>
                                    <Text style={[styles.actionDelete, { color: theme.error }]}>Delete</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    />
                    <ModalAdicionarCidade
                        modalVisible={modalAdicionarVisible}
                        setModalVisible={setModalAdicionarVisible}
                        novaCidade={novaCidade}
                        setNovaCidade={setNovaCidade}
                        handleAdicionarCidade={handleAdicionarCidade}
                    />
                    <ModalEditarCidade
                        modalVisible={modalEditarVisible}
                        setModalVisible={setModalEditarVisible}
                        cidadeEditada={cidadeEditada}
                        setCidadeEditada={setCidadeEditada}
                        handleEditarCidade={handleEditarCidade}
                    />
                    <ModalExcluirCidade
                        modalVisible={modalDeletarVisible}
                        setModalVisible={setModalDeletarVisible}
                        cidadeExcluida={cidadeDeletada}
                        handleExcluirCidade={handleExcluirCidade}
                    />
                    <ModalInfoCidade
                        modalVisible={modalInfoVisible}
                        setModalVisible={setModalInfoVisible}
                        cidadeInfo={infoCidade}
                    />
                </>
                ) : (
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" color={theme.primary} />
                    </View>
                )}
        </View>
    );
}