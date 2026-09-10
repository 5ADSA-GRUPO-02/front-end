import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CadastroScreen() {
  const [tipoUsuario, setTipoUsuario] = useState("doador");

  const handleContinuar = () => {
    if (tipoUsuario === "doador") {
      router.push("/cadastroDoador");
    }else if (tipoUsuario === "hemocentro") {
      router.push("/cadastroHemo");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />

      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.logoIconBox}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={28}
              color="#A72730"
            />
          </View>
          <View style={styles.logoRow}>
            <Text style={styles.logoHemo}>Hemo</Text>
            <Text style={styles.logoConnect}>Connect</Text>
          </View>
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.title}>Vamos começar</Text>
          <Text style={styles.subtitle}>
            Como você deseja utilizar o HemoConnect?
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          <Pressable
            style={[
              styles.card,
              tipoUsuario === "doador" ? styles.cardSelected : styles.cardUnselected,
            ]}
            onPress={() => setTipoUsuario("doador")}
          >
            <View style={styles.cardTopRow}>
              <View
                style={[
                  styles.cardIconBox,
                  tipoUsuario === "doador"
                    ? styles.iconBoxActive
                    : styles.iconBoxInactive,
                ]}
              >
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  color={tipoUsuario === "doador" ? "#FFFFFF" : "#1D3557"}
                />
              </View>

              {tipoUsuario === "doador" && (
                <View style={styles.checkBadge}>
                  <MaterialCommunityIcons
                    name="check"
                    size={14}
                    color="#FFFFFF"
                  />
                </View>
              )}
            </View>

            <Text style={styles.cardTitle}>Sou Doador</Text>
            <Text style={styles.cardDescription}>
              Quero encontrar hemocentros e realizar doações.
            </Text>
          </Pressable>

          {/* Card Hemocentro */}
          <Pressable
            style={[
              styles.card,
              tipoUsuario === "hemocentro" ? styles.cardSelected : styles.cardUnselected,
            ]}
            onPress={() => setTipoUsuario("hemocentro")}
          >
            <View style={styles.cardTopRow}>
              <View
                style={[
                  styles.cardIconBox,
                  tipoUsuario === "hemocentro"
                    ? styles.iconBoxActive
                    : styles.iconBoxInactive,
                ]}
              >
                <MaterialCommunityIcons
                  name="hospital-building"
                  size={24}
                  color={tipoUsuario === "hemocentro" ? "#FFFFFF" : "#1D3557"}
                />
              </View>

              {tipoUsuario === "hemocentro" && (
                <View style={styles.checkBadge}>
                  <MaterialCommunityIcons
                    name="check"
                    size={14}
                    color="#FFFFFF"
                  />
                </View>
              )}
            </View>

            <Text style={styles.cardTitle}>Sou Hemocentro</Text>
            <Text style={styles.cardDescription}>
              Quero gerenciar estoque, campanhas e doadores.
            </Text>
          </Pressable>
        </View>

        {/* Rodapé: Botão Continuar e Link */}
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
            style={styles.linkButton}
          >
            <Text style={styles.linkText}>Já tenho conta</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    alignItems: "center",
    marginTop: 12,
  },
  logoIconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#FCECEF",
    borderWidth: 1.5,
    borderColor: "#FADCE2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoHemo: {
    fontSize: 24,
    fontWeight: "800",
    color: "#A72730",
    letterSpacing: -0.5,
  },
  logoConnect: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1D3557",
    letterSpacing: -0.5,
  },
  titleSection: {
    marginTop: 28,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1D3557",
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14.5,
    color: "#64748B",
    fontWeight: "500",
  },
  optionsContainer: {
    gap: 16,
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: "#A72730",
  },
  cardUnselected: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardIconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBoxActive: {
    backgroundColor: "#A72730",
  },
  iconBoxInactive: {
    backgroundColor: "#EBF3FA",
  },
  checkBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#A72730",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1D3557",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13.5,
    color: "#64748B",
    lineHeight: 18,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 16,
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
  linkButton: {
    alignItems: "center",
    marginTop: 16,
    paddingVertical: 6,
  },
  linkText: {
    color: "#A72730",
    fontSize: 14.5,
    fontWeight: "700",
  },
});
