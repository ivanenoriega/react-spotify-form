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
        artists.push(
            <ArtistCard
                liked={false}
                url={artistsList[i].images[2].url}
                name={artistsList[i].name}
                followers={artistsList[i].followers.total}
                stars={artistsList[i].popularity}
            />
        );
    }

    return (
        <div className="App">
            <header className="head">
                <img className="head__logo" src={logo} alt="Spotify logo" />
                <h1 className="head__title">Artists Search Form - Test</h1>
            </header>
            <Nav>
                <Search />
                <Select title="Genero" />
                <Select title="Popularidad" />
                <Select title="Seguidores" />
                <Favorite />
            </Nav>
            <section className="artists">
                <ul className="artists__list">{artists}</ul>
            </section>
        </div>
    );
}

export default App;
