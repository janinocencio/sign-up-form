/****************** FUNCTIONS STARTS HERE ******************/

function labelOnNeutralState(input) {
    input.previousElementSibling.style.background = 'var(--color-2)';
    input.previousElementSibling.style.color = 'black';
    input.previousElementSibling.style.transform = 'translate(0.5rem, -1.25rem)';
    input.previousElementSibling.style.fontSize = '1rem';
    input.previousElementSibling.style.padding = '0 1rem';
    input.previousElementSibling.style.transition = '0.3s ease';
};

function labelOnUnfocusedState(input) {
    input.previousElementSibling.style.background = '';
    input.previousElementSibling.style.color = '';
    input.previousElementSibling.style.transform = '';
    input.previousElementSibling.style.fontSize = '';
    input.previousElementSibling.style.padding = '';
    input.previousElementSibling.style.transition = '0.3s ease';
}


/****************** FUNCTIONS ENDS HERE ******************/


const inputs = document.querySelectorAll('.form-sub-container input');
const inputArray = Array.from(inputs);

inputArray.forEach(input => {
    input.addEventListener('focus', () => {
        labelOnNeutralState(input);
    })
});

inputArray.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            labelOnUnfocusedState(input);
        }
    })
});


const submitBtn = document.querySelector('.right-container form > button');
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    inputArray.forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '0.2rem solid var(--color-1)'
            input.style.transition = '0.1s'
            input.previousElementSibling.style.background = 'var(--color-1)';
            input.previousElementSibling.style.color = 'black';
            input.previousElementSibling.style.transform = 'translate(0.5rem, -1.25rem)';
            input.previousElementSibling.style.fontSize = '1rem';
            input.previousElementSibling.style.padding = '0 1rem';
            input.previousElementSibling.style.transition = '0.3s ease';
            input.nextElementSibling.textContent = "*This field is required.";
            input.nextElementSibling.style.color = 'var(--color-1)';
        } else {
            switch(input.id) {
                case 'name_first':
                    const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)?$/
                    if (nameRegex.test(input.value.trim())) {
                        input.style.border = '0.2rem solid var(--color-4)'
                        input.style.transition = '0.1s'
                        input.previousElementSibling.style.background = 'var(--color-4)';
                        input.previousElementSibling.style.color = 'black';
                        input.previousElementSibling.style.transform = 'translate(0.5rem, -1.25rem)';
                        input.previousElementSibling.style.fontSize = '1rem';
                        input.previousElementSibling.style.padding = '0 1rem';
                        input.previousElementSibling.style.transition = '0.3s ease';
                        input.nextElementSibling.textContent = '';
                    } else {
                        input.style.border = '0.2rem solid var(--color-1)'
                        input.style.transition = '0.1s'
                        input.previousElementSibling.style.background = 'var(--color-1)';
                        input.previousElementSibling.style.color = 'black';
                        input.previousElementSibling.style.transform = 'translate(0.5rem, -1.25rem)';
                        input.previousElementSibling.style.fontSize = '1rem';
                        input.previousElementSibling.style.padding = '0 1rem';
                        input.previousElementSibling.style.transition = '0.3s ease';
                        input.nextElementSibling.textContent = "*Please input a valid name.";
                        input.nextElementSibling.style.color = 'var(--color-1)';
                    }
                    break;
                case 'name_last':
                    console.log('test2');
                    break;
                case 'email':
                    console.log('email');
                    break;
                case 'mobile':
                    console.log('mobile');
                    break;
                case 'password_orig':
                    console.log('passOrig');
                    break;
                case 'password_confirm':
                    console.log('passwordConfirm');
                    break;
            }
        }

    })
});