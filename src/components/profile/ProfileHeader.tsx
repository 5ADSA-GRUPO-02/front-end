import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

interface ProfileHeaderProps {
  userName: string;
  subtitle: string;
  bloodType: string;
}

/**
 * Profile header: large avatar, user name, subtitle, and blood-type badge.
 */
export default function ProfileHeader({
  userName,
  subtitle,
  bloodType,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatar}>
        <Svg width={50} height={50} viewBox="0 0 50 50" fill="none">
          <Circle cx="25" cy="25" r="25" fill="#E0E0E0" />
          <Circle cx="25" cy="19" r="8" fill={BrandColors.textSecondary} />
          <Path
            d="M9 45c0-8.837 7.163-16 16-16s16 7.163 16 16"
            fill={BrandColors.textSecondary}
          />
        </Svg>
      </View>

      {/* Name & subtitle */}
      <View style={styles.textBlock}>
        <Text style={styles.nameText}>{userName}</Text>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>

      {/* Blood type badge */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{bloodType}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 14,
  },
  textBlock: {
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '700',
    color: BrandColors.textPrimary,
  },
  subtitleText: {
    fontSize: 13,
    color: BrandColors.textSecondary,
    marginTop: 2,
  },
  badge: {
    backgroundColor: BrandColors.primary,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  badgeText: {
    fontSize: 16,
    fontWeight: '800',
    color: BrandColors.white,
  },
});
