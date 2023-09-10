// React.
import React from 'react';
// Styles.
import styles from './Card.module.css';
// Components.
import cardReverse from '../../imgs/classic-reverse.webp';
// Context.
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';

function Card({
  card,
  disabled,
  flipped,
} : CardProps) {
  // Get some help from the context.
  const { handleChoice } = React.useContext<GameStatusContext>(GameStatusContext);
  // Get logical helper.
  const shouldFlip = !disabled && !flipped;
  // Spit it out.
  return (
    <button
      type="button"
      className={styles.card}
      onClick={shouldFlip ? () => handleChoice(card) : undefined}
    >
      <div className={flipped ? styles.flipped : ''}>
        <img className={styles.front} src={card.src} alt="card front" />
        <img className={styles.back} src={cardReverse} alt="cover" />
      </div>
    </button>
  );
}

export default Card;
