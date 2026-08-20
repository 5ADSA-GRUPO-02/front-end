import { View, Text, StyleSheet } from "react-native";
import { Slot } from "expo-router";

export default function RootLayout() {
    return (
        <View style={style.container}>
            <Text style={style.titulo}>Estou no Layout</Text>
            <Slot />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00f',
    },
    titulo:{
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: "bold",
        fontSize: 20
    }
})