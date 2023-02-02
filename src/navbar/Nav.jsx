import React from "react";

function Nav(props) {
  const { about } = props;
  const { name } = about;
  return (
    <header>
      <h1>{name}</h1>
      <ul class="navmenu">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
