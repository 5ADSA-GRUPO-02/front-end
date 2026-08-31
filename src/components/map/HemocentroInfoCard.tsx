import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

export interface HemocentroInfo {
  id: string;
  name: string;
  address: string;
  distance: string;
  schedule: string;
  urgencyLabel: string;
}

interface HemocentroInfoCardProps {
  info: HemocentroInfo;
  onSchedule?: () => void;
}

/**
 * Bottom sheet-style card showing details about a selected hemocentro.
 */
export default function HemocentroInfoCard({
  info,
  onSchedule,
}: HemocentroInfoCardProps) {
  return (
    <View style={styles.card}>
      {/* Title row */}
      <View style={styles.titleRow}>
        <Text style={styles.name}>{info.name}</Text>
        <View style={styles.urgencyBadge}>
          <Text style={styles.urgencyText}>{info.urgencyLabel}</Text>
        </View>
      </View>

      {/* Address row */}
      <View style={styles.detailRow}>
        <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <Path
            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
            stroke={BrandColors.primary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Circle cx="12" cy="10" r="3" stroke={BrandColors.primary} strokeWidth="2" />
        </Svg>
        <Text style={styles.detailText} numberOfLines={1}>
          {info.address}
        </Text>
        <Text style={styles.distance}>{info.distance}</Text>
      </View>

      {/* Schedule row */}
      <View style={styles.detailRow}>
        <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="10" stroke={BrandColors.textSecondary} strokeWidth="2" />
          <Path
            d="M12 6v6l4 2"
            stroke={BrandColors.textSecondary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <Text style={styles.detailText}>{info.schedule}</Text>
      </View>

      {/* CTA */}
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.ctaButton}
        onPress={onSchedule}
      >
        <Text style={styles.ctaText}>Agendar Doação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: BrandColors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 10,
  },

  /* Title */
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    flexWrap: 'wrap',
    gap: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    color: BrandColors.textPrimary,
  },
  urgencyBadge: {
    backgroundColor: BrandColors.badgeCriticalBg,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  urgencyText: {
    fontSize: 11,
    fontWeight: '800',
    color: BrandColors.urgencyHigh,
    letterSpacing: 0.4,
  },

  /* Detail rows */
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  detailText: {
    flex: 1,
    fontSize: 13,
    color: BrandColors.textSecondary,
  },
  distance: {
    fontSize: 14,
    fontWeight: '700',
    color: BrandColors.textPrimary,
  },

  /* CTA button */
  ctaButton: {
    backgroundColor: BrandColors.primary,
    borderRadius: 14,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,

    shadowColor: BrandColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '700',
    color: BrandColors.white,
  },
});
