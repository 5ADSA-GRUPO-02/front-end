import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

/* ── Badge data ─────────────────────────────────── */

interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

/* ── Icon components ────────────────────────────── */

function TrophyIcon({ color }: { color: string }) {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 9H4a2 2 0 01-2-2V5a2 2 0 012-2h2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 9h2a2 2 0 002-2V5a2 2 0 00-2-2h-2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 3h12v6a6 6 0 01-12 0V3z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15v3M8 21h8M10 18h4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function RefreshIcon({ color }: { color: string }) {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
      <Path
        d="M23 4v6h-6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 20v-6h6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function HeartBadgeIcon({ color }: { color: string }) {
  return (
    <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/* ── Single badge card ──────────────────────────── */

function AchievementBadge({ achievement }: { achievement: Achievement }) {
  return (
    <View style={styles.badgeCard}>
      <View style={[styles.badgeIconCircle, { backgroundColor: achievement.bgColor }]}>
        {achievement.icon}
      </View>
      <Text style={styles.badgeTitle}>{achievement.title}</Text>
      <Text style={styles.badgeSubtitle}>{achievement.subtitle}</Text>
    </View>
  );
}

/* ── Section ────────────────────────────────────── */

export default function AchievementsSection() {
  const achievements: Achievement[] = [
    {
      id: 'gold',
      title: 'Doador Ouro',
      subtitle: '5+ Doações',
      icon: <TrophyIcon color="#D4A017" />,
      bgColor: '#FFF8E1',
      iconColor: '#D4A017',
    },
    {
      id: 'frequent',
      title: 'Frequente',
      subtitle: 'Doação anual',
      icon: <RefreshIcon color="#1A73E8" />,
      bgColor: '#E8F0FE',
      iconColor: '#1A73E8',
    },
    {
      id: 'first',
      title: '1ª Doação',
      subtitle: 'Parabéns!',
      icon: <HeartBadgeIcon color={BrandColors.primary} />,
      bgColor: '#FDECEA',
      iconColor: BrandColors.primary,
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Conquistas</Text>
      <View style={styles.badgesRow}>
        {achievements.map((a) => (
          <AchievementBadge key={a.id} achievement={a} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: BrandColors.textPrimary,
    marginBottom: 14,
  },

  /* Badges row */
  badgesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  /* Single badge */
  badgeCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BrandColors.cardBackground,
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 8,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,

    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  badgeIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  badgeTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: BrandColors.textPrimary,
    textAlign: 'center',
  },
  badgeSubtitle: {
    fontSize: 11,
    color: BrandColors.textSecondary,
    marginTop: 2,
    textAlign: 'center',
  },
});
