import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import { BrandColors } from '@/constants/colors';

interface ScannerFrameProps {
  /** Frame width as a number (px) */
  size?: number;
}

/**
 * Dashed-border scanning frame with an animated red scan line.
 */
export default function ScannerFrame({ size = 280 }: ScannerFrameProps) {
  const scanLineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(scanLineAnim, {
          toValue: 1,
          duration: 2400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scanLineAnim, {
          toValue: 0,
          duration: 2400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [scanLineAnim]);

  const translateY = scanLineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, size - 4],
  });

  return (
    <View style={[styles.frame, { width: size, height: size }]}>
      {/* Corner markers */}
      <View style={[styles.corner, styles.cornerTL]} />
      <View style={[styles.corner, styles.cornerTR]} />
      <View style={[styles.corner, styles.cornerBL]} />
      <View style={[styles.corner, styles.cornerBR]} />

      {/* Dashed border */}
      <View style={styles.dashedBorder} />

      {/* Animated scan line */}
      <Animated.View
        style={[
          styles.scanLine,
          { transform: [{ translateY }] },
        ]}
      />
    </View>
  );
}

const CORNER_SIZE = 28;
const CORNER_WIDTH = 3;

const styles = StyleSheet.create({
  frame: {
    position: 'relative',
    overflow: 'hidden',
  },

  /* Dashed border overlay */
  dashedBorder: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 2,
    borderColor: BrandColors.primary,
    borderStyle: 'dashed',
    borderRadius: 4,
  },

  /* Corner accents */
  corner: {
    position: 'absolute',
    width: CORNER_SIZE,
    height: CORNER_SIZE,
    zIndex: 2,
  },
  cornerTL: {
    top: -1,
    left: -1,
    borderTopWidth: CORNER_WIDTH,
    borderLeftWidth: CORNER_WIDTH,
    borderTopColor: BrandColors.primary,
    borderLeftColor: BrandColors.primary,
    borderTopLeftRadius: 4,
  },
  cornerTR: {
    top: -1,
    right: -1,
    borderTopWidth: CORNER_WIDTH,
    borderRightWidth: CORNER_WIDTH,
    borderTopColor: BrandColors.primary,
    borderRightColor: BrandColors.primary,
    borderTopRightRadius: 4,
  },
  cornerBL: {
    bottom: -1,
    left: -1,
    borderBottomWidth: CORNER_WIDTH,
    borderLeftWidth: CORNER_WIDTH,
    borderBottomColor: BrandColors.primary,
    borderLeftColor: BrandColors.primary,
    borderBottomLeftRadius: 4,
  },
  cornerBR: {
    bottom: -1,
    right: -1,
    borderBottomWidth: CORNER_WIDTH,
    borderRightWidth: CORNER_WIDTH,
    borderBottomColor: BrandColors.primary,
    borderRightColor: BrandColors.primary,
    borderBottomRightRadius: 4,
  },

  /* Scan line */
  scanLine: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    height: 2,
    backgroundColor: BrandColors.primary,
    opacity: 0.7,
    borderRadius: 1,
    zIndex: 3,
  },
});
