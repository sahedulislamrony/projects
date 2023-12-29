document.addEventListener("contextmenu", function (Sahed){
  Sahed.preventDefault();
});

//Navigation bar icon change when click
$(document).ready(function (){
  $(".navbar-toggler").click(function(){
    
    if($(".navbar-toggler span i").hasClass("fa-bars")){
      
   $(".navbar-toggler span i").addClass("fa-times");
   $(".navbar-toggler span i").removeClass("fa-bars");
   
    }else{
         
   $(".navbar-toggler span i").removeClass("fa-times");
   $(".navbar-toggler span i").addClass("fa-bars");
   
    }
    
  });
  
});