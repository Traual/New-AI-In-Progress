include("include");
global _NEAREST_ENEMY_LEEK ;
global _NEAREST_ENEMY_BULB ;
var _BEST_SAFE_CELL ;
var _BEST_TARGET ;


function getItemName(Item) {
	if (isChip(Item)) {
		return getChipName(Item);
	}
	else
	return getWeaponName(Item);
}


function useItem(item , cell , weapon) {
	if (isWeapon(item) && weapon!=item)  
	{
	setWeapon(item);
	}
	var lol = isChip(item) ? useChipOnCell(item, cell) : useWeaponOnCell(cell);
		return lol ;
	
	/*else
	if (getCellDistance(getCell(), cell)<=2 && item==CHIP_DEVIL_STRIKE) {
		useChipOnCell(CHIP_DEVIL_STRIKE, getCell());
	}
	*/
}

function GetItems(Leek) {
	var TabItems = [] ;
for (var i in getChips(Leek)) {

   if (getCooldown(i , Leek)==0) {
     push(TabItems , i ) ;
   }
}
	pushAll(TabItems, getWeapons(Leek));
	if (getLife(Leek)<1000) {
		removeElement(TabItems, CHIP_DEVIL_STRIKE);
	}
	return TabItems ;
}




function GetItemCost(Item) {
	if (isWeapon(Item)) {
		return getWeaponCost(Item);
	}
	if (isChip(Item)) {
		return getChipCost(Item);
	}
}

function GetItemDMG(@Item) {
var NumberOfDMG = 0 ;
    if (isWeapon(Item)) {
	  for (var eff in getWeaponEffects(Item)) {
    if (eff[0] == EFFECT_DAMAGE || eff[0] == EFFECT_POISON) {
        NumberOfDMG += eff[1]*(1+eff[3])*_COEF_DMG;
    }
}
}
    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_DAMAGE || eff[0] == EFFECT_POISON) {
        NumberOfDMG += eff[1]*(1+eff[3])*_COEF_DMG;
    }
}
}

    if (isWeapon(Item)) {
	  for (var eff in getWeaponEffects(Item)) {
    if (eff[0] == EFFECT_HEAL) {
        NumberOfDMG = eff[1]*(1+eff[3])*_COEF_HEAL;
    }
}
}
    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_HEAL) {
        NumberOfDMG =  eff[1]*(1+eff[3])*_COEF_HEAL;
    }
}
}  



    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_ABSOLUTE_SHIELD) {
        NumberOfDMG = eff[1]*(1+eff[3])*_COEF_ABS_SHIELD;
    }
}
}  


    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_ABSOLUTE_SHIELD) {
        NumberOfDMG = eff[1]*(1+eff[3])*_COEF_ABS_SHIELD;
    }
}
}  


    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_RELATIVE_SHIELD) {
        NumberOfDMG = eff[1]*(1+eff[3])*_COEF_REL_SHIELD;
    }
}
} 

    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_SUMMON) {
       NumberOfDMG = _COEF_SUMMON;
    }
}
}


    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_BUFF_STRENGTH) {
       NumberOfDMG = eff[1]*(1+eff[3])*_COEF_BOOST_STR;
    }
}
}


    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_BUFF_TP) {
       NumberOfDMG = eff[1]*(1+eff[3])*_COEF_BOOST_TP;
    }
}
}


    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_BUFF_MP) {
       NumberOfDMG = eff[1]*(1+eff[3])*_COEF_BOOST_TP;
    }
}
}


    if (isChip(Item)) {
      for (var eff in getChipEffects(Item)) {
    if (eff[0] == EFFECT_BOOST_MAX_LIFE) {
       NumberOfDMG = eff[1]*(1+eff[3])*_COEF_BOOST_MAX_LIFE;
    }
}
}

 
   return NumberOfDMG ;
}


