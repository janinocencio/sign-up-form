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
};

function inputSubmitOnBlankState(input) {
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
};

function inputSubmitOnCorrectState(input) {
    input.style.border = '0.2rem solid var(--color-4)'
    input.style.transition = '0.1s'
    input.previousElementSibling.style.background = 'var(--color-4)';
    input.previousElementSibling.style.color = 'black';
    input.previousElementSibling.style.transform = 'translate(0.5rem, -1.25rem)';
    input.previousElementSibling.style.fontSize = '1rem';
    input.previousElementSibling.style.padding = '0 1rem';
    input.previousElementSibling.style.transition = '0.3s ease';
    input.nextElementSibling.textContent = '';
};

function inputSubmitOnWrongState(input) {
    input.style.border = '0.2rem solid var(--color-1)'
    input.style.transition = '0.1s'
    input.previousElementSibling.style.background = 'var(--color-1)';
    input.previousElementSibling.style.color = 'black';
    input.previousElementSibling.style.transform = 'translate(0.5rem, -1.25rem)';
    input.previousElementSibling.style.fontSize = '1rem';
    input.previousElementSibling.style.padding = '0 1rem';
    input.previousElementSibling.style.transition = '0.3s ease';
    input.nextElementSibling.style.color = 'var(--color-1)';
    if(input.id === 'name_first') input.nextElementSibling.textContent = "*Please input a valid name.";
    if(input.id === 'name_last') input.nextElementSibling.textContent = "*Please input a valid name.";
    if(input.id === 'email') input.nextElementSibling.textContent = "*Please input a valid e-mail address.";
    if(input.id === 'mobile') input.nextElementSibling.textContent = "*Please input a valid AU mobile number.";
    if(input.id === 'password_orig') input.nextElementSibling.textContent = "*Please input at least six characters.";
    if(input.id === 'password_confirm') input.nextElementSibling.textContent = "*Please input at least six characters.";
};

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
            asdfcontainer form > button');
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    inputArray.forEach(input => {
        if (input.value.trim() === '') {
            inputSubmitOnBlankState(input);
        } else {
            const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
            const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
            const mobileRegex = /^0\d{9}$/;
            const passwordRegex = /^.{6,}$/;
            switch(input.id) {
                case 'name_first':
                    if (nameRegex.test(input.value.trim())) {
                        inputSubmitOnCorrectState(input);
                    } else {
                        inputSubmitOnWrongState(input);
                    };
                    break;
                case 'name_last':
                    if (nameRegex.test(input.value.trim())) {
                        inputSubmitOnCorrectState(input);
                    } else {
                        inputSubmitOnWrongState(input);
                    };
                    break;
                case 'email':
                    if (emailRegex.test(input.value.trim())) {
                        inputSubmitOnCorrectState(input);
                    } else {
                        inputSubmitOnWrongState(input);
                    };
                    break;
                case 'mobile':
                    if (mobileRegex.test(input.value.trim())) {
                        inputSubmitOnCorrectState(input);
                    } else {
                        inputSubmitOnWrongState(input);
                    };
                    break;
                case 'password_orig':
                    if (passwordRegex.test(input.value.trim())) {
                        inputSubmitOnCorrectState(input);
                    } else {
                        inputSubmitOnWrongState(input);
                    };
                    break;
                case 'password_confirm':
                    if (passwordRegex.test(input.value.trim())) {
                        inputSubmitOnCorrectState(input);
                    } else {
                        inputSubmitOnWrongState(input);
                    };
                    break;
            }
        };

    })
});