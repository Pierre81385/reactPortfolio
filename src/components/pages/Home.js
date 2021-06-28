// import { width } from "dom-helpers";
// import { url } from "inspector";
import React from "react";

const style = {
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "250px",
    borderRadius: "50px",
  },
  h1: {
    width: "8em",
  },
  div: {
    backgroundImage: "url(./eberhard-grossgasteiger-xC7Ho08RYF4-unsplash.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    color: "white",
    paddingTop: "30px",
    paddingLeft: "30px",
  },
};

export default function Home() {
  return (
    <div style={style.div}>
      <h1 style={style.h1}>Peter J Bishop</h1>
      <p>
        Welcome to my portfolio! I hope that over time I'll continue to update
        this site to continuously demonstrate skills and technologies I've
        learned.
      </p>
      <p>
        As it stands today, this page currerntly uses React to handle routing,
        and is styled with React-Bootstrap. React-PDF is used to display my
        resume on the resume page. The contact page is non-functional, but
        primarily because I haven't setup the necessary Google developer account
        to use what I've built.
      </p>
    </div>
  );
}
