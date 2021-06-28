import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "react-bootstrap/Button";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const style = {
    div: {
      backgroundImage:
        "url(./eberhard-grossgasteiger-xC7Ho08RYF4-unsplash.jpg)",
      backgroundSize: "cover",
      height: "100vh",
      color: "white",
      paddingTop: "30px",
      paddingLeft: "30px",
    },
    a: {
      color: "white",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  };

  return (
    <div style={style.div}>
      <Document
        file="../PeterBishop_Resume2021.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {/* {[1, 2].map((page) => (
          <Page pageNumber={page} scale=".75" />
        ))} */}
        <div>
          <a href="../PeterBishop_Resume2021.pdf" style={style.a}>
            DOWNLOAD
          </a>
        </div>
        <Page pageNumber={pageNumber} scale=".65" />
        <div style={{ position: "absolute", bottom: "25px" }}>
          <p>Page {pageNumber}</p>
          <Button
            type="button"
            variant="outline-light"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </Button>
          <Button
            type="button"
            variant="outline-light"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </Button>
        </div>
      </Document>
    </div>
  );
}

export default Resume;
