import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const SLIDES = [
  {
    id: "1",
    type: "ambulance",
    title: "Sua doação pode salvar vidas.",
    description:
      "Encontre hemocentros próximos e descubra onde sua doação é mais necessária.",
  },
  {
    id: "2",
    type: "location",
    title: "Encontre quem precisa.",
    description:
      "Receba alertas inteligentes de hemocentros próximos e acompanhe as necessidades em tempo real.",
  },
  {
    id: "3",
    type: "connection",
    title: "Faça parte dessa conexão.",
    description:
      "Acompanhe suas doações, participe de campanhas e veja seu impacto na vida de milhares de pessoas.",
  },
];

export default function OnboardingScreen({ onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      if (onFinish) onFinish();
    }
  };

  const handleSkip = () => {
    if (onFinish) onFinish();
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderIllustration = (type) => {
    switch (type) {
      case "ambulance":
        return (
          <View style={styles.illustrationWrapper}>
            <View style={styles.bubbleCircle} />
            <View style={styles.smallAccentDot} />
            <FontAwesome5 name="ambulance" size={68} color="#A72730" />
          </View>
        );
      case "location":
        return (
          <View style={styles.illustrationWrapper}>
            <View style={styles.mapPinBackground}>
              <View style={styles.pinHeartBubble}>
                <Ionicons name="heart" size={16} color="#A72730" />
              </View>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={70}
                color="#1D3557"
              />
            </View>
          </View>
        );
      case "connection":
        return (
          <View style={styles.illustrationWrapper}>
            <View style={styles.bubbleCircle} />
            {/* Gota de Sangue no topo */}
            <View style={styles.bloodDropBadge}>
              <Ionicons name="water" size={20} color="#A72730" />
            </View>
            {/* Coração estilizado com batimento */}
            <MaterialCommunityIcons
              name="heart-pulse"
              size={76}
              color="#1D3557"
            />
          </View>
        );
      default:
        return null;
    }
  };

  const renderSlide = ({ item }) => (
    <View style={styles.slideContainer}>
      {/* Card Ilustrativo Superior */}
      <View style={styles.card}>
        {renderIllustration(item.type)}
      </View>

      {/* Conteúdo Textual */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FA" />

      {/* Botão de Pular no Topo */}
      <View style={styles.header}>
        {currentIndex < SLIDES.length - 1 ? (
          <Pressable onPress={handleSkip} style={styles.skipButton} hitSlop={15}>
            <Text style={styles.skipText}>Pular</Text>
          </Pressable>
        ) : (
          <View style={{ height: 24 }} />
        )}
      </View>

      {/* Carrossel de Slides */}
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        contentContainerStyle={styles.flatListContent}
      />

      {/* Rodapé: Indicadores de Página + Botão */}
      <View style={styles.footer}>
        {/* Dots de Paginação */}
        <View style={styles.pagination}>
          {SLIDES.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        {/* Botão Principal */}
        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.actionButtonPressed,
          ]}
          onPress={handleNext}
        >
          <Text style={styles.actionButtonText}>
            {currentIndex === SLIDES.length - 1 ? "Começar" : "Próximo"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FA",
    justifyContent: "space-between",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 8,
    alignItems: "flex-end",
    minHeight: 32,
  },
  skipButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  skipText: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "600",
  },
  flatListContent: {
    alignItems: "center",
  },
  slideContainer: {
    width: width,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: width - 48,
    height: height * 0.38,
    maxHeight: 310,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#EEF2F6",
  },
  illustrationWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  bubbleCircle: {
    position: "absolute",
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: "#FCECEF", // Tom suave rosado do design
  },
  smallAccentDot: {
    position: "absolute",
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#E2E8F0",
    bottom: "28%",
    right: "34%",
  },
  mapPinBackground: {
    width: 140,
    height: 100,
    backgroundColor: "#E2E8F0",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  pinHeartBubble: {
    position: "absolute",
    top: 14,
    zIndex: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  bloodDropBadge: {
    position: "absolute",
    top: "22%",
    zIndex: 2,
  },
  textContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1D3557",
    marginBottom: 12,
    lineHeight: 30,
    letterSpacing: -0.3,
  },
  description: {
    fontSize: 15,
    color: "#64748B",
    lineHeight: 22,
    fontWeight: "400",
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    width: "100%",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  dot: {
    height: 7,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 24,
    backgroundColor: "#A72730", // Vermelho Hemo ativo
  },
  inactiveDot: {
    width: 7,
    backgroundColor: "#CBD5E1", // Cinza inativo
  },
  actionButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#1D3557", // Azul Marinho
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1D3557",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButtonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
});
