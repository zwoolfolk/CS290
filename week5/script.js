/* Zachary Woolfolk */
/* CS290 */
/* DOM and Events Assignment */
/* 5/7/2017 */

var bod = document.body;
var tabl = document.createElement("table");
bod.appendChild(tabl);
for(var i = 0; i < 4; i++){
	var addMe = document.createElement("tr");
	for(var j = 0; j < 4; j++){
		addMe += document.createElement("th");
		addMe += "hi";	
	}
	bod.appendChild(addMe);
}
	