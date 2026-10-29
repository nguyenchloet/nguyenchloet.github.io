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

// Show previous recipe
prev.on('click', function(e) {
  e.preventDefault();

  var activeRecipe = recipes.filter('.active');
  var previousNode = activeRecipe.prev('.recipe-item');

  if (!previousNode.length) return;

  show(previousNode);
  index = recipes.index(previousNode);
});

// Show next recipe
next.on('click', function(e) {
  e.preventDefault();

  var activeRecipe = recipes.filter('.active');
  var nextNode = activeRecipe.next('.recipe-item');

  if (!nextNode.length) return;

  show(nextNode);
  index = recipes.index(nextNode);
});

// update yield based on click (step up)
function increaseYield() {
  // find currently displayed recipe yield and increment values
  var activeRecipe = recipes.filter('.active');
  if (!activeRecipe.length) return; // No active recipe found, exit the function

  // find yield and increment values inside the active recipe
  var currentYieldElement = activeRecipe.find('.yield-output');
  var originalYieldElement = activeRecipe.find('.og-yield');
  var incrementElement = activeRecipe.find('.increment-output');

  // get current yield and increment values
  var currentYield = Number(currentYieldElement.text());
  var originalYield = Number(originalYieldElement.text());
  var currentIncrement = parseFloat(incrementElement.text());

  // Ensure current yield is a valid number
  currentYield = isNaN(currentYield) ? 1 : currentYield;

  // Increase the yield by the increment value
  currentYield += currentIncrement;

  // Update the yield display
  currentYieldElement.text(currentYield);

  // Update only ingredients in the active recipe
  activeRecipe.find('.ingredient').each(function() {
  var ingredient = $(this);

  ingredient.find('.ingredient-amount').each(function() {
    var amountElement = $(this);
    var outputElement = amountElement.next('.output-amount');
    var originalAmount = amountElement.text().trim();
    var amount = Number(originalAmount);

    if (!outputElement.length) return;

    if (Number.isFinite(amount) && originalYield > 0) {
      var scaledAmount = amount * currentYield / originalYield;
      outputElement.text(Number(scaledAmount.toFixed(3)));
    } else {
      outputElement.text(originalAmount);
    }
  });
});
}

// update yield based on click (step down)
function decreaseYield() {
  // find currently displayed recipe yield and increment values
  var activeRecipe = recipes.filter('.active');
  if (!activeRecipe.length) return; // No active recipe found, exit the function

  // find yield and increment values inside the active recipe
  var currentYieldElement = activeRecipe.find('.yield-output');
  var originalYieldElement = activeRecipe.find('.og-yield');
  var incrementElement = activeRecipe.find('.increment-output');

  // get current yield and increment values
  var currentYield = Number(currentYieldElement.text());
  var originalYield = Number(originalYieldElement.text());
  var currentIncrement = parseFloat(incrementElement.text());

  // Ensure current yield is a valid number
  if (!Number.isFinite(currentYield) ||
      !Number.isFinite(originalYield) ||
      !Number.isFinite(currentIncrement) ||
      originalYield <= 0) return;
 
  // Decrease the yield by the increment value, ensuring it doesn't go below zero
  currentYield = Math.max(1, currentYield - currentIncrement);

  // Update the yield display
  currentYieldElement.text(currentYield);

  // Update only ingredients in the active recipe
  activeRecipe.find('.ingredient').each(function() {
  var ingredient = $(this);

  ingredient.find('.ingredient-amount').each(function() {
    var amountElement = $(this);
    var outputElement = amountElement.next('.output-amount');
    var originalAmount = amountElement.text().trim();
    var amount = Number(originalAmount);

    if (!outputElement.length) return;

    if (Number.isFinite(amount) && originalYield > 0) {
      var scaledAmount = amount * currentYield / originalYield;
      outputElement.text(Number(scaledAmount.toFixed(3)));
    } else {
      outputElement.text(originalAmount);
    }
  });
});
}

function increaseIncrement() {
  // Find the currently displayed recipe
  var activeRecipe = recipes.filter('.active');
  if (!activeRecipe.length) return;

  // Get this recipe's increment display
  var incrementElement = activeRecipe.find('.increment-output');
  var currentIncrement = Number(incrementElement.text());

  if (!Number.isFinite(currentIncrement)) return;

  // Increase by 0.25
  currentIncrement += 0.25;
  incrementElement.text(Number(currentIncrement.toFixed(2)));
}


function decreaseIncrement() {
  // Find the currently displayed recipe
  var activeRecipe = recipes.filter('.active');
  if (!activeRecipe.length) return;

  // Get this recipe's increment display
  var incrementElement = activeRecipe.find('.increment-output');
  var currentIncrement = Number(incrementElement.text());

  if (!Number.isFinite(currentIncrement)) return;

  // Decrease by 0.25, with a minimum of 0.25
  currentIncrement = Math.max(0.25, currentIncrement - 0.25);
  incrementElement.text(Number(currentIncrement.toFixed(2)));
}
