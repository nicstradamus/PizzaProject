// $("#submit").click (function(){
/*-----VARIABLE INIT--------*/
var sizeCost = 0;
var pizzaSize = null;
var sauceCost = 0;
var pizzaSauce = null;

var meatCost = 0;
var meatCount = 0;
var m1 = '';
var m2 = '';
var m3 = '';
var m4 = '';
var m5 = '';
var m6 = '';

var vegCost = 0;
var vegCount = 0;
var v1 = '';
var v2 = '';
var v3 = '';
var v4 = '';
var v5 = '';
var v6 = '';
var v7 = '';
var v8 = '';

var cheeseCost = 0;
var pizzaCheese = null;
var crustCost = 0;
var pizzaCrust = null;

var total = 0;




$("#submit").click (function(){
// /*-------SIZE--------*/
sizeCost = 0;
if (document.getElementById("personal").checked) {
	sizeCost = 6;
	pizzaSize = 'personal pizza';
}
else if (document.getElementById("medium").checked) {
	sizeCost = 10;
	pizzaSize = 'medium pizza';
}
else if (document.getElementById("large").checked) {
	sizeCost = 14;
	pizzaSize = 'large pizza';
} 
else if (document.getElementById("extra-large").checked){
	sizeCost = 16;
	pizzaSize = 'XL pizza';
} else {
	alert("You must select a pizza size");
	pizzaSize = 'none selected';
}



/*--------SAUCE--------*/ 
if (document.getElementById("marinara").checked) {
	sauceCost = 0;
	pizzaSauce = 'marinara';
}
else if (document.getElementById("alfredo").checked){
	sauceCost = 0;
	pizzaSauce = 'alfredo';
}
else if (document.getElementById("bbq").checked){
	sauceCost = 0;
	pizzaSauce = 'bbq';
}
else if (document.getElementById("no-sauce").checked){
	sauceCost = 0;
	pizzaSauce = 'no sauce';
}
else {
	alert("You must select a sauce option");
	pizzaSauce = '???';
}



/*-------CHEESE--------*/ 
cheeseCost = 0;
if (document.getElementById("regular-cheese").checked){
		cheeseCost = 0;
		pizzaCheese = 'RegCheese';
} 
else if (document.getElementById("no-cheese").checked){
		cheeseCost = 0;
		pizzaCheese = 'NoCheese';
} 
else if (document.getElementById("extra-cheese").checked) {
		if (sizeCost == 6) {
			cheeseCost = 1;
			pizzaCheese = 'XtraChee Prsnl';
		}
		else if (sizeCost == 10) {
			cheeseCost = 2;
			pizzaCheese = 'XtraChee Med';
		}
		else if (sizeCost == 14) {
			cheeseCost = 3;
			pizzaCheese = 'XtraChee Lrg';
		}
		else {
			cheeseCost = 4;
			pizzaCheese = 'XtraChee XL';
		}
}
else {
		alert("You must select a cheese option");
		pizzaCheese = '???';
}


/*--------CRUST--------*/ 
crustCost = 0;
if (document.getElementById("cheese-stuffed").checked) {
		crustCost = crustCost + 3;
		pizzaCrust = 'cheestuffed crust';
}
else if (document.getElementById("plain").checked) {
		crustCost = crustCost + 0;
		pizzaCrust = 'reg crust';
}
else if (document.getElementById("garlic-butter").checked) {
		crustCost = crustCost + 0;
		pizzaCrust = 'garlic crust';
}
else if (document.getElementById("spicy").checked) {
		crustCost = crustCost + 0;
		pizzaCrust = 'spicy crust';
}
else if (document.getElementById("house-special").checked) {
		crustCost = crustCost + 0;
		pizzaCrust = 'house crust';
}

/*-------MEAT COST--------*/
meatCount = 0;
if (document.getElementById("pepperoni").checked) {
	meatCount = meatCount + 1;
	m1 = 'pep'
}
if (document.getElementById("sausage").checked) {
	meatCount = meatCount + 1;
	m2 = 'ssg';
}
if (document.getElementById("canadian-bacon").checked) {
	meatCount = meatCount + 1;
	m3 = 'c-bcn';
}
if (document.getElementById("ground-beef").checked) {
	meatCount = meatCount + 1;
	m4 = 'beef';
}
if (document.getElementById("anchovi").checked) {
	meatCount = meatCount + 1;
	m5 = 'anch';
}
if (document.getElementById("chicken").checked) {
	meatCount = meatCount + 1;
	m6 = 'chk';
}
if (meatCount < 2) {
	meatCost = 0
}else 
meatCost = meatCount - 1;



/*-----VEG COST--------*/
vegCount = 0;
if (document.getElementById("tomatoes").checked) {
	vegCount = vegCount + 1;
	v1 = 'tom';
}
if (document.getElementById("onions").checked) {
	vegCount = vegCount + 1;
	v2 = 'onion';
}
if (document.getElementById("olives").checked) {
	vegCount = vegCount + 1;
	v3 = 'olv';
}
if (document.getElementById("green-peppers").checked) {
	vegCount = vegCount + 1;
	v4 = 'gp';
}
if (document.getElementById("mushrooms").checked) {
	vegCount = vegCount + 1;
	v5 = 'mush';
}
if (document.getElementById("pineapple").checked) {
	vegCount = vegCount + 1;
	v6 = 'pin';
}
if (document.getElementById("spinach").checked) {
	vegCount = vegCount + 1;
	v7 = 'spch';
}
if (document.getElementById("jalapeno").checked) {
	vegCount = vegCount + 1;
	v8 = 'jal';
}
if (vegCount > 4) {
	vegCost = 2;
}


/*-----CHECKOUT RECEIPT--------*/

/*-----SIZE-----*/
document.getElementById("checkout-size").innerHTML = pizzaSize;
document.getElementById("size-cost").innerHTML = '$' + sizeCost + '.00';
/*-----SAUCE-----*/
document.getElementById("checkout-sauce").innerHTML = pizzaSauce;
document.getElementById("sauce-cost").innerHTML = '+' + sauceCost + '.00';
/*-----CRUST-----*/
document.getElementById("checkout-crust").innerHTML = pizzaCrust;
document.getElementById("crust-cost").innerHTML = '+' + crustCost + '.00';
/*-----CHEESE-----*/
document.getElementById("checkout-cheese").innerHTML = pizzaCheese;
document.getElementById("cheese-cost").innerHTML = '+' + cheeseCost + '.00';
/*-----MEAT-----*/
document.getElementById("checkout-meat").innerHTML = m1 + ',' + m2 + ',' + m3 + ',' + m4 + ',' + m5 + ',' + m6;
document.getElementById("meat-cost").innerHTML = '+' + meatCost + '.00';
/*-----VEG-----*/
document.getElementById("checkout-veg").innerHTML = v1 + ',' + v2 + ',' + v3 + ',' + v4 + ',' + v5 + ',' + v6+ ',' + v7+ ',' + v8;
document.getElementById("veg-cost").innerHTML = '+' + vegCost + '.00';
/*-----TOTAL COST--------*/
total = (sizeCost + meatCost + vegCost + cheeseCost + crustCost);
document.getElementById("total").innerHTML = '$' + total + '.00';

});