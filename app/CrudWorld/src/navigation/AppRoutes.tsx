import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAuth } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator();

function HomeScreen(){
    const { logout, user } = useAuth();

    return(
        <View style={styles.container}>
            <Text>Bem vindo, {user}</Text>
            <TouchableOpacity style={styles.button} onPress={logout} />
        </View>
    );
}

export function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
});