import moveControl from "./moveControl";

export default function moveMonsters(monstersPosition: number[]) {
  let output = monstersPosition.map((monsterPos) => {
    let randomMove: number = Math.floor(Math.random() * 100);
    let randomMoveDirection: string = "stay";
    switch (randomMove) {
      case 0:
        randomMoveDirection = "left";
        break;
      case 1:
        randomMoveDirection = "right";
        break;
      case 2:
        randomMoveDirection = "up";
        break;
      case 3:
        randomMoveDirection = "down";
        break;
      default:
        randomMoveDirection = "stay";
    }

    return moveControl(monsterPos, randomMoveDirection);
  });
  return output;
}
