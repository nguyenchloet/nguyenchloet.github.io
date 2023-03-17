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

prev.on('click', function(e){
  // prevent scrolling to top
  e.preventDefault(); 

  var previousNode = recipes.filter('.active').prev();
  show(previousNode);
});
next.on('click', function(e){
  // prevent scrolling to top
  e.preventDefault(); 
  var nextNode = recipes.filter('.active').next();
  show(nextNode);
});



// variable for original yield val
const ogYield = parseInt(document.getElementById('og-yield').value, 10);

// get ingredient value (hidden) 
var ingredientAmount = document.getElementsByClassName('ingredient-amount');

// get output ingredient span
var outputAmountList = document.getElementsByClassName('output-amount');


// get ingredient values on page load
window.onload = function() {
  for (var i = 0; i < outputAmountList.length; i++) {
    outputAmountList[i].innerHTML = ingredientAmount[i].innerHTML;
  }
}

// update yield based on click (step up)
function increaseYield() {
  var value = parseInt(document.getElementById('yield').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;

  document.getElementById('yield').value = value;
  // if yield increases and is not equal to original yield, update yield by (currentYield/ogYield * amount)
  for (var i = 0; i < outputAmountList.length; i++) {
    if (ingredientAmount[i].innerHTML == "a") {
      ingredientAmount[i].innerHTML = 1;
      outputAmountList[i].innerHTML = ingredientAmount[i].innerHTML; 
    } 
    outputAmountList[i].innerHTML = value/ogYield * ingredientAmount[i].innerHTML;
  }
}

// update yield based on click (step down)
function decreaseYield() {
  var value = parseInt(document.getElementById('yield').value, 10);
  value = isNaN(value) ? 1 : value;
  // if value less than 1, set to 1 or keep as current value
  value < 1 ? 1 : value;
  // only decrease if value is greater than 1 (no zero)
  value > 1 ? value-- : 1;
  
  document.getElementById('yield').value = value;
  // if yield increases and is not equal to original yield, update yield by (currentYield/ogYield * amount)
  for (var i = 0; i < outputAmountList.length; i++) {
    if (ingredientAmount[i].innerHTML == "a") {
      ingredientAmount[i].innerHTML = 1;
      outputAmountList[i].innerHTML = ingredientAmount[i].innerHTML; 
    } 
    outputAmountList[i].innerHTML = value/ogYield * ingredientAmount[i].innerHTML;
  }
}

