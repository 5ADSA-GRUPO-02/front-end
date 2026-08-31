import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

interface HealthStatsSectionProps {
  litersDonated: string;
  livesSaved: string;
  lastDonation: string;
}

/* ── Icon components ────────────────────────────── */

function DropIcon() {
  return (
    <View style={styles.iconCircle}>
      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"
          stroke={BrandColors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

function HeartIcon() {
  return (
    <View style={[styles.iconCircle, { backgroundColor: '#E8F0FE' }]}>
      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <Path
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
          stroke="#1A73E8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

function CalendarIcon() {
  return (
    <View style={[styles.iconCircle, { backgroundColor: '#F3F0FF' }]}>
      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <Path
          d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"
          stroke="#7C4DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 2v4M8 2v4M3 10h18"
          stroke="#7C4DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

/* ── Stat card ──────────────────────────────────── */

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <View style={styles.card}>
      {icon}
      <View style={styles.cardTextBlock}>
        <Text style={styles.cardLabel}>{label}</Text>
        <Text style={styles.cardValue}>{value}</Text>
      </View>
    </View>
  );
}

/* ── Section ────────────────────────────────────── */

export default function HealthStatsSection({
  litersDonated,
  livesSaved,
  lastDonation,
}: HealthStatsSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Estatísticas de Saúde</Text>
      <StatCard
        icon={<DropIcon />}
        label="Litros Doados"
        value={litersDonated}
      />
      <StatCard
        icon={<HeartIcon />}
        label="Estimativa de Vidas Salvas"
        value={livesSaved}
      />
      <StatCard
        icon={<CalendarIcon />}
        label="Última Doação"
        value={lastDonation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: BrandColors.textPrimary,
    marginBottom: 14,
  },

  /* Card */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BrandColors.cardBackground,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,

    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FDECEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardTextBlock: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 12,
    color: BrandColors.textSecondary,
    marginBottom: 2,
  },
  cardValue: {
    fontSize: 17,
    fontWeight: '700',
    color: BrandColors.textPrimary,
  },
});
