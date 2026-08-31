import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

interface CircularProgressProps {
  /** 0–1 progress value */
  progress: number;
  /** Outer diameter in px */
  size?: number;
  /** Ring stroke width */
  strokeWidth?: number;
  /** Content rendered in the centre */
  children?: React.ReactNode;
}

/**
 * Circular progress ring used for the donation countdown.
 */
export default function CircularProgress({
  progress,
  size = 100,
  strokeWidth = 8,
  children,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - Math.min(Math.max(progress, 0), 1));

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size}>
        {/* Track */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={BrandColors.progressTrack}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Fill */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={BrandColors.progressFill}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <View style={styles.center}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
