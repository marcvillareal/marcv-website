import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const CV = (props) => {
  const pdfPath = process.env.PUBLIC_URL + "/CV.pdf";

  // Determine the width based on screen size
  const pdfWidth = window.innerWidth < 768 ? 400 : 700;

  return (
    <div id="cv" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>CV</h2>
          <p>Feel free to checkout and download my CV</p>
        </div>
        <div className="row">
          <div id="ResumeContainer">
            <Document className={"PDFDocument"} file={pdfPath}>
              <Page
                className={"PDFPage PDFPageOne"}
                width={pdfWidth}
                pageNumber={1}
                renderTextLayer={false}
                renderInteractiveForms={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </div>
        <div className="col-xs-16 col-md-20">
          <a href="/CV.pdf" download="Marc_Villareal_CV">
            <button
              type="submit"
              className="btn btn-custom btn-lg"
              style={{ marginTop: "24px" }}
            >
              Download
            </button>
          </a>
          <a href="/CV.pdf" target="_blank" name="CV">
            <button
              type="submit"
              className="btn btn-custom btn-lg"
              style={{ marginLeft: "16px", marginTop: "24px" }} // Adjust margin for mobile
            >
              View PDF
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
