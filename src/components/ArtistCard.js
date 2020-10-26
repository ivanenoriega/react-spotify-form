import artistLogo from "./assets/images/artist-logo.svg";

function ArtistCard() {
    return (
        <li className="artist">
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

export default ArtistCard;
