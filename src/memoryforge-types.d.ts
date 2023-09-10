type GameStatusContext = {
  cards:Cards[];
  turns: number;
  disabled: boolean;
  firstChoice: Card | undefined;
  secondChoice: Card | undefined;
  handleChoice: (card: Card) => void;
  shuffleCards: () => void;
};

type ChildrenOnly = {
  children: React.ReactNode;
};

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
  children: React.ReactNode;
  className: string;
};

type VisuallyHiddenProps = {
  children: React.ReactNode;
  className?: string;
};

type CardProps = {
  card: Card;
  disabled: boolean;
  flipped: boolean;
};

type Card = {
  id: string;
  src: string;
  matched: boolean;
};
