   let fs = require('fs'),
        PDFParser = require("pdf2json");

    let pdfParser = new PDFParser(this,1);

    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
        fs.writeFile("spells.txt", pdfParser.getRawTextContent());
    });

    pdfParser.loadPDF("spells.pdf");