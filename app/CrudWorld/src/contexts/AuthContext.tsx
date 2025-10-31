import React, {createContext, useContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import { AuthContextData } from "../@types/AuthContextData";

console.log("AsyncStorage test: ", AsyncStorage);

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children })=> {
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadUser = async() => {
            const savedUser = await AsyncStorage.getItem("@user");

            if(savedUser){
                const parsed = JSON.parse(savedUser);
                if(parsed && parsed.email){
                    setUser(parsed.email);
                }
            }
            setLoading(false);
        };
        loadUser();
    }, []);

    async function login(email: string, senha: string){
        if(!email || !senha) throw new Error("Preencha todos os campos!");

        setLoading(true);
        try{
            const response = await api.post("/login", { email, senha }, {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Login response: ", response?.data);
            const user = response.data;

            // Salvando no storage
            await AsyncStorage.setItem("@user", JSON.stringify(user));

            setUser(user.email);
        } catch(error: any){
            console.error(error);
            throw new Error("Credenciais inválidas ou erro de conexão.");
        } finally{
            setLoading(false);
        }
    }

    async function logout(){
        await AsyncStorage.multiRemove(["@user", "@token"]);
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(){
    return useContext(AuthContext);
}