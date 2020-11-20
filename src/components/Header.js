import React from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

function Header() {
  return (
    <nav className="navbar fixed-top">
      <h1>
        <NoteAddIcon fontSize="large" />
        NoteMe!
      </h1>
    </nav>
  );
}

export default Header;
