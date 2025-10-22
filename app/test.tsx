import { CardType, SelectedCard } from "@/utils/types";
import { useIsFocused, useNavigationState } from "@react-navigation/native";
import clsx from "clsx";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const SUITS = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
  spades: "♠",
  joker: "★",
};

const Test = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const navState = useNavigationState((state) => state);
  if (!navigation) return null;

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
    try {
      if (!navState) return null;
      setSelectedCards((prev) => {
        const alreadySelected = prev.find((sc) => sc.card?.id === card.id);
        return alreadySelected
          ? prev.filter((sc) => sc.card?.id !== card.id)
          : [...prev, { card }];
      });
    } catch (err) {
      console.error("Card press crash:", err);
    }
  };
  if (!isFocused) return null;
  return (
    <View className="flex-row flex-wrap">
      {cards.map((card) => {
        const isRed = card.suit === "hearts" || card.suit === "diamonds";
        const selected = selectedCards.find((sc) => sc.card?.id === card.id);

        const cardClass = clsx(
          "w-16 h-24 text-sm rounded-lg border flex items-center justify-center p-1 relative flex-col transition-all duration-150",
          selected
            ? "border-yellow-400 border-4 bg-yellow-50 shadow-xl"
            : "border-gray-300 border-2 bg-white",
          card.value === "RED3" && "bg-red-50"
        );

        const textColor = isRed ? "text-red-600" : "text-gray-900";

        return (
          <Pressable key={card.id} onPress={() => handleCardClick(card)}>
            <View className={cardClass}>
              <Text className={clsx("font-bold -top-5 self-start", textColor)}>
                {card.display}
              </Text>
              <Text
                className={clsx(
                  "text-2xl absolute top-1/3 left-1/2 transform -translate-x-1/3 translate-y-0.5",
                  textColor
                )}
              >
                {SUITS[card.suit]}
              </Text>
              <Text
                className={clsx(
                  "font-bold -bottom-5 self-end rotate-180",
                  textColor
                )}
              >
                {card.display}
              </Text>
              {selected && (
                <View className="absolute top-1 right-1 bg-yellow-300 rounded-full p-1 z-10">
                  <Text className="text-xs font-bold text-white">✓</Text>
                </View>
              )}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Test;
