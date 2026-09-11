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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function PerfilScreen() {
  const handleConfiguracoes = () => {
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <View style={styles.avatarCircle} />
            <View style={styles.nameBlock}>
              <Text style={styles.userName}>Aluno Sptech</Text>
              <Text style={styles.userSubtitle}>Doador(a) desde 2020</Text>
            </View>
          </View>

          <View style={styles.headerActions}>
            <View style={styles.bloodBadge}>
              <Text style={styles.bloodBadgeText}>O+</Text>
            </View>
            <Pressable
              style={styles.settingsButton}
              onPress={handleConfiguracoes}
              hitSlop={8}
            >
              <Ionicons name="settings-outline" size={20} color="#1D3557" />
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estatísticas de Saúde</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <View style={[styles.statIconBox, styles.bgRedSoft]}>
                <MaterialCommunityIcons
                  name="water-outline"
                  size={24}
                  color="#A72730"
                />
              </View>
              <View style={styles.statDetails}>
                <Text style={styles.statLabel}>Litros Doados</Text>
                <Text style={styles.statValue}>2,2 L</Text>
              </View>
            </View>

            <View style={styles.statCard}>
              <View style={[styles.statIconBox, styles.bgGreenSoft]}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={24}
                  color="#16A34A"
                />
              </View>
              <View style={styles.statDetails}>
                <Text style={styles.statLabel}>Vidas impactadas</Text>
                <Text style={styles.statValue}>20</Text>
              </View>
            </View>

            <View style={styles.statCard}>
              <View style={[styles.statIconBox, styles.bgBlueSoft]}>
                <Ionicons name="alarm-outline" size={24} color="#1D3557" />
              </View>
              <View style={styles.statDetails}>
                <Text style={styles.statLabel}>Última Doação</Text>
                <Text style={styles.statValue}>16/07/2025</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conquistas</Text>

          <View style={styles.achievementsRow}>
            <View style={styles.achievementCard}>
              <View style={[styles.badgeIconCircle, styles.bgAmberBadge]}>
                <MaterialCommunityIcons
                  name="medal-outline"
                  size={26}
                  color="#D97706"
                />
              </View>
              <Text style={styles.achievementTitle}>Doador Ouro</Text>
              <Text style={styles.achievementSub}>Atingiu mais de 5 doações registradas.</Text>
            </View>

            <View style={styles.achievementCard}>
              <View style={[styles.badgeIconCircle, styles.bgBlueBadge]}>
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={26}
                  color="#2563EB"
                />
              </View>
              <Text style={styles.achievementTitle}>Frequente</Text>
              <Text style={styles.achievementSub}>Manteve a consistência de doações no ano.</Text>
            </View>

            <View style={styles.achievementCard}>
              <View style={[styles.badgeIconCircle, styles.bgRedBadge]}>
                <MaterialCommunityIcons
                  name="heart-pulse"
                  size={26}
                  color="#A72730"
                />
              </View>
              <Text style={styles.achievementTitle}>1ª Doação</Text>
              <Text style={styles.achievementSub}>Registrou sua primeira doação de sangue.!</Text>
            </View>
          </View>
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
    marginBottom: 26,
    marginTop: 6,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "#A72730",
    backgroundColor: "#FFFFFF",
  },
  nameBlock: {
    marginLeft: 12,
  },
  userName: {
    fontSize: 19,
    fontWeight: "800",
    color: "#1D3557",
    letterSpacing: -0.3,
    marginBottom: 2,
  },
  userSubtitle: {
    fontSize: 12.5,
    color: "#64748B",
    fontWeight: "500",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bloodBadge: {
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
    elevation: 2,
  },
  bloodBadgeText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1D3557",
    marginBottom: 14,
  },
  statsContainer: {
    gap: 12,
  },
  statCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  statIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  bgRedSoft: {
    backgroundColor: "#FCECEF",
  },
  bgGreenSoft: {
    backgroundColor: "#DCFCE7",
  },
  bgBlueSoft: {
    backgroundColor: "#EBF3FA",
  },
  statDetails: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12.5,
    color: "#64748B",
    fontWeight: "500",
    marginBottom: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1D3557",
  },
  achievementsRow: {
    flexDirection: "row",
    gap: 12,
  },
  achievementCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 8,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  badgeIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  bgAmberBadge: {
    backgroundColor: "#FEF9C3",
  },
  bgBlueBadge: {
    backgroundColor: "#EFF6FF",
  },
  bgRedBadge: {
    backgroundColor: "#FCECEF",
  },
  achievementTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1D3557",
    textAlign: "center",
    marginBottom: 2,
  },
  achievementSub: {
    fontSize: 11,
    color: "#64748B",
    fontWeight: "500",
    textAlign: "center",
  },
});
