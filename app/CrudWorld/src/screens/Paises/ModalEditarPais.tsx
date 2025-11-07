import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import ModalEditarPaisProps from "../../@types/ModalEditarPaisProps";
import styles from "./styles";

export default function ModalEditarPais({
    modalVisible,
    setModalVisible,
    paisEditado,
    setPaisEditado,
    handleEditarPais,
}: ModalEditarPaisProps){
    return(
        <Modal visible={modalVisible} transparent animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalTitle}>Editar País</Text>

                    <TextInput
                    style={styles.input}
                    placeholder="Nome oficial"
                    value={paisEditado.nome_oficial}
                    onChangeText={(v) => setPaisEditado({ ...paisEditado, nome_oficial: v })}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Continente"
                    value={paisEditado.continente}
                    onChangeText={(v) => setPaisEditado({ ...paisEditado, continente: v })}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Idioma principal"
                    value={paisEditado.idioma_principal}
                    onChangeText={(v) => setPaisEditado({ ...paisEditado, idioma_principal: v })}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Código ISO"
                    value={paisEditado.codigo_iso}
                    onChangeText={(v) => setPaisEditado({ ...paisEditado, codigo_iso: v })}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="População"
                    keyboardType="numeric"
                    value={String(paisEditado.populacao || "")}
                    onChangeText={(v) =>
                        setPaisEditado({ ...paisEditado, populacao: Number(v) || 0 })
                    }
                    />

                    <View style={styles.buttonsRow}>
                    <TouchableOpacity style={styles.button} onPress={handleEditarPais}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "#999" }]}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}