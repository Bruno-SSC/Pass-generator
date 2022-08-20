let sliderElement = document.querySelector("#slider")

let buttonElement = document.querySelector("#button")

let sizePass = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM0123456789"

let novaSenha = ""

sizePass.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    sizePass.innerHTML = this.value
}

function generatePass(){
    let pass = ""
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    
    containerPassword.classList.remove('hide')
    password.innerHTML = pass  
    novaSenha = pass
}

function copyPass(){
    alert("senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha)
}