function validTime(time) {
  const [hour, minutes] = time.split(":");

  return hour >= 0 && hour < 24 && minutes >= 0 && minutes <= 59;
}

console.log(validTime("13:58"));
