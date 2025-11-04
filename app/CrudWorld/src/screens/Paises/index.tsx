import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, Modal, TextInput } from "react-native";
import styles from "./styles";
import Pais from "../../@types/Pais";
import { getAllPaises, createPais, updatePais, deletePais } from "../../services/paisesService";
import ModalAdicionarPais from "./ModalAdicionarPais";

export default function PaisesScreen(){
    const [paises, setPaises] = useState<Pais[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [novoPais, setNovoPais] = useState<Pais>({
        nome_oficial: "",
        continente: "",
        populacao: 0,
        idioma_principal: "",
        codigo_iso: "",
    });

    async function handleBuscarPaises(){
        try{
            const lista = await getAllPaises(50, 0); // 50 paises
            setPaises(lista);
        }catch(error){
            Alert.alert("Erro", "Não foi possível buscar países: ", error);
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
            setModalVisible(false);
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

    return(
        <View style={styles.container}>
            <Text style={styles.title}>🌍 Lista de Países</Text>

            <View style={styles.buttonsRow}>
                <TouchableOpacity style={styles.button} onPress={handleBuscarPaises}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={paises}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.cell}>{item.nome_oficial}</Text>
                            <Text style={styles.subCell}>
                                {item.continente} • {item.idioma_principal} • {item.codigo_iso}
                            </Text>
                        </View>

                        <TouchableOpacity onPress={() => handleExcluirPais(item.id!)}>
                            <Text style={styles.actionDelete}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <ModalAdicionarPais
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                novoPais={novoPais}
                setNovoPais={setNovoPais}
                handleAdicionarPais={handleAdicionarPais}
            />
        </View>
    );
}