/**
 * Creates array of numbers that represents given range.
 *
 * @param start - number - Number from which range will start.
 * @param end - number | undefined - Number on which range will end.
 * @param step - number | undefined - Number by which range steps will increment, by default 1.
 * @returns - number[] - array of numbers that represents given range.
 */
const range = (start:number, end?:number, step:number = 1) : number[] => {
  // Initialize array for our range.
  const output:number[] = [];
  // Store input into vars.
  let rangeStart:number = start;
  let rangeEnd:number | undefined = end;
  // Fallback for undefined end.
  if (typeof rangeEnd === 'undefined') {
    rangeEnd = rangeStart;
    rangeStart = 0;
  }
  // Loop from start to end and push values into an array.
  for (let i = rangeStart; i < rangeEnd; i += step) {
    output.push(i);
  }
  // Return array representing range.
  return output;
};

export default range;
