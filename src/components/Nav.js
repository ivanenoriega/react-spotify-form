import React from "react";

function Nav(props) {
  return (
    <section className="filters">
      <ul className="filters__list">{props.children}</ul>
    </section>
  );
}

export default Nav;
