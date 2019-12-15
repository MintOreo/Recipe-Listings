
function init() {
   $.getJSON("https://bioinfobot.github.io/data/2017-05.json", function(json) {
        console.log(json); 
   });
 loadJSON(function(response) {
  // Parse JSON string into object
    var recipes_JSON = JSON.parse(response);
	console.log(recipes_JSON[cuisine][0]);
 });
}

 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'recipes.json', true); // load recipes.json file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }