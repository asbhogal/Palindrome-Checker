/* create variables*/

const rawTextInput = document.querySelector('#palindrome-user-input');



rawTextInput.addEventListener('keyup', () => {
    let filteredTextInput = rawTextInput.value.replace(/[^A-Z0-9]/ig, "");
    console.log(filteredTextInput);
})






/* store input*/


/*reverse and store reverse*/

/*remove capital letters and non-alpha*/

/*output if is palindrome and if isn't*/

/* innerHTML = "Yes," + filteredInput + " " + "is a palindrome!"

    innerHTML = "No," + filteredInput + " " + "is not a palindrome. Try again!" */