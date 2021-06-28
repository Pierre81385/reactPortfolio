import React from "react";
import Button from "react-bootstrap/Button";

const style = {
  a: {
    color: "black",
  },
  nav: {
    height: "10px",
  },
  li: {
    paddingLeft: "15px",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav style={style.nav}>
      <ul className="navbar navbar-expand-lg navbar-light bg-white fixed-top list-unstyled">
        <li className="nav-item" style={style.li}>
          <Button
            variant="outline-light"
            onClick={() => handlePageChange("Home")}
            //className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            <img
              src="./profile.jpg"
              style={{
                height: "50px",
                borderRadius: "15px",
              }}
            ></img>
          </Button>
        </li>
        <li className="nav-item" style={style.li}>
          <Button
            variant="outline-dark"
            onClick={() => handlePageChange("About")}
            //className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </Button>
        </li>
        <li className="nav-item" style={style.li}>
          <Button
            variant="outline-dark"
            onClick={() => handlePageChange("Portfolio")}
            //className={currentPage === "Resume" ? "nav-link active" : "nav-link" }
          >
            Portfolio
          </Button>
        </li>
        <li className="nav-item" style={style.li}>
          <Button
            variant="outline-dark"
            onClick={() => handlePageChange("Resume")}
            //className={currentPage === "Resume" ? "nav-link active" : "nav-link" }
          >
            Resume
          </Button>
        </li>
        <li className="nav-item" style={style.li}>
          <Button
            variant="outline-dark"
            onClick={() => handlePageChange("Contact")}
            //className={currentPage === "Resume" ? "nav-link active" : "nav-link" }
          >
            Contact
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
