import React from "react";

const Header = ({title}) => {
  return (
    <header className="grid">
      <div className="title-container">
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
