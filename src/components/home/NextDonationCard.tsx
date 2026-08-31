import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from '@/components/ui/CircularProgress';
import { BrandColors } from '@/constants/colors';

interface NextDonationCardProps {
  /** Days remaining until eligible to donate */
  daysRemaining: number;
  /** Total cooldown period in days (default 60 for whole blood) */
  totalDays?: number;
}

/**
 * Card showing days until next donation eligibility with a circular countdown.
 */
export default function NextDonationCard({
  daysRemaining,
  totalDays = 60,
}: NextDonationCardProps) {
  const progress = 1 - daysRemaining / totalDays;

  return (
    <View style={styles.card}>
      <CircularProgress progress={progress} size={90} strokeWidth={7}>
        <Text style={styles.daysNumber}>{daysRemaining}</Text>
        <Text style={styles.daysLabel}>DIAS</Text>
      </CircularProgress>

      <View style={styles.textBlock}>
        <Text style={styles.title}>Próxima Doação</Text>
        <Text style={styles.description}>
          Faltam <Text style={styles.highlight}>{daysRemaining} dias</Text> para
          você estar apto a doar novamente. Continue se cuidando!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BrandColors.cardBackground,
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 20,
    marginTop: 8,

    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  textBlock: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: BrandColors.textPrimary,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: BrandColors.textSecondary,
    lineHeight: 18,
  },
  highlight: {
    color: BrandColors.primary,
    fontWeight: '600',
  },
  daysNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: BrandColors.primary,
    lineHeight: 30,
  },
  daysLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: BrandColors.textSecondary,
    letterSpacing: 1,
  },
});
