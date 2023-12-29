// Main Targets
const submit = document.querySelector("button[type='submit']");
const form = document.querySelector('form');
// icons
const fnameIcon = form.querySelector('.nameGroup .fnameDiv i.far');
const lnameIcon = form.querySelector('.nameGroup .lnameDiv i.far');
const emailIcon = form.querySelector('.emailGroup i.far');
const textIcon = form.querySelector('.textareaGroup i.far');

// error message box 
const nameErr = form.querySelector('.nameGroup > span#nameErr');
const emailErr = form.querySelector('.emailGroup > span#emailErr');
const textErr = form.querySelector('.textareaGroup > span#textareaErr');

//  wrapper div for adding Success or Error Class
const fnameBox = form.querySelector(".nameGroup .fnameDiv");
const lnameBox = form.querySelector(".nameGroup .lnameDiv");
const emailBox = form.querySelector('.emailGroup');
const textBox = form.querySelector('.textareaGroup');
// main function

const checkValidation = () => {
  // all values 
  const fname = form.querySelector("input[id='fname']").value.trim();
  const lname = form.querySelector("input[id='lname']").value.trim();
  const email = form.querySelector("input[id='email']").value.trim();
  const text = form.querySelector("textarea").value.trim();
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ ;
// Regular Expression for Email validation 
  // Name validation
  if(fname.length != 0) {
    fnameBox.classList.add('success');
    fnameIcon.classList.add('fa-check-circle');
    submit.disabled = false;
  // if error occur previously 
    fnameIcon.classList.remove('fa-times-circle');
    fnameBox.classList.remove('error');
    nameErr.innerHTML = ' ' ;
  }else {
    fnameBox.classList.add('error');
    fnameIcon.classList.add('fa-times-circle');
    nameErr.innerHTML = '* Please Give Your Full Name !' ; 
      submit.disabled = true ;
    // if previously successful
    fnameBox.classList.remove('success');
    fnameIcon.classList.remove('fa-check-circle');
  }
  
  if(lname.length != 0) {
    lnameBox.classList.add('success');
    lnameIcon.classList.add('fa-check-circle');
      
  // if error occur previously 
    lnameIcon.classList.remove('fa-times-circle');
    lnameBox.classList.remove('error');
    nameErr.innerHTML = ' ' ;
  }else {
   lnameBox.classList.add('error');
    lnameIcon.classList.add('fa-times-circle');
    nameErr.innerHTML = '* Please Give Your Full Name !' ; 
      
      submit.disabled = true ;
    // if previously successful
    lnameBox.classList.remove('success');
    lnameIcon.classList.remove('fa-check-circle');
  }
  
  // email validation 
  
  if(email.match(regex) && email.length != 0 ) {
    
    emailBox.classList.add('success');
    emailIcon.classList.add('fa-check-circle');
    
    submit.disabled = false;
  // if error occur previously 
    emailIcon.classList.remove('fa-times-circle');
    emailBox.classList.remove('error');
    emailErr.innerHTML = ' ' ;
  }else {
    emailBox.classList.add('error');
    emailIcon.classList.add('fa-times-circle');
    emailErr.innerHTML = '* Please Give A Valid Email Address ! ' ;
    
      submit.disabled = true ;
      
  // if successful previously 
    emailIcon.classList.remove('fa-check-circle');
    emailBox.classList.remove('success');
  }
  
  // Textarea validation 
  if(text.length != 0 ) {
    
    textBox.classList.add('success');
      
  // if error occur previously
    textBox.classList.remove('error');
    textErr.innerHTML = ' ' ;
  } else {
    textBox.classList.add('error');
    textErr.innerHTML = ' * Please Write Something ! ' ;
      
      submit.disabled = true ;
  // if successful previously 
    textBox.classList.remove('success');
    
  }

effect(true);
}
// effect handler . this function will give runtime effect on the form input  
function effect(isClicked) {
if(isClicked){
form.addEventListener('change', checkValidation);
}else {
  
submit.addEventListener('click', checkValidation);
}
}

effect(false);