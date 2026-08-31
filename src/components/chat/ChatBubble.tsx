import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

export interface ChatMessage {
  id: string;
  text: string;
  time: string;
  isBot: boolean;
}

interface ChatBubbleProps {
  message: ChatMessage;
}

/**
 * A single chat bubble – bot messages on the left (navy), user messages on the right (light).
 */
export default function ChatBubble({ message }: ChatBubbleProps) {
  const { text, time, isBot } = message;

  return (
    <View style={[styles.row, isBot ? styles.rowBot : styles.rowUser]}>
      {/* Bot avatar */}
      {isBot && (
        <View style={styles.avatar}>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="8" r="5" stroke={BrandColors.white} strokeWidth="2" />
            <Path
              d="M3 21v-2a7 7 0 0114 0v2"
              stroke={BrandColors.white}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Path
              d="M16 3.13a4 4 0 010 7.75"
              stroke={BrandColors.white}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Path
              d="M21 21v-2a4 4 0 00-3-3.85"
              stroke={BrandColors.white}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
        </View>
      )}

      {/* Bubble */}
      <View
        style={[
          styles.bubble,
          isBot ? styles.bubbleBot : styles.bubbleUser,
        ]}
      >
        <Text style={[styles.text, isBot ? styles.textBot : styles.textUser]}>
          {text}
        </Text>
        <Text style={[styles.time, isBot ? styles.timeBot : styles.timeUser]}>
          {time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  rowBot: {
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    maxWidth: '85%',
  },
  rowUser: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    maxWidth: '80%',
  },

  /* Avatar */
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: BrandColors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 4,
    flexShrink: 0,
  },

  /* Bubble */
  bubble: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexShrink: 1,
  },
  bubbleBot: {
    backgroundColor: BrandColors.secondary,
    borderBottomLeftRadius: 4,
  },
  bubbleUser: {
    backgroundColor: '#E8EDF4',
    borderBottomRightRadius: 4,
  },

  /* Text */
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  textBot: {
    color: BrandColors.white,
  },
  textUser: {
    color: BrandColors.textPrimary,
  },

  /* Time */
  time: {
    fontSize: 11,
    marginTop: 6,
  },
  timeBot: {
    color: 'rgba(255,255,255,0.55)',
  },
  timeUser: {
    color: BrandColors.textMuted,
    textAlign: 'right',
  },
});
