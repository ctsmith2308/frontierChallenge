import React from "react";
import moment from "moment";

const Footer = () => {
  return (
    <footer className="grid">
      <p className="copy">&copy;{moment().format("YYYY")}</p>
    </footer>
  );
};

export default Footer;
