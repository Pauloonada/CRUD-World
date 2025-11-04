import { StyleSheet } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e1e2f",
        padding: 20,
    },
    title: {
        fontSize: 22,
        color: "#FFF",
        fontWeight: "bold",
        marginBottom: 15,
    },
    buttonsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#4a90e2",
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2c2c3e",
        padding: 10,
        borderRadius: 10,
        marginBottom: 8,
    },
    cell: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    subCell: {
        color: "#bbb",
        fontSize: 12,
    },
    actionEdit: {
        fontSize: 20,
        color: "#4a90e2",
        marginHorizontal: 8,
    },
    actionDelete: {
        fontSize: 20,
        color: "#e24a4a",
    },
    emptyText: {
        color: "#999",
        textAlign: "center",
        marginTop: 40,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        width: "80%",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 8,
        marginBottom: 10,
    },
});