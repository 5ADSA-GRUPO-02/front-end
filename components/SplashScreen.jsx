import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SplashScreen({ onFinish }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.92)).current;

  useEffect(() => {

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 7,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        if (onFinish) onFinish();
      });
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.iconCard}>
          <MaterialCommunityIcons name="heart-pulse" size={54} color="#A72730" />
        </View>
        <View style={styles.logoRow}>
          <Text style={styles.logoHemo}>Hemo</Text>
          <Text style={styles.logoConnect}>Connect</Text>
        </View>

        <Text style={styles.slogan}>Conectando pessoas. Salvando vidas.</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  iconCard: {
    width: 104,
    height: 104,
    borderRadius: 28,
    backgroundColor: "#FCECEF", 
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 26,
    shadowColor: "#A72730",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  logoHemo: {
    fontSize: 32,
    fontWeight: "800",
    color: "#A72730",
    letterSpacing: -0.5,
  },
  logoConnect: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1D3557",
    letterSpacing: -0.5,
  },
  slogan: {
    fontSize: 14,
    fontWeight: "500",
    color: "#64748B",
    marginTop: 4,
    textAlign: "center",
  },
});
