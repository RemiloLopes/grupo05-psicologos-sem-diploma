const texto = document.getElementById("mensagem")
const contador = document.getElementById("contador")
const contadorTexto = document.getElementById("contadorTexto")

texto.addEventListener('input', function() {
    contador.textContent = 400 - texto.value.length;
    if (contador.textContent >= 100){
      contador.style.color = "white";
      contadorTexto.style.color = "white";
    }
    if (contador.textContent < 100 && contador.textContent > 20) {
        contador.style.color = "yellow";
        contadorTexto.style.color = "yellow";
    } 
    if (contador.textContent <= 20) {
        contador.style.color = "red";
        contadorTexto.style.color = "red";
    }
});

function toggleRequired(input, invalid) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        invalid.classList.add("required");
    });
    input.addEventListener("blur", () => {
        invalid.classList.remove("required");
    });
}

function inputCorreto(input, invalidText){
    invalidText.classList.remove("visible");
    input.classList.remove("incorrect");
    input.classList.add("correct");
}

function inputIncorreto(input, invalidText){
    invalidText.classList.add("visible");
    input.classList.add("incorrect");
    input.classList.remove("correct");

}

//VALIDAÇÃO ASSUNTO OPTION
let intentInput = document.querySelector('select[name="intent"]');
let intentInvalid = document.getElementById("invalid-intent");

intentInput.addEventListener("change", (e)=>{
    let value = e.target.value;
    if (value == "alimentacao" || value == "exercicios" || value == "acomp-espec"){
        inputCorreto(intentInput,intentInvalid);
        inputsCorretos.intent = true;
    } else {
        intentInvalid.innerText = "Por favor, escolha uma das opções";
        inputIncorreto(intentInput,intentInvalid);
        inputsCorretos.intent = false;
    }
})

// VALIDAÇÃO NOME
let nomeInput = document.getElementById("nome");
let nomeInvalid = document.getElementById("invalid-nome");

toggleRequired(nomeInput,nomeInvalid);

nomeInput.addEventListener("keyup", (e)=>{
    let value = e.target.value;
    if (value.length < 2){
        nomeInvalid.innerText = "Seu nome/apelido precisa ter 2 ou mais caracteres";
        inputIncorreto(nomeInput,nomeInvalid);
        inputsCorretos.nome = false;
    } else {
        inputCorreto(nomeInput,nomeInvalid);
        inputsCorretos.nome = true;
    }
})

// VALIDAÇÃO EMAIL
let emailInput = document.getElementById("email");
let emailInvalid = document.getElementById("invalid-email");

toggleRequired(emailInput,emailInvalid);

emailInput.addEventListener("keyup", (e)=>{
    let value = e.target.value;
    if (value.includes("@") && value.includes(".com")){
        inputCorreto(emailInput,emailInvalid);
        inputsCorretos.email = true;
    } else {
        emailInvalid.innerText = "Por favor, insira um email válido";
        inputIncorreto(emailInput,emailInvalid);
        inputsCorretos.email = false;
    }
})

// VALIDAÇÃO ASSUNTO TEXTO
let assuntoInput = document.getElementById("assunto");
let assuntoInvalid = document.getElementById("invalid-assunto");

assuntoInput.addEventListener("keyup", (e)=>{
    let value = e.target.value;
    if (value.length > 2){
        inputCorreto(assuntoInput,assuntoInvalid);
        inputsCorretos.assunto = true;
    } else {
        assuntoInvalid.innerText = "Por favor, insira ao menos 3 dígitos no assunto";
        inputIncorreto(assuntoInput,assuntoInvalid);
        inputsCorretos.assunto = false;
    }
})

//VALIDAÇÃO TEXTO
let textInput = document.querySelector('textarea');
let textInvalid = document.getElementById("invalid-text");

toggleRequired(textInput,textInvalid);

textInput.addEventListener("keyup", (e)=>{
    let value = e.target.value;
    if (value.length >= 20){
        inputCorreto(textInput,textInvalid);
        inputsCorretos.text = true;
    } else {
        textInvalid.innerText = "Seu texto deve ter ao menos 20 dígitos";
        inputIncorreto(textInput,textInvalid);
        inputsCorretos.text = false;
    }
})

// SUBMIT DO FORMULÁRIO

let submit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
nome: false,
email: false,
text: false
}

submit.addEventListener("click", function(e) {
    if (inputsCorretos.nome == false ||
    inputsCorretos.email == false ||
    inputsCorretos.text == false) {
        e.preventDefault();  
        alert("Por favor, preencha os campos obrigatórios corretamente.")
    } else {
        alert("Formulário enviado com sucesso!")
    }
})