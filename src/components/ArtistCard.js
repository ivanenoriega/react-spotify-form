import React from "react";
import artistLogo from "./../assets/images/artist-logo.svg";
import { ReactComponent as Heart } from "./../assets/images/heart-empty.svg";
import RatingStars from "./RatingStars";

function ArtistCard(props) {
    return (
        <li className="artist">
            <Heart className="artist__like" liked={props.liked} />
            <img
                className="artist__logo"
                src={props.url ? props.url : artistLogo}
                alt="artist logo"
            />
            <h2 className="artist__title">{props.name}</h2>
            <p className="artist__followers">
                Seguidores: <span>{props.followers}</span>
            </p>
            <RatingStars stars={props.stars} />
        </li>
    );
}

export default ArtistCard;
