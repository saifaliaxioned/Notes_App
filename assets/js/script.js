// Add note function 
var noteItems = document.querySelector('.note-items');
var noteCard = document.querySelectorAll('.note-card');
var addNote = document.querySelector('.note-btn');
var showContent = document.querySelector('.show-content');

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
                <div class="input-area">
                  <textarea name="textarea" id="textarea"></textarea>
                </div>
              </div>
              `;
  noteItems.appendChild(notelist);
})























