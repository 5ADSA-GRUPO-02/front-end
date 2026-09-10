import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const handleAgendar = () => {};

  const handleVerCampanha = () => {};

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Topo / Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatarCircle} />
            <Text style={styles.greetingText}>Olá, Aluno!</Text>
          </View>

          <View style={styles.bloodCircle}>
            <Text style={styles.bloodCircleText}>O+</Text>
          </View>
        </View>

        <View style={styles.donationCard}>
          <View style={styles.countdownRing}>
            <Text style={styles.countdownNumber}>2</Text>
            <Text style={styles.countdownLabel}>DIAS</Text>
          </View>

          <View style={styles.donationInfo}>
            <Text style={styles.cardTitle}>Próxima Doação</Text>
            <Text style={styles.donationDesc}>
              Faltam <Text style={styles.highlightRed}>2 dias</Text> para você
              estar apto a doar novamente. Continue se cuidando!
            </Text>
          </View>
        </View>

        <View style={styles.radarCard}>
          <View style={styles.radarHeader}>
            <View style={styles.radarTitleRow}>
              <MaterialCommunityIcons
                name="target"
                size={22}
                color="#A72730"
              />
              <Text style={styles.radarTitle}>Radar</Text>
            </View>

            <Text style={styles.urgentTag}>NECESSIDADE URGENTE</Text>
          </View>

          <View style={styles.radarContentRow}>
            <View style={styles.bloodBadgeOminus}>
              <Text style={styles.bloodBadgeText}>O-</Text>
            </View>

            <View style={styles.radarTextContent}>
              <Text style={styles.urgentDescription}>
                Estoque crítico em um hemocentro próximo.
              </Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-sharp" size={13} color="#A72730" />
                <Text style={styles.locationText}>
                  {" "}3,2 km  •  Você está elegível para doar.
                </Text>
              </View>
            </View>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.scheduleButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleAgendar}
          >
            <Text style={styles.scheduleButtonText}>Agendar agora</Text>
          </Pressable>
        </View>

        <View style={styles.campaignCard}>
          <View style={styles.campaignInfo}>
            <Text style={styles.campaignTag}>PRÓXIMA CAMPANHA</Text>
            <Text style={styles.campaignTitle}>Novembro Vermelho</Text>
            <Text style={styles.campaignMeta}>Meta: 500 doações</Text>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.viewCampaignButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleVerCampanha}
          >
            <Text style={styles.viewCampaignText}>Ver campanha</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 6,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: "#A72730",
    backgroundColor: "#FFFFFF",
  },
  greetingText: {
    fontSize: 21,
    fontWeight: "800",
    color: "#1D3557",
    marginLeft: 12,
    letterSpacing: -0.3,
  },
  bloodCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#A72730",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  bloodCircleText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  donationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  countdownRing: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 4.5,
    borderColor: "#7b9abeff",
    borderTopColor: "#1D3557",
    borderRightColor: "#1D3557",
    borderBottomColor: "#1D3557",
    justifyContent: "center",
    alignItems: "center",
  },
  countdownNumber: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1D3557",
  },
  countdownLabel: {
    fontSize: 9.5,
    fontWeight: "700",
    color: "#64748B",
    letterSpacing: 0.5,
  },
  donationInfo: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1D3557",
    marginBottom: 4,
  },
  donationDesc: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
  },
  highlightRed: {
    color: "#A72730",
    fontWeight: "700",
  },
  radarCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  radarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  radarTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  radarTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1D3557",
    marginLeft: 8,
  },
  urgentTag: {
    color: "#A72730",
    fontSize: 10.5,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  radarContentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  bloodBadgeOminus: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#A72730",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  bloodBadgeText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  radarTextContent: {
    flex: 1,
  },
  urgentDescription: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1D3557",
    lineHeight: 18,
    marginBottom: 3,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 11.5,
    color: "#64748B",
  },
  scheduleButton: {
    width: "100%",
    height: 46,
    backgroundColor: "#A72730",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  scheduleButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  campaignCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  campaignInfo: {
    flex: 1,
  },
  campaignTag: {
    color: "#A72730",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  campaignTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1D3557",
    marginBottom: 2,
  },
  campaignMeta: {
    fontSize: 12.5,
    color: "#64748B",
    fontWeight: "500",
  },
  viewCampaignButton: {
    backgroundColor: "#FFF1F2",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  viewCampaignText: {
    color: "#A72730",
    fontSize: 13,
    fontWeight: "700",
  },
  buttonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
});
