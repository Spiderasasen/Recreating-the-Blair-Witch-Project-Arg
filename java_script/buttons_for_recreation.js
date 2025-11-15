const input = document.getElementById("input");
const buttons = document.querySelectorAll('button[data-value]');
const clearButton = document.getElementById("clear");
const submitButton = document.getElementById("submit");

//for individual buttons
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        console.log("clicked", button.getAttribute('data-value'));
       input.value += button.getAttribute('data-value');
    });
});

//for the clear button
clearButton.addEventListener('click', () =>{
    console.log("clear button clicked");
    input.value = "";
});

//for the submit button
submitButton.addEventListener('click', () =>{
    document.getElementById('myDiv').innerHTML = '';
    console.log("submit button clicked");
    if (input.value === "1999"){
        console.log("password 1 unlocked, talking about the recreation of the page and the maybe play the part more");
        window.location.href = 'Recreation/password_1999/the_developer.html';
    }
    else if (input.value === "3700"){
        console.log("Password 2 unlocked, a thank you note for our professor")
        window.location.href = 'Recreation/password_3700/Thank_you_letter.html';
    }
    else{
        console.log('this is just wrong');
        document.getElementById('myDiv').innerHTML = '<p style="color: red;" class="center_text">Wrong Password; What year was the film released?</p>';
    }
    input.value = "";
})