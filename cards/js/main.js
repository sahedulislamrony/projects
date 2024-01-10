let text = document.querySelectorAll("#card1 .card .text p");
text.forEach((el) => {
      el.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo justo vitae nunc volutpat, ac bibendum turpis tincidunt. Nullam facilisis, justo et bibendum ultricies, velit libero mattis velit, ut pellentesque ex mauris a libero." ;
});


let year = document.querySelector("#bottom .text .year");
let date = new Date();
if(date.getFullYear() != 2024)
{
  year.innerHTML = `2024-${date.getFullYear()}` ;
} 
else {
  year.innerHTML = date.getFullYear();
}

let links = document.querySelectorAll("#bottom .linkBox .icon .link a");

links.forEach((el,index) =>{
   el.target = "_blank" ;
});

let lin = document.querySelector("#bottom .linkBox .icon .link a.lin");
let tw = document.querySelector("#bottom .linkBox .icon .link a.tw");
let fb = document.querySelector("#bottom .linkBox .icon .link a.fb");
let github = document.querySelector("#bottom .linkBox .icon .link a.github");
let email = document.querySelector("#bottom .linkBox .icon .link a.email");

lin.href = "https://www.linkedin.com/in/sahedulislamrony";
tw.href = "https://www.twitter.com/i_am_sahed";
fb.href = "https://www.facebook.com/sahedulislamFB";
github.href = "https://github.com/sahedulislamrony";
email.href = "mailto:sahed.cse.just@gmail.com";

