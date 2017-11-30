include('include');
global _COEF_MP_VALUE = 0.4 ; //Plus C'est Haut , Plus les mp comptent dans le chargement des combos

global tabCOEF = [] ;
global _COEF_ABS_SHIELD = 2.5 ;
global _COEF_HEAL = tabCOEF[1] ;
global _COEF_BOOST_STR = 3 ;
global _COEF_BOOST_MP = 120 ;
global _COEF_BOOST_TP = 110 ;
global _COEF_BOOST_AGILITY = 1.25 ;
global _COEF_REL_SHIELD = 10 ;
global _COEF_SUMMON = 75/999999 ;
global _COEF_BOOST_MAX_LIFE = 2.5;
global _COEF_BUFF_RESI = 2 ;
global _COEF_BUFF_WISDOM = 1.5 ;
global _COEF_DMG = 0.75 ;
global _COEF_DMG_RETURN = 10 ;

function LifePercent(@life , @totallife) {
	return life/totallife*100;
}

function leeks() {
	return getEnemies()+getAllies() ;
	
}

function candie(leekatq , leekdef , lifedef , lifeatq , strenghtatq) {
	var _DMG_TOOK = 0 ;
	
	
	
	
}

function IsArea(@item) {
 var getItemArea = isChip(item) ? getChipArea(item) : getWeaponArea(item);
	return getItemArea!=AREA_POINT ? true : false ;
}
















global katanaON = false ;

global _CHIP_ISPOSITIV = [
    CHIP_ACCELERATION:true,
    CHIP_ADRENALINE:true,
    CHIP_ANTIDOTE:true,
    CHIP_ARMOR:true,
    CHIP_ARMORING:true,
    CHIP_BALL_AND_CHAIN:false,
    CHIP_BANDAGE:true,
    CHIP_BARK:true,
    CHIP_BURNING:false,
    CHIP_CARAPACE:true,
    CHIP_COLLAR:true,
    CHIP_CURE:true,
    CHIP_DEVIL_STRIKE:false,
    CHIP_DOPING:true,
    CHIP_DRIP:true,
    CHIP_FEROCITY:true,
    CHIP_FERTILIZER:true,
    CHIP_FIRE_BULB:null,//specialCHIP
    CHIP_FLAME:false,
	CHIP_FLASH:false,
    CHIP_FORTRESS:true,
    CHIP_FRACTURE:false,
    CHIP_HEALER_BULB:null,//specialCHIP
    CHIP_HELMET:true,
    CHIP_ICE:false,
    CHIP_ICEBERG:false,
    CHIP_ICED_BULB:null,//specialCHIP
    CHIP_INVERSION:null,//specialCHIP
    CHIP_LEATHER_BOOTS:true,
    CHIP_LIBERATION:null,//chip chelou, gérer comme offensive pour le moment..
    CHIP_LIGHTNING:false,
    CHIP_LIGHTNING_BULB:null,//specialCHIP
    CHIP_LOAM:true,
    CHIP_METALLIC_BULB:null,//specialCHIP
    CHIP_METEORITE:false,
    CHIP_MIRROR:true,
    CHIP_MOTIVATION:true,
    CHIP_PEBBLE:false,
    CHIP_PLAGUE:false,
    CHIP_PROTEIN:true,
    CHIP_PUNY_BULB:null,//specialCHIP
    CHIP_RAGE:true,
    CHIP_RAMPART:true,
    CHIP_REFLEXES:true,
    CHIP_REGENERATION:true,
    CHIP_REMISSION:true,
    CHIP_RESURRECTION:null,//specialCHIP
    CHIP_ROCK:false,
    CHIP_ROCKFALL:false,
    CHIP_ROCKY_BULB:null,//specialCHIP
    CHIP_SEVEN_LEAGUE_BOOTS:true,
    CHIP_SHIELD:true,
    CHIP_SHOCK:false,
    CHIP_SLOW_DOWN:false,
    CHIP_SOLIDIFICATION:true,
    CHIP_SOPORIFIC:false,
    CHIP_SPARK:false,
    CHIP_STALACTITE:false,
    CHIP_STEROID:true,
    CHIP_STRETCHING:true,
    CHIP_TELEPORTATION:null,//specialCHIP
    CHIP_THORN:true,
    CHIP_TOXIN:false,
    CHIP_TRANQUILIZER:false,
    CHIP_VACCINE:true,
    CHIP_VENOM:false,
    CHIP_WALL:true,
    CHIP_WARM_UP:true,
    CHIP_WHIP:true,
    CHIP_WINGED_BOOTS:true,
	WEAPON_AXE:false,
	WEAPON_B_LASER:false,
	WEAPON_BROADSWORD:false,
	WEAPON_DESTROYER:false,
	WEAPON_DOUBLE_GUN:false,
	WEAPON_ELECTRISOR:false,
	WEAPON_FLAME_THROWER:false,
	WEAPON_GAZOR:false,
	WEAPON_GRENADE_LAUNCHER:false,
	WEAPON_KATANA:false,
	WEAPON_LASER:false,
	WEAPON_MACHINE_GUN:false,
	WEAPON_MAGNUM:false,
	WEAPON_M_LASER:false,
	WEAPON_PISTOL:false,
	WEAPON_SHOTGUN:false
];

function isPositiv(@item) {
	return _CHIP_ISPOSITIV[item];
}


