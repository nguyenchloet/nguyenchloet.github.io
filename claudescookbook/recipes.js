// variable for original yield values
//const ogYield = parseInt(document.getElementById('og-yield').value, 10);
const ogYields = document.getElementsByClassName('og-yield');
var currentYields = document.getElementsByClassName('yield-output');
const ogIncrement = document.getElementsByClassName('og-increment');
var currentIncrements = document.getElementsByClassName('increment-output');


// get ingredient value (hidden) 
var ingredientAmountList = document.getElementsByClassName('ingredient-amount');

// get output ingredient span
var outputAmountList = document.getElementsByClassName('output-amount');
var index = 0;

// get initial increment
var currentIncrement = ogIncrement[index].innerHTML;


// get ingredient values on page load
window.onload = function() {
  // set current yield on load
  for (var i = 0; i < currentYields.length; i++ ) {
    currentYields[i].innerHTML = ogYields[i].innerHTML;
  }

  for (var i = 0; i < outputAmountList.length; i++) {
    outputAmountList[i].innerHTML = ingredientAmountList[i].innerHTML;
  }

  for (var i = 0; i < outputAmountList.length; i++) {
    currentIncrements[i].innerHTML = ogIncrement[i].innerHTML;
  }
}

// allow scroll through recipes
var prev = $('.prev');
var next = $('.next');
var recipes = $('.recipe-item');

// set first recipe as active
$('.recipes li:first').addClass('active');


// show one recipe (specified node) at a time
function show( node ){
  node.addClass('active') 
      // hide previously active node
      .siblings().removeClass('active');
}

// show previous recipe
prev.on('click', function(e){
  // prevent scrolling to top
  e.preventDefault(); 

  var previousNode = recipes.filter('.active').prev();
  show(previousNode);
  index > 0 ? index-- :  0;

  // refresh values to original yield when previous recipe shown
  for (var i = 0; i < outputAmountList.length; i++) {
    outputAmountList[i].innerHTML = ingredientAmountList[i].innerHTML;
  }
});

// show next recipe
next.on('click', function(e){
  // prevent scrolling to top
  e.preventDefault(); 
  var nextNode = recipes.filter('.active').next();
  show(nextNode);
  index < ogYields.length - 1 ? index++ : 0;

  // refresh values to original yield when next recipe shown
  for (var i = 0; i < outputAmountList.length; i++) {
    outputAmountList[i].innerHTML = ingredientAmountList[i].innerHTML;
  }
});

// update yield based on click (step up)
function increaseYield() {
  var currentYield = Number(currentYields[index].innerHTML);
  currentYield = isNaN(currentYield) ? 1 : currentYield;
  currentYield+=currentIncrement;
  // save new value
  currentYields[index].innerHTML = currentYield;

  //console.log("current yield:",currentYields);
  // if yield increases and is not equal to original yield, update yield by (currentYield/ogYield * amount)
  for (var i = 0; i < outputAmountList.length; i++) {
    if (ingredientAmountList[i].innerHTML == "a") {
      ingredientAmountList[i].innerHTML = 1;
      outputAmountList[i].innerHTML = ingredientAmountList[i].innerHTML; 
    } 
    outputAmountList[i].innerHTML = currentYield/ogYields[index].innerHTML * ingredientAmountList[i].innerHTML;
  }
}

// update yield based on click (step down)
function decreaseYield() {
  var currentYield = Number(currentYields[index].innerHTML);
  currentYield = isNaN(currentYield) ? 1 : currentYield;
  // if value less than 0, set to 0 or keep as current value
  currentYield <= 0 ? 0 : currentYield;
  // only decrease if value is greater than 1 (no zero)
  ( currentYield > 0 && currentYield > currentIncrement) ? currentYield-=currentIncrement : 0;
  // save new value
  currentYields[index].innerHTML = currentYield;
  
  // if yield increases and is not equal to original yield, update yield by (currentYield/ogYield * amount)
  for (var i = 0; i < outputAmountList.length; i++) {
    if (ingredientAmountList[i].innerHTML == "a") {
      ingredientAmountList[i].innerHTML = 1;
      outputAmountList[i].innerHTML = ingredientAmountList[i].innerHTML; 
    } 
    outputAmountList[i].innerHTML = currentYield/ogYields[index].innerHTML * ingredientAmountList[i].innerHTML;
  }
}

function increaseIncrement() {
  //currentIncrement = isNaN(currentIncrement) ? 1 : currentIncrement;
  currentIncrement < 1 ? currentIncrement += .25 : 1;

  console.log("current increment:",currentIncrement);
  currentIncrements[index].innerHTML = currentIncrement;

}


function decreaseIncrement() {
  currentIncrement > .25 ? currentIncrement -= .25 : .25;
  console.log("current increment:",currentIncrement);
  currentIncrements[index].innerHTML = currentIncrement;
}
