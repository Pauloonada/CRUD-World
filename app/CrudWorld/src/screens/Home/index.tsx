import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles";

export default function HomeScreen(){
    const { logout, user } = useAuth();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem vindo, {user}
            </Text>
            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.button_text}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}