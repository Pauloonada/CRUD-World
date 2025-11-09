import { Modal, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

interface ModalExcluirCidadeProps{
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    cidadeExcluida: any;
    handleExcluirCidade: (id:number) => void;
}

export default function ModalExcluirCidade({
    modalVisible,
    setModalVisible,
    cidadeExcluida,
    handleExcluirCidade,
}: ModalExcluirCidadeProps){
    const { theme } = useTheme();

    return(
        <Modal visible={modalVisible} transparent animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={[styles.modalBox, { backgroundColor: theme.card }]}>
                    <View style={{ alignItems: "center", marginBottom: 12 }}>
                        <MaterialIcons name="warning" size={48} color={theme.error} />
                        <Text style={[styles.modalTitle, { color: theme.error, textAlign: "center", marginTop: 8 }]}>Atenção!</Text>
                    </View>

                    <Text style={{ color: theme.text, textAlign: "center", fontSize: 16, marginBottom: 20 }}>
                        Tem certeza que deseja excluir{" "}
                        <Text style={{ fontWeight: "bold", color: theme.error }}>{cidadeExcluida?.nome || "esta cidade?"}?{"\n"}Essa ação não pode ser desfeita.</Text>
                    </Text>

                    <View style={styles.buttonsRow}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: theme.error, flex: 1, marginRight: 8 }]} onPress={() => handleExcluirCidade(cidadeExcluida.id)}>
                            <Text style={[styles.buttonText, { color: "#fff" }]}>Excluir</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, { backgroundColor: theme.secondary, flex: 1, marginLeft: 8 }]} onPress={() => setModalVisible(false)}>
                            <Text style={[styles.buttonText, { color: theme.text }]}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}