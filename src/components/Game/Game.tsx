// Styles.
import styles from './Game.module.css';
import logo from '../../imgs/memory-forge.png';
// Components.
import Heading from '../Heading';
import Button from '../Button';
import GameStatusProvider from '../GameStatusProvider';
import Board from '../Board';
import VisuallyHidden from '../VisuallyHidden';
import Footer from '../Footer';

function Game() {
  // Spit it out.
  return (
    <GameStatusProvider>
      <Heading as="h1" className={styles.heading}>
        <VisuallyHidden>MemoryForge: Fireside Gathering</VisuallyHidden>
        <img src={logo} alt="MemoryForge logo" loading="lazy" title="MemoryForge logo" />
      </Heading>
      <Button>Play Again</Button>
      <Board />
      <Footer />
    </GameStatusProvider>
  );
}

export default Game;
