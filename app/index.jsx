import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";

export default function Login() {
    return(
        <View>
            <Text>HemoConnect</Text>
            <Pressable onPress={() => router.push("/tab")}>
                <Text>Cadastrar</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/tab")}>
                <Text>Entrar</Text>
            </Pressable>
        </View>
    )
}
