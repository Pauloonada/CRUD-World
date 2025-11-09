import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ModalEditarPaisProps from "../../@types/ModalEditarPaisProps";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./styles";

export default function ModalEditarPais({
    modalVisible,
    setModalVisible,
    paisEditado,
    setPaisEditado,
    handleEditarPais,
}: ModalEditarPaisProps){
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
                    <Text style={[styles.modalTitle, { color: theme.text }]}>Editar País</Text>

                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                        placeholder="Nome oficial"
                        placeholderTextColor={theme.placeholder}
                        value={paisEditado.nome_oficial}
                        onChangeText={(v) => setPaisEditado({ ...paisEditado, nome_oficial: v })}
                    />
                    <View style={{ backgroundColor: theme.inputBackground, borderRadius: 8, borderWidth: 1, borderColor: theme.border, marginBottom: 12}}>
                        <Picker selectedValue={paisEditado.continente} onValueChange={(v) => setPaisEditado({ ...paisEditado, continente: v })} dropdownIconColor={theme.text} style={{ color: theme.text }}>
                            <Picker.Item label="Selecione o continete" value="" />
                            {continentes.map((c) => (
                                <Picker.Item key={c} label={c} value={c} />
                            ))}
                        </Picker>
                    </View>
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                        placeholder="Idioma principal"
                        placeholderTextColor={theme.placeholder}
                        value={paisEditado.idioma_principal}
                        onChangeText={(v) => setPaisEditado({ ...paisEditado, idioma_principal: v })}
                    />
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                        placeholder="Código ISO"
                        placeholderTextColor={theme.placeholder}
                        value={paisEditado.codigo_iso}
                        onChangeText={(v) => setPaisEditado({ ...paisEditado, codigo_iso: v })}
                    />
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                        placeholder="População"
                        placeholderTextColor={theme.placeholder}
                        keyboardType="numeric"
                        value={String(paisEditado.populacao || "")}
                        onChangeText={(v) =>
                            setPaisEditado({ ...paisEditado, populacao: Number(v) || 0 })
                        }
                    />

                    <View style={styles.buttonsRow}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: theme.success }]} onPress={handleEditarPais}>
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