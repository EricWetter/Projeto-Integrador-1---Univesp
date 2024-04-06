document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  var taskInput = document.getElementById('taskInput');
  var dateInput = document.getElementById('dateInput');
  var taskList = document.getElementById('taskList');
  var taskText = taskInput.value.trim();
  var taskDate = dateInput.value;

  if (taskText) {
    var listItem = document.createElement('li');
    var textSpan = document.createElement('span');
    var dateSpan = document.createElement('span');
    var completeCheckbox = document.createElement('input');
    var deleteButton = document.createElement('button');

    textSpan.textContent = taskText;
    dateSpan.textContent = taskDate ? ' - ' + new Date(taskDate + 'T00:00:00').toLocaleDateString() : '';
    completeCheckbox.type = 'checkbox';
    deleteButton.textContent = 'Excluir';

    completeCheckbox.classList.add('complete');
    deleteButton.classList.add('delete');

    deleteButton.onclick = function() {
      listItem.remove();
    };
    completeCheckbox.onclick = function() {
      listItem.classList.toggle('completed', completeCheckbox.checked);
    };

    listItem.appendChild(completeCheckbox);
    listItem.appendChild(textSpan);
    listItem.appendChild(dateSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
    dateInput.value = '';
  }
}

/*Bloco de anotações*/

document.getElementById('addNoteBtn').addEventListener('click', addNote);

function addNote() {
  var noteTitleInput = document.getElementById('noteTitleInput');
  var noteInput = document.getElementById('noteInput');
  var noteDateInput = document.getElementById('noteDateInput');
  var notesList = document.getElementById('notesList');
  var noteTitle = noteTitleInput.value.trim();
  var noteText = noteInput.value; // Removendo a função trim para preservar espaços em branco
  var noteDate = noteDateInput.value;

  if (noteText) {
    var listItem = document.createElement('li');
    var titleSpan = document.createElement('span');
    var textDiv = document.createElement('div'); // Alterando para criar um div para o texto
    var dateSpan = document.createElement('span');
    var editButton = document.createElement('button');
    var deleteButton = document.createElement('button');

    titleSpan.textContent = noteTitle;
    textDiv.innerText = noteText; // Usando innerText para preservar quebras de linha e parágrafos
    dateSpan.textContent = noteDate ? ' - ' + new Date(noteDate + 'T00:00:00').toLocaleDateString() : '';
    editButton.textContent = 'Editar';
    deleteButton.textContent = 'Excluir';

    editButton.classList.add('edit');
    deleteButton.classList.add('delete');

    editButton.onclick = function() {
      editNote(listItem, titleSpan, textDiv, dateSpan);
    };
    deleteButton.onclick = function() {
      listItem.remove();
    };

    listItem.appendChild(titleSpan);
    listItem.appendChild(textDiv);
    listItem.appendChild(dateSpan);

    var actionsDiv = document.createElement('div');
    actionsDiv.classList.add('note-actions');
    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);
    listItem.appendChild(actionsDiv);

    notesList.appendChild(listItem);

    noteTitleInput.value = '';
    noteInput.value = '';
    noteDateInput.value = '';
  }
}

function editNote(listItem, titleSpan, textDiv, dateSpan) {
  var titleInput = document.createElement('input');
  var textInput = document.createElement('textarea');
  var dateInput = document.createElement('input');
  var saveButton = document.createElement('button');

  titleInput.type = 'text';
  titleInput.value = titleSpan.textContent;
  textInput.value = textDiv.innerText; // Usando innerText para obter o conteúdo do div com quebras de linha
  dateInput.type = 'date';
  dateInput.value = dateSpan.textContent ? new Date(dateSpan.textContent.replace(' - ', '') + 'T00:00:00').toISOString().split('T')[0] : '';

  saveButton.textContent = 'Salvar';
  saveButton.onclick = function() {
    saveEditedNote(listItem, titleInput, textInput, dateInput, titleSpan, textDiv, dateSpan);
  };

  listItem.insertBefore(titleInput, titleSpan);
  listItem.insertBefore(textInput, textDiv);
  listItem.insertBefore(dateInput, dateSpan);
  listItem.insertBefore(saveButton, listItem.children[3]);
  listItem.removeChild(titleSpan);
  listItem.removeChild(textDiv);
  listItem.removeChild(dateSpan);
  listItem.children[3].style.display = 'none'; // Esconde o botão de editar
  listItem.children[4].style.display = 'none'; // Esconde o botão de excluir
}

function saveEditedNote(listItem, titleInput, textInput, dateInput, titleSpan, textDiv, dateSpan) {
  var newTitle = titleInput.value.trim();
  var newText = textInput.value;
  var newDate = dateInput.value;

  if (newText) {
    titleSpan.textContent = newTitle;
    textDiv.innerText = newText; // Usando innerText para inserir o texto com quebras de linha
    dateSpan.textContent = newDate ? ' - ' + new Date(newDate + 'T00:00:00').toLocaleDateString() : '';
    listItem.insertBefore(titleSpan, titleInput);
    listItem.insertBefore(textDiv, textInput);
    listItem.insertBefore(dateSpan, dateInput);
    listItem.removeChild(titleInput);
    listItem.removeChild(textInput);
    listItem.removeChild(dateInput);
    listItem.removeChild(listItem.querySelector('button')); // Remove o botão de salvar

    // Restaura os botões de editar e excluir
    listItem.children[3].style.display = 'inline';
    listItem.children[4].style.display = 'inline';
  }
}
