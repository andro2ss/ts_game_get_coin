export default function timeToEndRound(currentTime: Date, endTime: Date) {
  const toDate = endTime.getTime();
  const now = currentTime.getTime();

  const diff = toDate - now;

  return Math.floor((diff % (1000 * 60)) / 1000);
}
