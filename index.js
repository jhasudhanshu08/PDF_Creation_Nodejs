

const PDFDocument = require('pdfkit');
const fs = require('fs');

let rawdata = fs.readFileSync('demoPlants.json');
let data = JSON.parse(rawdata);
// console.log("data", data)

// Create a new PDF document
const doc = new PDFDocument({ margin: { top: 50, left: 50, right: 50, bottom: 0 } });;

// Pipe the PDF document to a writable stream (e.g., a file)
const stream = fs.createWriteStream('pdf/plantData7.pdf');
doc.pipe(stream);

// function to add the first page of the pdf
function firstPageData() {
  // Load the header image
  const headerImagePath = 'image/Header.png';
  const headerImage = doc.openImage(headerImagePath);
  
  // Function to add the header with the image on the first page
  // function addHeader() {
    const headerHeight = 100; // Adjust the height of the header image as needed
    const headerY = 0; // Y-axis position of the header image
    const headerX = 0; // X-axis position of the header image
    const headerWidth = doc.page.width; // Increase the width of the header image
  
    doc.image(headerImage, {
      width: headerWidth,
      align: 'center',
      valign: 'top',
      y: headerY, // Y-axis position of the image
      x: headerX, // X-axis position of the image
    });
  
    doc.moveDown(headerHeight / 10); // Increase the divisor to move the cursor further down
  // }
  
  // Add content to the first page
  // addHeader(); // Add the header with the image at the top of the first page
  
  // Load the image
  const imagePath = 'image/logo.png';
  const image = doc.openImage(imagePath);
  
  // Insert the image into the PDF at a specific position
  const x = 215; // X-coordinate of the image position
  const y = 150; // Y-coordinate of the image position
  const width = 180; // Width of the image
  const height = 180; // Height of the image
  
  doc.image(image, x, y, { width: width, height: height });
  
  ////////////////////////////////////////////////////////////////
  // Courier, Courier-Bold, Courier-Oblique, Courier-BoldOblique, Helvetica, Helvetica-Bold, Helvetica-Oblique,
  // Helvetica-BoldOblique, Times-Roman, Times-Bold, Times-Italic, Times-BoldItalic, Symbol, ZapfDingbats
  
  doc
  .fontSize(30)
  .font('Helvetica-Bold')
  .text("Site Profile", 0, 480, { align: 'right' });
  
  doc
  .fontSize(13)
  .font('Helvetica-Bold')
  .text("Holmium Technologies Private Limited", 0, 550, { align: 'right' });
  
  doc
  .fontSize(10)
  .font('Helvetica')
  .text("info@holmiumtechnologies.com", 0, 570, { align: 'right' });
  
  doc
    .fontSize(12)
    .font('Helvetica-Bold')
    .text('Copyright © 2023 Holmium Technologies. All Rights Reserved', 70, 700, { align: 'center' });
}

firstPageData();

// To add a new page to the pdf
doc.addPage();

// Function to add a section header to the PDF
function addSectionHeader(title) {
  doc
    .font('Helvetica-Bold')
    .fontSize(18)
    .text(title, { underline: true, align: 'center' })
    .moveDown(0.5);
}

