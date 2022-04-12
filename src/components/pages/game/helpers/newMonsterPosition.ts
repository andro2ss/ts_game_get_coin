export default function newMonsterPosition(
  userPos: number,
  targetPos: number,
  monsterAmount: number
) {
  let newPosition: number = Math.floor(Math.random() * 100);
  let monsters: number[] = [];

  while (
    userPos === newPosition ||
    userPos - 1 === newPosition ||
    userPos - 10 === newPosition ||
    userPos + 1 === newPosition ||
    userPos + 10 === newPosition ||
    targetPos === newPosition ||
    targetPos - 1 === newPosition ||
    targetPos - 10 === newPosition ||
    targetPos + 1 === newPosition ||
    targetPos + 10 === newPosition
  ) {
    newPosition = Math.floor(Math.random() * 100);
  }
  return monsters;
}
