import React, { useEffect, useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker"
import ModalAdicionarCidadeProps from "../../@types/ModalAdicionarCidadeProps";
import { getAllPaises } from "../../services/paisesService";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./styles";

export default function ModalAdicionarCidade({
    modalVisible,
    setModalVisible,
    novaCidade,
    setNovaCidade,
    handleAdicionarCidade,
}: ModalAdicionarCidadeProps){
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
                    <Text style={[styles.modalTitle, { color: theme.text }]}>Adicionar Cidade</Text>

                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.text, borderColor: theme.border, }]}
                        placeholder="Nome oficial"
                        placeholderTextColor={theme.placeholder}
                        value={novaCidade.nome}
                        onChangeText={(v) => setNovaCidade({ ...novaCidade, nome: v })}
                    />
                    
                    <View style={{ backgroundColor: theme.inputBackground, borderRadius: 8, borderWidth: 1, borderColor: theme.border, marginBottom: 12}}>
                        <Picker selectedValue={novaCidade.id_pais} onValueChange={(v) => setNovaCidade({ ...novaCidade, id_pais: v })} dropdownIconColor={theme.text} style={{ color: theme.text }}>
                            <Picker.Item label="Selecione o continete" value="" />
                            {paises.map((p) => (
                                <Picker.Item key={p.id} label={p.nome_oficial} value={p.id} />
                            ))}
                        </Picker>
                    </View>
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText, borderColor: theme.border }]}
                        placeholder="População"
                        placeholderTextColor={theme.placeholder}
                        keyboardType="numeric"
                        value={String(novaCidade.populacao || "")}
                        onChangeText={(v) =>
                            setNovaCidade({ ...novaCidade, populacao: Number(v) || 0 })
                        }
                    />

                    <View style={styles.buttonsRow}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: theme.success}]} onPress={() => handleAdicionarCidade()}>
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