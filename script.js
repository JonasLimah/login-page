let btn = document.querySelector("span");
let btn2 = document.querySelector("#entrar")
btn.addEventListener("click", clicou)
btn2.addEventListener("click", entrar)
function entrar(){
    let input = document.querySelector("#show")
    let user = document.querySelector(".user").value
    if(user == "" || input.value == ""){
        alert("Usuario ou Senha em Branco")
    }else{
        alert("Seja Bem-Vindo a sua Home")
    }
}

function clicou() {
    
    let input = document.querySelector("#show")
   if (input.getAttribute("type") == "password"){
        input.setAttribute("type","text");
   }else if(input.getAttribute("type") == "text"){
        input.setAttribute("type","password");
   }else if (input.value == "" || user == ""){
    alert("Usuario ou Senha invalida")
   }
}