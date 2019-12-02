import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';


export default (props) => {

    const [numPage, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = (obj) => {
        console.log(obj);
        setNumPages(obj.numPages);
    };

    return (
        <div>
            <Document
                file={props.file}
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
      </div>
    )
}
