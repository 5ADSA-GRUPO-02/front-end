import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path, Circle, Line } from 'react-native-svg';

import ScannerFrame from '@/components/scan/ScannerFrame';
import { BrandColors } from '@/constants/colors';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const FRAME_SIZE = SCREEN_WIDTH * 0.72;

/**
 * Scanner / OCR screen – simulated camera viewfinder with a scanning frame,
 * flash toggle, settings button, and a capture button.
 */
export default function ScanScreen() {
  const [flashOn, setFlashOn] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* ── Viewfinder (dark area) ───────────────── */}
      <View style={styles.viewfinder}>
        {/* Top toolbar */}
        <View style={styles.toolbar}>
          {/* Settings */}
          <TouchableOpacity style={styles.toolBtn} activeOpacity={0.7}>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Circle
                cx="12"
                cy="12"
                r="3"
                stroke={BrandColors.white}
                strokeWidth="2"
              />
              <Path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1.08z"
                stroke={BrandColors.white}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>

          {/* Flash toggle */}
          <TouchableOpacity
            style={styles.toolBtn}
            activeOpacity={0.7}
            onPress={() => setFlashOn((prev) => !prev)}
          >
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                stroke={flashOn ? '#FFD600' : BrandColors.white}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={flashOn ? '#FFD60033' : 'none'}
              />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Scanner frame centred */}
        <View style={styles.frameWrapper}>
          <ScannerFrame size={FRAME_SIZE} />
        </View>
      </View>

      {/* ── Bottom section (light) ────────────────── */}
      <View style={styles.bottom}>
        <Text style={styles.hint}>
          Alinhe o seu comprovante para registrar sua doação.
        </Text>

        {/* Capture button */}
        <TouchableOpacity activeOpacity={0.8} style={styles.captureOuter}>
          <View style={styles.captureInner}>
            <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
              <Path
                d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"
                stroke={BrandColors.primary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Circle
                cx="12"
                cy="13"
                r="4"
                stroke={BrandColors.primary}
                strokeWidth="2"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C2E',
  },

  /* Viewfinder */
  viewfinder: {
    flex: 1,
    backgroundColor: '#2A2A3D',
  },

  /* Toolbar */
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  toolBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Frame */
  frameWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Bottom */
  bottom: {
    backgroundColor: BrandColors.white,
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 32,
    paddingHorizontal: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
  },
  hint: {
    fontSize: 14,
    color: BrandColors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },

  /* Capture button */
  captureOuter: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 3,
    borderColor: BrandColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureInner: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'rgba(198,40,40,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
