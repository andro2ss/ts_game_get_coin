export function setEndTime() {
  const endTime: Date = new Date();
  endTime.setSeconds(endTime.getSeconds() + 15);
  return endTime;
}
