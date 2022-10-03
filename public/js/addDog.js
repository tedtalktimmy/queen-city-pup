const signupFormHandler = async (event) => {
  event.preventDefault();
  const dogNameEl = document.querySelector('#dogName');
  const dogInfoEl = document.querySelector('#dogInfo');
  const dogLocationsEl = document.querySelector('#dogLocations');

  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      dogName: dogNameEl.value,
      dogInfo: dogInfoEl.value,
      dogLocations: dogLocationsEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  if (response.ok) {
    alert('Welcome to our pack!');
    document.location.replace('/dates');
  } else {
    alert('Failed to sign up');
  }
  // response.json().then(data => console.log(data));
};

document.querySelector('.signup').addEventListener('submit', signupFormHandler);
