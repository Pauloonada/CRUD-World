import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginScreen(){
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleLogin(){
        try{
            setLoading(true);
            await login(email, password);
        } catch(error: any){
            alert(error.message);
        } finally{
            setLoading(false);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput placeholder="E-mail" style={styles.text_input} value={email} onChangeText={setEmail} autoCapitalize="none" />
            <View style={styles.password_container}>
                <TextInput
                placeholder="Senha"
                style={[styles.text_input, { flex: 1, borderWidth: 0 }]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword} // Alterna a visibilidade
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                importantForAutofill="yes"
                />

                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons 
                        name={showPassword ? "eye" : "eye-off"} // Alterna o ícone
                        size={22}
                        color="#555"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.button_text}>Entrar</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
    },
    text_input: {
        borderWidth: 1,
        width: "80%",
        borderRadius: 8,
        padding: 10,
    },
    password_container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        width: "80%",
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 8,
        width: "80%",
        alignItems: "center",
    },
    button_text: {
        color: "#fff",
        fontWeight: "bold",
    },
});