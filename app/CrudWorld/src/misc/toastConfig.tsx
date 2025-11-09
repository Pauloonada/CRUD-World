import React from "react";
import { BaseToast, ErrorToast } from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";

export const toastConfig = {
    success: (props: any) => {
        const { theme } = useTheme();
        return(
            <BaseToast
                {...props}
                style={{ borderLeftColor: theme.success, backgroundColor: props.props?.backgroundColor || theme.background }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{ fontSize: 15, fontWeight: "400", color: props.props?.color || theme.text }}
                text2Style={{ fontSize: 12, color: props.props?.color || theme.text }}
                renderLeadingIcon={() => (
                    <Ionicons
                        name="checkmark-circle"
                        size={32}
                        color={theme.success}
                        style={{ marginLeft: 12, alignSelf: "center" }}
                    />
                )}
            />
    
        );
    },

    error: (props: any) => {
        const { theme } = useTheme();

        return(
            <ErrorToast
                {...props}
                style={{ borderLeftColor: theme.error, backgroundColor: props.props?.backgroundColor || theme.background }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{ fontSize: 15, fontWeight: "400", color: props.props?.color || theme.text }}
                text2Style={{ fontSize: 12, color: props.props?.color || theme.text }}
                renderLeadingIcon={() => (
                    <Ionicons
                        name="warning"
                        size={32}
                        color={theme.error}
                        style={{ marginLeft: 12, alignSelf: "center" }}
                    />
                )}
            />
        );
    },
}