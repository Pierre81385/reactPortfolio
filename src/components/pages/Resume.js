import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div>
        <a href="../PeterBishop_Resume2021.pdf">DOWNLOAD</a>
      </div>
      <Document
        file="../PeterBishop_Resume2021.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {[1, 2].map((page) => (
          <Page pageNumber={page} />
        ))}
      </Document>
    </div>
  );
}

export default Resume;
