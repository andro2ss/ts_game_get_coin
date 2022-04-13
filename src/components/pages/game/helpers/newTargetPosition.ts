export default function newTargetPosition(
  userPos: number,
  monstersPos: number[]
) {
  let newPosition: number = Math.floor(Math.random() * 100);
  while (
    userPos === newPosition ||
    userPos - 1 === newPosition ||
    userPos - 10 === newPosition ||
    userPos + 1 === newPosition ||
    userPos + 10 === newPosition ||
    monstersPos.indexOf(newPosition) !== -1
  ) {
    newPosition = Math.floor(Math.random() * 100);
  }
  return newPosition;
}
