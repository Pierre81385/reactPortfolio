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
          <p
            style={style.a}
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </p>
        </li>
        <li className="nav-item">
          <p
            style={style.a}
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </p>
        </li>
        <li className="nav-item">
          <p
            style={style.a}
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </p>
        </li>
        <li className="nav-item">
          <p
            style={style.a}
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </p>
        </li>
        <li className="nav-item">
          <p
            style={style.a}
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
