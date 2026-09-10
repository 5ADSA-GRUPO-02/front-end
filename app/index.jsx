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
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SplashScreen from "../components/SplashScreen";
import OnboardingScreen from "../components/OnboardingScreen";



export default function LoginScreen() {
  const [userType, setUserType] = useState("doador");

    const [step, setStep] = useState("splash");

  if (step === "splash") {
    return <SplashScreen onFinish={() => setStep("onboarding")} />;
  }

  if (step === "onboarding") {
    return <OnboardingScreen onFinish={() => setStep("auth")} />;
  }


  const handleLogin = () => {
    router.replace("/tab");
  };

  const handleGoogleLogin = () => {
    Alert.alert(
      "Google Login",
      "Autenticação com Google conectando...",
      [{ text: "OK", onPress: () => router.replace("/tab") }]
    );
  };

  const handleForgotPassword = () => {
    Alert.alert(
      "Recuperar Senha",
      "Enviaremos um link de recuperação para seu e-mail cadastrado."
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerSection}>
            <View style={styles.iconCard}>
              <MaterialCommunityIcons
                name="heart-pulse"
                size={46}
                color="#A72730"
              />
            </View>

            <View style={styles.logoRow}>
              <Text style={styles.logoHemo}>Hemo</Text>
              <Text style={styles.logoConnect}>Connect</Text>
            </View>

            <Text style={styles.slogan}>
              Conectando corações, abastecendo vidas!
            </Text>
          </View>

          <View style={styles.segmentContainer}>
            <Pressable
              style={[
                styles.segmentButton,
                userType === "doador" && styles.segmentButtonActive,
              ]}
              onPress={() => setUserType("doador")}
            >
              <Text
                style={[
                  styles.segmentText,
                  userType === "doador" && styles.segmentTextActive,
                ]}
              >
                Sou Doador
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.segmentButton,
                userType === "hemocentro" && styles.segmentButtonActive,
              ]}
              onPress={() => setUserType("hemocentro")}
            >
              <Text
                style={[
                  styles.segmentText,
                  userType === "hemocentro" && styles.segmentTextActive,
                ]}
              >
                Sou Hemocentro
              </Text>
            </Pressable>
          </View>

          <View style={styles.formSection}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <TextInput
                style={styles.textInput}
                placeholder="aluno@sptech.school"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Senha</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="••••••••"
                  placeholderTextColor="#94A3B8"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Pressable
                  hitSlop={12}
                  style={styles.eyeButton}
                >
                  <MaterialCommunityIcons
                    name={"eye-outline"}
                    size={22}
                    color="#8E9DAE"
                  />
                </Pressable>
              </View>
            </View>

            <Pressable
              onPress={handleForgotPassword}
              style={styles.forgotPasswordButton}
            >
              <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.buttonPrimary,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleLogin}
            >
              <Text style={styles.buttonPrimaryText}>Entrar</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.buttonGoogle,
                pressed && styles.buttonGooglePressed,
              ]}
              onPress={handleGoogleLogin}
            >
              <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/48px-Google_%22G%22_logo.svg.png",
                  }}
                  style={styles.googleIcon}
                  resizeMode="contain"
                />
                <MaterialCommunityIcons
                  name="google"
                  size={20}
                  color="#4285F4"
                  style={styles.googleIconFallback}
                />
              
              <Text style={styles.buttonGoogleText}>Entrar com Google</Text>
            </Pressable>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.footerText}>Não tem uma conta? </Text>
            <Pressable onPress={() => router.push("/cadastro")}>
              <Text style={styles.registerLink}>Criar conta</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FA",
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingTop: 16,
    paddingBottom: 20,
  },
  headerSection: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 26,
  },
  iconCard: {
    width: 82,
    height: 82,
    borderRadius: 24,
    backgroundColor: "#FCECEF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: "#FADCE2",
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  logoHemo: {
    fontSize: 32,
    fontWeight: "800",
    color: "#A72730",
    letterSpacing: -0.5,
  },
  logoConnect: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1D3557",
    letterSpacing: -0.5,
  },
  slogan: {
    fontSize: 14.5,
    fontWeight: "500",
    color: "#64748B",
    textAlign: "center",
  },
  segmentContainer: {
    flexDirection: "row",
    backgroundColor: "#E6EDF4",
    borderRadius: 14,
    padding: 4,
    marginBottom: 26,
  },
  segmentButton: {
    flex: 1,
    height: 44,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  segmentButtonActive: {
    backgroundColor: "#A72730",
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  segmentText: {
    fontSize: 14.5,
    fontWeight: "600",
    color: "#5A6E85",
  },
  segmentTextActive: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  formSection: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 8,
  },
  textInput: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#1E293B",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  passwordContainer: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  passwordInput: {
    flex: 1,
    fontSize: 15,
    color: "#1E293B",
  },
  eyeButton: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginTop: 2,
    marginBottom: 22,
  },
  forgotPasswordText: {
    fontSize: 13.5,
    fontWeight: "600",
    color: "#1D3557",
  },
  buttonPrimary: {
    width: "100%",
    height: 52,
    backgroundColor: "#1D3557",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#1D3557",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonGoogle: {
    width: "100%",
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleIconFallback: {
    marginRight: 10,
  },
  buttonGoogleText: {
    color: "#1D3557",
    fontSize: 15,
    fontWeight: "700",
  },
  buttonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  buttonGooglePressed: {
    backgroundColor: "#F8FAFC",
    transform: [{ scale: 0.99 }],
  },
  footerSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
  },
  registerLink: {
    fontSize: 14,
    color: "#A72730",
    fontWeight: "700",
  },
});

