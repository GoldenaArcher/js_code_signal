function makeArrayConsecutive2(statues) {
  const uniqueKey = new Set(statues);
  const max = Math.max(...statues);
  const min = Math.min(...statues);
  return max - min - uniqueKey.size + 1;
}
