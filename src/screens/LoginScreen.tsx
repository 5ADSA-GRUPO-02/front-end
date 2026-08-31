import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

import LogoIcon from '@/components/ui/LogoIcon';
import RoleToggle, { type UserRole } from '@/components/ui/RoleToggle';
import InputField from '@/components/ui/InputField';
import ActionButton from '@/components/ui/ActionButton';
import { BrandColors } from '@/constants/colors';

/**
 * Login / Sign-In screen for HemoConnect.
 */
export default function LoginScreen() {
  const router = useRouter();
  const [role, setRole] = useState<UserRole>('doador');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: implement real authentication
    router.replace('/(tabs)');
  };

  const handleGoogleLogin = () => {
    // TODO: implement Google OAuth
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header / Branding ─────────────────────── */}
        <View style={styles.header}>
          <LogoIcon size={80} />
          <Text style={styles.title}>HemoConnect</Text>
          <Text style={styles.subtitle}>
            Conectando corações, abastecendo vidas!
          </Text>
        </View>

        {/* ── Role Toggle ───────────────────────────── */}
        <RoleToggle
          activeRole={role}
          onRoleChange={setRole}
          style={styles.toggle}
        />

        {/* ── Form Fields ───────────────────────────── */}
        <View style={styles.form}>
          <InputField
            label="E-mail"
            placeholder="aluno@sptech.school"
            keyboardType="email-address"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
          />

          <InputField
            label="Senha"
            placeholder="••••••••"
            isPassword
            value={password}
            onChangeText={setPassword}
            containerStyle={styles.passwordField}
          />

          <TouchableOpacity style={styles.forgotRow}>
            <Text style={styles.forgotText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        {/* ── Action Buttons ────────────────────────── */}
        <View style={styles.actions}>
          <ActionButton label="Entrar" onPress={handleLogin} />
          <ActionButton
            label="Entrar com Google"
            variant="google"
            onPress={handleGoogleLogin}
            style={styles.googleBtn}
          />
        </View>

        {/* ── Footer / Sign-up Link ─────────────────── */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: BrandColors.white,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 36,
  },

  /* ── Header ──────────────────────────────── */
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: BrandColors.primary,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: BrandColors.textSecondary,
    marginTop: 4,
  },

  /* ── Toggle ──────────────────────────────── */
  toggle: {
    marginBottom: 28,
  },

  /* ── Form ────────────────────────────────── */
  form: {
    width: '100%',
  },
  passwordField: {
    marginTop: 18,
  },
  forgotRow: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotText: {
    fontSize: 13,
    color: BrandColors.textSecondary,
  },

  /* ── Actions ─────────────────────────────── */
  actions: {
    width: '100%',
    marginTop: 32,
    gap: 14,
  },
  googleBtn: {
    // extra spacing handled by gap
  },

  /* ── Footer ──────────────────────────────── */
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    paddingTop: 40,
  },
  footerText: {
    fontSize: 14,
    color: BrandColors.textSecondary,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '700',
    color: BrandColors.linkRed,
  },
});
