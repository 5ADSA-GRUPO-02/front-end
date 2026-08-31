import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path } from 'react-native-svg';

import HeaderGreeting from '@/components/home/HeaderGreeting';
import NextDonationCard from '@/components/home/NextDonationCard';
import NeedsRadarCard from '@/components/home/NeedsRadarCard';
import type { NeedItem } from '@/components/home/NeedsRadarCard';
import { BrandColors } from '@/constants/colors';

/* ── Mock data ──────────────────────────────────────── */
const MOCK_NEEDS: NeedItem[] = [
  {
    id: '1',
    name: 'Hemocentro Central',
    urgency: 'high',
    distance: '2.5 km de distância',
  },
  {
    id: '2',
    name: 'Hospital Santa Casa',
    urgency: 'moderate',
    distance: '4.8 km de distância',
  },
];

/**
 * Home / "Início" screen.
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Greeting */}
        <HeaderGreeting userName="Aluno" bloodType="O+" />

        {/* Next donation countdown */}
        <NextDonationCard daysRemaining={42} totalDays={60} />

        {/* Needs radar */}
        <NeedsRadarCard criticalType="O+" items={MOCK_NEEDS} />

        {/* Donate button */}
        <TouchableOpacity activeOpacity={0.85} style={styles.donateButton}>
          <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
            <Path
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
              fill={BrandColors.white}
            />
          </Svg>
          <Text style={styles.donateText}>Doar Agora</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.background,
  },
  scrollContent: {
    paddingTop: 56,
    paddingBottom: 100,
  },

  /* Donate button */
  donateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BrandColors.primary,
    marginHorizontal: 20,
    marginTop: 28,
    height: 56,
    borderRadius: 16,
    gap: 10,

    shadowColor: BrandColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  donateText: {
    fontSize: 17,
    fontWeight: '700',
    color: BrandColors.white,
  },
});
