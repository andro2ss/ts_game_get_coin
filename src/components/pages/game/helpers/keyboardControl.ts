export function keyboardControl(e: KeyboardEvent) {
  let newDirection: string = "left";
  if (e.which === 37) {
    newDirection = "left";
  } else if (e.which === 39) {
    newDirection = "right";
  } else if (e.which === 40) {
    newDirection = "down";
  } else if (e.which === 38) {
    newDirection = "up";
  }
  return newDirection;
}
