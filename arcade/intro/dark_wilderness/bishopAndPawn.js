function bishopAndPawn(bishop, pawn) {
  return (
    Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) ===
    Math.abs(bishop[1] - pawn[1])
  );
}
