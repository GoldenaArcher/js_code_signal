function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (
    Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) &&
    Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight)
  );
}

console.log(
  areEquallyStrong(
    (yourLeft = 10),
    (yourRight = 15),
    (friendsLeft = 15),
    (friendsRight = 10)
  )
);
