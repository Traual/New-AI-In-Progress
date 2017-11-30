include("include");

for (var target in leeks()) {
if (isSummon(target) && isAlly(target)) {
	if (getAbsoluteShield(target)==0) {
	_COEF_ABS_SHIELD += 5 ;
}

if (getAbsoluteShield(target)<50) {
	_COEF_ABS_SHIELD += 4 ;
}

if (getAbsoluteShield(target)<100) {
	_COEF_ABS_SHIELD += 3 ;
}

if (getAbsoluteShield(target)<150) {
	_COEF_ABS_SHIELD += 2 ;
}

if (getAbsoluteShield(target)<200) {
	_COEF_ABS_SHIELD += 1 ;
}

if (getRelativeShield(target)==0) {
	_COEF_REL_SHIELD +=5 ;
}
if (getRelativeShield(target)<10) {
	_COEF_REL_SHIELD += 4 ;
}
if (getRelativeShield(target)<20) {
	_COEF_REL_SHIELD +=3 ;
}
if (getRelativeShield(target)<30) {
	_COEF_REL_SHIELD +=2 ;
}
if (getRelativeShield(target)<40) {
	_COEF_REL_SHIELD +=1 ;
}


if (getLife(target)<getTotalLife(target)) {
	_COEF_HEAL += 0.5 ;
}

if (LifePercent(getLife(target), getTotalLife(target))<80) {
	_COEF_HEAL += 1.5 ;
}
if (LifePercent(getLife(target), getTotalLife(target))<60) {
	_COEF_HEAL += 2 ;
}
if (LifePercent(getLife(target), getTotalLife(target))<40) {
	_COEF_HEAL += 2.5 ;
}
if (LifePercent(getLife(target), getTotalLife(target))<20) {
	_COEF_HEAL += 3 ;
}

if (LifePercent(getLife(target), getTotalLife(target))<5) {
	_COEF_HEAL += 10 ;
}
 
if (getTotalLife(target)<2000) {
	_COEF_BOOST_MAX_LIFE += 1;
}
if (getTotalLife(target)<1600) {
	_COEF_BOOST_MAX_LIFE += 2;
}
if (getTotalLife(target)<1200) {
	_COEF_BOOST_MAX_LIFE +=3;
}
if (getTotalLife(target)<800) {
	_COEF_BOOST_MAX_LIFE += 4;
}
if (getTotalLife(target)<400) {
	_COEF_BOOST_MAX_LIFE += 5;
}
}
push(tabCOEF, [target , _COEF_HEAL , _COEF_BOOST_MAX_LIFE , _COEF_ABS_SHIELD , _COEF_REL_SHIELD]);
}
