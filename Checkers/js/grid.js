var w; //The Game grid window.



var grid = [
	/* Initial Red checker positions */
	{x:1, y:0, occupied:"checker-white", king:false},
	{x:3, y:0, occupied:"checker-white", king:false},
	{x:5, y:0, occupied:"checker-white", king:false},
	{x:7, y:0, occupied:"checker-white", king:false},
	{x:0, y:1, occupied:"checker-white", king:false},
	{x:2, y:1, occupied:"checker-white", king:false},
	{x:4, y:1, occupied:"checker-white", king:false},
	{x:6, y:1, occupied:"checker-white", king:false},
	{x:1, y:2, occupied:"checker-white", king:false},
	{x:3, y:2, occupied:"checker-white", king:false},
	{x:5, y:2, occupied:"checker-white", king:false},
	{x:7, y:2, occupied:"checker-white", king:false},

	/* Initial empty positions */
	{x:0, y:3, occupied:"", king:false},
	{x:2, y:3, occupied:"", king:false},
	{x:4, y:3, occupied:"", king:false},
	{x:6, y:3, occupied:"", king:false},
	{x:1, y:4, occupied:"", king:false},
	{x:3, y:4, occupied:"", king:false},
	{x:5, y:4, occupied:"", king:false},
	{x:7, y:4, occupied:"", king:false},

	/* Initial Blue checker positions */
	{x:0, y:5, occupied:"checker-red", king:false},
	{x:2, y:5, occupied:"checker-red", king:false},
	{x:4, y:5, occupied:"checker-red", king:false},
	{x:6, y:5, occupied:"checker-red", king:false},
	{x:1, y:6, occupied:"checker-red", king:false},
	{x:3, y:6, occupied:"checker-red", king:false},
	{x:5, y:6, occupied:"checker-red", king:false},
	{x:7, y:6, occupied:"checker-red", king:false},
	{x:0, y:7, occupied:"checker-red", king:false},
	{x:2, y:7, occupied:"checker-red", king:false},
	{x:4, y:7, occupied:"checker-red", king:false},
	{x:6, y:7, occupied:"checker-red", king:false}
];

var selected = {occupied:"", x:0, y:0, king:false};
var turn = 'white';
var white;
var red;

