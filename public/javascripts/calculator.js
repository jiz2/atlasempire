// ======================================= //
// Goodgame Empire Combat Power Calculator //
// ======================================= //

function Troop (patk, ratk, pdef, rdef) {
	this.patk = patk;
	this.ratk = ratk;
	this.pdef = pdef;
	this.rdef = rdef;
}

function Tool (wall, gate, rdef) {
	this.wall = wall;
	this.gate = gate;
	this.rdef = rdef;
}

function toggleDiv (id) {
	itm = document.getElementById(id);
	if (itm.style.display == 'none') {
		itm.style.display = '';
	} else {
		itm.style.display = 'none';
	}
	return false;
}

function showAtk () {
	document.getElementById("Attack").style.display = 'none';
	document.getElementById("Defense").style.display = 'none';
	document.getElementById("DefenseBonus").style.display = '';
}

function showDef (id) {
	document.getElementById("Attack").style.display = '';
	document.getElementById("Defense").style.display = '';
	document.getElementById("DefenseBonus").style.display = 'none';
}

function bindValue (value, min, max, link) {
	if (value > max) {
		value = max;
		link.value = link.max;
	}
	if (isNaN(value) || value < min) {
		value = min;
		link.value = link.min;
	}
	return value;
}

// Troops
// ------
var Peasant = new Troop(0, 0, 9, 9);
var Militia = new Troop(0, 0, 27, 24);

var Spearman = new Troop(26, 0, 26, 8);
var Bowman = new Troop(0, 24, 8, 24);
var Maceman = new Troop(38, 0, 38, 6);
var Crossbowman = new Troop(0, 36, 6, 36);
var Swordsman = new Troop(61, 0, 5, 3);
var Archer = new Troop(0, 10, 53, 55);
var Halberdier = new Troop(17, 0, 135, 45);
var TwohandedSwordman = new Troop(109, 0, 19, 5);
var Longbowman = new Troop(0, 20, 51, 125);
var HeavyCrossbowman = new Troop(0, 92, 15, 24);

var vSpearman = new Troop(15, 0, 142, 52);
var vBowman = new Troop(0, 18, 59, 132);
var vMaceman = new Troop(118, 0, 20, 6);
var vCrossbowman = new Troop(0, 98, 16, 26);
var vSwordsman = new Troop(111, 0, 138, 72);
var vHalberdier = new Troop(15, 0, 145, 55);
var vTwohandedSwordman = new Troop(125, 0, 20, 6);
var vLongbowman = new Troop(0, 17, 61, 134);
var vHeavyCrossbowman = new Troop(0, 114, 16, 26);

var TravelingKnight = new Troop(146, 0, 20, 9);
var TravelingCrossbowman = new Troop(0, 135, 22, 30);

var RoyalSentinel = new Troop(14, 0, 150, 59);
var RoyalScout = new Troop(0, 16, 64, 139);
var RoyalKnight = new Troop(132, 0, 18, 5);
var RoyalCrossbowman = new Troop(0, 121, 14, 23);

var Marauder = new Troop(113, 0, 18, 4);
var Pyromaniac = new Troop(111, 0, 19, 4);
var vMarauder = new Troop(165, 0, 18, 4);
var vPyromaniac = new Troop(160, 0, 19, 4);

var RenegadeCultistWarrior = new Troop(124, 0, 144, 55);
var RenegadeCultistBowman = new Troop(0, 112, 59, 135);
var RenegadeSaberWarrior = new Troop(111, 0, 137, 48);
var RenegadeSwashbuckler = new Troop(166, 0, 11, 3);
var RenegadeSailRipper = new Troop(0, 144, 8, 14);

var FlameBearer = new Troop(14, 0, 170, 49);
var CompositeBowman = new Troop(0, 16, 54, 159);

var LionWarrior = new Troop(117, 0, 139, 48);
var LionBowman = new Troop(0, 98, 54, 129);

