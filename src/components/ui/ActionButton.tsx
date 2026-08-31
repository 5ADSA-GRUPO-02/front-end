import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

type ButtonVariant = 'primary' | 'google';

interface ActionButtonProps {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 * Action button used for "Entrar" (primary) and "Entrar com Google" (google) variants.
 */
export default function ActionButton({
  label,
  variant = 'primary',
  onPress,
  loading = false,
  style,
  textStyle,
}: ActionButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={loading}
      style={[
        styles.base,
        isPrimary ? styles.primary : styles.google,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={isPrimary ? BrandColors.white : BrandColors.textPrimary}
        />
      ) : (
        <>
          {variant === 'google' && (
            <Svg
              width={20}
              height={20}
              viewBox="0 0 48 48"
              style={styles.googleIcon}
            >
              <Path
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                fill="#4285F4"
              />
              <Path
                d="M3.2 14.1l7 5.2C12.1 14.4 17.6 11 24 11c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 14.8 2 6.9 7 3.2 14.1z"
                fill="#EA4335"
              />
              <Path
                d="M24 46c5.4 0 10.3-1.8 14.1-5l-6.9-5.7C29.1 37 26.7 38 24 38c-6 0-11.1-4-12.9-9.5l-7 5.4C7.1 41 14.9 46 24 46z"
                fill="#34A853"
              />
              <Path
                d="M44.5 20H24v8.5h11.8c-1 3.2-3.1 5.8-5.6 7.5l6.9 5.7C41.4 38 46 31.6 46 24c0-1.3-.2-2.7-.5-4z"
                fill="#FBBC05"
              />
            </Svg>
          )}
          <Text
            style={[
              styles.text,
              isPrimary ? styles.primaryText : styles.googleText,
              textStyle,
            ]}
          >
            {label}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    borderRadius: 14,
    width: '100%',
  },
  primary: {
    backgroundColor: BrandColors.secondary,
  },
  google: {
    backgroundColor: BrandColors.white,
    borderWidth: 1,
    borderColor: BrandColors.googleBorder,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: BrandColors.white,
  },
  googleText: {
    color: BrandColors.textPrimary,
  },
  googleIcon: {
    marginRight: 12,
  },
});
