import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';

export default function HemoConnect() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HemoConnect</Text>
      <Text style={styles.description}>
        Um aplicativo para conectar doadores de sangue a quem precisa
      </Text>
      <Link style={styles.botao} href="/login">Login</Link>
      <Link style={styles.botao} href="/registro">Registro</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao:{
    backgroundColor: '#00f',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 20
  }
});