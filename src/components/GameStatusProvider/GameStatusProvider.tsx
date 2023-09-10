// React.
import React from 'react';
// Photos.
import giftOfElune from '../../imgs/gift-of-elune.webp';
import goodGourd from '../../imgs/good-gourd-reverse.webp';
import lilith from '../../imgs/lilith-reverse.webp';
import moltenCore from '../../imgs/molten-core-reverse.webp';
import moonWell from '../../imgs/moon-well-reverse.webp';
import naxx from '../../imgs/naxx-reverse.webp';
// Expose context.
export const GameStatusContext = React.createContext<GameStatusContext>({} as GameStatusContext);

function GameStatusProvider({ children }: ChildrenOnly) {
  // Get some state.
  const [cards, setCards] = React.useState<Array<Card>>([]);
  const [turns, setTurns] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const [firstChoice, setFirstChoice] = React.useState<Card>();
  const [secondChoice, setSecondChoice] = React.useState<Card>();
  const cardImages = React.useMemo(() => (
    [
      { src: giftOfElune, matched: false },
      { src: goodGourd, matched: false },
      { src: lilith, matched: false },
      { src: moltenCore, matched: false },
      { src: moonWell, matched: false },
      { src: naxx, matched: false },
    ]
  ), []);

  const shuffleCards = React.useCallback(() => {
    // Shiffle cards.
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: crypto.randomUUID() }));
      // Set cards so state will know.
    setCards(shuffledCards);
    setFirstChoice(undefined);
    setSecondChoice(undefined);
  }, [cardImages]);

  // Reset.
  const resetTurn = () => {
    setFirstChoice(undefined);
    setSecondChoice(undefined);
    setDisabled(false);
    setTurns((prevTurns) => prevTurns + 1);
  };

  // Initial shuffling.
  React.useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

  // Compare cards when any of the choices are changed.
  React.useEffect(() => {
    // If we go both choices.
    if (firstChoice && secondChoice) {
      // Disable board while checking.
      setDisabled(true);
      // If we got a match.
      if (firstChoice.src === secondChoice.src) {
        setCards((previousCards) => previousCards.map((card) => {
          // Change state of selected card.
          if (card.src === firstChoice.src) {
            return { ...card, matched: true };
          }
          // Other cards should be not touched.
          return card;
        }));
        // Reset turn.
        resetTurn();
      } else { // If there is no match, reset turn with slight delay.
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  // Memoize value for the context.
  const GameStatusContextValue = React.useMemo(() => ({
    cards,
    turns,
    disabled,
    firstChoice,
    secondChoice,
    handleChoice: (card: Card) => {
      const choiceSetterCallback = firstChoice ? setSecondChoice : setFirstChoice;
      choiceSetterCallback(card);
    },
    shuffleCards,
  }), [cards, turns, disabled, firstChoice, secondChoice, shuffleCards]);
  // Spit it out.
  return (
    <GameStatusContext.Provider value={GameStatusContextValue}>
      {children}
    </GameStatusContext.Provider>
  );
}

export default GameStatusProvider;
