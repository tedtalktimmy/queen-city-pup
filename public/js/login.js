const loginFormHandler = async (event) => {
  event.preventDefault();

  const emailEl = document.querySelector('#email');
  const passwordEl = document.querySelector('#password');

  let email = emailEl.value.trim();
  let password = passwordEl.value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dates');
    } else {
      alert('Failed to log in.');
    }
  }
};

document.querySelector('#login');
document.addEventListener('submit', loginFormHandler);
