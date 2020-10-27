import React from "react";

function Favorite(props) {
  return (
    <li className="filters__item">
      <label>
        <input className="filters__input" type="radio" name="favorite" />
        Favoritos
      </label>
    </li>
  );
}

export default Favorite;
