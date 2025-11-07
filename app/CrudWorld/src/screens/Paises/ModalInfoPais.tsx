import React from "react";
import { Modal, View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";

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
    return(
        <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
                <Text style={styles.modalTitle}>
                    {paisInfo?.name?.common || "Informações do país"}
                </Text>

                <ScrollView style={{ maxHeight: 300 }}>
                    {paisInfo ? (
                        <>
                            <Text>Capital: {paisInfo.capital?.[0] || "N/A"}</Text>
                            <Text>Região: {paisInfo.region || "N/A"}</Text>
                            <Text>Sub-região: {paisInfo.subregion || "N/A"}</Text>
                            <Text>População: {paisInfo.population?.toLocaleString() || "N/A"}</Text>
                            <Text>
                                Moeda:{" "}
                                {paisInfo.currencies ? Object.keys(paisInfo.currencies).join(", ") : "N/A"}
                            </Text>
                            <Text>
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

