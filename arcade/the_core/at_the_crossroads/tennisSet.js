function tennisSet(score1, score2) {
  const maxScore = Math.max(score1, score2);
  const minScore = Math.min(score1, score2);

  // the first player to win 6 games is declared the winne
  if (maxScore === 6 && minScore < 5) return true;
  // game will ended at 7
  if (maxScore >= 7 && minScore < 5) return false;
  // ended at 7
  if (maxScore == 7 && minScore !== 7) return true;

  return false;
}
