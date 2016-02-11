$(document).ready(function(){

  var animationName = 'animated bounce';
  var animationFlash = 'animated flash';
  var secondAnimation = 'animated jello';
  var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//function to create a buffer stream that will push new elements into an array and print the tip as a list item
// function createRandomTextNode(tip){
//
//   return($( "<li>" + tip + "</li>" ))
//
// }
// //empty array for text nodes
// var randomTextBuffer = [];

//random text nodes to be pushed
// randomTextBuffer.push( createRandomTextNode('click on the right turntable') )
// randomTextBuffer.push( createRandomTextNode('try dragging a record on to the turntable') )
// randomTextBuffer.push( createRandomTextNode('hit the G key to really screw this site up') )
// randomTextBuffer.push( createRandomTextNode('almost all furniture can be dragged around') )
// randomTextBuffer.push( createRandomTextNode('the i button hides this info') )
// randomTextBuffer.push( createRandomTextNode('navigate with left and right arrows') )

//floating point number between 0-1
// var i = Math.random();

//we need a range from 0-5 so that it can be used as an index to retrieve the string from the r_text array
// i = 6 * i;

// multiply random floating point number so that we get a number (again a floating point) that ranges from 0.0 to 6.0.
//The Math.floor() is used to round down this number.
// Thus, 0.345... would result in 0 and 5.893.. would be floored to 5.



//create random text array object
var r_text = new Array ();
r_text[0] = 'click on the right turntable';
r_text[1] = 'click and drag a record on to the turntable';
r_text[2] = 'hit the G key to destroy this room';
r_text[3] = 'all furniture can be dragged around';
// r_text[4] = 'the ? button hides the info above';
r_text[4] = 'navigate with left and right arrows';

 $('#info').click(function(){
  var i = Math.floor(5 * Math.random())
  var randomTip = r_text[i]
  // console.log(randomTip);

  $( ".toolTips" ).text(randomTip).fadeToggle( "slow", "linear")
  //  .animate({opacity:0})

});
//


// $(window).load(function() {
//   $(".btn-nav").on("click tap", function() {
//     $(".nav-container").toggleClass("showNav hideNav").removeClass("hidden");
//     $(this).toggleClass("animated");
//   });
// });




//gravity keybind to G
var xTriggered = 0;
$( "html" ).keypress(function( event ) {
  if ( event.which == 71 ) {
     event.preventDefault();
  }
  xTriggered++;
  var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
  console.log( msg, "html" );
  console.log( event );

         $('html').jGravity({
              target: 'everything',
              weight:'light',
              depth: 1,
              drag: true
       });

});
//end keybinding


// jump to sections on click //




  // $("#design").click(function() {
  //     $('html,body').animate({
  //         scrollTop: $(".designSection").offset().top},
  //         'slow');
  // });


// $("#section-section1").on("click", function( e ) {
//
//     e.preventDefault();
//
//     $("body, html").animate({
//         scrollTop: $( $(this).attr('href') ).offset()
//     }, 600);
//
// });
//
//
//     $("#section-section2").on("click", function( e ) {
//
//         e.preventDefault();
//
//         $("body, html").animate({
//             scrollTop: $( $(this).attr('href') ).offset()
//         }, 600);
//
//     });
//
//
//     $("#section-section3").on("click", function( e ) {
//
//         e.preventDefault();
//
//         $("body, html").animate({
//             scrollTop: $( $(this).attr('href') ).offset()
//         }, 600);
//
//     });
//     $("#section-section4").on("click", function( e ) {
//
//         e.preventDefault();
//
//         $("body, html").animate({
//             scrollTop: $( $(this).attr('href') ).offset()
//         }, 600);
//
//     });
//     $("#section-section5").on("click", function( e ) {
//
//         e.preventDefault();
//
//         $("body, html").animate({
//             scrollTop: $( $(this).attr('href') ).offset()
//         }, 600);
//
//     });
//
//     $(".navDiv").on("click", function( e ) {
//
//         e.preventDefault();
//
//         $("body, html").animate({
//             scrollTop: $( $(this).attr('href') ).offset()
//         }, 600);
//
//     });

//end jump to sections on click //




// GRAVITY
  // $('#draftingtable_transp').on('click', function() {
  //        $('body').jGravity({
  //             target: 'everything',
  //             ignoreClass: 'loft',
  //             weight:'light',
  //             depth: 5,
  //             drag: true
  //      });
  //  });
// end gravity





// invert
  $('#turntables_transp').click(function(value){
    document.querySelector("body").setAttribute("style","-webkit-filter:invert(" + 100 + "%)")
    $('body').css('background', 'black no-repeat center center fixed',
    '-webkit-filter', 'invert("100%")')
      console.log('felt');
  });
// end invert



//cursor switch on click
  $('#cursor_normal').click(function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
      $(this).attr('src',"/website_pieces/cursor_normal.png")
    } else {
      $(this).attr('src',"/website_pieces/cursor_lifted.png")
    }
    $(this).data("clicks", !clicks);
  });

  //info switch
  // $('#closeInfo').click(function() {
  //   var clicks = $(this).data('clicks');
  //   if (clicks) {
  //     $(this).attr('src',"/website_pieces/info.png")
  //   } else {
  //     $(this).attr('src',"/website_pieces/closeInfo.png")
  //   }
  //   $(this).data("clicks", !clicks);
  // });



