import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Tabs } from 'expo-router';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

/* ────────────────────────────────────────────────────
 *  Tab icon components
 * ──────────────────────────────────────────────────── */

function HomeIcon({ color, size }: { color: string; size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 21V12h6v9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function MapIcon({ color, size }: { color: string; size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="12"
        cy="10"
        r="3"
        stroke={color}
        strokeWidth="2"
      />
    </Svg>
  );
}

function ChatIcon({ color, size }: { color: string; size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ProfileIcon({ color, size }: { color: string; size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="12"
        cy="7"
        r="4"
        stroke={color}
        strokeWidth="2"
      />
    </Svg>
  );
}

function ScanIcon() {
  return (
    <View style={styles.scanContainer}>
      <View style={styles.scanCircle}>
        <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
          {/* Camera body */}
          <Path
            d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"
            stroke={BrandColors.white}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Circle
            cx="12"
            cy="13"
            r="4"
            stroke={BrandColors.white}
            strokeWidth="2"
          />
        </Svg>
      </View>
    </View>
  );
}

/* ────────────────────────────────────────────────────
 *  Tab layout
 * ──────────────────────────────────────────────────── */

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: BrandColors.tabActive,
        tabBarInactiveTintColor: BrandColors.tabInactive,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="mapa"
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color }) => <MapIcon color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="escanear"
        options={{
          title: 'Escanear',
          tabBarIcon: () => <ScanIcon />,
          tabBarLabel: () => (
            <Text style={styles.scanLabel}>Escanear</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <ChatIcon color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <ProfileIcon color={color} size={22} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: BrandColors.tabBarBg,
    borderTopWidth: 1,
    borderTopColor: BrandColors.tabBarBorder,
    height: Platform.OS === 'ios' ? 88 : 68,
    paddingTop: 6,
    paddingBottom: Platform.OS === 'ios' ? 28 : 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  tabItem: {
    paddingTop: 4,
  },

  /* Scan (centre) button */
  scanContainer: {
    position: 'relative',
    top: -18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: BrandColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: BrandColors.white,

    shadowColor: BrandColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  scanLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: BrandColors.textSecondary,
    marginTop: -10,
  },
});
