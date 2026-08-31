import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

export type PinVariant = 'blood' | 'hospital';

interface MapPinProps {
  variant?: PinVariant;
  isSelected?: boolean;
  onPress?: () => void;
  /** Absolute position offsets (percentage of parent) */
  top: string;
  left: string;
}

/**
 * A single map-marker pin rendered absolutely within the map area.
 * Two variants: "blood" (drop icon) and "hospital" (building icon).
 */
export default function MapPin({
  variant = 'blood',
  isSelected = false,
  onPress,
  top,
  left,
}: MapPinProps) {
  const size = isSelected ? 44 : 38;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.pin,
        {
          top: top as any,
          left: left as any,
          width: size,
          height: size + 10,
        },
      ]}
    >
      {/* Pin body */}
      <View
        style={[
          styles.pinBody,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: isSelected ? BrandColors.primary : BrandColors.white,
            borderColor: isSelected ? BrandColors.primary : BrandColors.border,
          },
        ]}
      >
        {variant === 'blood' ? (
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 2C12 2 4 10 4 15a8 8 0 0016 0c0-5-8-13-8-13z"
              fill={isSelected ? BrandColors.white : BrandColors.primary}
              stroke={isSelected ? BrandColors.white : BrandColors.primary}
              strokeWidth="1"
            />
          </Svg>
        ) : (
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Path
              d="M3 21V7l9-4 9 4v14"
              stroke={isSelected ? BrandColors.white : BrandColors.secondary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M9 21V14h6v7"
              stroke={isSelected ? BrandColors.white : BrandColors.secondary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        )}
      </View>

      {/* Pin tail */}
      <View
        style={[
          styles.pinTail,
          { borderTopColor: isSelected ? BrandColors.primary : BrandColors.white },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pin: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 10,
  },
  pinBody: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  pinTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginTop: -1,
  },
});
