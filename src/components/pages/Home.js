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
    </div>
  );
}
