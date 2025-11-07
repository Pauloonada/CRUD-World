import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, Modal, TextInput } from "react-native";
import styles from "./styles";
import Pais from "../../@types/Pais";
import { getAllPaises, createPais, updatePais, deletePais } from "../../services/paisesService";
import ModalAdicionarPais from "./ModalAdicionarPais";
import ModalEditarPais from "./ModalEditarPais";
import ModalInfoPais from "./ModalInfoPais";

export default function PaisesScreen(){
    const [paises, setPaises] = useState<Pais[]>([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [infoPais, setInfopais] = useState<any>(null);
    const [modalAdicionarVisible, setModalAdicionarVisible] = useState(false);
    const [modalEditarVisible, setModalEditarVisible] = useState(false);
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

    async function loadMorePaises(){
        if(loading) return;
        setLoading(true);

        try{
            const nextPage = page + 1;
            const lista = await getAllPaises(50, nextPage * 50, searchQuery);
            setPaises(prev => [...prev, ...lista]);
            setPage(nextPage);
        }
        finally{
            setLoading(false);
        }
    }

    async function handleBuscarPaises(){
        try{
            const lista = await getAllPaises(50, 0, searchQuery); // 50 paises
            setPaises(lista);
        }catch(error){
            Alert.alert("Erro", "Não foi possível buscar países");
            console.error(error);
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
        }catch(error){
            Alert.alert("Error", "Falha ao adicionar país: ", error);
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
        }catch(error){
            Alert.alert("Error", "Falha ao editar país");
            console.error(error);
        }
    }

    async function handleExcluirPais(id: number){
        Alert.alert("Excluir", "Deseja mesmo excluir esse país?", [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Excluir",
                style: "destructive",
                onPress: async() => {
                    await deletePais(id);
                    setPaises((prev) => prev.filter((p) => p.id !== id));
                },
            },
        ]);
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

    useEffect(() => {
        handleBuscarPaises(); // 
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.buttonsRow}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Digite o nome do país..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />

                <TouchableOpacity style={styles.button} onPress={handleBuscarPaises}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setModalAdicionarVisible(true)}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={paises}
                keyExtractor={(item) => String(item.id)}
                onEndReached={loadMorePaises}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.row} onPress={() => handleGetInfoPais(item.codigo_iso)}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.cell}>{item.nome_oficial} ({item.codigo_iso})</Text>
                            <Text style={styles.subCell}>
                                {item.continente} • {item.idioma_principal} • População: {item.populacao.toLocaleString()}
                            </Text>
                        </View>

                        <TouchableOpacity onPress={() => openModalEdit(item)}>
                            <Text style={styles.actionEdit}>Editar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleExcluirPais(item.id!)}>
                            <Text style={styles.actionDelete}>Delete</Text>
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
            <ModalInfoPais
                modalVisible={modalInfoVisible}
                setModalVisible={setModalInfoVisible}
                paisInfo={infoPais}
            />
        </View>
    );
}