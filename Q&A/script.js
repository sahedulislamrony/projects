// MCQ Start
let questions = document.querySelectorAll('.questions');
questions.forEach((question) =>{
let option = question.querySelectorAll('.options ul li');
let prevIndex = -1;
option.forEach((e,index)=>{
  e.addEventListener('click',()=>{
    let response =  e.parentNode.parentNode.parentNode.childNodes[3];
   if(e.value)
    {
    e.classList.add("success");
    if(response.classList.contains("wrong"))
    {
      response.classList.remove("wrong");
    }
    response.classList.add("success");
    response.innerHTML = 'correct!' ;
    }else {
    e.classList.add("wrong");
    if(response.classList.contains("success"))
    {
      response.classList.remove("success");
    }
    response.classList.add("wrong");
    response.innerHTML = 'incorrect' ;
    }
    if(prevIndex != -1)
    {
      if(option[prevIndex].classList.contains("success"))
      {
        option[prevIndex].classList.remove("success")
      } else{
        option[prevIndex].classList.remove("wrong")
        
      }
    }
    prevIndex = index;
  });
}); 
  
});

// MCQ End

// input box question start

let answers= [2,'Oxygen',1912,'Canberra','Pacific Ocean']; // i-th element contains q-i answers 

for (let i = 0; i < answers.length; i++) {
  if (typeof answers[i] === 'string') {
    answers[i] = answers[i].toUpperCase();
  }
}
let questionIn = document.querySelectorAll('.questionsIn');
questionIn.forEach((elm,index)=>{
  let form = elm.querySelector('form');
   form.addEventListener('submit',(e)=>{
    
    let input = form.querySelector('input[type="text"]');
    let response = elm.childNodes[3];
    if(input.value.trim().toUpperCase() == answers[index])
    {
      response.classList.add("success");
      input.classList.add("success");
      
      response.innerHTML = "correct!";
      if(response.classList.contains("wrong"))
      {
        response.classList.remove("wrong");
        input.classList.remove("wrong");
      }
      
    }else {
       response.classList.add("wrong");
       input.classList.add("wrong");
       response.innerHTML = "incorrect";
      if(response.classList.contains("success"))
      {
        response.classList.remove("success");
        input.classList.remove("success");
      }
     
    }
     
    e.preventDefault();
    
  });
});

// input box question end
