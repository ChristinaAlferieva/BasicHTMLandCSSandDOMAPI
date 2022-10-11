(function() {
	'use strict';

	var notesApp = {
		noteDetails: document.getElementById('note_details'),
		noteTitle: document.getElementById('note_title'),
		title: document.getElementById('title'),
		noteMessage: document.getElementById('body'),
		colour: document.getElementById('colour'),
		addButton: document.getElementById('add_button'),
		errorMessage: document.getElementById('error'),
		editButton: document.querySelector('.edit'),
		deleteButton: document.querySelector('.delete'),
		notes: document.getElementById('notes'),
		myNotes: document.getElementById('my_notes'),
		editMode: false,

		init:function() {
			notesApp.title.addEventListener('focus', notesApp.clearError);
			notesApp.noteMessage.addEventListener('focus', notesApp.clearError);

			notesApp.title.addEventListener('keypress', notesApp.detectInput);
			notesApp.noteMessage.addEventListener('keypress', notesApp.detectInput);

			notesApp.addButton.addEventListener('click', notesApp.createNote);
		},
		
		detectInput:function() {
			if(!notesApp.title.value || !notesApp.noteMessage.value) {
				return;
			} else {
				notesApp.addButton.innerText = 'Add Note';
			}
		},
		
		createNote:function() {
			if(!notesApp.title.value || !notesApp.noteMessage.value) {
				if(!notesApp.title.value) {
				notesApp.title.classList.add('isEmpty');  
			}
			if(!notesApp.noteMessage.value) {
				notesApp.noteMessage.classList.add('isEmpty');
			}
			notesApp.errorMessage.innerHTML = '<span>* Values are missing</span>';
				return;
			} else {
			var note = new Object();

			note.title = notesApp.title.value;
			note.noteMessage = notesApp.noteMessage.value;
			note.colour = notesApp.colour.value;

			notesApp.addNote(note);
			}
		},
		
		clearError:function() {
			notesApp.title.classList.remove('isEmpty');
			notesApp.noteMessage.classList.remove('isEmpty');
			notesApp.errorMessage.innerHTML = '';
		},
		
		addNote:function(note) {
			var li = document.createElement('li'),
			title = document.createElement('span'),
			noteMessage = document.createElement('span'),
			deleteButton = document.createElement('span'),
			editButton = document.createElement('span'),
			footer = document.createElement('footer');

			deleteButton.className = 'delete';
			deleteButton.innerHTML = '<i class="fa fa-trash-o"></i> Delete';
			deleteButton.addEventListener('click', notesApp.deleteNote);

			editButton.className = 'edit';
			editButton.innerHTML = '<i class="fa fa-pencil-square-o"></i> Edit';
			editButton.addEventListener('click', notesApp.editNote);
			
			noteMessage.className = 'note_message';
			noteMessage.innerHTML = note.noteMessage;
			
			title.className = 'note_title';
			title.innerHTML = note.title;

			footer.appendChild(editButton);
		  
			li.className = note.colour;

			li.appendChild(title);
			li.appendChild(noteMessage);
			li.appendChild(deleteButton);
			li.appendChild(footer);

			notesApp.notes.prepend(li);

			notesApp.title.value = '';
			notesApp.noteMessage.value = '';

			if(!notesApp.editMode) {
				notesApp.addButton.innerText = 'Add Note';
			} else {
				setTimeout(function() {
					notesApp.addButton.innerText = 'Add Note';
				}, 150);
			}
		},
		
		editNote:function() {
			var li,
			title,
			noteMessage,
			colour,
			note = new Object();

			li = this.parentNode.parentNode;

			for(var i = 0; i < li.childNodes.length; i++) {
				if(li.childNodes[i].className === 'note_title') {
					title = li.childNodes[i].innerText;
				}
			}

			for(var i = 0; i < li.childNodes.length; i++) {
				if(li.childNodes[i].className === 'note_message') {
					noteMessage = li.childNodes[i].innerText;
				}
			}

			colour = li.getAttribute('class');

			note.title = title;
			note.noteMessage = noteMessage;
			note.colour = colour;
		  
			notesApp.openNote(note);

			setTimeout(function() {
				li.remove();
			}, 150);
		},
		
		openNote:function(note) {
			if(!notesApp.editMode) {
				notesApp.noteDetails.classList.add('hide');
				notesApp.myNotes.classList.add('hide');
		  
				setTimeout(function() {
					notesApp.noteTitle.innerText = 'Edit Note';
			  
					notesApp.addButton.innerText = 'Update';
					notesApp.addButton.removeEventListener('click', notesApp.createNote);
					notesApp.addButton.addEventListener('click', notesApp.saveNote);

					notesApp.title.value = note.title;
					notesApp.noteMessage.value = note.noteMessage;
					notesApp.colour.value = note.colour;

					notesApp.noteDetails.classList.remove('hide');
					notesApp.editMode = true;
				}, 150);
			} else {
				return;
			}  
		},
		
		saveNote:function() {
			notesApp.createNote();

			notesApp.noteDetails.classList.add('hide');
			notesApp.myNotes.classList.add('hide');
		
			setTimeout(function() {
				notesApp.noteTitle.innerText = 'Create a new note';

				notesApp.addButton.removeEventListener('click', notesApp.saveNote);
				notesApp.addButton.addEventListener('click', notesApp.createNote);

				notesApp.title.value = '';
				notesApp.noteMessage.value = '';

				notesApp.myNotes.classList.remove('hide');
				notesApp.noteDetails.classList.remove('hide');
				notesApp.editMode = false;
			}, 150);
		},  
		
		deleteNote:function() {
			this.parentNode.remove();
		}
	};

	notesApp.init();
})();