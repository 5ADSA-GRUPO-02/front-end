import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SearchBar from '@/components/map/SearchBar';
import BloodTypeFilter, { type BloodType } from '@/components/map/BloodTypeFilter';
import MapPin from '@/components/map/MapPin';
import HemocentroInfoCard, {
  type HemocentroInfo,
} from '@/components/map/HemocentroInfoCard';
import { BrandColors } from '@/constants/colors';

/* ── Mock data ──────────────────────────────────────── */
const MOCK_LOCATIONS: (HemocentroInfo & {
  top: string;
  left: string;
  pinVariant: 'blood' | 'hospital';
})[] = [
  {
    id: '1',
    name: 'Hemocentro São Paulo',
    address: 'Av. Dr. Enéas Carvalho de Aguiar, 155',
    distance: '2.5 km',
    schedule: 'Segunda a Sábado — 07:00 às 18:00',
    urgencyLabel: 'NECESSIDADE URGENTE',
    top: '35%',
    left: '38%',
    pinVariant: 'blood',
  },
  {
    id: '2',
    name: 'Hospital Santa Casa',
    address: 'R. Dr. Cesário Mota Jr, 112',
    distance: '4.8 km',
    schedule: 'Segunda a Sexta — 08:00 às 17:00',
    urgencyLabel: 'ALERTA MODERADO',
    top: '45%',
    left: '52%',
    pinVariant: 'hospital',
  },
  {
    id: '3',
    name: 'Hemocentro Central',
    address: 'Av. Paulista, 2001',
    distance: '3.2 km',
    schedule: 'Todos os dias — 07:00 às 19:00',
    urgencyLabel: 'NECESSIDADE URGENTE',
    top: '55%',
    left: '18%',
    pinVariant: 'blood',
  },
  {
    id: '4',
    name: 'Hospital Regional Sul',
    address: 'R. Augusta, 500',
    distance: '6.1 km',
    schedule: 'Segunda a Sexta — 08:00 às 16:00',
    urgencyLabel: 'ESTOQUE ESTÁVEL',
    top: '28%',
    left: '65%',
    pinVariant: 'blood',
  },
];

/**
 * Map screen – search + blood-type filter + map area with pins + info card.
 */
export default function MapScreen() {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<BloodType | null>('O+');
  const [selectedId, setSelectedId] = useState<string>('1');

  const selectedLocation = MOCK_LOCATIONS.find((l) => l.id === selectedId)!;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* ── Top controls ──────────────────────────── */}
      <View style={styles.topControls}>
        <SearchBar value={search} onChangeText={setSearch} />
        <View style={styles.filterRow}>
          <BloodTypeFilter selected={selectedType} onSelect={setSelectedType} />
        </View>
      </View>

      {/* ── Map area ──────────────────────────────── */}
      <View style={styles.mapArea}>
        {/* Subtle map grid lines for visual depth */}
        <View style={styles.gridH1} />
        <View style={styles.gridH2} />
        <View style={styles.gridV1} />
        <View style={styles.gridV2} />

        {MOCK_LOCATIONS.map((loc) => (
          <MapPin
            key={loc.id}
            variant={loc.pinVariant}
            isSelected={loc.id === selectedId}
            top={loc.top}
            left={loc.left}
            onPress={() => setSelectedId(loc.id)}
          />
        ))}
      </View>

      {/* ── Bottom info card ──────────────────────── */}
      <HemocentroInfoCard info={selectedLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.background,
  },

  /* Top */
  topControls: {
    paddingTop: 56,
    backgroundColor: BrandColors.background,
    zIndex: 20,
  },
  filterRow: {
    marginTop: 14,
    marginBottom: 4,
  },

  /* Map */
  mapArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#EEF1F5',
    overflow: 'hidden',
  },

  /* Subtle grid for map feel */
  gridH1: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#DDE1E8',
  },
  gridH2: {
    position: 'absolute',
    top: '60%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#DDE1E8',
  },
  gridV1: {
    position: 'absolute',
    left: '35%',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#DDE1E8',
  },
  gridV2: {
    position: 'absolute',
    left: '70%',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#DDE1E8',
  },
});
