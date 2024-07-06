const apiUrl = 'http://localhost:5000/users';

document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('first_name', document.getElementById('firstName').value);
    formData.append('last_name', document.getElementById('lastName').value);
    formData.append('dni', document.getElementById('dni').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('image', document.getElementById('image').files[0]);

    const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData
    });

    const user = await response.json();
    displayUser(user);
});

async function fetchUsers() {
    const response = await fetch(apiUrl);
    const users = await response.json();
    users.forEach(displayUser);
}

function displayUser(user) {
    const userDiv = document.createElement('div');
}