import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./styles";

export default function HomeScreen(){
    const { logout, user } = useAuth();
    const { theme, themeType, toggleTheme } = useTheme();

    return(
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.title, {color: theme.text}]}>
                Bem vindo, {user}
            </Text>
            <TouchableOpacity style={[styles.button, { backgroundColor: theme.error }]} onPress={logout}>
                <Text style={[styles.button_text, { color: "#fff" }]}>Sair</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
                <Text style={{ color: theme.text, marginRight: 10 }}>Modo escuro</Text>
                <Switch
                    value={themeType === "dark" ? true : false}
                    onValueChange={toggleTheme}
                    thumbColor={"#fff"}
                    trackColor={{ false: "#767577", true: theme.primary }}
                />
            </View>
        </View>
    );
}