global ITEMS = [
WEAPON_AXE : WEAPON_AXE,
WEAPON_B_LASER : WEAPON_B_LASER,
WEAPON_BROADSWORD : WEAPON_BROADSWORD,
WEAPON_DESTROYER : WEAPON_DESTROYER,
WEAPON_DOUBLE_GUN : WEAPON_DOUBLE_GUN,
WEAPON_ELECTRISOR : WEAPON_ELECTRISOR,
WEAPON_FLAME_THROWER : WEAPON_FLAME_THROWER,
WEAPON_GAZOR : WEAPON_GAZOR,
WEAPON_GRENADE_LAUNCHER : WEAPON_GRENADE_LAUNCHER,
WEAPON_KATANA : WEAPON_KATANA,
WEAPON_LASER : WEAPON_LASER,
WEAPON_MACHINE_GUN : WEAPON_MACHINE_GUN,
WEAPON_MAGNUM : WEAPON_MAGNUM,
WEAPON_M_LASER : WEAPON_M_LASER,
WEAPON_PISTOL : WEAPON_PISTOL,
WEAPON_SHOTGUN : WEAPON_SHOTGUN,
CHIP_ACCELERATION : CHIP_ACCELERATION,
CHIP_ADRENALINE : CHIP_ADRENALINE,
CHIP_ANTIDOTE : CHIP_ANTIDOTE,
CHIP_ARMOR : CHIP_ARMOR,
CHIP_ARMORING : CHIP_ARMORING,
CHIP_BALL_AND_CHAIN : CHIP_BALL_AND_CHAIN,
CHIP_BANDAGE : CHIP_BANDAGE,
CHIP_BARK : CHIP_BARK,
CHIP_BURNING : CHIP_BURNING,
CHIP_CARAPACE : CHIP_CARAPACE,
CHIP_COLLAR : CHIP_COLLAR,
CHIP_CURE : CHIP_CURE,
CHIP_DEVIL_STRIKE : CHIP_DEVIL_STRIKE,
CHIP_DOPING : CHIP_DOPING,
CHIP_DRIP : CHIP_DRIP,
CHIP_FEROCITY : CHIP_FEROCITY,
CHIP_FERTILIZER : CHIP_FERTILIZER,
CHIP_FIRE_BULB : CHIP_FIRE_BULB,
CHIP_FLAME : CHIP_FLAME,
CHIP_FLASH : CHIP_FLASH,
CHIP_FORTRESS : CHIP_FORTRESS,
CHIP_FRACTURE : CHIP_FRACTURE,
CHIP_HEALER_BULB : CHIP_HEALER_BULB,
CHIP_HELMET : CHIP_HELMET,
CHIP_ICE : CHIP_ICE,
CHIP_ICEBERG : CHIP_ICEBERG,
CHIP_ICED_BULB : CHIP_ICED_BULB,
CHIP_INVERSION : CHIP_INVERSION,
CHIP_LEATHER_BOOTS : CHIP_LEATHER_BOOTS,
CHIP_LIBERATION : CHIP_LIBERATION,
CHIP_LIGHTNING : CHIP_LIGHTNING,
CHIP_LIGHTNING_BULB : CHIP_LIGHTNING_BULB,
CHIP_LOAM : CHIP_LOAM,
CHIP_METALLIC_BULB : CHIP_METALLIC_BULB,
CHIP_METEORITE : CHIP_METEORITE,
CHIP_MIRROR : CHIP_MIRROR,
CHIP_MOTIVATION : CHIP_MOTIVATION,
CHIP_PEBBLE : CHIP_PEBBLE,
CHIP_PLAGUE : CHIP_PLAGUE,
CHIP_PROTEIN : CHIP_PROTEIN,
CHIP_PUNY_BULB : CHIP_PUNY_BULB,
CHIP_RAGE : CHIP_RAGE,
CHIP_RAMPART : CHIP_RAMPART,
CHIP_REFLEXES : CHIP_REFLEXES,
CHIP_REGENERATION : CHIP_REGENERATION,
CHIP_REMISSION : CHIP_REMISSION,
CHIP_RESURRECTION : CHIP_RESURRECTION,
CHIP_ROCK : CHIP_ROCK,
CHIP_ROCKFALL : CHIP_ROCKFALL,
CHIP_ROCKY_BULB : CHIP_ROCKY_BULB,
CHIP_SEVEN_LEAGUE_BOOTS : CHIP_SEVEN_LEAGUE_BOOTS,
CHIP_SHIELD : CHIP_SHIELD,
CHIP_SHOCK : CHIP_SHOCK,
CHIP_SLOW_DOWN : CHIP_SLOW_DOWN,
CHIP_SOLIDIFICATION : CHIP_SOLIDIFICATION,
CHIP_SOPORIFIC : CHIP_SOPORIFIC,
CHIP_SPARK : CHIP_SPARK,
CHIP_STALACTITE : CHIP_STALACTITE,
CHIP_STEROID : CHIP_STEROID,
CHIP_STRETCHING : CHIP_STRETCHING,
CHIP_TELEPORTATION : CHIP_TELEPORTATION,
CHIP_THORN : CHIP_THORN,
CHIP_TOXIN : CHIP_TOXIN,
CHIP_TRANQUILIZER : CHIP_TRANQUILIZER,
CHIP_VACCINE : CHIP_VACCINE,
CHIP_VENOM : CHIP_VENOM,
CHIP_WALL : CHIP_WALL,
CHIP_WARM_UP : CHIP_WARM_UP,
CHIP_WHIP : CHIP_WHIP,
CHIP_WINGED_BOOTS : CHIP_WINGED_BOOTS,
];