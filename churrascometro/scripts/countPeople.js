const form = document.querySelector('.form_people_count')
const inputs = document.querySelectorAll('.form_input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = '/resultado.html'
})

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        const { name, value } = e.target
        const formValue = getLocalStorage('count_form')
        setLocalStorage('count_form', JSON.stringify({ ...formValue, [name]: value }))
    })
})