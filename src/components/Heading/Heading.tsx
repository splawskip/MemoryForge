// React.
import React from 'react';
// Styles.
import styles from './Heading.module.css';

function Heading({
  as = 'h3', children, className,
} : HeadingProps) {
  // Convert it to JSX Tag.
  const HeadingTag = as;
  // Show it to the world.
  return <HeadingTag className={`${styles[as]} ${className}`}>{children}</HeadingTag>;
}

export default React.memo(Heading);
