import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import * as Google from 'expo-auth-session/providers/google'
import { useEffect } from "react";

export default function LoginAuth() {

  const [request, response, prompAsync] = Google.useAuthRequest({
    androidClientId: '883597232344-d46urbesfip9m3mhdv9jch7rq1lh4m3s.apps.googleusercontent.com',
    iosClientId: '883597232344-eb1a6bh3iih0r8ucgpttfitp9icppi21.apps.googleusercontent.com',
 
  })


  const enviarTokenalServer = async (token) => {
    console.log(token)  
  }
  useEffect(()=>{
    if(response){
        if (response?.type === 'success'){
          enviarTokenalServer(response.authentication?.idToken || '')
        }
        else{
          console.log('Erro ao logar com o google')
        }
    }
  },[response])

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => prompAsync().catch((e)=>{
        console.log(e)
      })}>
        <Text style={styles.buttonText}>Login com Google</Text>
      </Pressable>
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
  input:{
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
    fontSize: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 20
  }
});