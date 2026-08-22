import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { GoogleSignin, isSuccessResponse } from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";

GoogleSignin.configure({
  webClientId: "883597232344-uaukdvfqfb81a1polqqclj19ss1e1s6v.apps.googleusercontent.com",
  iosClientId: "883597232344-eb1a6bh3iih0r8ucgpttfitp9icppi21.apps.googleusercontent.com",
});

export default function LoginAuth() {
  const [auth, setAuth] = useState(null);

  async function handleGoogleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        console.log(response.data);
        setAuth(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => handleGoogleSignIn()}>
        <Text style={styles.buttonText}>Login com Google</Text>
      </Pressable>
      {auth && (
        <View style={{ backgroundColor: '#00f', padding: 10, borderRadius: 5 }}>
          {auth.user?.photo && (
            <Image source={{ uri: auth.user.photo }} style={{ width: 50, height: 50, borderRadius: 25 }} />
          )}
          <Text style={{ color: '#fff' }}>ID:{auth.user?.id}</Text>
          <Text style={{ color: '#fff' }}>EMail:{auth.user?.email}</Text>
          <Text style={{ color: '#fff' }}>Nome:{auth.user?.name}</Text>
        </View>
      )}
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#00f',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 20,
  },
});
