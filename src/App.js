import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [films, setFilms] = useState([
    { id: 1, titre: "Inception", genre: "Science-Fiction", annee: 2010 },
    { id: 2, titre: "Titanic", genre: "Romance", annee: 1997 },
    { id: 3, titre: "The Dark Knight", genre: "Action", annee: 2008 },
    { id: 4, titre: "Interstellar", genre: "Science-Fiction", annee: 2014 },
  ]);
  const [titre, setTitre] = useState("");
  const [genre, setGenre] = useState("");
  const [annee, setAnnee] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauFilm = {
      id: films.length + 1,
      titre,
      genre,
      annee,
    };
    setFilms([...films, nouveauFilm]);
    setTitre("");
    setGenre("");
    setAnnee("");
  };

  return (
    <div className="App">
      <h1>Catalogue de Films</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Année"
          value={annee}
          onChange={(e) => setAnnee(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <strong>{film.titre}</strong> ({film.annee}) - {film.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
