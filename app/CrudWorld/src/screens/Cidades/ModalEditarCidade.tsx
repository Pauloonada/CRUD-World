import React, { useEffect, useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker"
import ModalEditarCidadeProps from "../../@types/ModalEditarCidadeProps";
import { useTheme } from "../../contexts/ThemeContext";
import { getAllPaises } from "../../services/paisesService";
import styles from "./styles";

export default function ModalEditarCidade({
    modalVisible,
    setModalVisible,
    cidadeEditada,
    setCidadeEditada,
    handleEditarCidade,
}: ModalEditarCidadeProps){
    const { theme } = useTheme();
    const [paises, setPaises] = useState<any[]>([]);

    useEffect(() => {
        async function carregarPaises(){
            try{
                const data = await getAllPaises(500);
                setPaises(data);
            } catch(error){
                console.error("Erro ao buscar países: ", error);
            }
        }

        carregarPaises();
    }, []);

    return(
        <Modal visible={modalVisible} transparent animationType="fade"> 
            <View style={styles.modalOverlay}>
                <View style={[styles.modalBox, { backgroundColor: theme.card }]}>
                    <Text style={[styles.modalTitle, { color: theme.text }]}>Editar País</Text>

                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                        placeholder="Nome da cidade"
                        placeholderTextColor={theme.placeholder}
                        value={cidadeEditada.nome}
                        onChangeText={(v) => setCidadeEditada({ ...cidadeEditada, nome: v })}
                    />
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                        placeholder="População"
                        placeholderTextColor={theme.placeholder}
                        keyboardType="numeric"
                        value={String(cidadeEditada.populacao || "")}
                        onChangeText={(v) =>
                            setCidadeEditada({ ...cidadeEditada, populacao: Number(v) || 0 })
                        }
                    />
                    <View style={{ backgroundColor: theme.inputBackground, borderRadius: 8, borderWidth: 1, borderColor: theme.border, marginBottom: 12}}>
                        <Picker selectedValue={cidadeEditada.id_pais} onValueChange={(v) => setCidadeEditada({ ...cidadeEditada, id_pais: v })} dropdownIconColor={theme.text} style={{ color: theme.text }}>
                            <Picker.Item label="Selecione o país" value="" style={{ color: "#0005" }} />
                            {paises.map((p) => (
                                <Picker.Item key={p.id_pais} label={p.nome_oficial} value={p.id_pais} />
                            ))}
                        </Picker>
                    </View>

                    <View style={styles.buttonsRow}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: theme.success }]} onPress={handleEditarCidade}>
                            <Text style={[styles.buttonText, { color: theme.text }]}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: theme.secondary }]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={[styles.buttonText, { color: theme.text }]}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}