import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, TextInput, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import styles from "./styles";
import Pais from "../../@types/Pais";
import { getAllPaises, createPais, updatePais, deletePais } from "../../services/paisesService";
import ModalAdicionarPais from "./ModalAdicionarPais";
import ModalEditarPais from "./ModalEditarPais";
import ModalExcluirPais from "./ModalExcluirPais";
import ModalInfoPais from "./ModalInfoPais";
import { useTheme } from "../../contexts/ThemeContext";

export default function PaisesScreen(){
    const { theme } = useTheme();

    const [paises, setPaises] = useState<Pais[]>([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [infoPais, setInfopais] = useState<any>(null);
    const [modalAdicionarVisible, setModalAdicionarVisible] = useState(false);
    const [modalEditarVisible, setModalEditarVisible] = useState(false);
    const [modalDeletarVisible, setModalDeletarVisible] = useState(false);
    const [modalInfoVisible, setModalInfoVisible] = useState(false);
    const [novoPais, setNovoPais] = useState<Pais>({
        nome_oficial: "",
        continente: "",
        populacao: 0,
        idioma_principal: "",
        codigo_iso: "",
    });
    const [paisEditado, setPaisEditado] = useState<Pais>({
        id: 0,
        nome_oficial: "",
        continente: "",
        populacao: 0,
        idioma_principal: "",
        codigo_iso: "",
    });
    const [paisDeletado, setPaisDeletado] = useState<Pais | null>(null);

    async function loadMorePaises(){
        if(loadingMore) return;
        setLoadingMore(true);

        try{
            const nextPage = page + 1;
            const lista = await getAllPaises(50, nextPage * 50, searchQuery);
            setPaises(prev => [...prev, ...lista]);
            setPage(nextPage);
        }
        finally{
            setLoadingMore(false);
        }
    }

    async function handleBuscarPaises(){
        setLoading(true);
        try{
            const lista = await getAllPaises(50, 0, searchQuery); // 50 paises
            setPaises(lista);
            setPage(0);
        }catch(error){
            Alert.alert("Erro", "Não foi possível buscar países");
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    async function handleAdicionarPais(){
        try{
            if(!novoPais.nome_oficial.trim()){
                Alert.alert("Aviso", "Digite o nome do país");
                return;
            }

            const paisCriado = await createPais(novoPais);
            setPaises((prev) => [...prev, paisCriado]);
            setModalAdicionarVisible(false);
            setNovoPais({
                nome_oficial: "",
                continente: "",
                populacao: 0,
                idioma_principal: "",
                codigo_iso: "",
            });
			Toast.show({ type: "success", text1: "Sucesso!", text2: "País adicionado com sucesso! 👏" });
        }catch(error){
            Alert.alert("Error", "Falha ao adicionar país: ", error);
			Toast.show({ type: "error", text1: "Erro!", text2: "Falha ao adicionar país! ⚠️" });
            console.error(error);
        }
    }

    async function handleEditarPais(){
        try{
            if(!paisEditado.nome_oficial.trim()){
                Alert.alert("Aviso", "Digite o nome do país");
                return;
            }

            const paisAtualizado = await updatePais(paisEditado.id!, paisEditado);

            setPaises((prev) => 
                prev.map((p) => (p.id === paisAtualizado.id ? paisAtualizado : p))
            );

            setModalEditarVisible(false);
			Toast.show({ type: "success", text1: "Sucesso!", text2: "País editado com sucesso! 👏" });
        }catch(error){
            Alert.alert("Error", "Falha ao editar país");
			Toast.show({ type: "error", text1: "Erro!", text2: "Falha ao editar país! ⚠️" });
            console.error(error);
        }
    }

    async function handleExcluirPais(id: number){
        if(!paisDeletado) return;
        try{
            await deletePais(paisDeletado.id!);
            setPaises((prev) => prev.filter((p) => p.id !== paisDeletado.id));
            setModalDeletarVisible(false);
            setPaisDeletado(null);
			Toast.show({ type: "success", text1: "Sucesso!", text2: "País excluido com sucesso! 👏" });
        }catch(error){
            Alert.alert("Erro", "Falha ao excluir o país");
			Toast.show({ type: "error", text1: "Erro!", text2: "Falha ao excluir país! ⚠️" });
            console.error(error);
        }
    }

    async function handleGetInfoPais(codigo: string){
        try{
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${codigo}`);
            const data = await response.json();

            setInfopais(data[0]);
            setModalInfoVisible(true);
        }catch(error){
            console.error(error);
            Alert.alert("Erro", "Não foi possível buscar informações do país");
        }
    }

    function openModalEdit(pais: Pais){
        setPaisEditado(pais);
        setModalEditarVisible(true);
    }

    function openModalDelete(pais: Pais){
        setPaisDeletado(pais);
        setModalDeletarVisible(true);
    }

    useEffect(() => {
        handleBuscarPaises(); // Busca os países ao entrar na aba
    }, []);

    return(
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.buttonsRow}>
                <TextInput
                    style={[styles.searchInput, { backgroundColor: theme.inputBackground, color: theme.text }]}
                    placeholder="Digite o nome do país..."
                    placeholderTextColor={theme.placeholder}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />

                <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleBuscarPaises}>
                    <Text style={[styles.buttonText, { color: "#fff" }]}>Buscar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor: theme.success, marginLeft: 15}]} onPress={() => setModalAdicionarVisible(true)}>
                    <Text style={[styles.buttonText, { color: "#fff" }]}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            { !loading ? (
                <>
                    <FlatList
                        data={paises}
                        keyExtractor={(item) => String(item.id)}
                        onEndReached={loadMorePaises}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[styles.row, { backgroundColor: theme.card }]} onPress={() => handleGetInfoPais(item.codigo_iso)}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.cell, { color: theme.text }]}>{item.nome_oficial} ({item.codigo_iso})</Text>
                                    <Text style={[styles.subCell, { color: theme.subText }]}>
                                        {item.continente} • {item.idioma_principal} • População: {item.populacao.toLocaleString()}
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
                    <ModalAdicionarPais
                        modalVisible={modalAdicionarVisible}
                        setModalVisible={setModalAdicionarVisible}
                        novoPais={novoPais}
                        setNovoPais={setNovoPais}
                        handleAdicionarPais={handleAdicionarPais}
                    />
                    <ModalEditarPais
                        modalVisible={modalEditarVisible}
                        setModalVisible={setModalEditarVisible}
                        paisEditado={paisEditado}
                        setPaisEditado={setPaisEditado}
                        handleEditarPais={handleEditarPais}
                    />
                    <ModalExcluirPais
                        modalVisible={modalDeletarVisible}
                        setModalVisible={setModalDeletarVisible}
                        paisExcluido={paisDeletado}
                        handleExcluirPais={handleExcluirPais}
                    />
                    <ModalInfoPais
                        modalVisible={modalInfoVisible}
                        setModalVisible={setModalInfoVisible}
                        paisInfo={infoPais}
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