include('include');






function GetTableauDesCells() {
	var tab = [] ;
	for (var i = 0 ; i <= 613 ; i++) {
		push(tab, i);
	}
	return tab ;	
}
  
function GetWalkableCellsOP(cell , MP) {
	var tab = [] ;
	for (var i in GetTableauDesCells()) {
		if (getCellDistance(cell, i)<=
		MP
		&& !isObstacle(i)) {
			push(tab, i);
		}
	}
   return tab ;
}

function GetWalkableCells(cell , MP) {
	var tab = [] ;
	for (var i in GetWalkableCellsOP(cell, MP)) {
		if (getPathLength(cell, i)<=
		MP
		 && getPathLength(cell, i)!=null) {
			push(tab, i);
		}
	}
   return tab ;
}





function HidenCell(celldepart , mp , enemy , enemyweapon) {
var bestcell ;
var bestdist = 999;
var tabHide = [] ;
/*var tabAntiKatana = [] ;
var bestcellk ;
var bestdistk = 999 ;
    if (enemyweapon == WEAPON_KATANA && katanaON==true || enemyweapon == WEAPON_AXE && katanaON==true || enemyweapon == WEAPON_BROADSWORD && katanaON==true) {
    	for (var i in GetWalkableCells(celldepart, mp)) {
    		if (getPathLength(i, getCell(enemy))>(getMP(enemy)+1)) {
    			push(tabAntiKatana, i);
    		}
    	}
		for (var c in tabAntiKatana) {
		if (getPathLength(getCell(enemy), c) < bestdistk) {
    		bestdistk = getPathLength(getCell(enemy), c);
			bestcellk = c ;
    	}	
		}
		return [bestcellk , bestdistk];
    }
*/
	for (var i in GetWalkableCells(celldepart, mp)) {
		if (!lineOfSight(i, getCell(enemy))) {
			push(tabHide, i);
		}
	}
    for (var c in tabHide) {
    	if (getPathLength(getCell(enemy), c) < bestdist) {
    		bestdist = getPathLength(getCell(enemy), c);
			bestcell = c ;
    	}
    }
	return [bestcell , bestdist];
}
/*function GetNumberOfEnemyInAZone(Cell,RayonPath) {
	var tab = 0 ;
	for (var i in GetWalkableCells(Cell, RayonPath)) {
		if (isLeek(i) && isEnemy(getLeekOnCell(i))) {
			tab ++ ;
		}
	}	
}
*/
/*
function getsoloDMGmap(leek , enemy , mpleek , mpenemy ,tpenemy, inventoryenemy) {
var bestscore ;
var bestcell ;
	for (var cleek in GetWalkableCells(getCell(leek), mpleek)) {
		for (var cenemy in GetWalkableCells(getCell(enemy), mpenemy)) {
				if (GetBestComboCell(leek , mpenemy , tpenemy , getCell(enemy) , inventoryenemy)[2]<bestscore) {
					bestscore = KnapSack(inventoryenemy ,tpenemy)[1] ;
					bestcell = cleek ;
				    debug('Opés :' + getOperations());
			}
		}
	}
	return bestcell ;
}


mark(getsoloDMGmap(getLeek(), getNearestEnemy(), getMP(), getMP(getNearestEnemy()), getTP(getNearestEnemy()), GetItems(getNearestEnemy())));


*/

function getDmgMap(@enemy , @enemyweapon , @enemyinventory) {
	
	
}



