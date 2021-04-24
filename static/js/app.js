// from data.js
var tableData = data;

// Grab the table body
var tbody = d3.select("tbody");

// Grab date entered
var dateEntered = d3.select("#datetime").value;

// Handle input change
d3.select("#datetime").on("change", function() {
    newDate = d3.event.target.value;
    console.log(`New Date Entered: ${newDate}`)
  });


// Function for filtering data and appending to table
function filterTable(date) {  
    console.log(`Filtering data to: ${date}....`)
    tbody.html("");
    filteredData = []
    if (date) {
        tableData.forEach(element => {
            if (element.datetime === date) {
                filteredData.push(element)
            }
        })
        console.log(`Data has been filtered to: ${date}`)
        buildTable(filteredData)
    } else {
        console.log('Could not filter table. Please enter a date.')
    }
  };

// Build table. Will be called to initiallize table on load, then to filter table
function buildTable(data) {
    console.log('Building table....')
    tbody.html("");
    if (data) {
        tableData.forEach(element => {
            var row = tbody.append("tr");
            Object.entries(element).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        })
        console.log('Table has been built.')    
    }
}

// Build table on page load
buildTable(tableData)

// Handle "Filter Table" button click and form submit
console.log(d3.select("#datetime").value)

// d3.selectAll("#filter-btn").on("click", filterTable(d3.select("#datetime").value));




