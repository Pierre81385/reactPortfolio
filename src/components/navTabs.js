import React from "react";

const style = {
  a: {
    color: "black",
  },
  nav: {
    height: "10px",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav style={style.nav}>
      <ul
        style={style.ul}
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top list-unstyled"
      >
        <li>
          <img
            src="./profile.jpg"
            style={{ height: "50px", borderRadius: "15px", marginLeft: "10px" }}
          ></img>
        </li>
        <li className="nav-item">
          <a
            style={style.a}
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            style={style.a}
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            style={style.a}
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            style={style.a}
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            style={style.a}
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
