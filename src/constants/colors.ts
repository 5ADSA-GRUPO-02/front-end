/**
 * HemoConnect brand colors and design tokens.
 */

export const BrandColors = {
  /** Primary red – used for the logo, active toggles, and accents */
  primary: '#C62828',
  primaryLight: '#EF5350',
  primaryDark: '#8E0000',

  /** Secondary navy – used for the "Entrar" button and dark accents */
  secondary: '#0D1B3E',
  secondaryLight: '#1A3A6B',

  /** Neutrals */
  white: '#FFFFFF',
  background: '#F8F9FB',
  border: '#E0E0E0',
  borderFocus: '#C62828',
  textPrimary: '#1A1A2E',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  placeholder: '#9CA3AF',

  /** Functional */
  googleBorder: '#E0E0E0',
  linkRed: '#C62828',

  /** Cards & surfaces */
  cardBackground: '#FFFFFF',
  cardShadow: '#00000012',
  backgroundLight: '#F0F4F8',

  /** Badge */
  badgeNavy: '#0D2C6B',
  badgeNavyText: '#FFFFFF',
  badgeCritical: '#C62828',
  badgeCriticalBg: '#FDECEA',

  /** Urgency levels */
  urgencyHigh: '#E53935',
  urgencyModerate: '#F9A825',
  urgencyLow: '#43A047',

  /** Progress ring */
  progressTrack: '#F0F0F0',
  progressFill: '#C62828',

  /** Tab bar */
  tabActive: '#C62828',
  tabInactive: '#9CA3AF',
  tabBarBg: '#FFFFFF',
  tabBarBorder: '#F0F0F0',
} as const;
