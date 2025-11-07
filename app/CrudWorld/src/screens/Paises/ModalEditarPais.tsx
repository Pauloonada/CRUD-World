import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
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
                    <TextInput
                        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                        placeholder="Continente"
                        placeholderTextColor={theme.placeholder}
                        value={paisEditado.continente}
                        onChangeText={(v) => setPaisEditado({ ...paisEditado, continente: v })}
                    />
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