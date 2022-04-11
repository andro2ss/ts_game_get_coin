export function setEndRoundTime() {
  const endTime: Date = new Date();
  endTime.setSeconds(endTime.getSeconds() + 10);
  return endTime;
}
