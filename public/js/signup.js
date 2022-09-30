const signupFormHandler = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-signup');
  const passwordEl = document.querySelector('#password-signup');
  const emailEl = document.querySelector('#email-signup');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .querySelector('submit', signupFormHandler);