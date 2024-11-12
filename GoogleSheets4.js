const scriptURL = 'https://script.google.com/macros/s/AKfycbzHXwBRxXzesf6GOxb8WGrQpjbniVLVUqqDvcnmp5cQv0tHPE92SBBihEatnDKPKW-H4g/exec'


const form = document.forms['tree-plantation-drive']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})