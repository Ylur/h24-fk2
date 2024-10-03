// Select the box and buttons
const box = document.getElementById('box');
const addClassBtn = document.getElementById('addClassBtn');
const removeClassBtn = document.getElementById('removeClassBtn');
const toggleClassBtn = document.getElementById('toggleClassBtn');
const checkClassBtn = document.getElementById('checkClassBtn');
const message = document.getElementById('message');

// Add 'active' class when "Add Class" button is clicked
addClassBtn.addEventListener('click', () => {
    box.classList.add('active');
});

// Remove 'active' class when "Remove Class" button is clicked
// Here we define an anonymous function
removeClassBtn.addEventListener('click', () => {
    box.classList.remove('active');
});

// explicitly declared function
function toggleClass() {
    box.classList.toggle('active');
}

// Toggle 'active' class when "Toggle Class" button is clicked
// Here we call an explicitly declared function
toggleClassBtn.addEventListener('click', toggleClass);

// Check if the 'active' class is present when "Check Class" button is clicked
checkClassBtn.addEventListener('click', () => {
    if (box.classList.contains('active')) {
        message.textContent = "The 'active' class is currently applied!";
        message.style.color = 'green';
    } else {
        message.textContent = "The 'active' class is NOT applied.";
        message.style.color = 'red';
    }
});
