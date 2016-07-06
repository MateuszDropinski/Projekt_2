$(document).ready(function(){
    var back;
   $('.social img').hover(function(){
       var href = $(this).attr('data-image');
       back = $(this).attr('src');
       $(this).attr('src' , href).fadeIn(500);                       
   },function(){
       $(this).attr('src' , back);
   }); 
});