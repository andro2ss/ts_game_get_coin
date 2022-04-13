export default function newMonsterPosition(
  userPos: number,
  targetPos: number,
  monsterAmount: number
) {
  let monsters: number[] = [];
  while (monsters.length < monsterAmount) {
    let newPosition: number = Math.floor(Math.random() * 100);
    let positionCheck =
      userPos === newPosition ||
      userPos - 1 === newPosition ||
      userPos - 10 === newPosition ||
      userPos + 1 === newPosition ||
      userPos + 10 === newPosition ||
      targetPos === newPosition ||
      targetPos - 1 === newPosition ||
      targetPos - 10 === newPosition ||
      targetPos + 1 === newPosition ||
      targetPos + 10 === newPosition;
    if (monsters.indexOf(newPosition) === -1 && !positionCheck)
      monsters.push(newPosition);
  }

  return monsters;
}