var BearWarrior = new Troop(117, 0, 139, 48);
var BearBowman = new Troop(0, 98, 54, 129);

var DemonHorror = new Troop(185, 0, 19, 5);
var DeathlyHorror = new Troop(0, 162, 15, 24);

// Tools
// -----
var ScalingLadder = new Tool(10, 0, 0);
var SiegeTower = new Tool(15, 0, 0);
var BatteringRam = new Tool(0, 10, 0);
var IronRam = new Tool(0, 15, 0);
var Mantlet = new Tool(0, 0, 5);
var CastIronMantlet = new Tool(0, 0, 10);

var HurlingRocks = new Tool(25, 0, 0);
var TarPitchKettle = new Tool(40, 0, 0);
var CastleGateReinforcement = new Tool(0, 35, 0);
var InsulatingMat = new Tool(0, 60, 0);
var FlamingArrows = new Tool(0, 0, 25);
var Bulwark = new Tool(0, 0, 50);

// Setups
// ------
var troops = [
	Peasant, Militia, Spearman, Bowman, Maceman, Crossbowman, Swordsman, Archer,
	Halberdier, TwohandedSwordman, Longbowman, HeavyCrossbowman,
	vSpearman, vBowman, vMaceman, vCrossbowman, vSwordsman,
	vHalberdier, vTwohandedSwordman, vLongbowman, vHeavyCrossbowman,
	TravelingKnight, TravelingCrossbowman,
	RoyalSentinel, RoyalScout, RoyalKnight, RoyalCrossbowman,
	Marauder, Pyromaniac, vMarauder, vPyromaniac,
	RenegadeCultistWarrior, RenegadeCultistBowman, RenegadeSaberWarrior,
	RenegadeSwashbuckler, RenegadeSailRipper, 
	FlameBearer, CompositeBowman, 
	LionWarrior, LionBowman, BearWarrior, BearBowman,
	DemonHorror, DeathlyHorror
];

var attackUnits = [
	document.getElementById("aSpearman"),
	document.getElementById("aBowman"),
	document.getElementById("aMaceman"),
	document.getElementById("aCrossbowman"),
	document.getElementById("aSwordsman"),
	document.getElementById("aArcher"),
	document.getElementById("aHalberdier"),
	document.getElementById("aTwohandedSwordman"),
	document.getElementById("aLongbowman"),
	document.getElementById("aHeavyCrossbowman"),
	document.getElementById("aVSpearman"),
	document.getElementById("aVBowman"),
	document.getElementById("aVMaceman"),
	document.getElementById("aVCrossbowman"),
	document.getElementById("aVSwordsman"),
	document.getElementById("aVHalberdier"),
	document.getElementById("aVTwohandedSwordman"),
	document.getElementById("aVLongbowman"),
	document.getElementById("aVHeavyCrossbowman"),
	document.getElementById("aTravelingKnight"),
	document.getElementById("aTravelingCrossbowman"),
	document.getElementById("aRoyalSentinel"),
	document.getElementById("aRoyalScout"),
	document.getElementById("aRoyalKnight"),
	document.getElementById("aRoyalCrossbowman"),
	document.getElementById("aMarauder"),
	document.getElementById("aPyromaniac"),
	document.getElementById("aVMarauder"),
	document.getElementById("aVPyromaniac"),
	document.getElementById("aRenegadeCultistWarrior"),
	document.getElementById("aRenegadeCultistBowman"),
	document.getElementById("aRenegadeSaberWarrior"),
	document.getElementById("aRenegadeSwashbuckler"),
	document.getElementById("aRenegadeSailRipper"),
	document.getElementById("aFlameBearer"),
	document.getElementById("aCompositeBowman"),
	document.getElementById("aLionWarrior"),
	document.getElementById("aLionBowman"),
	document.getElementById("aBearWarrior"),
	document.getElementById("aBearBowman"),
	document.getElementById("aDemonHorror"),
	document.getElementById("aDeathlyHorror")
];

