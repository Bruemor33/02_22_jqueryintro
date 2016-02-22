console.log("Hello World!");

var $ = require('jquery');

$('li').hide(); //this is to hide my list items until I need them.

$('ul').hover( //Use .hover in order to add a class that I can then style within css.
  function(){
    $(this).addClass('hover-background');
  }, function(){
    $(this).removeClass('hover-background');
  }
);

// $('ul').click(function{
//   $('li').slideDown( 'slow', function(){
//
//   });
// });
$('.my-files').click(function() {
  $( '#local' ).slideDown( "slow", function() {
    // Animation complete.
  });
});
