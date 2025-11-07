import React, { createContext, useState, useContext, ReactNode, useMemo } from "react";
import { useColorScheme } from "react-native";

interface Theme{
    background: string;
    inputText: string;
    inputBackground: string;
    subText: string;
    tabBarBackground: string;
    tabBarActiveColor: string;
    tabIconInactive: string;
    headerColor: string;
    text: string;
    primary: string;
    secondary: string;
    success: string;
    error: string;
    placeholder: string;
    card: string;
    border: string;
}

interface ThemeContextData{
    theme: Theme;
    themeType: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const colorScheme = useColorScheme();
    const [manualTheme, setManualTheme] = useState<"light" | "dark" | null>(null);
    
    const themeType = manualTheme || colorScheme || "light";

    const toggleTheme = () =>
        setManualTheme((prev) => (prev === "dark" ? "light" : "dark"));

    const theme = useMemo<Theme>(
        () =>
            themeType === "dark"
                ? {
                    background: "#121212",
                    text: "#fff",
                    inputText: "#f8f8f8",
                    subText: "#bbb",
                    card: "#1e1e1e",
                    inputBackground: "#2a2a2a",
                    placeholder: "#777",
                    primary: "#4da3ff",
                    secondary: "#888",
                    success: "#36a70d",
                    error: "#ff5555",
                    border: "#333",
                    buttonText: "#fff",
                    headerColor: "#1e1e2f",
                    tabBarBackground: "#1e1e2f",
                    tabBarActiveColor: "#4da3ff",
                    tabIconInactive: "#666",
                }
                : {
                    background: "#f8f8f8",
                    text: "#000",
                    inputText: "#111",
                    subText: "#555",
                    card: "#fff",
                    inputBackground: "#eee",
                    placeholder: "#888",
                    primary: "#007bff",
                    secondary: "#6c757d",
                    success: "#36a70d",
                    error: "#d9534f",
                    border: "#dcdcdc",
                    buttonText: "#fff",
                    headerColor: "#007bff",
                    tabBarBackground: "#fff",
                    tabBarActiveColor: "#007bff",
                    tabIconInactive: "#999",
                },
        [themeType]
    );

    return(
        <ThemeContext.Provider value={{ theme, themeType, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);