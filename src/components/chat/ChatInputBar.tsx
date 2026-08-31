import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

interface ChatInputBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  onMic?: () => void;
}

/**
 * Chat input bar with text field, send button, and microphone button.
 */
export default function ChatInputBar({
  value,
  onChangeText,
  onSend,
  onMic,
}: ChatInputBarProps) {
  const hasText = value.trim().length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          placeholderTextColor={BrandColors.textMuted}
          value={value}
          onChangeText={onChangeText}
          multiline
          maxLength={500}
          returnKeyType="default"
        />

        {/* Send */}
        <TouchableOpacity
          style={styles.sendBtn}
          activeOpacity={0.7}
          onPress={onSend}
          disabled={!hasText}
        >
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Line
              x1="22"
              y1="2"
              x2="11"
              y2="13"
              stroke={hasText ? BrandColors.secondary : BrandColors.textMuted}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M22 2L15 22l-4-9-9-4 20-7z"
              stroke={hasText ? BrandColors.secondary : BrandColors.textMuted}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      {/* Mic button */}
      <TouchableOpacity
        style={styles.micBtn}
        activeOpacity={0.8}
        onPress={onMic}
      >
        <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 1a4 4 0 00-4 4v7a4 4 0 008 0V5a4 4 0 00-4-4z"
            stroke={BrandColors.white}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M19 10v2a7 7 0 01-14 0v-2"
            stroke={BrandColors.white}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Line
            x1="12"
            y1="19"
            x2="12"
            y2="23"
            stroke={BrandColors.white}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <Line
            x1="8"
            y1="23"
            x2="16"
            y2="23"
            stroke={BrandColors.white}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: Platform.OS === 'ios' ? 30 : 16,
    backgroundColor: BrandColors.white,
    borderTopWidth: 1,
    borderTopColor: BrandColors.border,
    gap: 10,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F4F5F7',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 46,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: BrandColors.textPrimary,
    maxHeight: 100,
    paddingTop: 0,
    paddingBottom: 0,
  },
  sendBtn: {
    marginLeft: 8,
    padding: 4,
    justifyContent: 'center',
  },
  micBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: BrandColors.primary,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: BrandColors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
});
