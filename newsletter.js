const email = document.getElementById("email");
const form = document.getElementById("form");
const warning = document.getElementById("warnings");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let warning_text = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let send = false

    warning.innerHTML = ""

    if(!regexEmail.test(email.value)){
        warning_text += `The email is not valid`
        send = true
    }

    send ? warning.innerHTML = warning_text : warning.innerHTML = "Newss Letter Send"
   
})