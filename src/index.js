// pdf-generation-tool.js

const PDFDocument = require('pdfkit');
const fs = require('fs');

class PDFGenerationTool {
  constructor() {}

  generatePDF(outputPath, content) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(outputPath));
    
    // Add content to the PDF
    doc.fontSize(12).text(content, {
      align: 'left'
    });

    doc.end();
    console.log(`PDF generated successfully and saved at ${outputPath}.`);
  }
}

module.exports = PDFGenerationTool;
