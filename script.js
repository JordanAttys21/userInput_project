let userName = document.querySelector("#username")
let passWord = document.querySelector("#password")
let submitButton = document.querySelector("#submit-button")
let right = document.querySelector("#success")
let wrong = document.querySelector("#error")
let screen = document.querySelector("body")


submitButton.onclick = function(event) {
    event.preventDefault();

    let secretName = userName.value;
    let secretWord = passWord.value;

    if (secretName === "Baby Yoda" && secretWord === "squirtle") {
        right.style.display = "block";
        right.innerHTML = "You got the password RIGHT!";
        screen.style.backgroundColor = "lightblue";
        wrong.style.display = "none";
       

    }  else {
        wrong.style.display = "block";
        screen.style.backgroundColor = "rgb(50, 50, 50)";
        right.innerHTML = "";
       
       
    }

    userName.value = "";
    passWord.value = "";
    
} 