import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  StatusBar,
  LogBox,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

LogBox.ignoreLogs(["The <CameraView> component does not support children"]);

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("back");
  const [torch, setTorch] = useState(false);
  const [scanned, setScanned] = useState(false);

  const isFocused = useIsFocused();

  if (!permission) {
    return (
      <View style={styles.centerContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />
        <Text style={styles.loadingText}>Carregando câmera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.permissionContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />

        <View style={styles.permissionContent}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="camera-outline"
              size={48}
              color="#A72730"
            />
          </View>

          <Text style={styles.permissionTitle}>Permissão da Câmera</Text>
          <Text style={styles.permissionDescription}>
            Precisamos de acesso à câmera para escanear QR Codes de doação e
            consultar dados de hemocentros.
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.permissionButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={requestPermission}
          >
            <Text style={styles.permissionButtonText}>
              Permitir Acesso à Câmera
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  if (!isFocused) {
    return <View style={styles.container} />;
  }

  const handleBarcodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert("QR Code Detectado!", `Conteúdo: ${data}`, [
      { text: "Escanear novamente", onPress: () => setScanned(false) },
    ]);
  };

  const toggleFacing = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  const toggleTorch = () => {
    setTorch((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <CameraView
        style={styles.camera}
        facing={facing}
        enableTorch={torch}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
      >
        <SafeAreaView style={styles.overlay} edges={["top", "bottom"]}>

          <View style={styles.topBar}>
            <View style={styles.titleArea}>
              <Text style={styles.cameraTitle}>Escanear QR Code</Text>
              <Text style={styles.cameraSubtitle}>
                Aponte para o código da doação
              </Text>
            </View>

            <View style={styles.topActions}>
              <Pressable
                style={[styles.actionBtn, torch && styles.actionBtnActive]}
                onPress={toggleTorch}
                hitSlop={8}
              >
                <Ionicons
                  name={torch ? "flash" : "flash-outline"}
                  size={22}
                  color={torch ? "#A72730" : "#FFFFFF"}
                />
              </Pressable>

              <Pressable
                style={styles.actionBtn}
                onPress={toggleFacing}
                hitSlop={8}
              >
                <Ionicons
                  name="camera-reverse-outline"
                  size={22}
                  color="#FFFFFF"
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.scannerTargetArea}>
            <View style={styles.scannerBox}>
              <View style={[styles.corner, styles.topLeft]} />
              <View style={[styles.corner, styles.topRight]} />
              <View style={[styles.corner, styles.bottomLeft]} />
              <View style={[styles.corner, styles.bottomRight]} />

              <View style={styles.laserLine} />
            </View>
          </View>

          <View style={styles.bottomBar}>
            <View style={styles.hintCapsule}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={18}
                color="#FFFFFF"
                style={styles.hintIcon}
              />
              <Text style={styles.hintText}>
                Posicione o QR Code dentro da moldura
              </Text>
            </View>

            {scanned && (
              <Pressable
                style={styles.rescanButton}
                onPress={() => setScanned(false)}
              >
                <Text style={styles.rescanText}>Escanear Novamente</Text>
              </Pressable>
            )}
          </View>
        </SafeAreaView>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  centerContainer: {
    flex: 1,
    backgroundColor: "#F4F7FA",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1D3557",
  },
  permissionContainer: {
    flex: 1,
    backgroundColor: "#F4F7FA",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  permissionContent: {
    alignItems: "center",
  },
  iconCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#FCECEF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#FADCE2",
  },
  permissionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1D3557",
    marginBottom: 10,
    textAlign: "center",
  },
  permissionDescription: {
    fontSize: 14.5,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
  },
  permissionButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#A72730",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  permissionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  overlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 16,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingBottom: 14,
  },
  titleArea: {
    flex: 1,
  },
  cameraTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  cameraSubtitle: {
    color: "#E2E8F0",
    fontSize: 12.5,
    marginTop: 2,
  },
  topActions: {
    flexDirection: "row",
    gap: 10,
  },
  actionBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtnActive: {
    backgroundColor: "#FFFFFF",
  },
  scannerTargetArea: {
    alignItems: "center",
    justifyContent: "center",
  },
  scannerBox: {
    width: 250,
    height: 250,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  corner: {
    position: "absolute",
    width: 28,
    height: 28,
    borderColor: "#A72730",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 12,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 12,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 12,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 12,
  },
  laserLine: {
    width: "85%",
    height: 2,
    backgroundColor: "#A72730",
    opacity: 0.8,
  },
  bottomBar: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingTop: 14,
  },
  hintCapsule: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  hintIcon: {
    marginRight: 8,
  },
  hintText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  rescanButton: {
    marginTop: 14,
    backgroundColor: "#A72730",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  rescanText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});
