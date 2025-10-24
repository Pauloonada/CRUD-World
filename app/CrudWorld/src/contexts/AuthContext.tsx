import React, {createContext, useContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
    user: string | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children })=> {
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadUser = async() => {
            const savedUser = await AsyncStorage.getItem("@user");
            if(savedUser) setUser(savedUser);
            setLoading(false);
        };
        loadUser();
    }, []);

    async function login(email: string, password: string){
        // Placeholder(Chamar a api futuramente)
        if(email === "" || password === "") throw new Error("Campos vazios.");

        await AsyncStorage.setItem("@user", email);
        setUser(email);
    }

    async function logout(){
        await AsyncStorage.removeItem("@user");
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