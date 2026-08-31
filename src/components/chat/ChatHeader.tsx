import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Svg, { Path, Polyline, Line } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

interface ChatHeaderProps {
  title?: string;
  onBack?: () => void;
  onExport?: () => void;
}

/**
 * Chat screen header with back arrow, title, and export/print action.
 */
export default function ChatHeader({
  title = 'HemoIA',
  onBack,
  onExport,
}: ChatHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Back */}
      <TouchableOpacity
        style={styles.iconBtn}
        activeOpacity={0.7}
        onPress={onBack}
      >
        <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
          <Path
            d="M19 12H5"
            stroke={BrandColors.textPrimary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Polyline
            points="12 19 5 12 12 5"
            stroke={BrandColors.textPrimary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Export */}
      <TouchableOpacity
        style={styles.iconBtn}
        activeOpacity={0.7}
        onPress={onExport}
      >
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
          <Path
            d="M6 9V2h12v7"
            stroke={BrandColors.textPrimary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"
            stroke={BrandColors.textPrimary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M6 14h12v8H6z"
            stroke={BrandColors.textPrimary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 56 : 44,
    paddingBottom: 14,
    backgroundColor: BrandColors.white,
    borderBottomWidth: 1,
    borderBottomColor: BrandColors.border,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: BrandColors.secondary,
  },
});
