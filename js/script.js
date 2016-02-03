$(document).ready(function(){


  var animationName = 'animated bounce';
  var animationFlash = 'animated flash';
  var secondAnimation = 'animated jello';
  var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  var webHover = $('#web')
  var musicHover = $('#music')
  var designHover = $('#design')
  var personalHover = $('#personal')

  var $draggable =
  $('.draggable').draggabilly({

})

//navigate to links on drop
$('#cursor_normal').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
  $(this).attr('src','/website_pieces/cursor_lifted.png')
  } else {
  $(this).attr('src','/website_pieces/cursor_normal.png')
  }
  $(this).data("clicks", !clicks);
});



$('#cursor_normal').click(function(){
  $(this).attr('src','/website_pieces/cursor_lifted.png')
})


      $(function() {
           $( "#cursor_normal" ).draggable({
             containment: "parent"
           });

           //navigate to web
           $( "#web" ).droppable({
             drop: function() {
              location.href = 'http://jp-la.co/web.html'
              console.log('felt the drop on web');
      }

           });

           //navigate to design
           $( "#design" ).droppable({
             drop: function() {
               location.href = 'http://jp-la.co/art-design.html'
               console.log('felt the drop on design');
             }

           });

           //navigate to music
           $( "#music" ).droppable({
             drop: function() {
               location.href = 'http://soundcloud.com/dreamstrax'
               console.log('felt the drop on music');
             }
           });

          // navigate to personal
           $( "#personal" ).droppable({
             drop: function() {
               location.href = 'http://jp-la.co/portfolio.html'
               console.log('felt the drop on personal');
             }
           });

        });



//animate links effects


$('#web').hover(function(){
  $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
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
  $(this).addClass(animationName).one(animationend,function(){
      $(this).removeClass(animationName)
    });
})


})
