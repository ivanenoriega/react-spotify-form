import React from "react";

function Favorite(props) {
  return (
    <li className="filters__item">
      <label>
        <input className="filters__input" type="radio" name="favorite" checked={true} />
        Favoritos
      </label>
    </li>
  );
}

export default Favorite;
