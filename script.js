if (localStorage.getItem('username') !== null) {
    // const btn = document.createElement('button');
    // btn.innerText = 'Login as existing user';
    // btn.id = 'existing';
    existing.addEventListener('click', () => {
        alert(`Logged in as ${localStorage.getItem('username')}`);
    });
    // Append the button to the document or a specific element.
    // document.body.appendChild(btn); // You can change 'document.body' to your target container.
}

// Assuming you have 'submit' and 'checkbox' elements defined.
const submit = document.getElementById('submit'); // Make sure you have 'submit' with an appropriate ID.
const checkbox = document.getElementById('checkbox'); // Make sure you have 'checkbox' with an appropriate ID.

submit.addEventListener('click', () => {
    const username = document.getElementById('username').value; // Assuming you have an input element with id 'username'.
    const password = document.getElementById('password').value; // Assuming you have an input element with id 'password'.

    if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    alert(`Logged in as ${username}`);
});