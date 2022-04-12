export default function setLocalGameUser(gameUser: string) {
  localStorage.setItem("gameUser", JSON.stringify(gameUser));
}
