import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

/**
 * Search bar with magnifying-glass icon for the map screen.
 */
export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'Buscar centro de doação...',
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" style={styles.icon}>
        <Circle
          cx="11"
          cy="11"
          r="8"
          stroke={BrandColors.textMuted}
          strokeWidth="2"
        />
        <Path
          d="M21 21l-4.35-4.35"
          stroke={BrandColors.textMuted}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={BrandColors.textMuted}
        autoCapitalize="none"
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BrandColors.white,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 50,
    marginHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: BrandColors.textPrimary,
    height: '100%',
  },
});
