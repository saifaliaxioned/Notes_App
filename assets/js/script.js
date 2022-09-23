// Add note function 
var noteItems = document.querySelector('.note-items');
var noteCard = document.querySelectorAll('.note-card');
var addNote = document.querySelector('.note-btn');
var showContent = document.querySelector('.show-content');
var editBtn = document.querySelector('.edit-btn');
var deleteBtn = document.querySelector('.delete-btn');
var noteResult = document.querySelectorAll('.note-result');
var textArea = document.querySelectorAll('.textarea');

addNote.addEventListener('click', function () {
  var notelist = document.createElement('li');
  notelist.className = 'note-card';
  notelist.innerHTML = ` 
              <ul class="note-commandArea">
                <li class="command-btn">
                  <a href="#FIXME" title="Edit" rel="noopener noreferrer" class="edit-btn edit-icon">edit</a>
                </li>
                <li class="command-btn">
                  <a href="#FIXME" title="Delete" rel="noopener noreferrer" class="delete-btn delete-icon">delete</a>
                </li>
              </ul>
              <div class="result">
                <p class="textStore-area">
                  <span class="note-result">text</span>
                </p>
                <div class="input-area show-content">
                  <textarea name="textarea" class="textarea"></textarea>
                </div>
              </div>
              `;
  noteItems.appendChild(notelist);
});

editBtn.addEventListener('click',function () {

  
});























