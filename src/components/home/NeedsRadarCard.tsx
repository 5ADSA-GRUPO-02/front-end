import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

/* ────────────────────────────────────────────────────
 *  Types
 * ──────────────────────────────────────────────────── */
export type UrgencyLevel = 'high' | 'moderate' | 'low';

export interface NeedItem {
  id: string;
  name: string;
  urgency: UrgencyLevel;
  distance: string;
}

interface NeedsRadarCardProps {
  criticalType: string;
  items: NeedItem[];
  onItemPress?: (item: NeedItem) => void;
}

/* ────────────────────────────────────────────────────
 *  Helpers
 * ──────────────────────────────────────────────────── */
const urgencyLabel: Record<UrgencyLevel, string> = {
  high: 'Urgência Alta',
  moderate: 'Alerta Moderado',
  low: 'Normal',
};

const urgencyColor: Record<UrgencyLevel, string> = {
  high: BrandColors.urgencyHigh,
  moderate: BrandColors.urgencyModerate,
  low: BrandColors.urgencyLow,
};

/* ────────────────────────────────────────────────────
 *  Component
 * ──────────────────────────────────────────────────── */

/**
 * "Radar de Necessidades" card listing nearby blood-banks and their urgency.
 */
export default function NeedsRadarCard({
  criticalType,
  items,
  onItemPress,
}: NeedsRadarCardProps) {
  return (
    <View style={styles.card}>
      {/* Header row */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* Radar icon */}
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Circle
              cx="12"
              cy="12"
              r="10"
              stroke={BrandColors.secondary}
              strokeWidth="2"
            />
            <Circle
              cx="12"
              cy="12"
              r="6"
              stroke={BrandColors.secondary}
              strokeWidth="1.5"
            />
            <Circle cx="12" cy="12" r="2" fill={BrandColors.secondary} />
            <Path
              d="M12 2v10"
              stroke={BrandColors.secondary}
              strokeWidth="1.5"
            />
          </Svg>
          <Text style={styles.headerTitle}>Radar de Necessidades</Text>
        </View>

        <View style={styles.criticalBadge}>
          <Text style={styles.criticalText}>{criticalType} CRÍTICO</Text>
        </View>
      </View>

      {/* List items */}
      {items.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.65}
          style={[styles.itemRow, index > 0 && styles.itemBorder]}
          onPress={() => onItemPress?.(item)}
        >
          {/* Location icon */}
          <View style={styles.itemIcon}>
            <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
              <Path
                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"
                stroke={BrandColors.primary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Circle
                cx="12"
                cy="10"
                r="3"
                stroke={BrandColors.primary}
                strokeWidth="2"
              />
            </Svg>
          </View>

          {/* Info */}
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.itemMeta}>
              <Text style={[styles.itemUrgency, { color: urgencyColor[item.urgency] }]}>
                {urgencyLabel[item.urgency]}
              </Text>
              <Text style={styles.itemDot}> • </Text>
              <Text style={styles.itemDistance}>{item.distance}</Text>
            </View>
          </View>

          {/* Chevron */}
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Path
              d="M9 18l6-6-6-6"
              stroke={BrandColors.textMuted}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: BrandColors.cardBackground,
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 20,
    marginTop: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: BrandColors.textPrimary,
  },
  criticalBadge: {
    backgroundColor: BrandColors.badgeCriticalBg,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  criticalText: {
    fontSize: 11,
    fontWeight: '800',
    color: BrandColors.badgeCritical,
    letterSpacing: 0.5,
  },

  /* List items */
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  itemBorder: {
    borderTopWidth: 1,
    borderTopColor: BrandColors.border,
  },
  itemIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: BrandColors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: BrandColors.textPrimary,
  },
  itemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  itemUrgency: {
    fontSize: 12,
    fontWeight: '600',
  },
  itemDot: {
    fontSize: 12,
    color: BrandColors.textMuted,
  },
  itemDistance: {
    fontSize: 12,
    color: BrandColors.textSecondary,
  },
});
