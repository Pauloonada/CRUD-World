import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker"
import ModalAdicionarPaisProps from "../../@types/ModalAdicionarPaisProps";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./styles";

export default function ModalAdicionarPais({
    modalVisible,
    setModalVisible,
    novoPais,
    setNovoPais,
    handleAdicionarPais,
}: ModalAdicionarPaisProps){
    const { theme } = useTheme();

    const continentes = [
        "África",
        "Ámericas",
        "Ásia",
        "Europa",
        "Oceania"
    ];

    return(
        <Modal visible={modalVisible} transparent animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={[styles.modalBox, { backgroundColor: theme.card }]}>
                    <Text style={[styles.modalTitle, { color: theme.text }]}>Adicionar País</Text>

                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.text, borderColor: theme.border, }]}
                        placeholder="Nome oficial"
                        placeholderTextColor={theme.placeholder}
                        value={novoPais.nome_oficial}
                        onChangeText={(v) => setNovoPais({ ...novoPais, nome_oficial: v })}
                    />
                    
                    <View style={{ backgroundColor: theme.inputBackground, borderRadius: 8, borderWidth: 1, borderColor: theme.border, marginBottom: 12}}>
                        <Picker selectedValue={novoPais.continente} onValueChange={(v) => setNovoPais({ ...novoPais, continente: v })} dropdownIconColor={theme.text} style={{ color: theme.text }}>
                            <Picker.Item label="Selecione o continete" value="" />
                            {continentes.map((c) => (
                                <Picker.Item key={c} label={c} value={c} />
                            ))}
                        </Picker>
                    </View>

                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText, borderColor: theme.border }]}
                        placeholder="Idioma principal"
                        placeholderTextColor={theme.placeholder}
                        value={novoPais.idioma_principal}
                        onChangeText={(v) => setNovoPais({ ...novoPais, idioma_principal: v })}
                    />
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText, borderColor: theme.border }]}
                        placeholder="Código ISO"
                        placeholderTextColor={theme.placeholder}
                        value={novoPais.codigo_iso}
                        maxLength={2}
                        onChangeText={(v) => setNovoPais({ ...novoPais, codigo_iso: v })}
                    />
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText, borderColor: theme.border }]}
                        placeholder="População"
                        placeholderTextColor={theme.placeholder}
                        keyboardType="numeric"
                        value={String(novoPais.populacao || "")}
                        onChangeText={(v) =>
                            setNovoPais({ ...novoPais, populacao: Number(v) || 0 })
                        }
                    />

                    <View style={styles.buttonsRow}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: theme.success}]} onPress={handleAdicionarPais}>
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