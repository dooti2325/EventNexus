const scriptURL = 'https://script.google.com/macros/s/AKfycbxtQkVmK53QX7jbD4oDdGc1lmK8XwGZkL7XOsPXLGj3jSvxkOZK7Nx7MoHqUqnJlnlg/exec'


const form = document.forms['coding-workshop']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})