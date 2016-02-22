console.log("Hello World!");

var $ = require('jquery');

// $('li').hide(); //this is to hide my list items until I need them.

$('h2').hover( //Use .hover in order to add a class that I can then style within css.
  function(){
    $(this).addClass('hover-background');
  }, function(){
    $(this).removeClass('hover-background');
  }
);

$('h2').click(function(){
  $(this).addClass('hover-background');
});

// $('h2').click(
//   function(){
//     $(this).addClass('click-background');
//   }, function(){
//     $(this).removeClass('click-background');
//   };
// );

// $('ul').click(function{
//   $('li').slideDown( 'slow', function(){
//
//   });
// });
var allPanels = $('.accordian li').hide();

$('.accordian ul h2').click(function(){
  allPanels.slideUp();
  $(this).nextAll().slideDown();
});
