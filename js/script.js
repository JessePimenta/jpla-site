$(document).ready(function(){

  var animationName = 'animated bounce';
  var animationFlash = 'animated flash';
  var secondAnimation = 'animated jello';
  var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


  $('#turntables_transp').click(function(value){
    document.querySelector("body").setAttribute("style","-webkit-filter:invert(" + 100 + "%)")
    $('body').css('background', 'black no-repeat center center fixed',
    '-webkit-filter', 'invert("100%")')
      console.log('felt');
  });



  $('#cursor_normal').click(function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
      $(this).attr('src',"/website_pieces/cursor_normal.png")
    } else {
      $(this).attr('src',"/website_pieces/cursor_lifted.png")
    }
    $(this).data("clicks", !clicks);
  });
  


//navigate to links on drop
    var $draggable =
$('.draggable').draggabilly({

})
      $(function() {
           $( "#cursor_normal" ).draggable({

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


});
