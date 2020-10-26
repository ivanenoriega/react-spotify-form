import logo from "./assets/images/logo.svg";
import { ReactComponent as Heart } from "./assets/images/heart-empty.svg";
import { ReactComponent as Star } from "./assets/images/star-empty.svg";
import artistLogo from "./assets/images/artist-logo.svg";
import artistsList from "./helpers/artists";
import "./App.css";

function App() {
  const artists = [];

  for (let i = 0; i < artistsList.length; i++) {
    artists.push(
      <li key={i + "_artist"} className="artist">
        <Heart className="artist__like" />
        <img className="artist__logo" src={artistLogo} alt="artist logo" />
        <h2 className="artist__title">Nombre del artista</h2>
        <p className="artist__followers">
          Seguidores: <span>9999</span>
        </p>
        <div className="artist__stars">
          <Star className="artist__star" />
          <Star className="artist__star" />
          <Star className="artist__star" />
          <Star className="artist__star" />
          <Star className="artist__star" />
        </div>
      </li>
    );
  }

  return (
    <div className="App">
      <header className="head">
        <img className="head__logo" src={logo} alt="Spotify logo" />
        <h1 className="head__title">Artists Search Form</h1>
      </header>
      <section className="filters">
        <ul className="filters__list">
          <li className="filters__item">
            <input
              className="filters__input"
              placeholder="Nombre"
              type="text"
            />
          </li>
          <li className="filters__item">
            <select className="filters__input" name="genres">
              <option value="">Genero</option>
              <option value="">Genero</option>
              <option value="">Genero</option>
              <option value="">Genero</option>
              <option value="">Genero</option>
              <option value="">Genero</option>
            </select>
          </li>
          <li className="filters__item">
            <select className="filters__input" name="popularity">
              <option value="">Popularidad</option>
              <option value="">Popularidad</option>
              <option value="">Popularidad</option>
              <option value="">Popularidad</option>
              <option value="">Popularidad</option>
              <option value="">Popularidad</option>
              <option value="">Popularidad</option>
            </select>
          </li>
          <li className="filters__item">
            <select className="filters__input" name="followers">
              <option value="">Seguidores</option>
              <option value="">Seguidores</option>
              <option value="">Seguidores</option>
              <option value="">Seguidores</option>
              <option value="">Seguidores</option>
              <option value="">Seguidores</option>
              <option value="">Seguidores</option>
              <option value="">Seguidores</option>
            </select>
          </li>
          <li className="filters__item">
            <label>
              <input className="filters__input" type="radio" name="favorite" />
              Favoritos
            </label>
          </li>
        </ul>
      </section>
      <section className="artists">
        <ul className="artists__list">{artists}</ul>
      </section>
    </div>
  );
}

export default App;
