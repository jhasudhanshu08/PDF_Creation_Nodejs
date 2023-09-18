const PDFDocument = require('pdfkit');
const fs = require('fs');

// Sample data from your provided JSON
const data = {
    "inverter": {
        "isActive": true,
        "details": [
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          },
          {
            "isActive": true,
            "id": 1,
            "name": "Inverter 1",
            "type": "stringInverter",
            "capacity": {
              "AC": 70.68,
              "DC": null
          }
          }
        ]
      }
};

// Create a PDF document
const doc = new PDFDocument();

// Pipe the PDF document to a writable stream (in this case, a file)
const output = fs.createWriteStream('pdf/output.pdf');
doc.pipe(output);

// Define table headers
const headers = ['ID', 'Name', 'Type', 'AC Capacity', 'DC Capacity'];

// Function to create a table row
function createTableRow(doc, y, rowData) {
    const xPositions = [50, 150, 250, 350, 450]; // X positions for columns
    const rowHeight = 20;
    const cellWidth = 100;
  
    doc.font('Helvetica-Bold');
    doc.fontSize(12);
    doc.fillColor('black');
  
    // Draw headers
    headers.forEach((header, index) => {
      doc.text(header, xPositions[index], y, { width: cellWidth, align: 'center' });
    });
  
    y += rowHeight;
  
    doc.font('Helvetica');
    doc.fontSize(10);
  
    // Draw data rows
    for (const row of rowData) {
      doc.fillColor('black');
      doc.rect(50, y, cellWidth, rowHeight).stroke(); // Draw cell border
  
      doc.text(row.id.toString(), xPositions[0], y + 6, { width: cellWidth, align: 'center' });
      doc.text(row.name, xPositions[1], y + 6, { width: cellWidth, align: 'center' });
      doc.text(row.type, xPositions[2], y + 6, { width: cellWidth, align: 'center' });
      doc.text(row.capacity.AC.toString(), xPositions[3], y + 6, { width: cellWidth, align: 'center' });
      doc.text(row.capacity.DC === null ? 'N/A' : row.capacity.DC.toString(), xPositions[4], y + 6, { width: cellWidth, align: 'center' });
  
      y += rowHeight;
    }
  }
  
  // Set the initial Y position for the table
  const startY = 50;
  
  // Add the table to the PDF
  createTableRow(doc, startY, data.inverter.details);
  
  // Finalize the PDF and save it
  doc.end();