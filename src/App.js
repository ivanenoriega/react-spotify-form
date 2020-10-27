import logo from "./assets/images/logo.svg";
import artistsList from "./helpers/artists";
import Select from "./components/Select";
import Favorite from "./components/Favorite";
import ArtistCard from "./components/ArtistCard";
import Nav from "./components/Nav";
import Search from "./components/Search";
import "./App.css";

function App() {
  const artists = [];

  for (let i = 0; i < artistsList.length; i++) {
    artists.push(<ArtistCard />);
  }

  return (
    <div className="App">
      <header className="head">
        <img className="head__logo" src={logo} alt="Spotify logo" />
        <h1 className="head__title">Artists Search Form - Test</h1>
      </header>
      <Nav>
        <Search />
        <Select title="Genero" className="filters__item"/>
        <Select title="Popularidad" className="filters__item"/>
        <Select title="Seguidores" className="filters__item"/>
        <Favorite />
      </Nav>
      <section className="artists">
        <ul className="artists__list">{artists}</ul>
      </section>
    </div>
  );
}

export default App;
