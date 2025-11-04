import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import ModalAdicionarPaisProps from "../../@types/ModalAdicionarPaisProps";
import styles from "./styles";

export default function ModalAdicionarPais({
    modalVisible,
    setModalVisible,
    novoPais,
    setNovoPais,
    handleAdicionarPais,
}: ModalAdicionarPaisProps){
    return(
        <Modal visible={modalVisible} transparent animationType="slide">
            <View style={styles.modalOverlay}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalTitle}>Adicionar País</Text>

                    <TextInput
                    style={styles.input}
                    placeholder="Nome oficial"
                    value={novoPais.nome_oficial}
                    onChangeText={(v) => setNovoPais({ ...novoPais, nome_oficial: v })}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Continente"
                    value={novoPais.continente}
                    onChangeText={(v) => setNovoPais({ ...novoPais, continente: v })}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Idioma principal"
                    value={novoPais.idioma_principal}
                    onChangeText={(v) => setNovoPais({ ...novoPais, idioma_principal: v })}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Código ISO"
                    value={novoPais.codigo_iso}
                    onChangeText={(v) => setNovoPais({ ...novoPais, codigo_iso: v })}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="População"
                    keyboardType="numeric"
                    value={String(novoPais.populacao || "")}
                    onChangeText={(v) =>
                        setNovoPais({ ...novoPais, populacao: Number(v) || 0 })
                    }
                    />

                    <View style={styles.buttonsRow}>
                    <TouchableOpacity style={styles.button} onPress={handleAdicionarPais}>
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