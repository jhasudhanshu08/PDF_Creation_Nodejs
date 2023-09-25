const PDFDocument = require("pdfkit");
const fs = require("fs");
// const Calibri = require("./image/Calibri_Regular.ttf");

let rawdata = fs.readFileSync("tms.json");
let data = JSON.parse(rawdata);
// console.log("data", data);
let contactLength;
let y_axis_length;

// console.log("data", data)

// Create a new PDF document
const doc = new PDFDocument({
  margin: { top: 50, left: 20, right: 20, bottom: 0 },
});

// Pipe the PDF document to a writable stream (e.g., a file)
const stream = fs.createWriteStream("pdf/TMS7.pdf");
doc.pipe(stream);

// function to add the first page of the pdf
function firstPageData() {
  // Load the header image
  const headerImagePath = "image/Header.png";
  const headerImage = doc.openImage(headerImagePath);

  // Function to add the header with the image on the first page
  // function addHeader() {
  const headerHeight = 100; // Adjust the height of the header image as needed
  const headerY = 0; // Y-axis position of the header image
  const headerX = 0; // X-axis position of the header image
  const headerWidth = doc.page.width; // Increase the width of the header image

  doc.image(headerImage, {
    width: headerWidth,
    align: "center",
    valign: "top",
    y: headerY, // Y-axis position of the image
    x: headerX, // X-axis position of the image
  });

  doc.moveDown(headerHeight / 10); // Increase the divisor to move the cursor further down
  // }

  // Add content to the first page
  // addHeader(); // Add the header with the image at the top of the first page

  // Load the image
  const imagePath = "image/logo.png";
  const image = doc.openImage(imagePath);

  // Insert the image into the PDF at a specific position
  const x = 215; // X-coordinate of the image position
  const y = 150; // Y-coordinate of the image position
  const width = 180; // Width of the image
  const height = 180; // Height of the image

  doc.image(image, x, y, { width: width, height: height });

  ////////////////////////////////////////////////////////////////
  // Courier, Courier-Bold, Courier-Oblique, Courier-BoldOblique, Helvetica, Helvetica, Helvetica-Oblique,
  // HelveticaOblique, Times-Roman, Times-Bold, Times-Italic, Times-BoldItalic, Symbol, ZapfDingbats

  doc
    .fontSize(26)
    .font("Helvetica")
    .text(`Ticket Management System`, 0, 490, { align: "right" });

  doc
    .fontSize(13)
    .font("Helvetica")
    .text("Holmium Technologies Private Limited", 0, 550, { align: "right" });

  doc
    .fontSize(10)
    .font("Helvetica")
    .text("info@holmiumtechnologies.com", 0, 570, { align: "right" });

    
  doc
    .fontSize(12)
    .font("Helvetica")
    .text(
      "Copyright © 2023 Holmium Technologies. All Rights Reserved",
      70,
      706,
      { align: "center" }
    );
}

firstPageData();

// To add a new page to the pdf
doc.addPage();

doc
  .fontSize(14) // Set a smaller font size, e.g., 12
  .font("Helvetica-Bold")
  .text(`Ticket Management System: `, 40, 50, { align: "left", continued: false })

doc
  .fontSize(12) // Set a smaller font size, e.g., 12
  .font("Helvetica-Bold")
  .text(`Category:    `, 40, 70, { align: "left", continued: true })

doc
  .fontSize(12)
  .font("Helvetica-Bold")
  .fillColor("#083f53")
  .text("Cleaning, PM, Safety", 40, 70, { align: "left", continued: false }); 

 doc
  .fontSize(12) // Set a smaller font size, e.g., 12
  .font("Helvetica-Bold")
  .fillColor("black")
  .text(`Filter By:   `, 40, 100, { align: "left", continued: true })

doc
  .fontSize(12)
  .font("Helvetica-Bold")
  .fillColor("#083f53")
  .text(`${data[0].category}`, 40, 100, { align: "left", continued: false });

// Function to add the main content of the PDF
function addContent() {
  
  for (const item of data) {
    // Table for All Tickets
    let tableTop = doc.y ;
    // console.log("item", item)

    const ticketTableData = item.details.map((ticket) => [
      ticket.id,
      ticket.title,
      ticket.plant,
      ticket.createdAt,
      ticket.createdBy,
      ticket.assignedTo,
      ticket.dueAt,
      ticket.closingDate,
      ticket.status,
      ticket.priority
    ]);
    doc.font("Helvetica");
    ticketHeader(tableTop + 20, ["ID", "Title", "Plant", "Created At", "Created By", "Assigned To", "Due At", "Closing Date", "Status", "Priority",]);
    doc.font("Helvetica");
    ticketTable(doc, tableTop + 30, ticketTableData);
  }
}



