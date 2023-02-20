var prev = $('.prev');
var next = $('.next');
var recipes = $('.recipe-item');

var index = 0;

function show( node ){
  node.addClass('active') // show specified node
      .siblings().removeClass('active'); // hide previously active node
}

prev.on('click', function(e){
  e.preventDefault(); // avoid scrolling to top
  
  var previousNode = recipes.filter('.active').prev();
  show(previousNode);
});
next.on('click', function(e){
  e.preventDefault(); // prevent scrolling to top
  var nextNode = recipes.filter('.active').next();
  show(nextNode);
});

$('.recipes li:first').addClass('active');