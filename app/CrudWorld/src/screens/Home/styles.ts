import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#f5f5f5", // opcional: cor de fundo
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#d33",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  button_text: {
    color: "#fff",
    fontWeight: "bold",
  },
});