import React from "react";

const style = {
  div: {
    backgroundImage: "url(./eberhard-grossgasteiger-xC7Ho08RYF4-unsplash.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    color: "white",
    paddingTop: "30px",
    paddingLeft: "30px",
  },
};

export default function About() {
  return (
    <div style={style.div}>
      <h1>About Page</h1>
      <p>
        My name is Peter Bishop. I graduated with a BBA in Economics and I'm
        currently in school for Full Stack Web Development while bartending on
        the side.
      </p>
    </div>
  );
}
