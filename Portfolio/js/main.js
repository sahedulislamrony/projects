document.addEventListener('contextmenu', (e) => e.preventDefault());
const hire = document.querySelector("ul li #hireBtn");
hire.href = 'mailto:sahed.cse.just@gmail.com';
hire.target = '_blank'; // initial target

// Scrolling Effect Start 
const scroll = document.querySelector('body > section#pageWrapper > a.scroll');
const icon = document.querySelector('body > section#pageWrapper > a.scroll i');
  
scroll.href = '#bottom' ; // initial target
// EventListener for top-bottom navigator [ Jump Button ] 
window.addEventListener('scroll',()=>{
  
  scroll.style.opacity = 1 ;
  let scrollHeight = window.scrollY ;
  
  if(scrollHeight > 0 ) {
    scroll.href = '#top' ;
    icon.classList.add('fa-angle-up');
    icon.classList.remove('fa-angle-down');
  }
  else {
    scroll.href = '#bottom' ;
    icon.classList.add('fa-angle-down');
    icon.classList.remove('fa-angle-up');
  }
});
// Scrolling Effect End

// Slider for past projects  Start 
const rightBtn = document.querySelector('#pastProjects #rightArrow') ;
const leftBtn = document.querySelector('#pastProjects #leftArrow') ;

//  curred slider function
function slideShow(slideItemsQuantity= 1 ,moveType = 'Forward') {
  
  let maxIndex = slideItemsQuantity - 1 ; // max value of class index .
  let i = 0 , counter = 0; // initializer
 if ( moveType.match(/Forwards?/i) ) {
  // Forward moving function
  return () => {
   let slides = document.getElementsByClassName('slideElements')[i];
  let queary = slides.classList.contains("show");
  // for creating Infinity loop we have to connect the last and first slides 
  if(i==maxIndex){
    slides.classList.remove('show');
    slides = document.getElementsByClassName('slideElements')[0];
    slides.classList.add('show');
  }
  
  // Forward moving Queary
 else if(queary){
    slides.classList.remove('show');
    slides = document.getElementsByClassName('slideElements')[i+1];
    slides.classList.add('show');
  }else{
     slides.classList.add('show');
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
   
   let slides = document.getElementsByClassName('slideElements')[counter];
   let queary = slides.classList.contains("show");
  // for creating Infinity loop we have to connect the last and first slides 
  if(counter==0){
    slides.classList.remove('show');
    slides = document.getElementsByClassName('slideElements')[maxIndex];
    slides.classList.add('show');
  }
  
  // Forward moving Queary
 else if(queary){
    slides.classList.remove('show');
    slides = document.getElementsByClassName('slideElements')[counter-1];
    slides.classList.add('show');
  }else{
     slides.classList.add('show');
  }
  counter--;
  if(counter <= -1 ){
    counter = maxIndex
  }
} 

} // backward moving function 

};

 let forward = slideShow(5,'forward');
 let backward = slideShow(5,'backward');

 rightBtn.addEventListener('click',forward);
 leftBtn.addEventListener('click',backward);
  setInterval(forward,5000);//For Auto change effect 
// Slider for past projects  Start 


