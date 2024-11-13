const scriptURL = 'https://script.google.com/macros/s/AKfycbxdicK_PivSP4gJj177sydPwD-qRsU4o-vZ5vKeFZQTPPqYHie5MGVDE3Y7KaZNx0hL/exec'


const form = document.forms['coding-workshop']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})