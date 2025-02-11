 console.log('this is a notes');

 showNotes();
 let addBtn= document.getElementById('addBtn')
 addBtn.addEventListener('click', function(e){

    let addTxt=document.getElementById('addTxt');
    let notes=localStorage.getItem('notes');

    if(notes == null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value='';

    showNotes();
 })

 // Function to show elements from localStorage

 function showNotes(){
    notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }else{
        notesObj= JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    })
    noteElm=document.getElementById('notes');
    if(notesObj.length != 0 ){
        noteElm.innerHTML=html;
    }else{
        noteElm.innerHTML= `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
 }
// Function to delete a note

function deleteNote(index){
    notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }else{
        notesObj= JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}

// search

let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){

    let inputVal = search.value.toLowerCase();
    let noteCard= document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardText= element.getElementsByTagName('p')[0].innerText;
        if(cardText.includes(inputVal)){
            element.style.display= 'block';
        }else{
            element.style.display= "none";
        }
    })
})