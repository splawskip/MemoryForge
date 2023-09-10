// React.
import React from 'react';
// Components.
import { GameStatusContext } from '../GameStatusProvider/GameStatusProvider';
// Styles.
import styles from './Button.module.css';

function Button({ children }: ChildrenOnly) {
  // Get data from context.
  const { shuffleCards } = React.useContext(GameStatusContext);
  // Spit it out.
  return (
    <button type="button" className={styles.wrap} onClick={shuffleCards}>
      <div className={styles.in}>
        <span className={styles.border}>
          <span className={styles.text}>
            {children}
          </span>
        </span>
      </div>
    </button>
  );
}

export default React.memo(Button);
