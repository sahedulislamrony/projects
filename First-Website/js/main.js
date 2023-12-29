document.addEventListener("contextmenu", function (Sahed){
  Sahed.preventDefault();
});
$(document).ready(function (){
  $("textarea").empty("++");
});
function form_Validation(){
  //get all input box value
  const fname= document.querySelector("form #fname").value.trim();
  
  const lname= document.querySelector("form #lname").value.trim();
  
  const massage = document.querySelector("form #textarea").value.trim();
 
 
 
 //name field validation start
  // first name configuration

  if(fname==""){
    if(document.querySelector("form .name_field").classList.contains("fname_wrong")){
    }else{
      document.querySelector("form .name_field").classList.add("fname_wrong");
      document.querySelector("form .name_field").classList.remove("fname_success");
       
    }
  } else if(fname!=""){
    document.querySelector("form .name_field").classList.remove("fname_wrong");
 
    document.querySelector("form .name_field").classList.add("fname_success");
  }
  
  //last name confirmation
  if(lname==""){
    if(document.querySelector("form .name_field").classList.contains("lname_wrong")){
    }else{
      document.querySelector("form .name_field").classList.add("lname_wrong");
      document.querySelector("form .name_field").classList.remove("lname_success");
 
    }
  } else if(lname!=""){
    document.querySelector("form .name_field").classList.remove("lname_wrong");
 
    document.querySelector("form .name_field").classList.add("lname_success");
  }
  
 if(fname=="" && lname==""){
   
   document.querySelector("form .name_field").classList.add("all_wrong");
   document.querySelector("form .name_field").classList.remove("lname_wrong");
   document.querySelector("form .name_field").classList.remove("fname_wrong");
 }else if(fname!=""||ector!=""){
    document.querySelector("form .name_field").classList.remove("all_wrong");
 }
 
 //name field validation end
 
 //textarea validation
 if(massage==""){
  document.querySelector("form .textarea").classList.add("error");
 }else{
   document.querySelector("#textarea").classList.add("success");
   document.querySelector("form div.textarea").classList.remove("error");
 }
 
 
 
}

//email validation start
 function email_validation(){ 
   const email= document.querySelector("form #email").value.trim();

   if(email==""){
   document.querySelector("form .email_class").classList.add("wrong");
   document.querySelector("form .email_class").classList.remove("success");
 }else if(email!=""){
   
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(email.match(mailformat))
{
document.querySelector("form .email_class").classList.add("success");
document.querySelector("form .email_class").classList.remove("wrong");

 }else{
   document.querySelector("form .email_class").classList.add("wrong");
   
     }
   }
 }
//email validation end
document.querySelector("#submit").addEventListener("click",function(){
  form_Validation();
  email_validation();
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

const facebook = document.querySelector('.link_box > a#fb') ;
const instagram = document.querySelector('.link_box > a#insta') ;
const twitter = document.querySelector('.link_box > a#twitter') ;
const linkedIn = document.querySelector('.link_box > a#lIn') ;
const email= document.querySelector('.link_box > a#email') ;

facebook.href = "https://www.facebook.com/Sahedul33 " ;
instagram.href = " http://www.instagram.com/i.am.sahed" ;
twitter.href = " http://www.twitter.com/i_am_Sahed" ;
linkedIn.href = " " ;
email.href = "mailto: sahedulislamofficial@gmail.com " ;