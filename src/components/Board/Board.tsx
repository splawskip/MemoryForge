// Styles.
import styles from './Board.module.css';
// Components.
import Grid from '../Grid';

function Board() {
  // Spit it out.
  return (
    <div className={styles.board}>
      <Grid />
    </div>
  );
}

export default Board;
