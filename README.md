```markdown
# PDF Generation Tool

A simple JavaScript tool for generating PDF documents using the pdfkit library.

## Installation

Install the package using npm:

```bash
npm install pdfkit
```

## Usage

```javascript
const PDFGenerationTool = require('pdf-generation-tool');

// Create an instance of PDFGenerationTool
const pdfTool = new PDFGenerationTool();

// Example: Generate a PDF
const content = 'Hello, this is a sample PDF document.';
pdfTool.generatePDF('output.pdf', content);
```

Replace `'output.pdf'` with your desired output PDF file path and `content` with the text content you want to include in the PDF.

## API

### `generatePDF(outputPath, content)`

Generate a PDF document with the provided content.

- `outputPath`: Path to save the generated PDF file.
- `content`: Text content to include in the PDF document.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
