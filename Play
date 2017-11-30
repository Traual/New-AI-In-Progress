include('include');



function Play(@enemy , @weapon , @cell , @mp , @enemyweapon , @tp , @healAlly) {
while (true) {
var bi = getBestItemToUse(GetItems(getLeek()), getMP(), getLeek(), enemy, tp);
if (bi[0]==null ||getTP()<GetItemCost(bi[0]) || getPathLength(getCell(), getCelltoUseItem(bi[0], enemy))>mp||getCooldown(bi[0])>0) {
	break ;
}
debug("Using : "+getItemName(bi[0]));

if (isPositiv(bi[0])==false) {

moveTowardCell(getCelltoUseItem(bi[0], enemy));
debug("I CAN PLAY MY F U C K I N G WEAPON !");
if (isChip(bi[0]) && getChipCooldown(bi[0])==0 && bi[0]!=null || isWeapon(bi[0]) && 			bi[0]!=null) {
			while (GetItemCost(bi[0])<=getTP() && canUseItem(bi[0], getCell(enemy))) {
					useItem(bi[0], getCell(enemy) , getWeapon());
}
}
		useItem(bi[0], getCell(enemy), weapon);
}

if (isPositiv(bi[0])) {
if (healAlly != getLeek()) {
moveTowardCell(getCelltoUseItem(bi[0], healAlly));
}
if (isChip(bi[0]) && getChipCooldown(bi[0])==0 && bi[0]!=null || isWeapon(bi[0]) && 			bi[0]!=null && getPathLength(getCell(), getCelltoUseItem(bi[0], healAlly))<=mp) {
			while (GetItemCost(bi[0])<=getTP() && canUseItem(bi[0], getCell(healAlly))) {
					useItem(bi[0], getCell(healAlly) , getWeapon());
}
}
		useItem(bi[0], getNearestCellToHit(cell ,healAlly ,bi[0]), weapon);
}

if (isPositiv(bi[0])==null && bi[0]!=CHIP_TELEPORTATION && bi[0]!=CHIP_ANTIDOTE && bi[0] != CHIP_INVERSION && bi[0] != CHIP_LIBERATION && bi[0] != CHIP_RESURRECTION) {
     summon(bi[0], HidenCell(cell , 2 , enemy , enemyweapon)[0], bulbAI);
}

if (bi[0]==CHIP_RESURRECTION) {
	resurrect(DeadAlly, HidenCell(cell , 4 , enemy , enemyweapon)[0]);
}
//
/*
*/
}
moveTowardCell(HidenCell(cell , getMP() , enemy , enemyweapon)[0]);


}


Play(getNearestEnemy(), getWeapon(), getCell(), getMP(), getWeapon(getNearestEnemy()), getTP(), getLeek());

debug("Opés : "+getOperations()/1000+"k");
