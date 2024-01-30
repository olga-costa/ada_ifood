const form = document.querySelector('.main_form')
const inputs = document.querySelectorAll('.form_input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = '/pessoas.html'
})



const init = () => {
    const formValue = getLocalStorage('main_form')
    inputs.forEach((input) => {
        const { name } = input
        if (!formValue) {
            return;
        }
        const newInputValue = formValue[name]
        if (newInputValue === undefined) {
            return;
        }
        input.value = formValue[name]
        if (input.type === 'checkbox') {
            input.checked = formValue[name]
        }
    })
}

init()

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        const { name, value, checked } = e.target
        const formValue = getLocalStorage('main_form')
        if (name === 'terms') {
            setLocalStorage('main_form', JSON.stringify({ ...formValue, [name]: checked }))
        } else {
            setLocalStorage('main_form', JSON.stringify({ ...formValue, [name]: value }))
        }
    })
})