export type SelectedCard = {
  card: CardType;
  // Add other fields if needed, like suit/value/etc.
};

export type Suit = "hearts" | "diamonds" | "clubs" | "spades" | "joker";

export type CardType = {
  id: string;
  suit: Suit;
  display: string;
  value: string;
  isWild?: boolean;
  isRed3?: boolean;
};

export interface CardProps {
  card: CardType;
  onPress: () => void;
  selected: boolean;
  size?: "small" | "normal" | "large";
  faceDown?: boolean;
}

export interface ButtonProps {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
  textColor?: string;
  className: string;
  children: React.ReactNode;
}

export interface PlayerHandProps {
  cards: CardType[]; // Replace `any` with your actual Card type if available
  onCardClick: (card: CardType) => void;
  selectedCards: SelectedCard[];
  inFoot: boolean;
  onSwitchToFoot: () => void;
}

export type RulesModalProps = {
  showRules: boolean;
  setShowRules: (value: boolean) => void;
};

export interface GameControlsProps {
  selectedCards: SelectedCard[];
  onCreateMeld: () => void;
  onAddToMeld: () => void;
  onDiscard: () => void;
  onDrawFromDeck: () => void;
  onDrawFromDiscard: () => void;
  canDraw: boolean;
  canDiscard: boolean;
  // melds: Meld[];
}

export interface Player {
  id: number;
  name: string;
  hand: CardType[];
  foot: CardType[];
  melds: Meld[]; // or CardType[][] if melds are grouped cards
  score: number;
  isHuman: boolean;
  inFoot: boolean;
}

export interface ComputerPlayerProps {
  player: Player;
  isCurrentTurn: boolean;
}

export interface Meld {
  value: string;
  cards: CardType[]; // Replace with your actual card type
}

export interface MeldAreaProps {
  melds: Meld[];
  playerName: string;
  isCurrentPlayer: boolean;
}

export interface GameState {
  currentPlayerIndex: number;
  players: Player[];
  deck: CardType[];
  discardPile: CardType[];
  hasDrawn: boolean;
  round: number;
  // add other fields as needed
}
