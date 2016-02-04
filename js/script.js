$(document).ready(function(){

  var animationName = 'animated bounce';
  var animationFlash = 'animated flash';
  var secondAnimation = 'animated jello';
  var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('body').on('click', function() {
         $('body').jGravity({
              target: 'everything',
              ignoreClass: 'loft',
              weight:'light',
              depth: 5,
              drag: true
       });
   });
  $('#turntables_transp').click(function(value){
    document.querySelector("body").setAttribute("style","-webkit-filter:invert(" + 100 + "%)")
    $('body').css('background', 'black no-repeat center center fixed',
    '-webkit-filter', 'invert("100%")')
      console.log('felt');
  });


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
    document.querySelector("body").setAttribute("style","-webkit-filter:invert(" + 10 + "%)")
    $('body').css('background', 'white no-repeat center center fixed',
    '-webkit-filter', 'invert("100%")')
  } else {
    document.querySelector("body").setAttribute("style","-webkit-filter:invert(" + 100 + "%)")
    $('body').css('background', 'black no-repeat center center fixed',
    '-webkit-filter', 'invert("100%")')
  }
  $(this).data("clicks", !clicks);
});

hue = 0;
//hue rotate
$('#bed').click(function(){
  var hueRotate = function(){
    hue++;
    if(hue >= 360)
      hue = 0;
    $('body.css.background, #plant1_nobg').css("-webkit-filter", "hue-rotate("+hue+"deg)");
    setTimeout(hueRotate, 2);
  }
  hueRotate();
})


//navigate to links on drop
    var $draggable =
$('.draggable').draggabilly({

})
      $(function() {
           $( "#cursor_normal" ).draggable({

           });
           $( "#record1" ).draggable({

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
