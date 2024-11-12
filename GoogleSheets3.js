const scriptURL = 'https://script.google.com/macros/s/AKfycbzebg0n-QoVWRk_fY2M6q_lflG2nWCqAZSXa5II8GVH8Oe6MjahyRIUIX3vhh88Pr6U/exec'


const form = document.forms['cultural-fest']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})