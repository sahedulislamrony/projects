const isEven = (number) =>{
  if(number!=0){
     if(isNaN(number)){ return undefined }
  if(number%2 == 0 ) { return true }
  if(number%2 != 0 ) { return false }
  }else{
    return `${number} is not Odd or Even . It's non Even natural number .`
    
  }
}
isEven(4);
console.dir(isEven);
console.dir(isEven());
