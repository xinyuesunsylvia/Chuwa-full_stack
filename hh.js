const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
// Get the table container element from the HTML page
const tableContainer = document.querySelector(".table-container");

// Create the table element
const table = document.createElement("table");

// Create the table header row element
const headerRow = document.createElement("tr");

// Create the header cells and add them to the header row element
tableInfo.tableHeader.forEach((header) => {
  const cell = document.createElement("th");
  cell.innerText = header;
  headerRow.appendChild(cell);
});

// Add the header row to the table element
table.appendChild(headerRow);

// Create the table content rows and cells and add them to the table element
tableInfo.tableContent.forEach((content) => {
  const row = document.createElement("tr");
  tableInfo.tableHeader.forEach((header) => {
    const cell = document.createElement("td");
    cell.innerText = content[header];
    row.appendChild(cell);
  });
  table.appendChild(row);
});

// Add the table element to the table container element in the HTML page
tableContainer.appendChild(table);

const ttable = document.getElementsByTagName("table");
console.log(ttable);
