// React.
import React from 'react';
// Styles.
import styles from './Grid.module.css';
// Components.
import Card from '../Card';
// Context.
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';

function Grid() {
  // Get data from the context.
  const {
    cards, firstChoice, secondChoice, disabled,
  } = React.useContext<GameStatusContext>(GameStatusContext);
  // Build the grid.
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          flipped={card === firstChoice || card === secondChoice || card.matched}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default Grid;
