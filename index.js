const PDFDocument = require("pdfkit");
const fs = require("fs");

let rawdata = fs.readFileSync("demoPlants.json");
let data = JSON.parse(rawdata);
let contactLength;
let y_axis_length;

// console.log("data", data)

// Create a new PDF document
const doc = new PDFDocument({
  margin: { top: 50, left: 50, right: 50, bottom: 0 },
});

// Pipe the PDF document to a writable stream (e.g., a file)
const stream = fs.createWriteStream("pdf/Site Profile7.pdf");
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
  // Courier, Courier-Bold, Courier-Oblique, Courier-BoldOblique, Helvetica, Helvetica-Bold, Helvetica-Oblique,
  // Helvetica-BoldOblique, Times-Roman, Times-Bold, Times-Italic, Times-BoldItalic, Symbol, ZapfDingbats

  doc
    .fontSize(30)
    .font("Helvetica-Bold")
    .text(`${data[0].plantName}`, 0, 470, { align: "right" });

  doc
    .fontSize(17)
    .font("Helvetica-Bold")
    .text("Site Profile", 0, 505, { align: "right" });

  doc
    .fontSize(13)
    .font("Helvetica-Bold")
    .text("Holmium Technologies Private Limited", 0, 550, { align: "right" });

  doc
    .fontSize(10)
    .font("Helvetica")
    .text("info@holmiumtechnologies.com", 0, 570, { align: "right" });

  doc
    .fontSize(12)
    .font("Helvetica-Bold")
    .text(
      "Copyright © 2023 Holmium Technologies. All Rights Reserved",
      70,
      700,
      { align: "center" }
    );
}

firstPageData();

// To add a new page to the pdf
doc.addPage();

// Function to add the main content of the PDF
function addContent() {
  for (const item of data) {
    doc
      .font("Helvetica-Bold")
      .fontSize(14) // Set a smaller font size, e.g., 12
      .text(`${item.plantName} - Plant Information`, { align: "left" });

    doc.moveDown(0.1);

    doc
      .fontSize(10)
      .text(`${item.location.address}`, { align: "left" })
      .moveDown(1);
    // .moveUp(5)

    //Capacity
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .text("Capacity:     ", { continued: false })
      // .moveDown(0.1)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`AC:  ${item.capacity.AC}`, 95, 130, { continued: false })
      .moveDown(0.5)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`DC:  ${item.capacity.DC}`, 95, 140, { continued: false })
      .moveDown(0.5);

    // Location
    doc
      .fontSize(9)
      .font("Helvetica-Bold")
      .text("Location:      ", 71, 155, { continued: false })

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`Address:   ${item.location.address}`, 95, 170)
      .moveDown(0.5)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`State:   ${item.location.state}`, 95, 180)
      .moveDown(0.5)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`Country:   ${item.location.country}`, 95, 190)
      .moveDown(0.5)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`Pincode:   ${item.location.pincode}`, 95, 200)
      .moveDown(0.5)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`Timezone:   ${item.location.timezone}`, 95, 210)
      .moveDown(0.5);

    //PV Modules
    doc
      .fontSize(9)
      .font("Helvetica-Bold")
      .text("PV Modules: ", 71, 225)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`Make:    ${item.PVModules.make}`, 95, 240)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`Wattage:    ${item.PVModules.wattage}`, 95, 250)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`Quantity:    ${item.PVModules.quantity}`, 95, 260);

    //Subscription
    doc
      .fontSize(9)
      .font("Helvetica-Bold")
      .text("Subscription: ", 71, 275, { align: "left" })
      .moveDown(1)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`Start Date:    ${item.subscription.startDate.$date}`, 95, 290)

      .fontSize(7)
      .font("Helvetica-Bold")
      .text(`End Date:    ${item.subscription.endDate.$date}`, 95, 300);

    //Contact
    doc
      .fontSize(9)
      .font("Helvetica-Bold")
      .text("Contact Details: ", 71, 315)
      .moveDown(1);

    // addSectionHeader('Inverter Details')
    let tableTop = doc.y;

    const contactTableData = item.contact.details.map((contact) => [
      contact.name,
      contact.role,
      contact.emailId,
      contact.mobileNo,
    ]);
    doc.font("Helvetica-Bold");
    contactTableHeader(tableTop, ["Name", "Role", "Email Id", "Mobile No"]);
    doc.font("Helvetica");
    contactTable(doc, tableTop + 10, contactTableData);

    ////////////////////////////////////////////////////////////////////////////////

    if (item.deviceType?.inverter?.details[0] != undefined) {
      let inverterTableTop = contactLength + 80;

      doc
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("Inverter Details: ", 71, inverterTableTop)
        .moveDown(1);

      const inverterTableData = item.deviceType.inverter.details.map(
        (inverter) => [
          inverter.id,
          inverter.name,
          inverter.information.make,
          inverter.capacity.AC.toString(),
          inverter.information.modelNo,
          inverter.information.location,
        ]
      );

      doc.font("Helvetica-Bold");
      inverterTableHeader(
        inverterTableTop + 20,
        ["ID", "Name", "Make", "Capacity", "Model No", "Building"],
        inverterTableData
      );
      doc.font("Helvetica");
      inverterTable(doc, inverterTableTop + 30, inverterTableData);
    }
    if (item.deviceType?.meter?.details[0] != undefined) {
      // doc.addPage();

      let meterTop = doc.y + 20;
      console.log("meterTop", meterTop);

      doc
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("Meter Details: ", 71, meterTop)
        .moveDown(1);

      const meterTableData = item.deviceType.meter.details.map((meter) => [
        meter.id,
        meter.name,
        meter.type,
        meter.information.make.name,
        meter.information.modelNo.name,
      ]);
      console.log("meterTableData", item.deviceType.meter.details.length);

      // if (inverterTableTop + inverterTableData.length * 14 > doc.page.height - 50) {
      //     // Not enough space, add a new page
      //     doc.addPage();
      //     inverterTableTop = doc.y; // Reset the inverterTableTop for the new page
      //   }

      doc.font("Helvetica-Bold");
      meterTableHeader(meterTop + 20, [
        "ID",
        "Name",
        "Type",
        "Make",
        "Model No",
      ]);
      doc.font("Helvetica");
      meterTable(doc, meterTop + 30, meterTableData);
    }
    // if(item.deviceType?.scb?.details[0] != undefined) {

    // }
    // if(item.deviceType?.powerControl?.details[0] != undefined) {

    // }
    // if(item.dataLogger?.details[0] != undefined) {

    // }

    doc.moveDown(1);
  }
}

