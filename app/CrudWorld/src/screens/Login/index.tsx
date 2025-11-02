import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles";

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
            console.error(error.message);
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