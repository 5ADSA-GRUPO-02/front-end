import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  type ViewStyle,
  type TextInputProps,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { BrandColors } from '@/constants/colors';

interface InputFieldProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  containerStyle?: ViewStyle;
}

/**
 * Reusable labeled text input with optional password visibility toggle.
 */
export default function InputField({
  label,
  isPassword = false,
  containerStyle,
  ...rest
}: InputFieldProps) {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={BrandColors.placeholder}
          secureTextEntry={secure}
          autoCapitalize="none"
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setSecure((prev) => !prev)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            {secure ? (
              /* Eye-off icon */
              <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.39 1 12a18.45 18.45 0 0 1 5.06-7.18M9.9 4.24A9.12 9.12 0 0 1 12 4c5 0 9.27 3.61 11 8a18.5 18.5 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24"
                  stroke={BrandColors.textSecondary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M1 1l22 22"
                  stroke={BrandColors.textSecondary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            ) : (
              /* Eye icon */
              <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"
                  stroke={BrandColors.textSecondary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M12 9a3 3 0 100 6 3 3 0 000-6z"
                  stroke={BrandColors.textSecondary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: BrandColors.textPrimary,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BrandColors.border,
    borderRadius: 12,
    backgroundColor: BrandColors.white,
    paddingHorizontal: 16,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: BrandColors.textPrimary,
    height: '100%',
  },
  eyeButton: {
    marginLeft: 8,
    padding: 4,
  },
});
