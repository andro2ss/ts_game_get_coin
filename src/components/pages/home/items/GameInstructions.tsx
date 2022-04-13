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
        <h3>Legenda</h3>
        <ul>
          Grafika jest mocno symboliczna, kolorowe pola oznaczają:
          <li>
            <div className="gold"></div> Moneta (cel dający punkty)
          </li>
          <li>
            <div className="green"></div> Postać gracza
          </li>
          <li>
            <div className="red"></div> Potwór, spotkanie z nim kończy grę
          </li>
        </ul>
      </span>
      <span>
        <h3>Zasady</h3>
        <ul>
          <li>Wyjście za mapę kończy grę</li>
          <li>Wejście na potwora kończy grę - uwaga czasem są ruchliwe :)</li>
          <li>
            Wraz z kolejnymi rundami gra będzie przyśpieszać, a ilość potworów
            rosnąć
          </li>
        </ul>
      </span>
    </div>
  );
}
