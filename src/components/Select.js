import React from "react";

function Select(props) {
  return (
    <li className="filters__item">
      <select className="filters__input" name="genres">
        <option value="">{props.title}</option>
        <option value="">{props.title}</option>
        <option value="">{props.title}</option>
        <option value="">{props.title}</option>
        <option value="">{props.title}</option>
        <option value="">{props.title}</option>
      </select>
    </li>
  );
}

export default Select;