function loadChecker(){printChecker(),addEvents(),checkerslbl=document.getElementById("checkerslbl"),checkerslbl.style.position="relative"}function printChecker(){for(var a=document.getElementById("Checkergrid"),b="<table class='grid'>",c=0;c<grid.length;c++)0!=grid[c].x&&1!=grid[c].x||(b+="<tr>"),grid[c].x%2==1&&(b+="<td class='redcell'></td>"),b+="<td class='blackcell'><div id="+grid[c].occupied+"></div></td>",grid[c].x%2==0&&7!=grid[c].x&&(b+="<td class='redcell'></td>"),6!=grid[c].x&&7!=grid[c].x||(b+="</tr>");b+="</table>",a.innerHTML=b}function addEvents(){for(var a=document.getElementById("Checkergrid"),b=a.getElementsByTagName("td"),c=0;c<b.length;c++)b[c].onclick=moveChecker}function moveChecker(){cell=this,x=cell.cellIndex,y=cell.parentNode.rowIndex,gridPiece=getGridPiece(x,y),""==selected.occupied&&gridPiece&&gridPiece.occupied.indexOf(turn)!=-1?(selected.occupied=gridPiece.occupied,selected.king=gridPiece.king,selected.x=x,selected.y=y,gridPiece.occupied="",cell.innerHTML="<div id=''></div>",cell.onclick=moveChecker):selected.occupied.indexOf("white")!=-1?(7==y&&(selected.king=!0,selected.occupied="king-white"),x!=selected.x-1&&x!=selected.x+1||y!=selected.y+1||""!=gridPiece.occupied?x==selected.x-2&&y==selected.y+2&&""==getGridPiece(x,y).occupied?(jumped=getGridPiece(x+1,y-1),jumped.occupied.indexOf("white")==-1&&""!=jumped.occupied&&(jumpedCell=getGridCell(x+1,y-1),cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,jumped.occupied="",jumpedCell.innerHTML="<div id=''></div>",jumpedCell.onclick=moveChecker,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="red",gameFinished())):x==selected.x+2&&y==selected.y+2&&""==gridPiece.occupied?(jumped=getGridPiece(x-1,y-1),jumped.occupied.indexOf("white")==-1&&""!=jumped.occupied&&(jumpedCell=getGridCell(x-1,y-1),cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,jumped.occupied="",jumpedCell.innerHTML="<div id=''></div>",jumpedCell.onclick=moveChecker,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="red",gameFinished())):x==selected.x&&y==selected.y?(gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,cell.innerHTML="<div id="+gridPiece.occupied+"></div>",cell.onclick=moveChecker):x!=selected.x-1&&x!=selected.x+1||y!=selected.y-1||""!=gridPiece.occupied||!selected.king?x==selected.x-2&&y==selected.y-2&&""==getGridPiece(x,y).occupied&&selected.king?(jumped=getGridPiece(x+1,y+1),jumped.occupied.indexOf("white")==-1&&""!=jumped.occupied&&(jumpedCell=getGridCell(x+1,y+1),cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,jumped.occupied="",jumpedCell.innerHTML="<div id=''></div>",jumpedCell.onclick=moveChecker,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="red",gameFinished())):x==selected.x+2&&y==selected.y-2&&""==gridPiece.occupied&&selected.king&&(jumped=getGridPiece(x-1,y+1),jumped.occupied.indexOf("white")==-1&&""!=jumped.occupied&&(jumpedCell=getGridCell(x-1,y+1),cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,jumped.occupied="",jumpedCell.innerHTML="<div id=''></div>",jumpedCell.onclick=moveChecker,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="red",gameFinished())):(cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="red"):(cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="red")):selected.occupied.indexOf("red")!=-1&&(0==y&&(selected.king=!0,selected.occupied="king-red"),x!=selected.x-1&&x!=selected.x+1||y!=selected.y-1||""!=gridPiece.occupied?x==selected.x-2&&y==selected.y-2&&""==getGridPiece(x,y).occupied?(jumped=getGridPiece(x+1,y+1),jumped.occupied.indexOf("red")==-1&&""!=jumped.occupied&&(jumpedCell=getGridCell(x+1,y+1),cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,jumped.occupied="",jumpedCell.innerHTML="<div id=''></div>",jumpedCell.onclick=moveChecker,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="white",gameFinished())):x==selected.x+2&&y==selected.y-2&&""==gridPiece.occupied?(jumped=getGridPiece(x-1,y+1),jumped.occupied.indexOf("red")==-1&&""!=jumped.occupied&&(jumpedCell=getGridCell(x-1,y+1),cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,jumped.occupied="",jumpedCell.innerHTML="<div id=''></div>",jumpedCell.onclick=moveChecker,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="white",gameFinished())):x==selected.x&&y==selected.y?(gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,cell.innerHTML="<div id="+gridPiece.occupied+"></div>",cell.onclick=moveChecker):x!=selected.x-1&&x!=selected.x+1||y!=selected.y+1||""!=gridPiece.occupied||!selected.king?x==selected.x-2&&y==selected.y+2&&""==getGridPiece(x,y).occupied&&selected.king?(jumped=getGridPiece(x+1,y-1),jumped.occupied.indexOf("red")==-1&&""!=jumped.occupied&&(jumpedCell=getGridCell(x+1,y-1),cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,jumped.occupied="",jumpedCell.innerHTML="<div id=''></div>",jumpedCell.onclick=moveChecker,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="white",gameFinished())):x==selected.x+2&&y==selected.y+2&&""==gridPiece.occupied&&selected.king&&(jumped=getGridPiece(x-1,y-1),jumped.occupied.indexOf("red")==-1&&""!=jumped.occupied&&(jumpedCell=getGridCell(x-1,y-1),cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,jumped.occupied="",jumpedCell.innerHTML="<div id=''></div>",jumpedCell.onclick=moveChecker,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="white",gameFinished())):(cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="white"):(cell.innerHTML="<div id="+selected.occupied+"></div>",cell.onclick=moveChecker,gridPiece.occupied=selected.occupied,gridPiece.king=selected.king,selected.occupied="",selected.king=!1,selected.x=0,selected.y=0,turn="white"))}function gameFinished(){for(var a=!1,b=!1,c=0;c<grid.length;c++)"checker-white"==grid[c].occupied||"king-white"==grid[c].occupied?a=!0:"checker-red"!=grid[c].occupied&&"king-red"!=grid[c].occupied||(b=!0);return a?b||(alert("Red Wins!"),location.reload(!0)):(alert("Blue Wins!"),location.reload(!0)),!1}function getGridPiece(a,b){for(var c=0;c<grid.length;c++)if(grid[c].x==a&&grid[c].y==b)return grid[c]}function getGridCell(a,b){var c=document.getElementById("Checkergrid"),d=c.getElementsByTagName("table");return d[0].rows[b].cells[a]}
