function electionsWinners(votes, k) {
  let highest = Math.max(...votes);
  let winner = 0;
  let highestVoteMember = 0;

  votes.forEach((vote) => {
    if (vote + k > highest) winner++;

    if (vote === highest) highestVoteMember++;
  });

  if (k === 0)  return highestVoteMember === 1 ? 1 : 0;

  return winner;
}

console.log(electionsWinners((votes = [2, 3, 5, 2]), (k = 3)));
