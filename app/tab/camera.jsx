import { StyleSheet, Text, View } from "react-native";

export default function Camera() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Camera</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
    justifyContent: "center",
    alignItems: "center",
  },
    text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3557",
    textAlign: "center",
  },
})
