import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";

import { MonoText } from '../../components/StyledText';
import { Text, View } from '../../components/Themed';

export default function LoginScreen(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(){
    if(!email || !senha){
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    // Simulando a chamada da API
    setTimeout(() => {
      console.log("Login: ", { email, senha });
    }, 1500);
  }

  return(
      <View style={styles.container}>
          <Text style={styles.title}>Entrar</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

          <TextInput style={styles.text_input} placeholder="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" />
          <TextInput style={styles.text_input} placeholder="Senha" value={senha} secureTextEntry onChangeText={setSenha} />

          <TouchableOpacity onPress={handleLogin} style={styles.submit}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={{color: "#FFF", fontWeight: "bold"}}>Entrar</Text>
            )}
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text_input: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  submit: {
    backgroundColor: "#007AFF",
    width: "80%",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});