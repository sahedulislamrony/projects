  
 /*
  //Forward Moving Function start
  function slideChangeForward() {
    
if(document.getElementsByClassName("SlaiderItems")[0].classList.contains("active")){
  
        document.getElementsByClassName("SlaiderItems")[0].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[1].classList.add("active");
}else if(document.getElementsByClassName("SlaiderItems")[1].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[1].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[2].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[2].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[2].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[3].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[3].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[3].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[4].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[4].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[4].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[5].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[5].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[5].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[6].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[6].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[6].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[0].classList.add("active");
}}
//Forward Moving Function End

//Backward moving function start
function slideChangeBackward(){
  
if(document.getElementsByClassName("SlaiderItems")[0].classList.contains("active")){
  
        document.getElementsByClassName("SlaiderItems")[0].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[6].classList.add("active");
}else if(document.getElementsByClassName("SlaiderItems")[6].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[6].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[5].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[5].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[5].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[4].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[4].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[4].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[3].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[3].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[3].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[2].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[2].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[2].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[1].classList.add("active");
}
else if(document.getElementsByClassName("SlaiderItems")[1].classList.contains("active")){
document.getElementsByClassName("SlaiderItems")[1].classList.remove("active");
        document.getElementsByClassName("SlaiderItems")[0].classList.add("active");
}}
//Backward Moving Function End

//Button and Auto moving Function
//Right side 
document.querySelector(".SlaiderItems .right").addEventListener("click",slideChangeForward);
document.querySelector(".right").addEventListener("click", function (){
  
  this.setAttribute("style","transition:1s;color:#22d514f1;");
document.querySelector(".left").setAttribute("style","color:#9b89fef6;");
  
});
//left side
//auto moving 
setInterval(slideChangeForward,3700);
*/

// Slider for past projects  Start 
const rightBtn = document.querySelector('.SlaiderItems .right') ;
const leftBtn = document.querySelector('.SlaiderItems .left') ;

//  curred slider function
const slideShow = (slideItemsQuantity= 1 ,moveType = 'Forward') => {
  
  let maxIndex = slideItemsQuantity - 1 ; // max value of class index .
  let i = 0 , counter = 0; // initializer
 if ( moveType.match(/Forwards?/i) ) {
  // Forward moving function
  return () => {
   let slides = document.getElementsByClassName('SlaiderItems')[i];
  let queary = slides.classList.contains("active");
  // for creating Infinity loop we have to connect the last and first slides 
  if(i==maxIndex){
    slides.classList.remove('active');
    slides = document.getElementsByClassName('SlaiderItems')[0];
    slides.classList.add('active');
  }
  
  // Forward moving Queary
 else if(queary){
    slides.classList.remove('active');
    slides = document.getElementsByClassName('SlaiderItems')[i+1];
    slides.classList.add('active');
  }else{
     slides.classList.add('active');
  }
  i++;
  if(i >= slideItemsQuantity ){
    i = 0 
  }
  
} // Forward function

} else if (moveType.match(/backwards?/i) )
{
  // Backward moving function
  return () => {
   
   let slides = document.getElementsByClassName('SlaiderItems')[counter];
   let queary = slides.classList.contains("active");
  // for creating Infinity loop we have to connect the last and first slides 
  if(counter==0){
    slides.classList.remove('active');
    slides = document.getElementsByClassName('SlaiderItems')[maxIndex];
    slides.classList.add('active');
  }
  
  // Forward moving Queary
 else if(queary){
    slides.classList.remove('active');
    slides = document.getElementsByClassName('SlaiderItems')[counter-1];
    slides.classList.add('active');
  }else{
     slides.classList.add('active');
  }
  counter--;
  if(counter <= -1 ){
    counter = maxIndex
  }
} 

} // backward moving function 
};

 let forward = slideShow(7,'forward');
 let backward = slideShow(7,'backward');

 rightBtn.addEventListener('click',forward);
 leftBtn.addEventListener('click',backward);
 setInterval(forward,3700);//For Auto change effect 
// Slider for past projects  Start 

document.querySelector(".SlaiderItems .left").addEventListener("click",slideChangeBackward);
document.querySelector(".left").addEventListener("click", function (){
  
  this.setAttribute("style","transition:1s;color:#22d514f1;");
  
document.querySelector(".right").setAttribute("style","color:#9b89fef6;");
});