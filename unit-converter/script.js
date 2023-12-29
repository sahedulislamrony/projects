
"use strict";


//Get target
const inp = document.querySelector("#num");
const select = document.querySelector("#select");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

//main function
const convert_main = ()=> {
  const inpVal = document.querySelector("#num").value;
  
         
    const celTofahr = ()=> {
          const fahr = ((inpVal*9)/5)+32 ;
          result.innerHTML=`${inpVal}°C is equal to ${fahr}°F`;
        };
      
  const fahrToCel = ()=> {
        const Cel = ((inpVal-32)/9)*5;
        result.innerHTML = `${inpVal}°F is equal to ${Cel}°C`;
      };

 
  if(inpVal != "" )
  {
    
     const Temp = select.value;
     if (Temp == 1){
       celTofahr();
     }else if (Temp == 2){
       fahrToCel();
     }else {
       result.innerHTML = "<font style ='color:red'>Please Select An Unit</font>";
     }
    
  } else {
    result.innerHTML="<font style ='color:red'>Please input some value</font>";
  }
 
};

btn.addEventListener("click",convert_main);