import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
    },
    text_input: {
        borderWidth: 1,
        width: "80%",
        borderRadius: 8,
        padding: 10,
    },
    password_container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        width: "80%",
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 8,
        width: "80%",
        alignItems: "center",
    },
    button_text: {
        color: "#fff",
        fontWeight: "bold",
    },
});