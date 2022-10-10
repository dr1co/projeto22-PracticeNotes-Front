import { useState } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';

function App() {
  const [pages, setPages] = useState(null);
  const [curPage, setCurPage] = useState(1);

  function loadPages({ numPages }) {
    setPages(numPages);
  }

  return (
    <>
      <Document file="https://drive.google.com/file/d/1sOm6EeMyjKXfRJXX-RXfr-DIIp-NEko2/view?usp=sharing" onLoadSuccess={loadPages}>
        <Page pageNumber={curPage} />
      </Document>
      <p> 
        Page {curPage} of {pages}
      </p>
    </>
  );
}

export default App;
