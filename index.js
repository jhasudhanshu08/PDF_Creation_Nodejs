function drawTable(doc, y, tableData) {
  const initialX = 110;
  let currentX = initialX;
  const rowHeight = 10;
  const cellWidth = 60;
  const headerBackgroundColor = '#0000FF'; // Blue background for the header row
  const headerTextColor = '#FFFFFF'; // White text color for the header row
  const rowBackgroundColor = '#0000FF'; // Blue background for the data rows
  const rowTextColor = '#FFFFFF'; // White text color for the data rows

  tableData.forEach((row, i) => {
    // Draw the row background with the specified color
    doc.rect(initialX, y + rowHeight * i, cellWidth * row.length, rowHeight)
       .fillColor(i === 0 ? headerBackgroundColor : rowBackgroundColor) // Use different colors for header and data rows
       .fill(); // Fill the background

    row.forEach((cell, j) => {
      const cellX = currentX + cellWidth * j;
      const cellY = y + rowHeight * i;

      // Draw the cell border with the specified width
      doc.rect(cellX, cellY, cellWidth, rowHeight)
         .lineWidth(0.5) // Set the border width
         .stroke();

      // Set the text color based on the row type
      doc
        .fontSize(7)
        .fillColor(i === 0 ? headerTextColor : rowTextColor) // Use different colors for header and data rows
        .text(cell.toString(), cellX + 5, cellY + 5, { width: cellWidth - 10, align: 'left' });
    });

    currentX = initialX;
  });
}


function drawTable(doc, y, tableData) {
  const initialX = 110;
  const rowHeight = 10;
  const cellWidth = 60;
  const borderWidth = 0.5;

  tableData.forEach((row, i) => {
    // Calculate the center position for Y-axis
    const centerY = y + rowHeight * i + rowHeight / 2;

    row.forEach((cell, j) => {
      // Calculate the center position for X-axis
      const centerX = initialX + cellWidth * j + cellWidth / 2;

      // Calculate the text width for centering
      const textWidth = doc.widthOfString(cell.toString(), { size: 7 });

      // Calculate the text height for centering
      const textHeight = doc.currentLineHeight();

      // Calculate the position to center the text in both axes
      const textX = centerX - textWidth / 2;
      const textY = centerY - textHeight / 2;

      // Draw the cell border with the specified width
      doc.rect(initialX + cellWidth * j, centerY - rowHeight / 2, cellWidth, rowHeight)
         .lineWidth(borderWidth)
         .stroke();

      doc
        .fontSize(7)
        .text(cell.toString(), textX, textY, { width: cellWidth, align: 'center' });
    });
  });
}


