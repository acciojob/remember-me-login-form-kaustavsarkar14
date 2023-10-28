if (localStorage.getItem('username') !== null) {
	existing.style.display = "block"
    existing.addEventListener('click', () => {
        alert(`Logged in as ${localStorage.getItem('username')}`);
    });
}

const submit = document.getElementById('submit'); 
const checkbox = document.getElementById('checkbox'); 

submit.addEventListener('click', () => {
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value; 

    if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    alert(`Logged in as ${username}`);
});

