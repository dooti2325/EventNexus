const scriptURL = 'https://script.google.com/macros/s/AKfycbyGZauZ8I2-IAYdYlm-tbK32uAzAVa6AilX46c7A99lTWPSbAGb2FFt7Zp1d7ZTV4t0kQ/exec'


const form = document.forms['coding-workshop-reg']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})