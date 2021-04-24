// from data.js
const tableData = data;

// Grab the table body
const tbody = d3.select("tbody");

// Build table on page load
if (d3.select("#datetime").property("value")) {
    console.log(d3.select("#datetime").property("value"))
} else {
    buildTable(tableData)
}

// Handle "Filter Table" button click and form submit
d3.selectAll("#filter-btn").on("click", filterTable);
d3.selectAll("#form").on("submit", filterTable);

// Function for filtering data and appending to table
function filterTable() { 
    // Grab date entered 
    const date = d3.select("#datetime").property("value");
    console.log(`Filtering data to: ${date}....`)
    let filteredData = tableData
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
        console.log(`Data has been filtered to ${date}`)
        console.log(filteredData)
        // console.log('Truncating table')
        // tbody.html("");
        buildTable(filteredData)
    } else {
        console.log('Could not filter table. Please enter a date.')
    }
  };

// Build table. Will be called to initiallize table on load, then to filter table
function buildTable(dataset) {
    console.log('Truncating table....')
    tbody.html("");
    console.log('Building table....')
    if (dataset) {
        tableData.forEach(element => {
            var row = tbody.append("tr");
            Object.entries(element).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        })
        console.log('Table has been built.')   
    } else {
        console.log('Dataset is empty. Could not load table.')
    }
}

