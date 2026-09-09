import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ProfileHeader from '@/components/profile/ProfileHeader';
import HealthStatsSection from '@/components/profile/HealthStatsSection';
import AchievementsSection from '@/components/profile/AchievementsSection';
import { BrandColors } from '@/constants/colors';

/**
 * Profile / "Perfil" screen.
 */
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with avatar, name, and blood type */}
        <ProfileHeader
          userName="Aluno Sptech"
          subtitle="Doador(a) desde 2020"
          bloodType="O+"
        />

        {/* Divider */}
        <View style={styles.divider} />

        {/* Health statistics */}
        <HealthStatsSection
          litersDonated="2.2 Litros"
          livesSaved="20 Pessoas"
          lastDonation="16/07/2025"
        />

        {/* Achievements */}
        <AchievementsSection />
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
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginHorizontal: 20,
    marginBottom: 16,
  },
});
