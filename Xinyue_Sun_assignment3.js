/*

Question 1

1. Given the following array and implement the table dynamically(you need to create the table via JavaScript)

2. And then you should implement a form(focus on the logic only, you DON'T need to create the form via JavaScript) for taking the some format input form users(Student Name，Age，Phone,Address). When the user clicks the Add button, the data will be added into the existing table(after the existing data), and the user input in the form should be cleared. 

*/

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
// Q1.a
const tableContainer = document.querySelector(".table-container");

const newTable = document.createElement("table");
newTable.classList.add("new_table");
const newThead = document.createElement("thead");
const newHeader = document.createElement("tr");

tableInfo.tableHeader.forEach((ele) => {
  const newCell = document.createElement("th");
  newCell.innerText = ele;
  newHeader.appendChild(newCell);
});

newThead.appendChild(newHeader);
newTable.appendChild(newThead);

const newTbody = document.createElement("tbody");

tableInfo.tableContent.forEach((ele) => {
  const newRow = document.createElement("tr");
  tableInfo.tableHeader.forEach((header) => {
    const newCell = document.createElement("td");
    newCell.innerText = ele[header];
    newRow.appendChild(newCell);
  });
  newTbody.appendChild(newRow);
});

newTable.appendChild(newTbody);

tableContainer.appendChild(newTable);

// console.log(newTable);

// Q1.b
const formContainer = document.querySelector(".form-container");

const form = document.createElement("form");

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Student Name";

const ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.placeholder = "Age";

const phoneInput = document.createElement("input");
phoneInput.type = "text";
phoneInput.placeholder = "Phone";

const addressInput = document.createElement("input");
addressInput.type = "text";
addressInput.placeholder = "Address";

const addButton = document.createElement("button");
addButton.type = "submit";
addButton.innerText = "Add";

form.appendChild(nameInput);
form.appendChild(ageInput);
form.appendChild(phoneInput);
form.appendChild(addressInput);
form.appendChild(addButton);

formContainer.appendChild(form);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the page from refreshing on submit

  // Get the input values from the form
  const name = nameInput.value;
  const age = ageInput.value;
  const phone = phoneInput.value;
  const address = addressInput.value;

  // Add the input values to the table
  const table = document.querySelector(".new_table");

  const row = document.createElement("tr");
  const cells = [name, age, phone, address];
  cells.forEach((cellValue) => {
    const cell = document.createElement("td");
    cell.innerText = cellValue;
    row.appendChild(cell);
  });
  table.appendChild(row);

  // Clear the input fields
  nameInput.value = "";
  ageInput.value = "";
  phoneInput.value = "";
  addressInput.value = "";
});

/*
  
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// ordered list
const ol = document.createElement("ol");
list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ol.appendChild(li);
});

// unordered list
const ul = document.createElement("ul");
list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

const newList = document.querySelector(".list");
newList.appendChild(ol);
newList.appendChild(ul);

/*
  
  Question 3
  1. Given the array and implement a dropdown list with the following options dynamically 
  2. Console the value, when the user select one option
  
  */

const dropDownList = [
  { value: "", content: "Please select" },
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const select = document.createElement("select");

dropDownList.forEach((item) => {
  const option = document.createElement("option");
  option.value = item.value;
  option.textContent = item.content;
  select.appendChild(option);
});

select.addEventListener("change", (event) => {
  console.log(event.target.value);
});

const newDropDownList = document.querySelector(".drop_down");
newDropDownList.appendChild(select);
