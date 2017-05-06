/* Zachary Woolfolk */
/* CS290 */
/* DOM and Events Assignment */
/* 5/7/2017 */

var work = function(){
	var bod = document.body;
	var tbl = document.createElement('table');
	var tbod = document.createElement('tbody');
	var startRow = 1;
	var startCol = 0;



	function makeTable(){
		tbl.style.width = '100%';
		tbl.setAttribute('border', '1');
	
		for(i = 0; i < 4; i++){
			var tr = document.createElement('tr');
			var ctr = 1

			for(j = 0; j < 4; j++){
	
				if(i === 0){
					var th = document.createElement('th');
					th.textContent = ('Header' + ' ' + (j+1));
					tr.appendChild(th);
				}
				else{
					var td = document.createElement('td');
					td.textContent = (i + ',' + ctr);
					tr.appendChild(td);
					ctr++;
				}
			}
			tbod.appendChild(tr);
		}
	tbl.appendChild(tbod);
	bod.appendChild(tbl);
	}


	makeTable();
	var curCell = tbl.rows[startRow].cells[startCol];
	
	

	function makeButtons(name){
		var button = document.createElement('button')
		button.textContent = (name);
		button.addEventListener('click', function doStuff(event){
			if(event.target.innerText === 'Mark Cell'){
				markCell();
			}
			else{
				moveCell(event.target.innerText);
			}
		});
		bod.appendChild(button);
	}
	
	makeButtons('Up');
	makeButtons('Down');
	makeButtons('Left');
	makeButtons('Right');
	makeButtons('Mark Cell');
	

	
	
	function borderCell(cell){
		cell.style.border = '5px solid black';
	}
	
	
	borderCell(curCell);
	
	
	
	function markCell(){
		curCell.style['background-color'] = 'yellow';
	}
	
	function moveCell(txt){
		curCell.style.border = '1px solid black';
		
		if(txt === 'Up'){
			if(startRow > 1){
				startRow--;
			}
		}
		else if(txt === 'Down'){
			if(startRow < 3){
				startRow++;
			}
		}
		else if(txt === 'Left'){
			if(startCol > 0){
				startCol--;
			}
		}
		else if(txt === 'Right'){
			if(startCol < 3){
				startCol++;
			}
		}
		curCell = tbl.rows[startRow].cells[startCol];
		borderCell(curCell);
	}
	
}

work();