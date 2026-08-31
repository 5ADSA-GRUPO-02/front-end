import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

interface HeaderGreetingProps {
  userName: string;
  bloodType: string;
}

/**
 * Top header: avatar, greeting, and blood-type badge.
 */
export default function HeaderGreeting({
  userName,
  bloodType,
}: HeaderGreetingProps) {
  return (
    <View style={styles.container}>
      {/* Avatar placeholder */}
      <View style={styles.avatar}>
        <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
          <Circle cx="20" cy="20" r="20" fill="#E0E0E0" />
          <Circle cx="20" cy="16" r="7" fill={BrandColors.textSecondary} />
          <Path
            d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12"
            fill={BrandColors.textSecondary}
          />
        </Svg>
      </View>

      {/* Greeting text */}
      <View style={styles.textBlock}>
        <Text style={styles.welcomeText}>Bem-vindo de volta</Text>
        <Text style={styles.nameText}>Olá, {userName}</Text>
      </View>

      {/* Blood type badge */}
      <View style={styles.badge}>
        <Text style={styles.badgeType}>{bloodType}</Text>
        <Text style={styles.badgeLabel}> Doador Universal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 12,
  },
  textBlock: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 13,
    color: BrandColors.textSecondary,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color: BrandColors.textPrimary,
    marginTop: 2,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BrandColors.badgeNavy,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeType: {
    fontSize: 13,
    fontWeight: '800',
    color: BrandColors.badgeNavyText,
  },
  badgeLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: BrandColors.badgeNavyText,
  },
});
