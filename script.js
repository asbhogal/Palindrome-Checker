/* create variables*/

const rawTextInput = document.querySelector('#palindrome-user-input');
const checkBtn = document.querySelector('#palindrome-check');


rawTextInput.addEventListener('keyup', () => {
    let filteredTextInput = rawTextInput.value.replace(/[^A-Z0-9]/ig, "");
    console.log(filteredTextInput);
    if (filteredTextInput) {
        return checkBtn.classList.add('active');
    } else {
        checkBtn.classList.remove('active');
    }
})






/* store input*/


/*reverse and store reverse*/

/*remove capital letters and non-alpha*/

/*output if is palindrome and if isn't*/

/* innerHTML = "Yes," + filteredInput + " " + "is a palindrome!"

    innerHTML = "No," + filteredInput + " " + "is not a palindrome. Try again!" */