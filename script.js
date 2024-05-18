document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to login. Check your email and password.');
        }
        return response.json();
    })
    .then(data => {
        alert('Login successful!');
        // Handle login success
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = error.message || 'Failed to login';
    });
});
