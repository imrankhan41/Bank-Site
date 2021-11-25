document.getElementById("submit-button").addEventListener("click",function(){
    const inputEmail = document.getElementById("input-email");
    const inputEmailValue = inputEmail.value;
    const inputPassword = document.getElementById("input-password");
    const inputPasswordValue = inputPassword.value;
    if(inputEmailValue == "sontan@baap.com" && inputPasswordValue == "secretinfo"){
        window.location.href="banking.html"
    }
    
})