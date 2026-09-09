import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SplashScreen from "../components/SplashScreen";
import OnboardingScreen from "../components/OnboardingScreen";

export default function Index() {
  // Estados possíveis: 'splash' -> 'onboarding' -> 'auth'
  const [step, setStep] = useState("splash");

  if (step === "splash") {
    return <SplashScreen onFinish={() => setStep("onboarding")} />;
  }

  if (step === "onboarding") {
    return <OnboardingScreen onFinish={() => setStep("auth")} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />

      {/* Seção Superior / Logo */}
      <View style={styles.headerSection}>
        <View style={styles.iconCard}>
          <MaterialCommunityIcons name="heart-pulse" size={54} color="#A72730" />
        </View>

        <View style={styles.logoRow}>
          <Text style={styles.logoHemo}>Hemo</Text>
          <Text style={styles.logoConnect}>Connect</Text>
        </View>

        <Text style={styles.slogan}>Conectando pessoas. Salvando vidas.</Text>
      </View>

      {/* Seção Inferior / Botões de Ação */}
      <View style={styles.actionSection}>
        {/* Botão Cadastrar (Vermelho Hemo) */}
        <Pressable
          style={({ pressed }) => [
            styles.buttonPrimary,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push("/cadastro")}
        >
          <Text style={styles.buttonPrimaryText}>Cadastrar</Text>
        </Pressable>

        {/* Botão Entrar (Azul Marinho) */}
        <Pressable
          style={({ pressed }) => [
            styles.buttonSecondary,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push("/tab")}
        >
          <Text style={styles.buttonSecondaryText}>Entrar</Text>
        </Pressable>

        {/* Opção para rever o onboarding */}
        <Pressable
          onPress={() => setStep("onboarding")}
          style={styles.replayButton}
        >
          <Text style={styles.replayText}>Ver apresentação novamente</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  headerSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCard: {
    width: 104,
    height: 104,
    borderRadius: 28,
    backgroundColor: "#FCECEF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  logoHemo: {
    fontSize: 34,
    fontWeight: "800",
    color: "#A72730",
    letterSpacing: -0.5,
  },
  logoConnect: {
    fontSize: 34,
    fontWeight: "800",
    color: "#1D3557",
    letterSpacing: -0.5,
  },
  slogan: {
    fontSize: 15,
    fontWeight: "500",
    color: "#64748B",
    marginTop: 4,
    textAlign: "center",
  },
  actionSection: {
    paddingBottom: 40,
    width: "100%",
  },
  buttonPrimary: {
    width: "100%",
    height: 52,
    backgroundColor: "#A72730",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonPrimaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonSecondary: {
    width: "100%",
    height: 52,
    backgroundColor: "#1D3557",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1D3557",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonSecondaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  replayButton: {
    alignItems: "center",
    marginTop: 18,
    paddingVertical: 8,
  },
  replayText: {
    color: "#64748B",
    fontSize: 13,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
