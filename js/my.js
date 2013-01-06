/* Code from D3 for mortals */
var data = [{year: 2006, books: 54},
            {year: 2007, books: 43},
            {year: 2008, books: 41},
            {year: 2009, books: 44},
            {year: 2010, books: 35}];

var barWidth = 40;
var width = (barWidth + 10) * data.length;
var height = 200;

var x = d3.scale.linear().domain([0, data.length]).range([0, width]);
var y = d3.scale.linear().domain([0, d3.max(data, function(datum) { return datum.books; })]).
  rangeRound([0, height]);

// add the canvas to the DOM
var barDemo = d3.select("#testing").
  append("svg:svg").
  attr("width", width).
  attr("height", height);

barDemo.selectAll("rect").
  data(data).
  enter().
  append("svg:rect").
  attr("x", function(datum, index) { return x(index); }).
  attr("y", function(datum) { return height - y(datum.books); }).
  attr("height", function(datum) { return y(datum.books); }).
  attr("width", barWidth).
  attr("fill", "#2d578b");
  
  
/* My code to run on button press, + global variables */
/*
var data = [32, 57, 112],
    dataEnter = data.concat(293),
    dataExit = data.slice(0, 2),
    w = 360,
    h = 180,
    x = d3.scale.ordinal().domain([57, 32, 112]).rangePoints([0, w], 1),
    y = d3.scale.ordinal().domain(data).rangePoints([0, h], 2);


function mySelection() { 
				var mySelection = d3.selectAll("circle");
				mySelection.transition().duration(500).delay(0).style("fill", "steelblue");
				mySelection.transition().duration(500).delay(500).attr("cy", 90).attr("r", 30);
				}

function numTwo() {				
				var mySelection = d3.selectAll("circle");
				mySelection.transition().duration(500).delay(0).attr("r", 12)
				.attr("cx", function() {
  					return Math.random() * w;
					})
				.attr("cy", function() {
  					return Math.random() * h;
					});	
				}
*/