/*
function getUniqueItems(inventory, totalPT, currentWeapon) { // : ([ItemID], TP, ItemID) -> [UniqueID]
	var uniqueItems = [];
	for (var i in inventory) {
		var CoutInitial = GetItemCost(i);
		var MaxUsage = 0;
		var Value = GetItemDMG(i);
		if (Value <= 0) {
			continue;
		}
		if (i != currentWeapon && isWeapon(i)) {
			CoutInitial += 1;
		}
		while (CoutInitial <= totalPT) {
			MaxUsage += 1;
			push(uniqueItems, [i, MaxUsage, (Value * MaxUsage), CoutInitial]);
			CoutInitial += GetItemCost(i);
			if (getChipCooldown(i) > 0) {
				break;
			}
		}
	}
	return uniqueItems;
}


function KnapSack(inventoryUniqueItems , totalPT) {
  var M = [] ;
  var TabDe0 = [] ;
  var cost = 3, value = 2;
  fill(TabDe0 , 0 , totalPT+1);
  fill(M , TabDe0 ,   count(inventoryUniqueItems));
  for (var j = 0 ; j < totalPT ; j++){
   if (inventoryUniqueItems[0][cost] > j)
                    {
     M[0][j] = 0 ;
   				}
   else
       {
     M[0][j] = inventoryUniqueItems[0][value] ;
   	}
  }
  //debugW(M[0]);
  
	for (var i = 1 ; i < count(inventoryUniqueItems) ; i++) {
    for (var j = 0 ; j <= totalPT ; j++) {
      if (inventoryUniqueItems[i][cost] > j) {
        M[i][j] = M[i-1][j];
      }
      else
      {  
	  //debug("M[i] : "+M[i] +" M[j] "+M[j] );
        M[i][j] = max ( M[i-1][j], M[i-1][j-inventoryUniqueItems[i][cost]] + inventoryUniqueItems[i][value]);
      }
    }
	}
  
  var ComboStockage = [] ;
  var i = count(inventoryUniqueItems)-1 ;
  var j = totalPT ;
 // debugW(M[i] + M[j]);
  var score = M[i][j];
  while (M[i][j] == M[i][j-1])
  {
    j-- ;
  }
  
  while (j > 0) {
     while (i > 0 && M[i][j] == M[i-1][j]) {
         i--;
     }
     j = j - inventoryUniqueItems[i][cost] ;
     if (j > 0) {
        push(ComboStockage , i);
     }
     i--;
  }
  return [ComboStockage , score] ;
  /*return ComboStockage ;*/
//}
/*
//debug(KnapSack(getUniqueItems(GetItems(getLeek()), getTP(), getWeapon()), getTP()));
var ui = getUniqueItems(GetItems(getLeek()), getTP(), getWeapon());
debug(arrayMap(ui, function(x) { return getItemName(x[0]) + " * " + x[1]; }));

var ks = KnapSack(ui, getTP());
debug(ks);
debug(arrayMap(ks[0], function(x) { return getItemName(ui[x][0]) + " * " + ui[x][1]; }));
var item = ui[ks[0][0]];
debug(item);
debug(getItemName(item[0]));
debug(item[1]);
//getItemName(Nom) ;

function BestCombo(knapsack , currentWeapon) {
  var tab = [] ;
  var id = 0 ;
  var Iterations = 1 ;
  for (var i in knapsack) {
    for (var a = 1 ; a <= i[Iterations] ; a++) {
      if (currentWeapon==i) {
       push(tab , i[id]);
   		}
      else
      {
        push(tab , i[id]);
    	}
    }
  }
  return tab ;
}
//debugW(BestCombo(KnapSack(ui, getTP()), getWeapon()));
*/




function getItemMinRange(Item) {
  var Range = isChip(Item) ? getChipMinRange(Item) : getWeaponMinRange(Item);
  if (Item == WEAPON_GAZOR || Item == CHIP_PLAGUE) {
   Range = 4 ;
  }
 else
   if ( Item == CHIP_BALL_AND_CHAIN || Item == CHIP_SOPORIFIC ) {
    Range = 3 ;
   }
   
   else
   if (Item == CHIP_TOXIN) {
  Range = 2;
   }
    return Range;
}

function getItemMaxRange(Item) {
 var Range = isChip(Item) ? getChipMaxRange(Item) : getWeaponMaxRange(Item) ;
  return Range;
}


function CanUseChipOnCell(cellfrom , cellto , ChiporWeapon ) {
//debug(cellto);
//debugC("TOTO", COLOR_RED);
  var dist = getCellDistance(cellfrom , cellto) ;
  //debugW(dist);
  var vue = lineOfSight(cellfrom , cellto);
  var isLine = isChip(ChiporWeapon) ? isInlineChip(ChiporWeapon) : isInlineWeapon(ChiporWeapon);
  var minrange = isChip(ChiporWeapon) ? getChipMinRange(ChiporWeapon) : getWeaponMinRange(ChiporWeapon);
    if (ChiporWeapon == CHIP_DEVIL_STRIKE && dist<3) {
  	return true ;
  }
  else
 if (dist>=getItemMinRange(ChiporWeapon) && dist<=getItemMaxRange(ChiporWeapon) && vue && !isLine) {
  return true ;
 }
  else
  if (dist>=getItemMinRange(ChiporWeapon)  && dist<=getItemMaxRange(ChiporWeapon) && vue && isLine && isOnSameLine(cellfrom , cellto)) {
  return true ;
  }
  else
    return false ;
}

