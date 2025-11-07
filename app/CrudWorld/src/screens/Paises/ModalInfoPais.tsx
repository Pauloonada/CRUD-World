import React from "react";
import { Modal, View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import styles from "./styles";
import { useTheme } from "../../contexts/ThemeContext";

interface ModalInfoPaisProps{
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    paisInfo: any;
}

export default function ModalInfoPais({
    modalVisible,
    setModalVisible,
    paisInfo,
}: ModalInfoPaisProps) {
    const { theme } = useTheme();
    return(
        <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
            <View style={[styles.modalBox, { backgroundColor: theme.card }]}>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                    {paisInfo?.flags?.png && (
                        <Image 
                            source={{ uri: paisInfo.flags.png }}
                            style={{
                                width: 60,
                                height: 40,
                                borderRadius: 6,
                                marginRight: 10,
                                borderWidth: 1,
                                borderColor: theme.border
                            }}
                            resizeMode="cover"
                        />
                    )}
                </View>
                <Text style={[styles.modalTitle, { color: theme.text}]}>
                    {paisInfo?.name?.common || "Informações do país"}
                </Text>

                <ScrollView style={{ maxHeight: 300 }}>
                    {paisInfo ? (
                        <>
                            <Text style={{ color: theme.text}}>Capital: {paisInfo.capital?.[0] || "N/A"}</Text>
                            <Text style={{ color: theme.text}}>Região: {paisInfo.region || "N/A"}</Text>
                            <Text style={{ color: theme.text}}>Sub-região: {paisInfo.subregion || "N/A"}</Text>
                            <Text style={{ color: theme.text}}>População: {paisInfo.population?.toLocaleString() || "N/A"}</Text>
                            <Text style={{ color: theme.text}}>
                                Moeda:{" "}
                                {paisInfo.currencies ? Object.keys(paisInfo.currencies).join(", ") : "N/A"}
                            </Text>
                            <Text style={{ color: theme.text}}>
                                Idiomas: {" "}
                                {paisInfo.languages ? Object.keys(paisInfo.languages).join(", ") : "N/A"}
                            </Text>
                        </>
                    ) : (
                        <View style={{ alignItems: "center", marginVertical: 20 }}>
                            <ActivityIndicator size="large" color="#007aff" />
                        </View>
                    )}
                </ScrollView>

                <TouchableOpacity style={[styles.button, {marginTop: 10}]} onPress={() => setModalVisible(false)}>
                    <Text style={styles.buttonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
    );
}