//Inverter
function ticketHeader(y, headers) {
  contactLength = y;
  // console.log("drawTableHeader y", y)

  const initialX = 50;
  let currentX = initialX;
  const rowHeight = 15;
  const cellWidth = 55;

  doc
    .rect(initialX, y, cellWidth * headers.length - 40, rowHeight) // Draw background for the header row
    .fillColor("#DCDCDC") // Set the background color to grey
    .fill(); // Fill the background

  headers.forEach((header) => {
    if(header === "ID") {
      doc
      .fontSize(8)
      .fillColor("#000000")
      .text(header, currentX, y + 4, { width: cellWidth - 40, height: rowHeight, align: "center" });
    currentX += cellWidth - 45;
    }
    else {
      doc
        .fontSize(8)
        .fillColor("#000000")
        .text(header, currentX, y + 4, { width: cellWidth, height: rowHeight, align: "center" });
      currentX += cellWidth;
    }
  });
  currentX = initialX;
}
function ticketTable(doc, y_axis, tableData) {
  let y = y_axis + 5;
  const initialX = 50;
  let currentX = initialX;
  const rowHeight = 20;
  const cellWidth = 55;
  const headerBackgroundColor = "#FFFFFF"; // White background for the header row
  const headerTextColor = "#000000"; // Black text color for the header row
  const rowBackgroundColor = "#FFFFFF"; // White background for the data rows
  const rowTextColor = "#083f53"; // Black text color for the data rows
  let newPageCounter = 1;
  let i = 0
  let rowSkipCounter = 1;

  tableData.forEach((row) => {


    let noOfCellFit = (doc.page.height - y - 70) / rowHeight;

    if (newPageCounter > 0 && newPageCounter <= noOfCellFit) {
      newPageCounter++;

      // Draw the row background with the specified color
      doc
        .rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
        .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
        .fill(); // Fill the background

      row.forEach((cell, j) => {
        // console.log("djsjdhgsgsgfgfgfgfgfg", cell)
        const cellX = currentX + cellWidth * j;
        const cellY = y + rowHeight * i;
        if(typeof(cell) == "number") {
          y_axis_length = cellY;

          // Draw the cell border with the specified width
          doc
            .rect(cellX, cellY, cellWidth - 40, rowHeight)
            .lineWidth(0.5) // Set the border width
            .strokeColor("#ebebeb")
            .stroke();

          // Set the text color based on the row type
          doc
            .fontSize(7)
            .fillColor(rowTextColor) // Use different colors for header and data rows
            .text(cell.toString(), cellX - 20, cellY + 5, {
              width: cellWidth,
              align: "center",
            });
        }
        else {
          y_axis_length = cellY;

          // Draw the cell border with the specified width
          doc
            .rect(cellX - 40, cellY, cellWidth, rowHeight)
            .lineWidth(0.5) // Set the border width
            .strokeColor("#ebebeb")
            .stroke();

            // Set the text color based on the row type
            doc
            .fontSize(7)
            .fillColor(rowTextColor) // Use different colors for header and data rows
            .text(cell.toString(), cellX - 40, cellY + 5, {
              width: cellWidth,
              align: "center",
            });
        }

       
      });
      i++;
      rowSkipCounter++;
    } 
    else {
      newPageCounter = 1;
      doc.addPage();
      y = 50;
      i = 0;
      rowSkipCounter = 0;
      // Draw the row background with the specified color
      doc
        .rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
        .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
        .fill(); // Fill the background

      row.forEach((cell, j) => {
        const cellX = currentX + cellWidth * j;
        const cellY = y + rowHeight * i;

        if(typeof(cell) == "number") {
          y_axis_length = cellY;

          // Draw the cell border with the specified width
          doc
            .rect(cellX, cellY, cellWidth - 50, rowHeight)
            .lineWidth(0.5) // Set the border width
            .strokeColor("#ebebeb")
            .stroke();

          // Set the text color based on the row type
          doc
            .fontSize(9)
            .fillColor(rowTextColor) // Use different colors for header and data rows
            .text(cell.toString(), cellX - 20, cellY + 5, {
              width: cellWidth - 10,
              align: "center",
            });
        }
        else {
          y_axis_length = cellY;
  
          // Draw the cell border with the specified width
          doc
            .rect(cellX - 50, cellY, cellWidth, rowHeight)
            .lineWidth(0.5) // Set the border width
            .strokeColor("#ebebeb")
            .stroke();
  
          // Set the text color based on the row type
          doc
            .fontSize(9)
            .fillColor(rowTextColor) // Use different colors for header and data rows
            .text(cell.toString(), cellX - 45, cellY + 5, {
              width: cellWidth - 10,
              align: "center",
            });
        }
      });
      i++;
    }
  });
}


// Call the function to add content to the PDF
addContent();

// Finalize the PDF and end the stream
doc.end();

console.log("PDF generation completed!");