//Contact
function contactTableHeader(y, headers) {
  contactLength = y;
  // console.log("drawTableHeader y", y)

  const initialX = 100;
  let currentX = initialX;
  const rowHeight = 14;
  const cellWidth = 60;

  doc
    .rect(initialX, y, cellWidth * headers.length, rowHeight) // Draw background for the header row
    .fillColor("#DCDCDC") // Set the background color to grey
    .fill(); // Fill the background

  headers.forEach((header) => {
    doc
      .fontSize(6)
      .fillColor("#000000")
      .text(header, currentX, y + 2.3, { width: cellWidth, align: "center" });
    currentX += cellWidth;
  });
  currentX = initialX;
}
function contactTable(doc, y, tableData) {
  const initialX = 100;
  let currentX = initialX;
  const rowHeight = 14;
  const cellWidth = 60;
  const headerBackgroundColor = "#FFFFFF"; // White background for the header row
  const headerTextColor = "#000000"; // Black text color for the header row
  const rowBackgroundColor = "#FFFFFF"; // White background for the data rows
  const rowTextColor = "#000000"; // Black text color for the data rows

  tableData.forEach((row, i) => {
    // console.log("i", i)
    // Draw the row background with the specified color
    doc
      .rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
      .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
      .fill(); // Fill the background

    const centerY = y + rowHeight * i + rowHeight / 2;

    row.forEach((cell, j) => {
      // console.log("drawTable y", y)

      const cellX = currentX + cellWidth * j;
      const cellY = y + rowHeight * i;

      // Draw the cell border with the specified width
      doc
        .rect(cellX, cellY, cellWidth, rowHeight)
        .lineWidth(0.5) // Set the border width
        .strokeColor("#ebebeb")
        .stroke();

      // Set the text color based on the row type
      doc
        .fontSize(5)
        .fillColor(i === 0 ? headerTextColor : rowTextColor) // Use different colors for header and data rows
        .text(cell.toString(), cellX + 5, cellY + 5, {
          width: cellWidth - 10,
          align: "center",
        });
    });

    currentX = initialX;
  });
}

