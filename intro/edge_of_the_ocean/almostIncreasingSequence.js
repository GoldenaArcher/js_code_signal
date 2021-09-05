/**
 * Note this is not the most efficient way, the space and time complexity can be reduced by checking the paired points at breakpoints[0]
 * @param {array} sequence
 * @returns
 */

function almostIncreasingSequence(sequence) {
  const breakpoints = findBreak(sequence);
  breakpoints;

  if (breakpoints.length === 0) return true;
  if (breakpoints.length > 1) return false;

  const removedSeq = sequence
    .slice(0, breakpoints[0])
    .concat(sequence.slice(breakpoints[0] + 1, sequence.length));

  const removedSeq2 = sequence
    .slice(0, breakpoints[0] - 1)
    .concat(sequence.slice(breakpoints[0], sequence.length));

  return (
    findBreak(removedSeq).length === 0 || findBreak(removedSeq2).length === 0
  );
}

const findBreak = (sequence) => {
  const breakpoints = [];
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      breakpoints.push(i);
    }
  }
  return breakpoints;
};
