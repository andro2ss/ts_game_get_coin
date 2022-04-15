import React from "react";
import "./Instructions.scss";

export function Instructions() {
  return (
    <div className="home__instructions">
      <h2 className="instructions__title">Instrukcje</h2>
      <div className="instructions__box">
        <h3 className="box__title">Cel gry</h3>
        <span className="box__desc">Zebranie jak największej ilości monet</span>
      </div>
      <div className="instructions__box">
        <h3 className="box__title">Jak grać</h3>
        <span className="box__desc">
          Postać samoczynnie idzie naprzód. Kierunek ruchu można zmienić poprzez
          klawisz strzałki na klawiaturze lub odpowiedni przycisk pod planszą.
        </span>
      </div>
      <div className="instructions__box">
        <h3 className="box__title">Legenda</h3>
        <span className="box__desc">
          Grafika jest symboliczna, kolorowe pola oznaczają:
          <ul>
            <li>
              <div className="gold" /> Moneta (cel dający punkty)
            </li>
            <li>
              <div className="green" /> Postać gracza
            </li>
            <li>
              <div className="red" /> Potwór, spotkanie z nim kończy grę
            </li>
          </ul>
        </span>
      </div>
      <div className="instructions__box">
        <h3 className="box__title">Zasady</h3>
        <span className="box__desc">
          <p>Zebranie monety daje +1 punkt</p>
          <p>Przetrwanie do kolejnej rundy daje +10 punktów</p>
          <p>Wyjście za mapę kończy grę</p>
          <p>Spotkanie z "potworem" kończy grę - uwaga czasem są ruchliwe :)</p>
          <p>
            Wraz z kolejnymi rundami gra będzie przyśpieszać, a ilość potworów
            rosnąć
          </p>
        </span>
      </div>
    </div>
  );
}