var defenceUnits = [
	document.getElementById("Peasant"),
	document.getElementById("Militia"),
	document.getElementById("dSpearman"),
	document.getElementById("dBowman"),
	document.getElementById("dMaceman"),
	document.getElementById("dCrossbowman"),
	document.getElementById("dSwordsman"),
	document.getElementById("dArcher"),
	document.getElementById("dHalberdier"),
	document.getElementById("dTwohandedSwordman"),
	document.getElementById("dLongbowman"),
	document.getElementById("dHeavyCrossbowman"),
	document.getElementById("dVSpearman"),
	document.getElementById("dVBowman"),
	document.getElementById("dVMaceman"),
	document.getElementById("dVCrossbowman"),
	document.getElementById("dVSwordsman"),
	document.getElementById("dVHalberdier"),
	document.getElementById("dVTwohandedSwordman"),
	document.getElementById("dVLongbowman"),
	document.getElementById("dVHeavyCrossbowman"),
	document.getElementById("dTravelingKnight"),
	document.getElementById("dTravelingCrossbowman"),
	document.getElementById("dRoyalSentinel"),
	document.getElementById("dRoyalScout"),
	document.getElementById("dRoyalKnight"),
	document.getElementById("dRoyalCrossbowman"),
	document.getElementById("dMarauder"),
	document.getElementById("dPyromaniac"),
	document.getElementById("dVMarauder"),
	document.getElementById("dVPyromaniac"),
	document.getElementById("dRenegadeCultistWarrior"),
	document.getElementById("dRenegadeCultistBowman"),
	document.getElementById("dRenegadeSaberWarrior"),
	document.getElementById("dRenegadeSwashbuckler"),
	document.getElementById("dRenegadeSailRipper"),
	document.getElementById("dFlameBearer"),
	document.getElementById("dCompositeBowman"),
	document.getElementById("dLionWarrior"),
	document.getElementById("dLionBowman"),
	document.getElementById("dBearWarrior"),
	document.getElementById("dBearBowman"),
	document.getElementById("dDemonHorror"),
	document.getElementById("dDeathlyHorror")
];

var sTools = [
	ScalingLadder, SiegeTower,
	BatteringRam, IronRam,
	Mantlet, CastIronMantlet
];

var dTools = [
	HurlingRocks, TarPitchKettle,
	CastleGateReinforcement, InsulatingMat,
	FlamingArrows, Bulwark
];

var siegeTools = [
	document.getElementById("ScalingLadder"),
	document.getElementById("SiegeTower"),
	document.getElementById("BatteringRam"),
	document.getElementById("IronRam"),
	document.getElementById("Mantlet"),
	document.getElementById("CastIronMantlet")
];

var defenceTools = [
	document.getElementById("HurlingRocks"),
	document.getElementById("TarPitchKettle"),
	document.getElementById("CastleGateReinforcement"),
	document.getElementById("InsulatingMat"),
	document.getElementById("FlamingArrows"),
	document.getElementById("Bulwark")
];

var tools = {
	calculateTools: function () {
		var pwall = 0, pgate = 0, prdef = 0;
		var nwall = 0, ngate = 0, nrdef = 0;
		
		for (var i in siegeTools) {
			var number = parseInt(siegeTools[i].value);
			if (isNaN(number) || number < 0) {
				number = 0;
				siegeTools[i].value = siegeTools[i].min;
			}
			nwall += sTools[i].wall * number;
			ngate += sTools[i].gate * number;
			nrdef += sTools[i].rdef * number;
		}
		
		for (var i in defenceTools) {
			if (defenceTools[i].checked) {
				pwall += dTools[i].wall;
				pgate += dTools[i].gate;
				prdef += dTools[i].rdef;
			}
		}
		
		this.pwall = pwall;
		this.pgate = pgate;
		this.prdef = prdef;
		this.nwall = nwall;
		this.ngate = ngate;
		this.nrdef = nrdef;
	}
}

