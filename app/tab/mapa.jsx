import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function MapaScreen() {
  const [busca, setBusca] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("O+");
  const [pinoAtivo, setPinoAtivo] = useState(2);

  const tiposSanguineos = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />


      <View style={styles.topSection}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#64748B"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar centro de doação..."
            placeholderTextColor="#94A3B8"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bloodFilterScroll}
        >
          {tiposSanguineos.map((tipo) => {
            const isSelected = tipoSelecionado === tipo;
            return (
              <Pressable
                key={tipo}
                style={[
                  styles.bloodPill,
                  isSelected && styles.bloodPillSelected,
                ]}
                onPress={() => setTipoSelecionado(tipo)}
              >
                <Text
                  style={[
                    styles.bloodPillText,
                    isSelected && styles.bloodPillTextSelected,
                  ]}
                >
                  {tipo}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.mapArea}>
        <Pressable
          style={[styles.pinWrapper, { top: "18%", right: "22%" }]}
          onPress={() => setPinoAtivo(1)}
        >
          <View
            style={[
              styles.pinCircle,
              pinoAtivo === 1 ? styles.pinRed : styles.pinNavy,
            ]}
          >
            <MaterialCommunityIcons name="water" size={16} color="#FFFFFF" />
          </View>
          <View
            style={[
              styles.pinTail,
              pinoAtivo === 1 ? styles.tailRed : styles.tailNavy,
            ]}
          />
        </Pressable>

        <Pressable
          style={[styles.pinWrapper, { top: "34%", left: "46%" }]}
          onPress={() => setPinoAtivo(2)}
        >
          <View
            style={[
              styles.pinCircle,
              pinoAtivo === 2 ? styles.pinRed : styles.pinNavy,
            ]}
          >
            <MaterialCommunityIcons name="water" size={16} color="#FFFFFF" />
          </View>
          <View
            style={[
              styles.pinTail,
              pinoAtivo === 2 ? styles.tailRed : styles.tailNavy,
            ]}
          />
        </Pressable>

        <Pressable
          style={[styles.pinWrapper, { top: "44%", right: "34%" }]}
          onPress={() => setPinoAtivo(3)}
        >
          <View
            style={[
              styles.pinCircle,
              pinoAtivo === 3 ? styles.pinRed : styles.pinNavy,
            ]}
          >
            <MaterialCommunityIcons
              name="hospital-building"
              size={16}
              color="#FFFFFF"
            />
          </View>
          <View
            style={[
              styles.pinTail,
              pinoAtivo === 3 ? styles.tailRed : styles.tailNavy,
            ]}
          />
        </Pressable>

        <Pressable
          style={[styles.pinWrapper, { top: "54%", left: "20%" }]}
          onPress={() => setPinoAtivo(4)}
        >
          <View
            style={[
              styles.pinCircle,
              pinoAtivo === 4 ? styles.pinRed : styles.pinNavy,
            ]}
          >
            <MaterialCommunityIcons name="water" size={16} color="#FFFFFF" />
          </View>
          <View
            style={[
              styles.pinTail,
              pinoAtivo === 4 ? styles.tailRed : styles.tailNavy,
            ]}
          />
        </Pressable>
      </View>

      <View style={styles.bottomCard}>
        <View style={styles.handleBar} />

        <View style={styles.cardHeaderRow}>
          <Text style={styles.cardTitle}>Hemocentro São Paulo</Text>
          <View style={styles.urgentBadge}>
            <Text style={styles.urgentBadgeText}>NECESSIDADE URGENTE</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Ionicons
            name="location-outline"
            size={16}
            color="#64748B"
            style={styles.infoIcon}
          />
          <Text style={styles.addressText}>
            Av. Dr. Enéas Carvalho de Aguiar, 155
          </Text>
          <Text style={styles.distanceText}>2.5 km</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons
            name="time-outline"
            size={16}
            color="#64748B"
            style={styles.infoIcon}
          />
          <Text style={styles.hoursText}>Segunda a Sábado — 07:00 às 18:00</Text>
        </View>

        <View style={styles.actionsRow}>
          <Pressable
            style={({ pressed }) => [
              styles.btnAgendar,
              pressed && styles.btnPressed,
            ]}
          >
            <Text style={styles.btnAgendarText}>Agendar</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.btnDetalhes,
              pressed && styles.btnPressed,
            ]}
          >
            <Text style={styles.btnDetalhesText}>Detalhes</Text>
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
  topSection: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    zIndex: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    height: 48,
    paddingHorizontal: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14.5,
    color: "#1E293B",
  },
  bloodFilterScroll: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 2,
  },
  bloodPill: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  bloodPillSelected: {
    backgroundColor: "#A72730",
  },
  bloodPillText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1D3557",
  },
  bloodPillTextSelected: {
    color: "#FFFFFF",
    fontWeight: "800",
  },
  mapArea: {
    flex: 1,
    position: "relative",
  },
  pinWrapper: {
    position: "absolute",
    alignItems: "center",
  },
  pinCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  pinNavy: {
    backgroundColor: "#1D3557",
  },
  pinRed: {
    backgroundColor: "#A72730",
  },
  pinTail: {
    width: 3,
    height: 7,
    borderRadius: 1.5,
    marginTop: -1,
  },
  tailNavy: {
    backgroundColor: "#1D3557",
  },
  tailRed: {
    backgroundColor: "#A72730",
  },
  bottomCard: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 8,
  },
  handleBar: {
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#CBD5E1",
    alignSelf: "center",
    marginBottom: 16,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1D3557",
    flex: 1,
    marginRight: 8,
  },
  urgentBadge: {
    backgroundColor: "#FCECEF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  urgentBadgeText: {
    color: "#A72730",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.2,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoIcon: {
    marginRight: 6,
  },
  addressText: {
    fontSize: 13,
    color: "#64748B",
    flex: 1,
  },
  distanceText: {
    fontSize: 13.5,
    fontWeight: "700",
    color: "#1D3557",
    marginLeft: 6,
  },
  hoursText: {
    fontSize: 13,
    color: "#64748B",
  },
  actionsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 14,
  },
  btnAgendar: {
    flex: 1,
    height: 48,
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
  btnAgendarText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  btnDetalhes: {
    flex: 1,
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#A72730",
    justifyContent: "center",
    alignItems: "center",
  },
  btnDetalhesText: {
    color: "#A72730",
    fontSize: 15,
    fontWeight: "700",
  },
  btnPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
});
