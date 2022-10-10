/* create variables*/

const rawTextInput = document.querySelector('#palindrome-user-input');
const checkBtn = document.querySelector('#palindrome-check');
let filteredTextInput;
let checkOutputMessage = document.getElementById('output-of-check');

checkBtn.addEventListener("click", () => {
    let reversedFilteredInput = filteredTextInput.  split("").
                                                    reverse().
                                                    join("");
    console.log(filteredTextInput, reversedFilteredInput);

    if (filteredTextInput != reversedFilteredInput) {
        return checkOutputMessage.innerHTML = "No, " + rawTextInput.value + " " + "is not a palindrome, try again!";
    }
        return checkOutputMessage.innerHTML = "Yes, " + rawTextInput.value + " " + "is a palindrome!";
})

rawTextInput.addEventListener('keyup', () => {
    filteredTextInput = rawTextInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    
    if (filteredTextInput) {
        return checkBtn.classList.add('active');
    } else {
        checkBtn.classList.remove('active');
    }
});






/* store input*/


/*reverse and store reverse*/

/*remove capital letters and non-alpha*/

/*output if is palindrome and if isn't*/

/* innerHTML = "Yes," + filteredInput + " " + "is a palindrome!"

    innerHTML = "No," + filteredInput + " " + "is not a palindrome. Try again!" */