//Inverter
function inverterTableHeader(y, headers) {
  const initialX = 100;
  let currentX = initialX;
  const rowHeight = 14;
  const cellWidth = 60;

  doc
    .rect(initialX, y, cellWidth * headers.length, rowHeight) // Draw background for the header row
    .fillColor("#DCDCDC") // Set the background color to grey
    .fill(); // Fill the background

  headers.forEach((header) => {
    doc
      .fontSize(6)
      .fillColor("#000000")
      .text(header, currentX, y + 2.3, { width: cellWidth, align: "center" });
    currentX += cellWidth;
  });
  currentX = initialX;
}
function inverterTable(doc, y, tableData) {
  const initialX = 100;
  let currentX = initialX;
  const rowHeight = 14;
  const cellWidth = 60;
  const headerBackgroundColor = "#FFFFFF"; // White background for the header row
  const headerTextColor = "#000000"; // Black text color for the header row
  const rowBackgroundColor = "#FFFFFF"; // White background for the data rows
  const rowTextColor = "#000000"; // Black text color for the data rows
  let newPageCounter = 1;
  let elseCounter = 1;

  tableData.forEach((row, i) => {
    let noOfCellFit = (doc.page.height - y - 70) / rowHeight;

    if (newPageCounter > 0 && newPageCounter <= noOfCellFit) {
      // Draw the row background with the specified color
      doc
        .rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
        .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
        .fill(); // Fill the background

      row.forEach((cell, j) => {
        const cellX = currentX + cellWidth * j;
        const cellY = y + rowHeight * i;
        y_axis_length = cellY;

        // Draw the cell border with the specified width
        doc
          .rect(cellX, cellY, cellWidth, rowHeight)
          .lineWidth(0.5) // Set the border width
          .strokeColor("#ebebeb")
          .stroke();

        // Set the text color based on the row type
        doc
          .fontSize(5)
          .fillColor(i === 0 ? headerTextColor : rowTextColor) // Use different colors for header and data rows
          .text(cell.toString(), cellX + 5, cellY + 5, {
            width: cellWidth - 10,
            align: "center",
          });
      });
    } else {
      newPageCounter = -1;
      if (elseCounter == 1) {
        doc.addPage();
        elseCounter++;
        y = 0;
      }

      doc
        .rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
        .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
        .fill(); // Fill the background

      row.forEach((cell, j) => {
        const cellX = currentX + cellWidth * j;
        const cellY = y + rowHeight * i - 210;
        // console.log("cellY", cellY)
        y_axis_length = cellY;

        // Draw the cell border with the specified width
        doc
          .rect(cellX, cellY, cellWidth, rowHeight)
          .lineWidth(0.5) // Set the border width
          .strokeColor("#ebebeb")
          .stroke();

        // Set the text color based on the row type
        doc
          .fontSize(5)
          .fillColor(i === 0 ? headerTextColor : rowTextColor) // Use different colors for header and data rows
          .text(cell.toString(), cellX + 5, cellY + 5, {
            width: cellWidth - 10,
            align: "center",
          });
      });
    }

    newPageCounter++;

    // currentX = initialX;
  });
}

//Meter
function meterTableHeader(y, headers) {
  const initialX = 100;
  let currentX = initialX;
  const rowHeight = 14;
  const cellWidth = 60;

  doc
    .rect(initialX, y, cellWidth * headers.length, rowHeight) // Draw background for the header row
    .fillColor("#DCDCDC") // Set the background color to grey
    .fill(); // Fill the background

  headers.forEach((header) => {
    doc
      .fontSize(6)
      .fillColor("#000000")
      .text(header, currentX, y + 2.3, { width: cellWidth, align: "center" });
    currentX += cellWidth;
  });
  currentX = initialX;
}
function meterTable(doc, y, tableData) {
  const initialX = 100;
  let currentX = initialX;
  const rowHeight = 14;
  const cellWidth = 60;
  const headerBackgroundColor = "#FFFFFF"; // White background for the header row
  const headerTextColor = "#000000"; // Black text color for the header row
  const rowBackgroundColor = "#FFFFFF"; // White background for the data rows
  const rowTextColor = "#000000"; // Black text color for the data rows
  let newPageCounter = 1;
  let elseCounter = 1;

  tableData.forEach((row, i) => {
    let noOfCellFit = (doc.page.height - y - 70) / rowHeight;

    if (newPageCounter > 0 && newPageCounter <= noOfCellFit) {
      // Draw the row background with the specified color
      doc
        .rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
        .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
        .fill(); // Fill the background

      row.forEach((cell, j) => {
        const cellX = currentX + cellWidth * j;
        const cellY = y + rowHeight * i;
        y_axis_length = cellY;

        // Draw the cell border with the specified width
        doc
          .rect(cellX, cellY, cellWidth, rowHeight)
          .lineWidth(0.5) // Set the border width
          .strokeColor("#ebebeb")
          .stroke();

        // Set the text color based on the row type
        doc
          .fontSize(5)
          .fillColor(i === 0 ? headerTextColor : rowTextColor) // Use different colors for header and data rows
          .text(cell.toString(), cellX + 5, cellY + 5, {
            width: cellWidth - 10,
            align: "center",
          });
      });
    } else {
      newPageCounter = -1;
      if (elseCounter == 1) {
        doc.addPage();
        elseCounter++;
        y = 0;
      }

      doc
        .rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
        .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
        .fill(); // Fill the background

      row.forEach((cell, j) => {
        const cellX = currentX + cellWidth * j;
        const cellY = y + rowHeight * i - 210;
        // console.log("cellY", cellY)
        y_axis_length = cellY;

        // Draw the cell border with the specified width
        doc
          .rect(cellX, cellY, cellWidth, rowHeight)
          .lineWidth(0.5) // Set the border width
          .strokeColor("#ebebeb")
          .stroke();

        // Set the text color based on the row type
        doc
          .fontSize(5)
          .fillColor(i === 0 ? headerTextColor : rowTextColor) // Use different colors for header and data rows
          .text(cell.toString(), cellX + 5, cellY + 5, {
            width: cellWidth - 10,
            align: "center",
          });
      });
    }

    newPageCounter++;

    // currentX = initialX;
  });
}
// Call the function to add content to the PDF
addContent();

// Finalize the PDF and end the stream
doc.end();

console.log("PDF generation completed!");
