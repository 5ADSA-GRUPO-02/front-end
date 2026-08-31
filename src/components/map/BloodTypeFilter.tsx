import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { BrandColors } from '@/constants/colors';

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] as const;
export type BloodType = (typeof BLOOD_TYPES)[number];

interface BloodTypeFilterProps {
  selected: BloodType | null;
  onSelect: (type: BloodType) => void;
}

/**
 * Horizontally scrollable blood-type chip filter.
 */
export default function BloodTypeFilter({
  selected,
  onSelect,
}: BloodTypeFilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
    >
      {BLOOD_TYPES.map((type) => {
        const isActive = selected === type;
        return (
          <TouchableOpacity
            key={type}
            activeOpacity={0.75}
            style={[styles.chip, isActive && styles.chipActive]}
            onPress={() => onSelect(type)}
          >
            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
              {type}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 20,
    gap: 8,
    paddingVertical: 4,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: BrandColors.border,
    backgroundColor: BrandColors.white,
  },
  chipActive: {
    backgroundColor: BrandColors.primary,
    borderColor: BrandColors.primary,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '700',
    color: BrandColors.textPrimary,
  },
  chipTextActive: {
    color: BrandColors.white,
  },
});
