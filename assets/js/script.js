// Add note function 
var noteItems = document.querySelector('.note-items');
var noteCard = document.querySelectorAll('.note-card');
var addNote = document.querySelector('.note-btn');
var showContent = document.querySelector('.show-content');
var noteResult = document.querySelectorAll('.note-result');
var textArea = document.querySelectorAll('.textarea');

addNote.addEventListener('click', function () {
  var noteList = document.createElement('li');
  noteList.className = 'note-card';
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
  noteItems.appendChild(noteList);
  var editBtn = document.querySelectorAll('.edit-btn');
  var deleteBtn = document.querySelectorAll('.delete-btn');
  editBtn.forEach(function (btn, index) {
    btn.addEventListener('click', function (e) {
      // var ele = e.target
      // ele = ele.parent
      console.log();
      var inputArea = e.target.parentElement.parentElement.nextElementSibling.children[1].firstElementChild;
      var textStoreArea = document.querySelectorAll('.textStore-area');
      if (inputArea.classList.contains('show-content')) {
        inputArea[index].classList.remove('show-content');
        textStoreArea[index].classList.add('show-content');
      } else {
        inputArea[index].classList.add('show-content');
      }
      // if (inputArea[index].classList.contains('show-content')) {
      //   inputArea[index].classList.toggle('show-content');
      //   textStoreArea[index].classList.toggle('show-content');
      // } else {
      //   inputArea[index].classList.add('show-content');
      // }
    });
  })


});

























