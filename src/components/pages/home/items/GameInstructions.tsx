import React from "react";

export function GameInstructions() {
  return (
    <div className="home__instructions">
      <h2>Instrukcje</h2>
      <span>
        <h3>Cel gry:</h3>Zebranie jak największej ilości monet
      </span>
      <span>
        <h3>Jak grać</h3>
        Postać samoczynnie idzie naprzód, aby zmienić kierunek wciśnij
        odpowiedni przycisk strzałki
      </span>
      <span>
        <h3>Zasady</h3>
        <ul>
          <li>Wyjście za mapę kończy grę</li>
          <li>Wejście na minę kończy grę</li>
          <li>
            Wraz z kolejnymi rundami gra będzie przyśpieszać, a ilość min rosnąć
          </li>
        </ul>
      </span>
    </div>
  );
}
