const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // Get trimmed input text
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.onclick = () => {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText) {
                li.firstChild.textContent = newTaskText; // Update task text
            }
        };

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => {
            li.classList.add('fade-out'); // Add fade-out class for animation
            setTimeout(() => {
                taskList.removeChild(li); // Remove task after animation
            }, 500); // Wait for fade-out to finish before removing
        };

        li.appendChild(editButton); // Add edit button to the list item
        li.appendChild(deleteButton); // Add delete button to the list item
        taskList.appendChild(li); // Add list item to the task list
        taskInput.value = ''; // Clear the input field
    } else {
        // Trigger shake effect on empty input
        taskInput.classList.add('error');
        setTimeout(() => {
            taskInput.classList.remove('error'); // Remove error class after shaking
        }, 500); // Duration of shake animation
    }
});
