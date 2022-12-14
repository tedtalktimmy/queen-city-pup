const signupFormHandler = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector('#username');
  const passwordEl = document.querySelector('#password');
  const emailEl = document.querySelector('#email');
  // const dogNameEl = document.querySelector('#dogName');
  // const dogInfoEl = document.querySelector('#dogInfo');
  // const dogLocationsEl = document.querySelector('#dogLocations');

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      name: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
      // dogName: dogNameEl.value,
      // dogInfo: dogInfoEl.value,
      // dogLocations: dogLocationsEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  if (response.ok) {
    alert('Welcome to our pack!');
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
  // response.json().then(data => console.log(data));
};

document.querySelector('.signup').addEventListener('submit', signupFormHandler);
