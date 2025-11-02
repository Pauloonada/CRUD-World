import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import { AppRoutes } from './src/navigation/AppRoutes';
import { AuthRoutes } from './src/navigation/AuthRoutes';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import "react-native-reanimated"

function Routes(){
  const { user, loading } = useAuth();

  if(loading){
    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes /> // Retorna tela de login caso necessário
}

export default function App(){
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