var castle = {
	pwall: document.getElementById("CastellanWall"),
	pgate: document.getElementById("CastellanGate"),
	nwall: document.getElementById("CommanderWall"),
	ngate: document.getElementById("CommanderGate"),
	
	getWallBonus: function () {
		var pwall = parseInt(this.pwall.value);
		var nwall = parseInt(this.nwall.value);
		pwall = bindValue(pwall, 0, 90, this.pwall);
		nwall = bindValue(nwall, 0, 90, this.nwall);
		
		return (100 + pwall + tools.pwall - nwall - tools.nwall)/100;
	},
	
	getGateBonus: function () {
		var pgate = parseInt(this.pgate.value);
		var ngate = parseInt(this.ngate.value);
		pgate = bindValue(pgate, 0, 90, this.pgate);
		ngate = bindValue(ngate, 0, 90, this.ngate);
		
		return (100 + pgate + tools.pgate - ngate - tools.ngate)/100;
	}
}

var bonus = {
	patk: document.getElementById("CommanderPATK"),
	ratk: document.getElementById("CommanderRATK"),
	pdef: document.getElementById("CastellanPDEF"),
	rdef: document.getElementById("CastellanRDEF"),
	
	spdef: document.getElementById("SpyPDEF"),
	srdef: document.getElementById("SpyRDEF"),
	swall: document.getElementById("SpyWall"),
	sgate: document.getElementById("SpyGate"),
	
	getCommanderBonus: function (){
		var patk = parseInt(this.patk.value);
		var ratk = parseInt(this.ratk.value);
		patk = bindValue(patk, 0, 90, this.patk);
		ratk = bindValue(ratk, 0, 90, this.ratk);
		
		return {patk: (100 + patk)/100, ratk: (100 + ratk)/100};
	},
	
	getCastellanBonus: function (){
		var pdef = parseInt(this.pdef.value);
		var rdef = parseInt(this.rdef.value);
		pdef = bindValue(pdef, 0, 90, this.pdef);
		rdef = bindValue(rdef, 0, 90, this.rdef);
		
		return {pdef: (100 + pdef)/100, rdef: (100 + rdef)/100};
	},
	
	getDefenseBonus: function() {
		var spdef = parseInt(this.spdef.value);
		var srdef = parseInt(this.srdef.value);
		var swall = parseInt(this.swall.value);
		var sgate = parseInt(this.sgate.value);
		spdef = bindValue(spdef, 100, 999, this.spdef);
		srdef = bindValue(srdef, 100, 999, this.srdef);
		swall = bindValue(swall, 0, 999, this.swall);
		sgate = bindValue(sgate, 0, 999, this.sgate);
		
		var rdef = srdef - tools.nrdef;
		var wall = 100 + swall - tools.nwall;
		var gate = 100 + sgate - tools.ngate;
		if (rdef < 0) rdef = 0;
		if (wall < 100) wall = 100;
		if (gate < 100) gate = 100;
		
		return {pdef: spdef/100, rdef: rdef/100, wall: wall/100, gate: gate/100};
	}
}

document.getElementById("TotalMeleeATK").innerHTML = 0;
document.getElementById("TotalRangedATK").innerHTML = 0;
document.getElementById("TotalMeleeDEF").innerHTML = 0;
document.getElementById("TotalRangedDEF").innerHTML = 0;

// Attack Functions
// ----------------
document.getElementById("CalculateATK").onclick = function () {
	var numbers = [0, 0];
	for (var i in attackUnits) numbers.push(parseInt(attackUnits[i].value));
	
	var patks = [];
	var ratks = [];
	
	for (var i in numbers) {
		if (isNaN(numbers[i]) || numbers[i] < 0) {
			numbers[i] = 0;
			attackUnits[i-2].value = attackUnits[i-2].min;
		}
		patks[i] = numbers[i] * troops[i].patk;
		ratks[i] = numbers[i] * troops[i].ratk;
	}
	
	var patkssum = patks.reduce(function(a, b) { return a + b; });
	var ratkssum = ratks.reduce(function(a, b) { return a + b; });
	
	var commander = bonus.getCommanderBonus();
	
	document.getElementById("TotalMeleeATK").innerHTML = Math.round(patkssum * commander.patk);
	document.getElementById("TotalRangedATK").innerHTML = Math.round(ratkssum * commander.ratk);
}

