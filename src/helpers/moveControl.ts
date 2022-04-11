export default function moveControl(currentPos: number, moveDirection: string) {
  //return new position if new position is equal 999 end game
  let xPos: number = currentPos % 10;
  let yPos: number = Math.floor(currentPos / 10);
  let newPosition: number = 999;
  if (moveDirection === "left") {
    xPos -= 1;
    if (xPos < 0) {
      newPosition = 999;
    } else {
      newPosition = xPos + yPos * 10;
    }
  } else if (moveDirection === "right") {
    xPos += 1;
    if (xPos === 10) {
      newPosition = 999;
    } else {
      newPosition = xPos + yPos * 10;
    }
  } else if (moveDirection === "up") {
    yPos -= 1;
    if (yPos < 0) {
      newPosition = 999;
    } else {
      newPosition = xPos + yPos * 10;
    }
  } else if (moveDirection === "down") {
    yPos += 1;
    if (yPos === 10) {
      newPosition = 999;
    } else {
      newPosition = xPos + yPos * 10;
    }
  }
  return newPosition;
}
