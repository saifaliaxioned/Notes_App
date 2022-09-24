// Add note function 
var showContent = document.querySelector('.show-content');
var addNote = document.querySelector('.note-btn');
var noteItems = document.querySelector('.note-items');

addNote.addEventListener('click', function () {
  createNote();
});

var createNote = function () {
  var noteList = document.createElement('li');
  noteList.classList.add('note-card');
  noteList.innerHTML = ` 
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
  var deleteBtn = noteList.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function () {
    noteItems.removeChild(noteList);
  });

  var editBtn = noteList.querySelector('.edit-btn');
  editBtn.addEventListener('click', function () {
    var textStoreArea = noteList.querySelector('.textStore-area');
    var inputArea = noteList.querySelector('.input-area');
    textStoreArea.classList.toggle('show-content');
    inputArea.classList.toggle('show-content');
    var noteResult = noteList.querySelector('.note-result');
    var textArea = noteList.querySelector('.textarea');
    var text = textArea.value;
    noteResult.innerHTML = text;
  });
  noteItems.appendChild(noteList);
}






