// Function to add the main content of the PDF
function addContent() {
  for (const item of data) {

    
      doc
        .font('Helvetica-Bold')
        .fontSize(12) // Set a smaller font size, e.g., 12
        .text(`${item.plantName} - Plant Information`, { underline: true, align: 'center' });
        
        doc.moveDown(0.3)
        doc
        .fontSize(10)
        .text(`${item.location.address}`, {align: 'center'})
        .moveDown(1)
        // .moveUp(5)

    doc 
    .font('Helvetica-Bold')
      .fontSize(9)
      .text("Owner:     ", { continued: true })
      .fontSize(8)
      .text(`${item.owner}`, {continued: false})
      .moveDown(0.5)

      .fontSize(9)
      .font('Helvetica-Bold')
      .text("Contact Details: ")
      .moveDown(0.5);
      
    for(let contact of item.contact.details) {
      doc
      .fontSize(8)
      .font('Helvetica-Bold')
      .text("Name:     ", 95, 142, {align: 'left', continued: true})
      .font('Helvetica')
      .text(`${contact.name}`, {continued: false})

      .font('Helvetica-Bold')
      .fontSize(8)
      .text("Role:     ", 95, 152, {align: 'left', continued: true})
      .font('Helvetica')
      .text(`${contact.role}`, {continued: false})

      .font('Helvetica-Bold')
      .fontSize(8)
      .text("Email-Id:     ", 95, 162, {align: 'left', continued: true})
      .font('Helvetica')
      .text(`${contact.emailId}`, {continued: false})

      .font('Helvetica-Bold')
      .fontSize(8)
      .text("Mobile-No:     ", 95, 172, {align: 'left', continued: true})
      .font('Helvetica')
      .text(`${contact.mobileNo}`, {continued: false})
    }

    
      // .text(`Location: `, {continued: true})
      // .font('Helvetica-Bold')
      // .text(`${item.location.name}`)
      // .text(`${item.location.name}`)
      // .fontSize(15)
      // .text(`Owner: ${item.owner}`)
      // .text(`Commissioning Date: ${item.commissioningDate.$date}`)
      // .text(`License Expiry Date: ${item.licenseExpiryDate.$date}`)
      // .text(`Unit Price: ${item.unitPrice}`)
      // .text(`Plant Capacity: ${item.plantCapacity}`)
      // .text(`PV Modules: Make: ${item.PVModules.make}`);

    // Add the inverter details in a table
    addSectionHeader('Inverter Details')

    const tableData = item.stringInverter.details.map((inverter) => [
      inverter.id,
      inverter.name,
      inverter.make,
      inverter.capacity.toString(),
      inverter.modelNo,
      inverter.building,
    ]);
    const tableTop = doc.y;

    doc.font('Helvetica-Bold');
    drawTableHeader(tableTop, ['ID', 'Name', 'Make', 'Capacity', 'Model No', 'Building']);
    doc.font('Helvetica');
    drawTable(doc, tableTop + 10, tableData);

    // Add a separator between plant information
    doc.moveDown(1);
  }
}

function drawTableHeader(y, headers) {
  // console.log("headers", headers)

  const initialX = 110;
  let currentX = initialX;
  const rowHeight = 10;
  const cellWidth = 40;

    doc.rect(initialX, y, cellWidth * headers.length, rowHeight) // Draw background for the header row
       .fillColor('#DCDCDC') // Set the background color to grey
       .fill(); // Fill the background
  
    headers.forEach((header) => {
      doc
        .fontSize(6)
        .fillColor('#000000')
        .text(header, currentX, y+2.3, { width: cellWidth, align: 'center' });
      currentX += cellWidth;
      
    });
    currentX = initialX;

}


function drawTable(doc, y, tableData) {
  // console.log("tableData", tableData)

  const initialX = 110;
  let currentX = initialX;
  const rowHeight = 11;
  const cellWidth = 40;
  const headerBackgroundColor = '#FFFFFF'; // White background for the header row
  const headerTextColor = '#000000'; // Black text color for the header row
  const rowBackgroundColor = '#FFFFFF'; // White background for the data rows
  const rowTextColor = '#000000'; // Black text color for the data rows

  tableData.forEach((row, i) => {
    // Draw the row background with the specified color
    doc.rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
       .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
       .fill(); // Fill the background

    const centerY = y + rowHeight * i + rowHeight / 2;
    
    row.forEach((cell, j) => {
      
      const cellX = currentX + cellWidth * j;
      const cellY = y + rowHeight * i;

      // Draw the cell border with the specified width
      doc.rect(cellX, cellY, cellWidth, rowHeight)
         .lineWidth(0.5) // Set the border width
         .strokeColor('#ebebeb')
         .stroke();

      // Set the text color based on the row type
      doc
        .fontSize(5)
        .fillColor(i === 0 ? headerTextColor : rowTextColor) // Use different colors for header and data rows
        .text(cell.toString(), cellX + 5, cellY + 5, { width: cellWidth - 10, align: 'center' });
    
    });

    currentX = initialX;
  });
}
// Call the function to add content to the PDF
addContent();

// Finalize the PDF and end the stream
doc.end();

console.log('PDF generation completed!');



// let rawdata = fs.readFileSync('plant.json');
// let data = JSON.parse(rawdata);
// console.log("data", data)