const inputs = document.querySelectorAll('.form-sub-container input');
const inputArray = Array.from(inputs);

inputArray.forEach(input => {
    input.addEventListener('focus', function() {
        this.previousElementSibling.style.background = 'var(--color-2)';
        this.previousElementSibling.style.color = 'black';
        this.previousElementSibling.style.transform = 'translate(0.5rem, -1.25rem)';
        this.previousElementSibling.style.fontSize = '1rem';
        this.previousElementSibling.style.padding = '0 1rem';
        this.previousElementSibling.style.transition = '0.3s ease';
    })
})

inputArray.forEach(input => {
    input.addEventListener('blur', function() {
        if (input.value === '') {
            this.previousElementSibling.style.background = '';
            this.previousElementSibling.style.color = '';
            this.previousElementSibling.style.transform = '';
            this.previousElementSibling.style.fontSize = '';
            this.previousElementSibling.style.padding = '';
            this.previousElementSibling.style.transition = '0.3s ease';
        }
    })
});
