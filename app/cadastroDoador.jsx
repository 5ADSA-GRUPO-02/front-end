import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CadastroDoadorScreen() {
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const handleContinuar = () => {
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />

      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.progressSection}>
            <View style={styles.progressTextRow}>
              <Text style={styles.stepTitle}>Dados Pessoais</Text>
              <Text style={styles.stepCounter}>Passo 1 de 4</Text>
            </View>
            <View style={styles.progressBarTrack}>
              <View style={styles.progressBarFill} />
            </View>
          </View>

          <Text style={styles.mainTitle}>Sobre você</Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome completo</Text>
              <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholderTextColor="#94A3B8"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome social</Text>
              <TextInput
                style={styles.input}
                value={nomeSocial}
                onChangeText={setNomeSocial}
                placeholder="Como prefere ser chamado (opcional)"
                placeholderTextColor="#94A3B8"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Data de nascimento</Text>
              <TextInput
                style={styles.input}
                value={dataNascimento}
                onChangeText={setDataNascimento}
                placeholder="14/10/1998"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.rowInputs}>
              <View style={[styles.inputGroup, styles.flex1, { marginRight: 10 }]}>
                <Text style={styles.label}>CPF</Text>
                <TextInput
                  style={styles.input}
                  value={cpf}
                  onChangeText={setCpf}
                  placeholder="448.910.122-09"
                  placeholderTextColor="#94A3B8"
                  keyboardType="numeric"
                />
              </View>

              <View style={[styles.inputGroup, styles.flex1]}>
                <Text style={styles.label}>Telefone</Text>
                <TextInput
                  style={styles.input}
                  value={telefone}
                  onChangeText={setTelefone}
                  placeholder="(11) 98122-3849"
                  placeholderTextColor="#94A3B8"
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="••••••••"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!mostrarSenha}
                  autoCapitalize="none"
                />
                <Pressable
                  onPress={() => setMostrarSenha(!mostrarSenha)}
                  style={styles.eyeIcon}
                >
                  <MaterialCommunityIcons
                    name={mostrarSenha ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="#8E9DAE"
                  />
                </Pressable>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirmar senha</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  placeholder="••••••••"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!mostrarConfirmarSenha}
                  autoCapitalize="none"
                />
                <Pressable
                  onPress={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                  style={styles.eyeIcon}
                >
                  <MaterialCommunityIcons
                    name={mostrarConfirmarSenha ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="#8E9DAE"
                  />
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Pressable
              style={({ pressed }) => [
                styles.buttonPrimary,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleContinuar}
            >
              <Text style={styles.buttonPrimaryText}>Continuar</Text>
            </Pressable>

            <Pressable
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Text style={styles.backButtonText}>Voltar</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },
  progressSection: {
    marginBottom: 24,
  },
  progressTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#A72730",
  },
  stepCounter: {
    fontSize: 13.5,
    fontWeight: "600",
    color: "#64748B",
  },
  progressBarTrack: {
    height: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBarFill: {
    width: "25%",
    height: "100%",
    backgroundColor: "#A72730",
    borderRadius: 2,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1D3557",
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  form: {
    gap: 14,
  },
  inputGroup: {
    width: "100%",
  },
  flex1: {
    flex: 1,
  },
  rowInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1D3557",
    marginBottom: 6,
  },
  input: {
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 14,
    fontSize: 14.5,
    color: "#1E293B",
  },
  passwordContainer: {
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    fontSize: 14.5,
    color: "#1E293B",
  },
  eyeIcon: {
    padding: 4,
  },
  footer: {
    marginTop: 28,
  },
  buttonPrimary: {
    width: "100%",
    height: 52,
    backgroundColor: "#1D3557",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1D3557",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  backButton: {
    alignItems: "center",
    marginTop: 16,
    paddingVertical: 6,
  },
  backButtonText: {
    color: "#A72730",
    fontSize: 14.5,
    fontWeight: "700",
  },
});
