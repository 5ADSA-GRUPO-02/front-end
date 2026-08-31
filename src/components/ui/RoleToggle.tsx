import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  type ViewStyle,
} from 'react-native';
import { BrandColors } from '@/constants/colors';

export type UserRole = 'doador' | 'hemocentro';

interface RoleToggleProps {
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  style?: ViewStyle;
}

/**
 * Toggle pill for "Sou Doador" / "Sou Hemocentro".
 */
export default function RoleToggle({
  activeRole,
  onRoleChange,
  style,
}: RoleToggleProps) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button,
          activeRole === 'doador' ? styles.active : styles.inactive,
        ]}
        onPress={() => onRoleChange('doador')}
      >
        <Text
          style={[
            styles.text,
            activeRole === 'doador' ? styles.activeText : styles.inactiveText,
          ]}
        >
          Sou Doador
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button,
          activeRole === 'hemocentro' ? styles.active : styles.inactive,
        ]}
        onPress={() => onRoleChange('hemocentro')}
      >
        <Text
          style={[
            styles.text,
            activeRole === 'hemocentro'
              ? styles.activeText
              : styles.inactiveText,
          ]}
        >
          Sou Hemocentro
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: BrandColors.border,
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  active: {
    backgroundColor: BrandColors.primary,
  },
  inactive: {
    backgroundColor: BrandColors.white,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
  activeText: {
    color: BrandColors.white,
  },
  inactiveText: {
    color: BrandColors.textSecondary,
  },
});