document.getElementById("ResetATK").onclick = function () {
	for (var i in attackUnits) attackUnits[i].value = attackUnits[i].defaultValue;
	
	document.getElementById("CommanderPATK").value = document.getElementById("CommanderPATK").defaultValue;
	document.getElementById("CommanderRATK").value = document.getElementById("CommanderRATK").defaultValue;
	document.getElementById("CommanderWall").value = document.getElementById("CommanderWall").defaultValue;
	document.getElementById("CommanderGate").value = document.getElementById("CommanderGate").defaultValue;
	
	document.getElementById("TotalMeleeATK").innerHTML = 0;
	document.getElementById("TotalRangedATK").innerHTML = 0;
}

// Defence Functions
// -----------------
document.getElementById("CalculateDEF").onclick = function () {
	var numbers = [];
	for (var i in defenceUnits) numbers.push(parseInt(defenceUnits[i].value));
	
	var pdefs = [];
	var rdefs = [];
	
	var castellan, wall, gate;
	tools.calculateTools();
	if (document.getElementById("AttackBattle").checked) {
		castellan = bonus.getDefenseBonus();
		wall = castellan.wall;
		gate = castellan.gate;
	} else {
		castellan = bonus.getCastellanBonus();
		wall = castle.getWallBonus();
		gate = castle.getGateBonus();
	}
	
	for (var i in numbers) {
		if (isNaN(numbers[i]) || numbers[i] < 0) {
			numbers[i] = 0;
			defenceUnits[i].value = defenceUnits[i].min;
		}
		if (troops[i].ratk === 0) {
			pdefs[i] = numbers[i] * troops[i].pdef * castellan.pdef;
			rdefs[i] = numbers[i] * troops[i].rdef * castellan.pdef;
		} else {
			pdefs[i] = numbers[i] * troops[i].pdef * castellan.rdef;
			rdefs[i] = numbers[i] * troops[i].rdef * castellan.rdef;
		}
	}
	
	var pdefssum = pdefs.reduce(function(a, b) { return a + b; });
	var rdefssum = rdefs.reduce(function(a, b) { return a + b; });
	
	document.getElementById("TotalMeleeDEF").innerHTML = Math.round(pdefssum * wall * gate);
	document.getElementById("TotalRangedDEF").innerHTML = Math.round(rdefssum * wall * gate);
}

document.getElementById("ResetDEF").onclick = function () {
	for (var i in defenceUnits) defenceUnits[i].value = defenceUnits[i].defaultValue;
	
	document.getElementById("CastellanPDEF").value = document.getElementById("CastellanPDEF").defaultValue;
	document.getElementById("CastellanRDEF").value = document.getElementById("CastellanRDEF").defaultValue;
	document.getElementById("CastellanWall").value = document.getElementById("CastellanWall").defaultValue;
	document.getElementById("CastellanGate").value = document.getElementById("CastellanGate").defaultValue;
	
	document.getElementById("SpyPDEF").value = document.getElementById("SpyPDEF").defaultValue;
	document.getElementById("SpyRDEF").value = document.getElementById("SpyRDEF").defaultValue;
	document.getElementById("SpyWall").value = document.getElementById("SpyWall").defaultValue;
	document.getElementById("SpyGate").value = document.getElementById("SpyGate").defaultValue;
	
	document.getElementById("TotalMeleeDEF").innerHTML = 0;
	document.getElementById("TotalRangedDEF").innerHTML = 0;
}