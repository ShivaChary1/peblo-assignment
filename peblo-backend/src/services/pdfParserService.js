const fs = require("fs");
const pdfParse = require("pdf-parse");

const extractTextFromPDF = async (filePath) => {
  try {
    const dataBuffer = await fs.promises.readFile(filePath);

    const pdfData = await pdfParse(dataBuffer);

    return pdfData.text;
  } catch (error) {
    console.error("PDF parsing error:", error);
    throw error;
  }
};

module.exports = { extractTextFromPDF };