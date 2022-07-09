import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navbarLinks = links.map(link => {
    const capitalized = link.charAt(0).toUpperCase() + link.slice(1);

    return <a href={'#'+link} key={link}>{capitalized}</a>});

  return <nav>{navbarLinks}</nav>;
}

export default NavBar;
