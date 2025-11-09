import React from "react";
import { Modal, View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import styles from "./styles";
import { useTheme } from "../../contexts/ThemeContext";

interface ModalInfoCidadesProps{
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    cidadeInfo: any;
    loading?: boolean
}

export default function ModalInfoCidade({
    modalVisible,
    setModalVisible,
    cidadeInfo,
    loading = false
}: ModalInfoCidadesProps) {
    const { theme } = useTheme();

    return(
        <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
            <View style={[styles.modalBox, { backgroundColor: theme.card }]}>
                <Text style={[styles.modalTitle, { color: theme.text, textAlign: "center"}]}>
                    Clima na cidade
                </Text>

                <ScrollView style={{ maxHeight: 300 }}>
                    {loading ? (
                        <View style={{ alignItems: "center", marginVertical: 20 }}>
                            <ActivityIndicator size="large" color={theme.primary} />
                        </View>
                    ) : cidadeInfo ? (
                        <>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: theme.text, fontWeight: "bold" }}>
                                        Descrição:
                                    </Text>
                                    <Text style={{ color: theme.text }}>
                                        {cidadeInfo.weather?.[0]?.description || "N/A"}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: theme.text, fontWeight: "bold" }}>
                                        Temperatura:
                                    </Text>
                                    <Text style={{ color: theme.text }}>
                                        {cidadeInfo.main?.temp ? `${cidadeInfo.main.temp.toFixed(1)}°C` : "N/A"}
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: theme.text, fontWeight: "bold" }}>
                                        Vento: 
                                    </Text>
                                    <Text style={{ color: theme.text }}>
                                        {cidadeInfo.wind?.speed ? `${cidadeInfo.wind.speed} m/s` : "N/A"}
                                    </Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: theme.text, fontWeight: "bold" }}>
                                        Umidade:
                                    </Text>
                                    <Text style={{ color: theme.text }}>
                                        {cidadeInfo.main?.humidity ? `${cidadeInfo.main.humidity}%` : "N/A"}
                                    </Text>
                                </View>
                                {cidadeInfo.weather?.[0]?.icon && (
                                    <Image
                                    source={{
                                        uri: `https://openweathermap.org/img/wn/${cidadeInfo.weather[0].icon}@2x.png`
                                    }}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 12,
                                        marginRight: 10
                                    }}
                                    resizeMode="contain"
                                />
                                )}
                            </View>
                        </>
                    ) : (
                        <View style={{ alignItems: "center", marginVertical: 20 }}>
                            <Text style={{ color: theme.text }}>Nenhuma informação disponível</Text>
                        </View>
                    )}
                </ScrollView>

                <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={() => setModalVisible(false)}>
                    <Text style={styles.buttonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
    );
}

