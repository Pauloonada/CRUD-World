import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native"
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { AppRoutes } from './src/navigation/AppRoutes';
import { AuthRoutes } from './src/navigation/AuthRoutes';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
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

function ThemedApp(){
  const { theme } = useTheme();

  return (
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: theme.headerColor }}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
            <Toast />
          </SafeAreaView>
        </SafeAreaProvider>
  );
}

export default function App(){
  return(
    <ThemeProvider>
      <AuthProvider>
        <ThemedApp />
      </AuthProvider>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
