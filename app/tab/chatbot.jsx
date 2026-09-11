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
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatbotScreen() {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      remetente: "bot",
      texto:
        "Olá! Sou o assistente do HemoIA. Como posso te apoiar hoje com suas dúvidas sobre doação de sangue?",
      hora: "09:41",
    },
    {
      id: 2,
      remetente: "usuario",
      texto:
        "Olá! Fiz uma doação há dois meses. Já posso doar de novo ou preciso esperar mais um tempo?",
      hora: "09:42",
    },
    {
      id: 3,
      remetente: "bot",
      texto:
        "Ótima pergunta! Para homens, o intervalo mínimo entre doações é de 60 dias (máximo 4 vezes ao ano). Para mulheres, é de 90 dias (máximo 3 vezes ao ano).",
      hora: "09:43",
    },
  ]);

  const handleEnviar = () => {
    if (!mensagem.trim()) return;

    const novaMensagem = {
      id: Date.now(),
      remetente: "usuario",
      texto: mensagem.trim(),
      hora: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMensagens((prev) => [...prev, novaMensagem]);
    setMensagem("");
  };

  const handleMicrofone = () => {
    Alert.alert(
      "Comando de Voz",
      "O recurso de transcrição de áudio por IA será integrado em breve!"
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
            hitSlop={8}
          >
            <Ionicons name="arrow-back" size={20} color="#1D3557" />
          </Pressable>
          <Text style={styles.headerTitle}>HemoIA</Text>
        </View>

        <MaterialCommunityIcons
          name="robot-outline"
          size={24}
          color="#1D3557"
        />
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
        >
          {mensagens.map((msg) => {
            const isBot = msg.remetente === "bot";

            return (
              <View
                key={msg.id}
                style={[
                  styles.messageRow,
                  isBot ? styles.rowBot : styles.rowUser,
                ]}
              >
                {isBot && (
                  <View style={styles.botAvatar}>
                    <MaterialCommunityIcons
                      name="robot-outline"
                      size={17}
                      color="#FFFFFF"
                    />
                  </View>
                )}

                <View
                  style={[
                    styles.bubble,
                    isBot ? styles.bubbleBot : styles.bubbleUser,
                  ]}
                >
                  <Text
                    style={[
                      styles.messageText,
                      isBot ? styles.textBot : styles.textUser,
                    ]}
                  >
                    {msg.texto}
                  </Text>
                  <Text
                    style={[
                      styles.timestampText,
                      isBot ? styles.timeBot : styles.timeUser,
                    ]}
                  >
                    {msg.hora}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.inputBar}>
          <View style={styles.inputCapsule}>
            <TextInput
              style={styles.textInput}
              placeholder="Digite sua mensagem..."
              placeholderTextColor="#94A3B8"
              value={mensagem}
              onChangeText={setMensagem}
              onSubmitEditing={handleEnviar}
              returnKeyType="send"
            />
            <Pressable onPress={handleEnviar} hitSlop={8}>
              <Ionicons
                name="paper-plane-outline"
                size={20}
                color={mensagem.trim() ? "#A72730" : "#64748B"}
              />
            </Pressable>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.micButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleMicrofone}
          >
            <Ionicons name="mic" size={22} color="#FFFFFF" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    backgroundColor: "#F4F7FA",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E2E8F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1D3557",
  },
  keyboardAvoid: {
    flex: 1,
  },
  messagesContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
    gap: 16,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  rowBot: {
    justifyContent: "flex-start",
  },
  rowUser: {
    justifyContent: "flex-end",
  },
  botAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#1D3557",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginBottom: 4,
  },
  bubble: {
    maxWidth: "76%",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  bubbleBot: {
    backgroundColor: "#1D3557",
    borderTopLeftLeftRadius: 4,
  },
  bubbleUser: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  messageText: {
    fontSize: 13.5,
    lineHeight: 19,
  },
  textBot: {
    color: "#FFFFFF",
  },
  textUser: {
    color: "#1D3557",
  },
  timestampText: {
    fontSize: 10,
    marginTop: 4,
  },
  timeBot: {
    color: "#94A3B8",
  },
  timeUser: {
    color: "#94A3B8",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
    backgroundColor: "#F4F7FA",
  },
  inputCapsule: {
    flex: 1,
    height: 48,
    backgroundColor: "#E6EDF4",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: "#1D3557",
    marginRight: 8,
  },
  micButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#A72730",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
});
