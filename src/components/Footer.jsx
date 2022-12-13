import React from "react";

function Footer() {
  let date = new Date().getFullYear();
  return <p className="footer">Copyright &copy; {date}</p>;
}

export default Footer;