function getAreaNumber(@item) {
var itemarea = isChip(item) ? getChipArea(item) : getWeaponArea(item) ;
	if (itemarea == AREA_CIRCLE_1) {
		return 1 ;
	}
	if (itemarea == AREA_CIRCLE_2) {
		return 2 ;
	}
	if (itemarea == AREA_CIRCLE_3) {
		return 3 ;
	}
	if (itemarea == AREA_LASER_LINE || itemarea == AREA_POINT) {
		return 0 ;
	}
	
}


/*
function GetBestComboCell(target , mp , pt , celldepart , inventaire , currentWeapon) {
	var BestComboz ;
    var BestScore ;
    var BestCell ;
    for ( var c in GetWalkableCells(celldepart , mp)) {
        var tabItems = [] ;
        for(var i in inventaire) {
            if (CanUseChipOnCell(c , getCell(target) , i)) {
                push(tabItems , i);
            }
        }
        if (KnapSack(getUniqueItems(tabItems, pt, currentWeapon) , pt)[1]>BestScore) {
            BestScore  = KnapSack(getUniqueItems(tabItems, pt, currentWeapon) , pt)[1];
            BestComboz = KnapSack(getUniqueItems(tabItems, pt, currentWeapon) , pt)[0];
            BestCell = c ;
      	}  
    }
 return [BestCell,BestComboz,BestScore] ;
}
debug(GetBestComboCell(getNearestEnemy() , getMP() , getTP() , getCell() , GetItems(getLeek()) , getWeapon()));
 */

function getCelltoUseItem(@Item , @Cell) {
//debugW(Cell);
/*if (Cell == null) {
	say("FUCK IT");
}
*/
if (Item == WEAPON_GAZOR||Item==CHIP_PLAGUE||Item==CHIP_BALL_AND_CHAIN||Item==CHIP_SOPORIFIC||Item==CHIP_TOXIN) {
	var BestCell ;
var BestMP = 99999 ;
var tab = [];
	for (var c in GetWalkableCells(getCell() , getMP())) {
		if (Item!=null && CanUseChipOnCell(c, Cell, Item)) {
			push(tab, c);
		}
	}

	for (var c in tab) {
		if (getPathLength(getCell(), c)<BestMP) {
			BestCell = c ;
			BestMP = getPathLength(getCell(), c);
		}
	}
	if (BestCell!=null)
	return BestCell ;
}
else
return isChip(Item) ? getCellsToUseChipOnCell(Item, Cell) : getCellsToUseWeaponOnCell(Item, Cell);
}
//debugW(getCelltoUseItem(WEAPON_AXE, getCell(getNearestEnemy())));
function getNearestCellToHit(@cellfrom , @entity , @item) {
    var BestCell ;
	/*var BestMP = 99999999 ;
	var tabCellTouch = [] ;
	for (var i in GetTableauDesCells()) {
	//debugC("TOTOTITITUTU", COLOR_RED);
		if (!isObstacle(i) &&  getCellDistance(getCell(entity), i)<=getAreaNumber(item)) {
			push(tabCellTouch, i);
		}
	}
	for (var c in tabCellTouch) {
		if (c!=null && getPathLength(cellfrom, getCelltoUseItem(item, c))<BestMP) {
			BestMP = getPathLength(cellfrom, getCelltoUseItem(item, c));
			BestCell = c ;
		}
	}
	*/
	BestCell = getCell(entity);
	return BestCell;
}
//debug(getCelltoUseItem(CHIP_METEORITE, getNearestEnemy()));

function canUseItem(@item , @cell) {
	var yea = isWeapon(item) ? canUseWeaponOnCell(item, cell) : canUseChipOnCell(item, cell);
	return yea ;
}


function getBestItemToUse(@inventory , @mp , @leekatq , @leekdef , @tp) {
var BestItem = CHIP_REMISSION;
var BestDMG = 1 ;
var BestMP = 999 ;
var BestTP = 999 ;

	for (var i in inventory) {
	var coutChange = 0 ;
	if (isWeapon(i) && getWeapon()!=i) {
		coutChange = 1 ;
	}
		if (getPathLength(getCell(leekatq), getCelltoUseItem(i, getCell(leekdef)))!=null && tp >= 
		GetItemCost(i)+coutChange && GetItemCost(i)>0 &&      
		BestDMG/BestTP/BestMP<GetItemDMG(i)/GetItemCost(i)/*+coutChange*//(1+getPathLength(
		getCell(leekatq), getCelltoUseItem(i, getCell(leekdef))))*_COEF_MP_VALUE) {
			BestDMG = GetItemDMG(i);
			BestTP = GetItemCost(i)/*+coutChange*/;
			BestMP = (1+getPathLength(
		getCell(leekatq), getCelltoUseItem(i, getCell(leekdef)))*_COEF_MP_VALUE );
			BestItem = i ;
		}
	}
	
		return [BestItem , BestDMG , BestTP , BestMP];
	
}
/*
debug(getOperations());
*/






























