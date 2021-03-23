var allData = [];
var searches = [];
var visits = [];

var searchHistory = document.createElement('p');
searchHistory.setAttribute("id", "searchHistory");
var newParagraph = document.createElement('p');
newParagraph.setAttribute("id", "ipParagraph");


window.addEventListener('load', function() {
var upload = document.getElementById('fileInput');
// Make sure the DOM element exists
if (upload) {
upload.addEventListener('change', function() {
// Make sure a file was selected
if (upload.files.length > 0) {
var reader = new FileReader(); // File reader to read the file 
// This event listener will happen when the reader has read the file
reader.addEventListener('load', function() {
var result = JSON.parse(reader.result); // Parse the result into an object 


// if result has visited, visits.push(result)
// elseif result has searched for, visits.push(result)

// result.forEach(function (searches) {
//   if (result.title.indexOf("Searched for") !== -1) {
//     searches.push(searches);
//     loadIncrement = seperateEntries.length;
//   } 
//   else (result.title.indexOf("Visited") !== -1) {
//     searches.push(visits);
//     loadIncrement = seperateEntries.length;
//   }
// });
// console.log(searches);
// console.log(visits);

// for(var i = 0; i < 10; i += 1) {
// 	console.log(searches[i].title);
// 	console.log(visits[i].title);
// }

// // to parse through and log ALL searches
// for(var i = 0; i < result.length; i += 1) {
//   console.log(result[i].title);
// }
// for(var i = 0; i < result.length; i += 1) {
//   console.log(result[i].title);
// }

var h1 = document.createElement('H1');
h1.innerHTML = "Your data:";
document.getElementById("loaded-searches").appendChild(h1); 

searchHistory.setAttribute('style', 'white-space: pre;');

for(var i = 55; i < 105; i += 1) {
	// var single_search = result[i].title;
	searchHistory.textContent += result[i].title + "\r\n";
	console.log(result[i].title);
}
	document.getElementById("loaded-searches").appendChild(searchHistory); 
// console.log(result.title);
});

reader.readAsText(upload.files[0]); // Read the uploaded file
}
});
}
});



// NEED TO PARSE JSON DATA INTO ARRAY, THEN SEPERATE ARRAY INTO SEARCHES AND VISITED ARRAYS AND PRINT


