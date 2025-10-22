import { CardType, SelectedCard } from "@/utils/types";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SUITS = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
  spades: "♠",
  joker: "★",
};

const TestScreen = () => {
  const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);

  const cards: CardType[] = [
    { id: "1", suit: "hearts", value: "5", display: "5" },
    { id: "2", suit: "spades", value: "K", display: "K" },
    { id: "3", suit: "diamonds", value: "K", display: "K" },
    { id: "4", suit: "clubs", value: "A", display: "A" },
    { id: "5", suit: "spades", value: "K", display: "K" },
    { id: "6", suit: "spades", value: "Q", display: "Q" },
    { id: "7", suit: "hearts", value: "K", display: "K" },
    { id: "8", suit: "spades", value: "J", display: "J" },
    { id: "9", suit: "diamonds", value: "K", display: "K" },
    { id: "10", suit: "clubs", value: "K", display: "K" },
    { id: "11", suit: "clubs", value: "10", display: "10" },
    { id: "12", suit: "diamonds", value: "K", display: "K" },
    { id: "13", suit: "hearts", value: "9", display: "9" },
    { id: "14", suit: "spades", value: "4", display: "4" },
  ];

  const handleCardClick = (card: CardType) => {
    if (!card?.id) return;

    setSelectedCards((prev) => {
      const alreadySelected = prev.find((sc) => sc.card?.id === card.id);
      return alreadySelected
        ? prev.filter((sc) => sc.card?.id !== card.id)
        : [...prev, { card }];
    });
  };

  return (
    <View style={styles.cardGrid}>
      {cards.map((card) => {
        const isRed = card.suit === "hearts" || card.suit === "diamonds";
        const selected = selectedCards.find((sc) => sc.card?.id === card.id);

        const borderStyle = selected
          ? styles.selectedBorder
          : styles.defaultBorder;
        const bgStyle = selected
          ? styles.selectedBackground
          : styles.defaultBackground;
        const red3Style = card.value === "RED3" ? styles.red3Background : {};
        const textColor = isRed ? styles.redText : styles.grayText;

        return (
          <Pressable key={card.id} onPress={() => handleCardClick(card)}>
            <View style={[styles.cardBase, borderStyle, bgStyle, red3Style]}>
              <Text style={[styles.cardCornerText, textColor]}>
                {card.display}
              </Text>
              <Text style={[styles.cardSuit, textColor]}>
                {SUITS[card.suit]}
              </Text>
              <Text
                style={[styles.cardCornerText, textColor, styles.rotatedText]}
              >
                {card.display}
              </Text>
              {selected && (
                <View style={styles.checkmarkBadge}>
                  <Text style={styles.checkmarkText}>✓</Text>
                </View>
              )}
            </View>
          </Pressable>
        );
      })}
      {/* <View className="m-8 p-8">
        <Link href="/(game)/test">Go to Game Index</Link>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardBase: {
    width: 64,
    height: 96,
    borderRadius: 8,
    borderWidth: 2,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  },
  selectedBorder: {
    borderColor: "#facc15", // yellow-400
    borderWidth: 4,
  },
  defaultBorder: {
    borderColor: "#d1d5db", // gray-300
    borderWidth: 2,
  },
  selectedBackground: {
    backgroundColor: "#fefce8", // yellow-50
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  defaultBackground: {
    backgroundColor: "#ffffff",
  },
  red3Background: {
    backgroundColor: "#fee2e2", // red-50
  },
  redText: {
    color: "#dc2626", // red-600
  },
  grayText: {
    color: "#1f2937", // gray-900
  },
  cardCornerText: {
    fontWeight: "bold",
    position: "absolute",
    fontSize: 12,
  },
  rotatedText: {
    bottom: 4,
    right: 4,
    transform: [{ rotate: "180deg" }],
  },
  cardSuit: {
    fontSize: 24,
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: [{ translateX: -12 }],
  },
  checkmarkBadge: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "#facc15", // yellow-300
    borderRadius: 999,
    padding: 4,
    zIndex: 10,
  },
  checkmarkText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default TestScreen;
