console.log("if you have opened this up, i will assume you're also a programmer. If so hit me up! I'd love to talk some code, and see if theres a way we can collaborate.");

$(document).ready(function(){


  var animationName = 'animated bounce';
  var animationFlash = 'animated flash';
  var secondAnimation = 'animated jello';
  var bounceInLeft = 'animated bounceInLeft';
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
// $('body').hover(function() {
//     $(this).animate({opacity: 1}, 8000);
// }, function() {
//     $(this).animate({opacity: 0}, 1000);
// })
 // $( ".infoP:hidden" ).delay(1000)
 // $( ".designDiv:hidden" ).delay(4500).fadeIn(3073)
 // $( ".musicDiv:hidden" ).delay(5000).fadeIn(3073)
 // $( ".webDiv:hidden" ).delay(3500).fadeIn(3073)
 // $( ".personalDiv:hidden" ).delay(4000).fadeIn(3073)
 // $( ".group:hidden" ).delay(2000).fadeIn(1073)

//create random text array object
var r_text = [
'this button toggles the info above',
'all furniture can be dragged around!',
'hit the G key to destroy this room!',
'throw stuff around once you press G!',
'click on the turntables'

]
var index = 0;
 $('#info').click(function(){
   $(".toolTips").text(r_text[index])
   index = (index + 1) % r_text.length ;

});
//

//gravity keybind to G
var xTriggered = 0;
var gKey = 103;
$( "body" ).keypress(function( event ) {
  if ( event.which == gKey )
   {
     event.preventDefault();
     $('body').jGravity({
          target: '.group',
          // ignoreClass: 'hvr-bob',
          weight:25,
          depth: 50,
          drag: true

   });
  }
  else if (event.which !=0 && event.charCode !=0 ) {
    return false;
  }

  xTriggered++;
  var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
  // console.log( msg, "html" );
  // console.log( event );


});
//end keybinding
var valueArray = [

   fridgeValTop = $('#fridge_transp').css('top'),
   fridgeValLeft = $('#fridge_transp').css('left'),
   plant1Top = $('#plant1_transp').css('top'),
   plant1Left = $('#plant1_transp').css('left'),
   foodValTop = $('#food').css('top'),
   foodValLeft = $('#food').css('left'),
   plant2ValTop = $('#plant2_transp').css('top'),
   plant2ValLeft = $('#plant2_transp').css('left'),
]

// fixed bug where elements were ignoring draggable() because of the !important rule on top and left values
// instead we add a class without the important rule and remove the id which previously contained the styling
// March 8th, 2016
// console.log(valueArray);
var windowWidth = $(window).width();

if (windowWidth > 1580 && windowWidth < 1918) {
  // console.log('true');
  $('body').click(function(){
    $('#fridge_transp').addClass('importantFridge');
    $('#fridge_transp').removeAttr('id');
    $('#plant1_transp').addClass('importantPlant1');
    $('#plant1_transp').removeAttr('id');
    $('#food').addClass('importantFood');
    $('#food').removeAttr('id');
    $('#plant2_transp').addClass('importantPlant2');
    $('#plant2_transp').removeAttr('id');
    $('#bed').addClass('importantBed');
    $('#bed').removeAttr('id');
    $('#ashtray').addClass('importantAshtray');
    $('#ashtray').removeAttr('id');
    $('#design').addClass('importantDesign');
    // $('#design').removeAttr('id');
    // console.log('removed all ids and added new classes');
  })
}
 $(window).on('resize', function(){
    var win = $(this)
    if (win.width() < 1580)  {
    $('.importantFridge').attr('id','fridge_transp');
    $('#fridge_transp').removeClass('importantFridge');
    $('.importantPlant1').attr('id','plant1_transp');
    $('#plant1_transp').removeClass('importantPlant1');
    $('.importantPlant2').attr('id','plant2_transp');
    $('#plant2_transp').removeClass('importantPlant2');
    $('.importantFood').attr('id','food');
    $('#food').removeClass('importantFood');
    $('.importantBed').attr('id','bed');
    $('#bed').removeClass('importantBed');
    $('.importantAshtray').attr('id','ashtray');
    $('#ashtray').removeClass('importantAshtray');
    $('.importantDesign').attr('id','design');
    $('#design').removeClass('importantDesign');
    // console.log('back to original ids');
  }
  if (win.width() >= 1918 ) {
    $('#fridge_transp').addClass('important_fridge_transp');
    $('#fridge_transp').removeAttr('id');
    $('#plant1_transp').addClass('important_plant1_transp');
    $('#plant1_transp').removeAttr('id');
    $('#food').addClass('important_food');
    $('#food').removeAttr('id');
    $('#plant2_transp').addClass('important_plant2_transp');
    $('#plant2_transp').removeAttr('id');
    $('#bed').addClass('important_bed');
    $('#bed').removeAttr('id');
    $('#ashtray').addClass('important_ashtray');
    $('#ashtray').removeAttr('id');
    $('#design').addClass('important_design');
    $('#design').removeAttr('id');
    $('#personal').addClass('important_personal');
    $('#personal').removeAttr('id');
    $('#music').addClass('important_music');
    $('#music').removeAttr('id');
    $('#web').addClass('important_web');
    $('#web').removeAttr('id');
    $('#carpet').addClass('important_carpet');
    $('#carpet').removeAttr('id');
    $('#couch').addClass('important_couch');
    $('#couch').removeAttr('id');
    $('#draftingtable_transp').addClass('important_draftingtable_transp');
    $('#draftingtable_transp').removeAttr('id');
    $('#lamp').addClass('important_lamp');
    $('#lamp').removeAttr('id');
    $('#record1').addClass('important_record1');
    $('#record1').removeAttr('id');
    $('#record2').addClass('important_record2');
    $('#record2').removeAttr('id');
    $('#turntables_transp').addClass('important_turntables_transp');
    $('#turntables_transp').removeAttr('id');
    $('#djtable_transparent').addClass('important_djtable_transparent');
    $('#djtable_transparent').removeAttr('id');
    // console.log('resizing with big screen classes');
  }

});

$(window).on('load',function(){
  var win = $(this)
  if (win.width() >= 1918 ) {
    $('#fridge_transp').addClass('important_fridge_transp');
    $('#fridge_transp').removeAttr('id');
    $('#plant1_transp').addClass('important_plant1_transp');
    $('#plant1_transp').removeAttr('id');
    $('#food').addClass('important_food');
    $('#food').removeAttr('id');
    $('#plant2_transp').addClass('important_plant2_transp');
    $('#plant2_transp').removeAttr('id');
    $('#bed').addClass('important_bed');
    $('#bed').removeAttr('id');
    $('#ashtray').addClass('important_ashtray');
    $('#ashtray').removeAttr('id');
    $('#design').addClass('important_design');
    $('#design').removeAttr('id');
    $('#personal').addClass('important_personal');
    $('#personal').removeAttr('id');
    $('#music').addClass('important_music');
    $('#music').removeAttr('id');
    $('#web').addClass('important_web');
    $('#web').removeAttr('id');
    $('#carpet').addClass('important_carpet');
    $('#carpet').removeAttr('id');
    $('#couch').addClass('important_couch');
    $('#couch').removeAttr('id');
    $('#draftingtable_transp').addClass('important_draftingtable_transp');
    $('#draftingtable_transp').removeAttr('id');
    $('#lamp').addClass('important_lamp');
    $('#lamp').removeAttr('id');
    $('#record1').addClass('important_record1');
    $('#record1').removeAttr('id');
    $('#record2').addClass('important_record2');
    $('#record2').removeAttr('id');
    $('#turntables_transp').addClass('important_turntables_transp');
    $('#turntables_transp').removeAttr('id');
    $('#djtable_transparent').addClass('important_djtable_transparent');
    $('#djtable_transparent').removeAttr('id');
    // console.log('give me my screen width bitch! ' + win.width());
  }

  $(window).on('resize',function(){
      if (win.width() < 1918)  {
        $(".important_fridge_transp").attr('id','fridge_transp');
        $('#fridge_transp').removeClass('important_fridge_transp');
        $('.important_plant1_transp').attr('id','plant1_transp');
        $('#plant1_transp').removeClass('important_plant1_transp');
        $('.important_food').attr('id','food')
        $('#food').removeClass('important_food');
        $('.important_plant2_transp').attr('id','plant2_transp')
        $('#plant2_transp').removeClass('important_plant2_transp');
        $('.important_bed').attr('id','bed')
        $('#bed').removeClass('.important_bed');
        $('.important_ashtray').attr('id','ashtray')
        $('#ashtray').removeClass('important_ashtray');
        $('.important_design').attr('id','design')
        $('#design').removeClass('important_design');
        $('.important_personal').attr('id','personal')
        $('#personal').removeClass('important_personal');
        $('.important_music').attr('id','music')
        $('#music').removeClass('important_music');
        $('.important_web').attr('id','web')
        $('#web').removeClass('important_web');
        $('.important_carpet').attr('id','carpet')
        $('#carpet').removeClass('important_carpet');
        $('.important_couch').attr('id','couch')
        $('#couch').removeClass('important_couch');
        $('.important_draftingtable_transp').attr('id','draftingtable_transp')
        $('#draftingtable_transp').removeClass('important_draftingtable_transp');
        $('.important_lamp').attr('id','lamp')
        $('#lamp').removeClass('important_lamp');
        $('.important_record1').attr('id','record1')
        $('#record1').removeClass('important_record1');
        $('.important_record2').attr('id','record2')
        $('#record2').removeClass('important_record2');
        $('.important_turntables_transp').attr('id','turntables_transp')
        $('#turntables_transp').removeClass('important_turntables_transp');
        $('.important_djtable_transparent').attr('id','djtable_transparent')
        $('#djtable_transparent').removeClass('important_djtable_transparent');

      }


  })


})

//

// invert
  $('#turntables_transp').click(function(value){
    document.querySelector("body").setAttribute("style","-webkit-filter:invert(" + 100 + "%)","-moz-filter:invert(" + 100 + "%)","filter:invert(" + 100 + "%)")
    $('body').css('background', 'black no-repeat center center fixed',
    '-webkit-filter', 'invert("100%")','-moz-filter:invert("100%")')
      // console.log('felt');
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

// $('#design, #web, #personal, #music, .horizon-prev, .horizon-next, .btn-nav').click(function(){
//   $('.infoP').css('opacity','0')
// })

//hide info on click
$('#info').click(function(){
      $('.infoP').fadeToggle(873)
  // $('.infoP').fadeToggle('slow','linear')
})

// show  info paragraph
// $('#info').click(function(){
//   $('.infoP').css('opacity','1')
//   // console.log('felt the visibility');
// })



//hue rotate
hue = 0;
$('#plant2_transp').click(function(){
  var hueRotate = function(){
    hue++;
    if(hue >= 360)
      hue = 0;
    $('#record1, #record2').css("-webkit-filter", "hue-rotate("+hue+"deg)");
    setTimeout(hueRotate, 0.5);
  }
  hueRotate();
  // console.log('called hue rotate');
})


//navigate to links on drop

var $draggable =
$('.draggable').draggabilly({

});
      $(function() {
          //  $("#cursor_normal").draggable({
           //
          //  });

           $("#record1").draggable({
           revert: 'invalid'
           });

           $( "#web" ).droppable({
             drop: function() {
              location.href = "http://jp-la.co/web.html"
              // console.log('felt the drop on web');
             }
           });

           $( "#design" ).droppable({
             drop: function() {
               location.href = 'http://jp-la.co/art-design.html'
              //  console.log('felt the drop on design');
             }
           });

           $( "#music" ).droppable({
             drop: function() {
               location.href = 'http://soundcloud.com/dreamstrax'
              //  console.log('felt the drop on music');
             }
           });

           $( "#personal" ).droppable({
             drop: function() {
               location.href = 'http://jp-la.co/portfolio.html'
              //  console.log('felt the drop on personal');
             }
           });
           $( "#turntables_transp" ).droppable({
             accept: '#record1',
             drop: function() {
               location.href = 'https://soundcloud.com/nous-disques/sets/dreams-of-the-grid-ep-us011'
              //  console.log('felt the drop on personal');
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
$('button').hover(function(){
  $(this).addClass(secondAnimation).one(animationend,function(){
      $(this).removeClass(secondAnimation)
    });
})

  $('.infoP').addClass(bounceInLeft).fadeIn('slow').one(animationend,function(){
      $('.infoP').removeClass(bounceInLeft)
    });


});


// end jquery
