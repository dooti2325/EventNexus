const scriptURL = 'https://script.google.com/macros/s/AKfycbzd0yj-Qhckixs2SkGM_e9KhZpyU-it_k4FiT6K-8zQIi3qwQL6I3vya-DeRAGunQu9bQ/exec'


const form = document.forms['event-reg-form']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