//invert on off on turntables_transp
$('#turntables_transp').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
    document.querySelector("body").setAttribute("style","-webkit-filter:invert(" + 100 + "%)")
    $('body').css('background', 'black no-repeat center center fixed',
    '-webkit-filter', 'invert("100%")')
  } else {
    document.querySelector("body").setAttribute("style","-webkit-filter:invert(" + 10 + "%)")
    $('body').css('background', 'white no-repeat center center fixed',
    '-webkit-filter', 'invert("100%")')
  }
  $(this).data("clicks", !clicks);
});

//

//hide paragraph on nav

$('#design, #web, #personal, #music, .horizon-prev, .horizon-next, .btn-nav').click(function(){
  $('.infoP').css('opacity','0')
})

// $('.btn-nav').click(function(){
//   $('ul').css('opacity','1')
// })

//show  info paragraph
$('#info').click(function(){
  $('ul').css('opacity','1')
  console.log('felt the visibility');
})
//


//hide info on mouseover
$('#info').click(function(){
  $('ul').fadeToggle('slow','linear')

})

function resizeRoom(size){
  var size = $('html').css('width','4900px')
  if (size) {
    $('body').css('position','absolute')
  }
  else {
    $('body').css('position','relative')

  }
}




//hue rotate
hue = 0;
$('plant2_transp').click(function(){
  var hueRotate = function(){
    hue++;
    if(hue >= 360)
      hue = 0;
    $('body').css("-webkit-filter", "hue-rotate("+hue+"deg)");
    setTimeout(hueRotate, 2);
  }
  hueRotate();
})


//navigate to links on drop

var $draggable =
$('.draggable').draggabilly({

});
      $(function() {
           $("#cursor_normal").draggable({

           });

           $("#record1").draggable({

           });

           $( "#web" ).droppable({
             drop: function() {
              location.href = "http://jp-la.co/web.html"
              console.log('felt the drop on web');
             }
           });

           $( "#design" ).droppable({
             drop: function() {
               location.href = 'http://jp-la.co/art-design.html'
               console.log('felt the drop on design');
             }
           });

           $( "#music" ).droppable({
             drop: function() {
               location.href = 'http://soundcloud.com/dreamstrax'
               console.log('felt the drop on music');
             }
           });

           $( "#personal" ).droppable({
             drop: function() {
               location.href = 'http://jp-la.co/portfolio.html'
               console.log('felt the drop on personal');
             }
           });
           $( "#turntables_transp" ).droppable({
             drop: function() {
               location.href = 'https://soundcloud.com/nous-disques/sets/dreams-of-the-grid-ep-us011'
               console.log('felt the drop on personal');
             }
           });

        });



//animate links effects

$('#web').hover(function(){
  $(this).addClass(secondAnimation).one(animationend,function(){
      $(this).removeClass(secondAnimation)
    });
})
$('#design').hover(function(){
  $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
    });
})
$('#personal').hover(function(){
  $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
    });
})
$('#music').hover(function(){
  $(this).addClass(secondAnimation).one(animationend,function(){
      $(this).removeClass(secondAnimation)
    });
})
$('#record2').hover(function(){
  $(this).addClass(secondAnimation).one(animationend,function(){
      $(this).removeClass(secondAnimation)
    });
})
$('#record1').hover(function(){
  $(this).addClass(secondAnimation).one(animationend,function(){
      $(this).removeClass(secondAnimation)
    });
})

});

// end jquery
