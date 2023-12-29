"use strict"
const addBtn = document.querySelector("#add");


    //get Reference
 let notes = [];
  
  let textArea = document.querySelector("textarea");

  
  // Update Function
  const update = (e) =>{
    let  noteDiv = document.querySelector(".noteDiv");
   const isTextareaActive = noteDiv.classList.contains('hide');
    console.log(isTextareaActive)
  }
  
  
// Edit Function
const edit = (text="") =>{
  let  noteDiv = document.querySelector(".noteDiv");
  const editBtn = document.querySelector("#edit");
  noteDiv.classList.toggle('hide')
  editBtn.addEventListener('click',update);
};

// Delete Function
const deleteNote = () => {
   const note = document.querySelector('.note');
   note.remove() ;
};

// New note add function 
const addNote =(e) =>{
   const wrapper = document.querySelector(".wrapper");
   let noteID =  prompt(` Give a note id :`);
   const htmlData = `   <div class="note" data-id = ${noteID}>
              <div class="header">
                <span id="delete" onclick="deleteNote()"> Delete</span>
                <span id="edit" onclick="edit()" > Edit</span>
              </div>
              
              <div class="noteBody">
                <textarea class="textArea" >
                  
                </textarea>
                <div class="noteDiv">
                  
                </div>
              </div>
            </div> ` ;
            
    wrapper.insertAdjacentHTML("beforeend",htmlData); 
    
    notes.push(noteID);
    };
// Event Listeners 
addBtn.addEventListener("click", addNote);


// console.log("%c Text","give css style") 
