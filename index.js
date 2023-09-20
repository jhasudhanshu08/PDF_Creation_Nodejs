const PDFDocument = require("pdfkit");
const fs = require("fs");
// const Calibri = require("./image/Calibri_Regular.ttf");

let rawdata = fs.readFileSync("demoPlants.json");
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
  // Courier, Courier-Bold, Courier-Oblique, Courier-BoldOblique, Helvetica, Helvetica, Helvetica-Oblique,
  // HelveticaOblique, Times-Roman, Times-Bold, Times-Italic, Times-BoldItalic, Symbol, ZapfDingbats

  doc
    .fontSize(30)
    .font("Helvetica")
    .text(`${data[0].plantName}`, 0, 490, { align: "right" });

  doc
    .fontSize(17)
    .font("Helvetica")
    .text("Site Profile", 0, 525, { align: "right" });

  doc
    .fontSize(13)
    .font("Helvetica")
    .text("Holmium Technologies Private Limited", 0, 570, { align: "right" });

  doc
    .fontSize(10)
    .font("Helvetica")
    .text("info@holmiumtechnologies.com", 0, 590, { align: "right" });

    
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

// Function to add the main content of the PDF
function addContent() {
  for (const item of data) {
    doc
      .fontSize(14) // Set a smaller font size, e.g., 12
      .font("Helvetica")
      .text(`Site Name: `, 40, 50, { align: "left", continued: true })

      .font("Helvetica")
      .fontSize(14) // Set a smaller font size, e.g., 12
      .fillColor("#083f53")
      .text(`${item.plantName}`, 40, 50, { align: "left", continued: false })

    // doc.moveDown(0.1);

    // doc
    //   .fontSize(13)
    //   .font("Helvetica")
    //   .text(`${item.location.address}`, { align: "left" })
    //   .moveDown(1);
    // .moveUp(5)

    // Location
    doc
      .fontSize(12)
      .font("Helvetica")
      .fillColor("black")
      .text("Location:      ", 40, 70, { continued: false })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`Address:   `, 65, 90, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.location.address}`, 65, 90, { continued: false })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`State:   `, 65, 100, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.location.state}`, 65, 100, { continued: false })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`Country:   `, 65, 110, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.location.country}`, 65, 110, { continued: false })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`Pincode:   `, 65, 120, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.location.pincode}`, 65, 120, { continued: false })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`Timezone:    `, 65, 130, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.location.timezone}`, 65, 130, { continued: false })

    //Capacity
    doc
      .fontSize(12)
      .font("Helvetica")
      .fillColor("black")
      .text("Capacity:     ", 40, 150, { continued: false })
      // .moveDown(0.1)

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`AC:  `, 65, 170, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.capacity.AC}`, 65, 170, { continued: false })
      .moveDown(0.5)

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`DC:  `, 65, 180, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.capacity.DC}`, 65, 180, { continued: false })
      .moveDown(0.5);

    

    //PV Modules
    doc
      .fontSize(12)
      .font("Helvetica")
      .fillColor("black")
      .text("PV Modules: ", 40, 200);

      doc
      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`Make:    `, 65, 220, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.PVModules.make}`, 65, 220, { continued: false })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`Wattage:   `, 65, 230, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.PVModules.wattage}`, 65, 230, { continued: false })
  
      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`Quantity:    `, 65, 240, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${item.PVModules.quantity}`, 65, 240, { continued: false });

    //Subscription
    // Input date string
    const startDate = dateFormte(item.subscription.startDate.$date);
    const endDate = dateFormte(item.subscription.endDate.$date);

    function dateFormte(dateString) {
      const date = new Date(dateString);
  
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1; 
      const year = date.getUTCFullYear();
  
      // Format the date as DD-MM-YYYY
      return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    }

    doc
      .fontSize(12)
      .font("Helvetica")
      .fillColor("black")
      .text("Subscription: ", 40, 260, { align: "left" })
      .moveDown(1)

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`Start Date:    `, 65, 280, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${startDate}`, 65, 280, { continued: false })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#0f1e21")
      .text(`End Date:    `, 65, 290, { continued: true })

      .fontSize(10)
      .font("Helvetica")
      .fillColor("#083f53")
      .text(`${endDate}`, 65, 290, { continued: false })

    //Contact
    doc
      .fontSize(12)
      .font("Helvetica")
      .fillColor("black")
      .text("Contact Details: ", 40, 310)
      .moveDown(1);

    // addSectionHeader('Inverter Details')
    let tableTop = doc.y;

    const contactTableData = item.contact.details.map((contact) => [
      contact.name,
      contact.role,
      contact.emailId,
      contact.mobileNo,
    ]);
    doc.font("Helvetica");
    contactTableHeader(tableTop, ["S No.", "Name", "Role", "Email Id", "Mobile No"]);
    doc.font("Helvetica");
    contactTable(doc, tableTop + 10, contactTableData);

    ////////////////////////////////////////////////////////////////////////////////

    if (item.deviceType?.inverter?.details[0] != undefined) {
      let inverterHeadingText = contactLength + 110
      let inverterTableTop = contactLength + 120;

      doc
        .fontSize(12)
        .font("Helvetica")
        .fillColor("black")
        .text("Inverter Details: ", 40, inverterHeadingText)
        .moveDown(1);

      const inverterTableData = item.deviceType.inverter.details.map(
        (inverter) => [
          inverter.name,
          inverter.information.location,
          inverter.capacity.AC.toString(),
          inverter.configuration.protocol,
          inverter.configuration.ipAddress,
          inverter.configuration.port,
          inverter.configuration.slaveId
        ]
      );

      doc.font("Helvetica");
      inverterTableHeader(
        inverterTableTop + 20,
        ["S No.", "Name", "Location", "Capacity", "Protocol", "IP Address", "Port", "Slave Id"],
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
        .fontSize(10)
        .font("Helvetica")
        .text("Meter Details: ", 40, meterTop)
        .moveDown(1);

      const meterTableData = item.deviceType.meter.details.map((meter) => [
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

      doc.font("Helvetica");
      meterTableHeader(meterTop + 20, [
        "S No.",
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

  const initialX = 65;
  let currentX = initialX;
  const rowHeight = 15;
  const cellWidth = 115;

  doc
    .rect(initialX, y, cellWidth * headers.length - 80, rowHeight) // Draw background for the header row
    .fillColor("#DCDCDC") // Set the background color to grey
    .fill(); // Fill the background

  headers.forEach((header) => {
    if(header === "S No.") {
      console.log("header", header)
      doc
      .fontSize(10)
      .fillColor("#000000")
      .text(header, currentX, y + 2.6, { width: cellWidth - 80, height: rowHeight, align: "center" });
    currentX += cellWidth;
    }
    else {
      doc
        .fontSize(10)
        .fillColor("#000000")
        .text(header, currentX - 85, y + 2.6, { width: cellWidth, height: rowHeight, align: "center" });
      currentX += cellWidth;
    }
  });
  currentX = initialX;
}
function contactTable(doc, y_axis, tableData) {
  let y = y_axis + 5
  const initialX = 65;
  let currentX = initialX;
  const rowHeight = 20;
  const cellWidth = 115;
  const headerBackgroundColor = "#FFFFFF"; // White background for the header row
  const headerTextColor = "#000000"; // Black text color for the header row
  const rowBackgroundColor = "#FFFFFF"; // White background for the data rows
  const rowTextColor = "#083f53"; // Black text color for the data rows
  let serialNoCounter = 1

  tableData.forEach((row, i) => {
    // row[0] = serialNoCounter
    row.splice(0, 0, serialNoCounter);
    serialNoCounter++;
    // Draw the row background with the specified color
    doc
      .rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
      .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
      .fill(); // Fill the background

    row.forEach((cell, j) => {
      if(typeof(cell) == "number") {
        const cellX = currentX + cellWidth * j;
        const cellY = y + rowHeight * i;

        // Draw the cell border with the specified width
        doc
          .rect(cellX, cellY, cellWidth - 80, rowHeight)
          .lineWidth(0.5) // Set the border width
          .strokeColor("#ebebeb")
          .stroke();

        // Set the text color based on the row type
        doc
          .fontSize(9)
          .fillColor(rowTextColor) // Use different colors for header and data rows
          .text(cell.toString(), cellX - 35, cellY + 5, {
            width: cellWidth - 10,
            align: "center",
          });
      }
      else {
        const cellX = currentX + cellWidth * j;
        const cellY = y + rowHeight * i;
  
        // Draw the cell border with the specified width
        doc
          .rect(cellX - 80, cellY, cellWidth, rowHeight)
          .lineWidth(0.5) // Set the border width
          .strokeColor("#ebebeb")
          .stroke();
  
        // Set the text color based on the row type
        doc
          .fontSize(9)
          .fillColor(rowTextColor) // Use different colors for header and data rows
          .text(cell.toString(), cellX - 80, cellY + 5, {
            width: cellWidth - 10,
            align: "center",
          });
      }

    });

    currentX = initialX;
  });
}

//Inverter
function inverterTableHeader(y, headers) {
  const initialX = 65;
  let currentX = initialX;
  const rowHeight = 15;
  const cellWidth = 72;

  doc
    .rect(initialX, y, cellWidth * headers.length - 80, rowHeight) // Draw background for the header row
    .fillColor("#DCDCDC") // Set the background color to grey
    .fill(); // Fill the background

  headers.forEach((header) => {
    if(header === "S No.") {
      doc
        .fontSize(9)
        .fillColor("#000000")
        .text(header, currentX, y + 4, { width: cellWidth - 50, align: "center" });
      // currentX += cellWidth;
    }
    if(header === "Name") {
      doc
        .fontSize(9)
        .fillColor("#000000")
        .text(header, currentX + 15, y + 4, { width: cellWidth, align: "center" });
      currentX += cellWidth;
    }
    if(header === "Location") {
      doc
        .fontSize(9)
        .fillColor("#000000")
        .text(header, currentX + 12, y + 4, { width: cellWidth, align: "center" });
      currentX += cellWidth;
    }
    if(header === "Capacity") {
      doc
        .fontSize(9)
        .fillColor("#000000")
        .text(header, currentX + 8.5, y + 4, { width: cellWidth, align: "center" });
      currentX += cellWidth;
    }
    if(header === "Protocol") {
      doc
        .fontSize(9)
        .fillColor("#000000")
        .text(header, currentX + 5, y + 4, { width: cellWidth, align: "center" });
      currentX += cellWidth;
    }
    if(header === "IP Address") {
      doc
        .fontSize(9)
        .fillColor("#000000")
        .text(header, currentX, y + 4, { width: cellWidth, align: "center" });
      currentX += cellWidth;
    }
    if(header === "Port") {
      doc
        .fontSize(9)
        .fillColor("#000000")
        .text(header, currentX - 3, y + 4, { width: cellWidth, align: "center" });
      currentX += cellWidth;
    }
    if(header === "Slave Id") {
      doc
        .fontSize(9)
        .fillColor("#000000")
        .text(header, currentX - 7, y + 4, { width: cellWidth, align: "center" });
      currentX += cellWidth;
    }
  });
  currentX = initialX;
}
function inverterTable(doc, y_axis, tableData) {
  let y = y_axis + 5
  const initialX = 65;
  let currentX = initialX;
  const rowHeight = 15;
  const cellWidth = 68.25;
  const headerBackgroundColor = "#FFFFFF"; // White background for the header row
  const headerTextColor = "#000000"; // Black text color for the header row
  const rowBackgroundColor = "#FFFFFF"; // White background for the data rows
  const rowTextColor = "#083f53"; // Black text color for the data rows
  let newPageCounter = 1;
  let elseCounter = 1;
  let serialNoCounter = 1


  tableData.forEach((row, i) => {

    row.splice(0, 0, serialNoCounter);
    serialNoCounter++;

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
          // const cellX = currentX + cellWidth * j;
          // const cellY = y + rowHeight * i;
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
    } else {
      newPageCounter = -1;
      if (elseCounter == 1) {
        doc.addPage();
        elseCounter++;
        y = 50;
      }

      doc
        .rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
        .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
        .fill(); // Fill the background

      row.forEach((cell, j) => {
        const cellX = currentX + cellWidth * j;
        const cellY = y + rowHeight * i - 210;
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
            .fillColor(i === 0 ? headerTextColor : rowTextColor) // Use different colors for header and data rows
            .text(cell.toString(), cellX - 20, cellY + 5, {
              width: cellWidth - 10,
              align: "center",
            });
        }
        else {
          // console.log("cellY", cellY)
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
            .fillColor(i === 0 ? headerTextColor : rowTextColor) // Use different colors for header and data rows
            .text(cell.toString(), cellX -45, cellY + 5, {
              width: cellWidth - 10,
              align: "center",
            });
        }
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
        y = 50;
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
