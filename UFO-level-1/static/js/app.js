// from data.js
var tableData = data;
console.log(data); 
// Get a reference to the table body
var tbody = d3.select("tbody");

// Create a function to append data to the table 
function ufoTable(data) {
    data.forEach((UFO_report) => {
        var row = tbody.append("tr");
        Object.entries(UFO_report).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });  
}

// Select the button
var button = d3.select("#filter-btn");
// Create event handlers 
button.on("click", runEnter);

// Create a function to filter data to the table 
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    //console.log(inputValue);
    //console.log(tableData);

    //if else statement to show data to the table 
    if (inputValue){
        var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
        console.log(ufoTable(filteredData)); 
    }
        else{
        console.log(ufoTable(tableData)); 
    }
    
}

//console.log(ufoTable(tableData)); 