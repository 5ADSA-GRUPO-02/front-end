import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

interface LogoIconProps {
  size?: number;
}

/**
 * HemoConnect heart‑logo rendered as SVG.
 * A red circle with a white heart containing a small heartbeat line.
 */
export default function LogoIcon({ size = 80 }: LogoIconProps) {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Red circle background */}
        <Circle cx="50" cy="50" r="46" fill={BrandColors.primary} />

        {/* White heart shape */}
        <Path
          d="M50 78 C50 78, 22 58, 22 40 C22 30, 30 22, 38 22 C43 22, 47 25, 50 30 C53 25, 57 22, 62 22 C70 22, 78 30, 78 40 C78 58, 50 78, 50 78Z"
          fill={BrandColors.white}
        />

        {/* Heartbeat / pulse line inside the heart */}
        <Path
          d="M32 46 L42 46 L46 36 L50 54 L54 40 L58 46 L68 46"
          stroke={BrandColors.primary}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
