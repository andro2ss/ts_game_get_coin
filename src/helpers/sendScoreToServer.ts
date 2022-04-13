import { addDoc, collection } from "firebase/firestore";
import db from "../firebase";

export default async function sendScoreToServer(
  user: string,
  score: number,
  round: number
) {
  const dataToSend = {
    user: user,
    score: score,
    round: round,
  };
  const collectionRef = collection(db, "gameboard");
  await addDoc(collectionRef, dataToSend);
}
