import React from "react";

function Favorite(props) {
  return (
    <li className="filters__item">
      <label>
        <input className="filters__input" type="radio" name="favorite" checked={props.check} />
        Favoritos
      </label>
    </li>
  );
}

export default Favorite;
