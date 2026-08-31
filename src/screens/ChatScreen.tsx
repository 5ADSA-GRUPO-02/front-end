import React, { useState, useRef } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';

import ChatHeader from '@/components/chat/ChatHeader';
import ChatBubble, { type ChatMessage } from '@/components/chat/ChatBubble';
import ChatInputBar from '@/components/chat/ChatInputBar';
import { BrandColors } from '@/constants/colors';

/* ── Mock conversation ─────────────────────────────── */
const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    text: 'Olá! Sou o assistente do HemoIA. Como posso te apoiar hoje com suas dúvidas sobre doação de sangue?',
    time: '09:41',
    isBot: true,
  },
  {
    id: '2',
    text: 'Olá! Fiz uma doação há dois meses. Já posso doar de novo ou preciso esperar mais um tempo?',
    time: '09:42',
    isBot: false,
  },
  {
    id: '3',
    text: 'Ótima pergunta! Para homens, o intervalo mínimo entre doações é de 60 dias (máximo 4 vezes ao ano). Para mulheres, é de 90 dias (máximo 3 vezes ao ano).',
    time: '09:43',
    isBot: true,
  },
];

/**
 * Chat screen – conversation with the HemoIA assistant.
 */
export default function ChatScreen() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: trimmed,
      time: timeStr,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulate bot reply
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Obrigado pela sua pergunta! Estou processando sua resposta. Em breve teremos mais informações para você.',
        time: timeStr,
        isBot: true,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <ChatHeader />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        {/* Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatBubble message={item} />}
          contentContainerStyle={styles.messageList}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
        />

        {/* Input bar */}
        <ChatInputBar
          value={input}
          onChangeText={setInput}
          onSend={handleSend}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  flex: {
    flex: 1,
  },
  messageList: {
    paddingTop: 20,
    paddingBottom: 8,
  },
});
