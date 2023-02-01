// ANIMAÇÃO DAS BARRAS
function move(element, valorFinal) {
  let progress = element.querySelector(".progress");
  let pai = element.parentElement;
  let auxText = pai.querySelectorAll(".aux-text")
  let width = 0;
  let intervalo = setInterval(barGrowth, 20);
  function barGrowth() {
      if (width >= valorFinal) {
          clearInterval(intervalo);
      } else {
          width += (valorFinal/12);
          progress.style.width = (width*2) + "%";
          progress.innerText = width.toFixed(1) + "%";
          progress.style.fontSize = '2rem';
          progress.style.fontWeight = 900;
      } 
  }
  
// ANIMAÇÃO DO TEXTO AUXILIAR ÀS BARRAS
  if (auxText[0].classList.contains("hidden-text")) {
    for (elem of auxText){
        elem.classList.remove("hidden-text")
        elem.classList.add("shown-text")
    } 
  } else {
        for (elem of auxText){
            elem.classList.remove("shown-text")
            elem.classList.add("hidden-text")
        }
    }
}

// ADICIONANDO ELEMENTOS HTML
let counter = 0
document.addEventListener("scroll", ()=>{
    let section = document.querySelector('Section');
    let body = document.querySelector('html');
    let myScrollTop = body.scrollTop;
    let myScrollHeight = body.scrollHeight;
    let heightDiff = myScrollHeight - myScrollTop;
    let divHeight = body.clientHeight;
    let offPageHeight = 150;
    if(heightDiff < (divHeight+ offPageHeight) && (counter < 18)){
        for (let i = 0; i<3;i++){
            const elem = novosElementos[counter]
            const elemento = document.createElement("div");
            elemento.innerHTML = elem;
            section.appendChild(elemento);
            counter++;
        }
    }
// ADICIONANDO O FORMULÁRIO (if diferente, pois o formulário é um único elemento e o if anterior está programado para adicionar 3 elementos de cada vez)
    else if (heightDiff < (divHeight+ offPageHeight) && (counter < 19)){
        const elem = novosElementos[counter]
        const elemento = document.createElement("div");
        elemento.classList.add("grid-space")
        elemento.innerHTML = elem;
        section.appendChild(elemento);
// CONTADOR DA TEXTAREA DO FORMULÁRIO
        const texto = document.getElementById("form-text")
        const contador = document.getElementById("contador")
        const contadorTexto = document.getElementById("contador-texto")
        texto.addEventListener('input', function() {
            contador.textContent = 400 - texto.value.length;
            if (contador.textContent >= 100){
                contador.style.color = "white";
                contadorTexto.style.color = "white";
            }
            if (contador.textContent < 100) {
                contador.style.color = "yellow";
                contadorTexto.style.color = "yellow";
            } 
            if (contador.textContent < 20) {
                contador.style.color = "red";
                contadorTexto.style.color = "red";
            }
        });
        // VALIDAÇÃO DO FORMULÁRIO

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

        // VALIDAÇÃO IDADE
        let idadeInput = document.getElementById("idade");
        let idadeInvalid = document.getElementById("invalid-idade");

        idadeInput.addEventListener("keyup", (e)=>{
            let value = e.target.value;
            if (value >= 10 && value <= 120){
                inputCorreto(idadeInput,idadeInvalid);
                inputsCorretos.idade = true;
            } else {
                idadeInvalid.innerText = "Por favor, insira uma idade válida";
                inputIncorreto(idadeInput,idadeInvalid);
                inputsCorretos.idade = false;
            }
        })

        //VALIDAÇÃO PROPÓSITO
        let intentInput = document.querySelector('select[name="intent"]');
        let intentInvalid = document.getElementById("invalid-intent");

        toggleRequired(intentInput,intentInvalid);

        intentInput.addEventListener("change", (e)=>{
            let value = e.target.value;
            if (value == "corrigir" || value == "sugerir"){
                inputCorreto(intentInput,intentInvalid);
                inputsCorretos.intent = true;
            } else {
                intentInvalid.innerText = "Por favor, escolha uma das opções";
                inputIncorreto(intentInput,intentInvalid);
                inputsCorretos.intent = false;
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

        let submit = document.querySelector('input[type="submit"]')
        let inputsCorretos = {
        nome: false,
        email: false,
        intent: false,
        text: false
        }

        submit.addEventListener("click", function(e) {
            if (inputsCorretos.nome == false ||
            inputsCorretos.email == false ||
            inputsCorretos.intent == false ||
            inputsCorretos.text == false) {
                e.preventDefault();  
                alert("Por favor, preencha os campos obrigatórios corretamente.")
            } else {
                alert("Formulário enviado com sucesso!")
            }
        })
        counter++;
    }
})

// ARRAY DOS ELEMENTOS
let novosElementos = [
    `<div class="pai-de-todos" id="elem-4">
        <div class="progress-bar" id="progress-bar-4" onclick="move(this,3.5)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtorno de estresse pós-traumático (PTSD)</span>
        <p class="hidden-text aux-text">Aproximadamente 3,5% dos adultos nos Estados Unidos têm PTSD em um determinado ano.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.ptsd.va.gov/professional/ptsd-overview/epidemiology-of-ptsd.asp">https://www.ptsd.va.gov/professional/ptsd-overview/epidemiology-of-ptsd.asp</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-5">
        <div class="progress-bar" id="progress-bar-5" onclick="move(this,2.6)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtorno bipolar</span>
        <p class="hidden-text aux-text">O transtorno bipolar afeta cerca de 2,6% da população dos EUA.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nimh.nih.gov/health/statistics/bipolar-disorder.shtml">https://www.nimh.nih.gov/health/statistics/bipolar-disorder.shtml</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-6">
        <div class="progress-bar" id="progress-bar-6" onclick="move(this,0.5)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de esquizofrenia</span>
        <p class="hidden-text aux-text">A esquizofrenia afeta cerca de 0,5% da população mundial.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.who.int/news-room/fact-sheets/detail/schizophrenia">https://www.who.int/news-room/fact-sheets/detail/schizophrenia</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-7">
        <div class="progress-bar" id="progress-bar-7" onclick="move(this,2)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtorno de personalidade borderline (BPD)</span>
        <p class="hidden-text aux-text">Estima-se que o transtorno de personalidade borderline afete 1-2% da população geral.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nimh.nih.gov/health/statistics/borderline-personality-disorder.shtml">https://www.nimh.nih.gov/health/statistics/borderline-personality-disorder.shtml</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-8">
        <div class="progress-bar" id="progress-bar-8" onclick="move(this,5)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtorno de déficit de atenção/hiperatividade (TDAH)</span>
        <p class="hidden-text aux-text">Aproximadamente 5% das crianças nos Estados Unidos têm TDAH.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.cdc.gov/ncbddd/adhd/data.html">https://www.cdc.gov/ncbddd/adhd/data.html</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-9">
        <div class="progress-bar" id="progress-bar-9" onclick="move(this,3)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtornos alimentares</span>
        <p class="hidden-text aux-text">Os transtornos alimentares afetam cerca de 1-3% da população.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nationaleatingdisorders.org/learn/general-information/eating-disorder-statistics">https://www.nationaleatingdisorders.org/learn/general-information/eating-disorder-statistics</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-10">
        <div class="progress-bar" id="progress-bar-10" onclick="move(this,2.3)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Transtorno obsessivo-compulsivo (TOC) prevalência</span>
        <p class="hidden-text aux-text">O TOC afeta cerca de 2,3% da população dos EUA.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nimh.nih.gov/health/statistics/obsessive-compulsive-disorder-ocd.shtml">https://www.nimh.nih.gov/health/statistics/obsessive-compulsive-disorder-ocd.shtml</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-11">
        <div class="progress-bar" id="progress-bar-11" onclick="move(this,3.1)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Transtorno de ansiedade generalizada (TAG) prevalência</span>
        <p class="hidden-text aux-text">Cerca de 3,1% dos adultos nos EUA têm TAG em um determinado ano.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nimh.nih.gov/health/statistics/generalized-anxiety-disorder-gad.shtml">https://www.nimh.nih.gov/health/statistics/generalized-anxiety-disorder-gad.shtml</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-12">
        <div class="progress-bar" id="progress-bar-12" onclick="move(this,2.7)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtorno de pânico</span>
        <p class="hidden-text aux-text">O transtorno de pânico afeta cerca de 2,7% dos adultos nos EUA em um determinado ano.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nimh.nih.gov/health/statistics/panic-disorder.shtml">https://www.nimh.nih.gov/health/statistics/panic-disorder.shtml</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-13">
        <div class="progress-bar" id="progress-bar-13" onclick="move(this,3.7)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtornos alimentares em mulheres</span>
        <p class="hidden-text aux-text">3,7% das mulheres nos Estados Unidos sofrem de um transtorno alimentar. A anorexia nervosa e a bulimia nervosa são os tipos mais comuns de transtornos alimentares.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nationaleatingdisorders.org/statistics-research-eating-disorders">https://www.nationaleatingdisorders.org/statistics-research-eating-disorders</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-14">
        <div class="progress-bar" id="progress-bar-14" onclick="move(this,0.5)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalencia de transtornos alimentares em homens</span>
        <p class="hidden-text aux-text">0.5% dos homens nos Estados Unidos sofrem de um transtorno alimentar. A anorexia nervosa e a bulimia nervosa são os tipos mais comuns de transtornos alimentares.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nationaleatingdisorders.org/statistics-research-eating-disorders">https://www.nationaleatingdisorders.org/statistics-research-eating-disorders</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-15">
        <div class="progress-bar" id="progress-bar-15" onclick="move(this,9.2)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtorno de uso de substâncias (TUS)</span>
        <p class="hidden-text aux-text">Cerca de 9,2% dos adultos nos EUA têm um transtorno de uso de substâncias em um determinado ano.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.samhsa.gov/data/sites/default/files/NSDUH-FFR1-2015/NSDUH-FFR1-2015/NSDUH-FFR1-2015.pdf">https://www.samhsa.gov/data/sites/default/files/NSDUH-FFR1-2015/NSDUH-FFR1-2015/NSDUH-FFR1-2015.pdf</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-16">
        <div class="progress-bar" id="progress-bar-16" onclick="move(this,4.5)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtorno de uso de álcool (TUA)</span>
        <p class="hidden-text aux-text">Cerca de 4,5% dos adultos nos EUA têm um transtorno de uso de álcool em um determinado ano.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.ncbi.nlm.nih.gov/books/NBK499875/">https://www.ncbi.nlm.nih.gov/books/NBK499875/</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-17">
        <div class="progress-bar" id="progress-bar-17" onclick="move(this,1.7)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de transtorno do espectro autista (TEA)</span>
        <p class="hidden-text aux-text">Cerca de 1,7% das crianças nos EUA foram diagnosticadas com transtorno do espectro autista.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.cdc.gov/ncbddd/autism/data.html">https://www.cdc.gov/ncbddd/autism/data.html</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-18">
        <div class="progress-bar" id="progress-bar-18" onclick="move(this,5.8)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Prevalência de demência</span>
        <p class="hidden-text aux-text">Cerca de 5,8% dos adultos com 65 anos ou mais têm demência.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.alz.org/alzheimers-dementia/facts-figures">https://www.alz.org/alzheimers-dementia/facts-figures</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-19">
        <div class="progress-bar" id="progress-bar-19" onclick="move(this,30)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Insônia prevalência</span>
        <p class="hidden-text aux-text">A insônia afeta entre 10% e 30% dos adultos em todo o mundo.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.sleepfoundation.org/insomnia/insomnia-facts">https://www.sleepfoundation.org/insomnia/insomnia-facts</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-20">
        <div class="progress-bar" id="progress-bar-20" onclick="move(this,5)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Transtorno afetivo sazonal (SAD) prevalência</span>
        <p class="hidden-text aux-text">O SAD afeta entre 2% e 5% da população nos EUA.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nimh.nih.gov/health/statistics/seasonal-affective-disorder-sad.shtml">https://www.nimh.nih.gov/health/statistics/seasonal-affective-disorder-sad.shtml</a>)</p>
    </div>`,
    `<div class="pai-de-todos" id="elem-21">
        <div class="progress-bar" id="progress-bar-21" onclick="move(this,2)">
            <div class="progress">
                <p class="progress-number">0</p>
                <p class="pctg-symbol">% </p>
            </div>
        </div>
        <span class="info-text">Desordem dismórfica corporal (BDD) prevalência</span>
        <p class="hidden-text aux-text">A BDD afeta entre 1% e 2% da população mundial.</p>
        <p class="fonte hidden-text aux-text">(Fonte: <a target="_blank" class="hidden-text aux-text" href="https://www.nimh.nih.gov/health/statistics/body-dysmorphic-disorder-bdd.shtml">https://www.nimh.nih.gov/health/statistics/body-dysmorphic-disorder-bdd.shtml</a>)</p>
    </div>`,`<div class="formulario">
    <div class="form-intro">
        <h3>Caso alguma informação esteja incorreta ou você queira nos mandar uma sugestão, por favor preencha o formulário ao lado:</h3>
    </div>
    <div>
        <form class="form">
            <label for="nome">*Nome ou Apelido:</label>
            <input type="text" id="nome" placeholder="Digite seu nome:" required>
            <p id="invalid-nome" class="invalid-text"></p>

            <label for="email">*E-mail:</label>
            <input type="email" name="email" id="email" placeholder="Digite seu email:" required>
            <p id="invalid-email" class="invalid-text"></p>

            <label for="idade">Idade</label>
            <input type="number" name="idade" id="idade">
            <p id="invalid-idade" class="invalid-text"></p>

            <label for="intent">*Qual o propósito da mensagem?</label>
            <select name="intent" required>
                <option disabled selected></option> 
                <option value="corrigir">Corrigir uma informação</option>
                <option value="sugerir">Sugerir uma informação</option>
            </select>
            <p id="invalid-intent" class="invalid-text"></p>

            <label for="form-text">*Digite sua correção/reclamação abaixo:</label>
            <textarea name="form-text" id="form-text" maxlength="400" placeholder="Digite sua correção/reclamação aqui:" required></textarea>
            <span class="contador" id="contador-texto"><span id="contador">400</span> caracteres restantes</span>
            <p id="invalid-text" class="invalid-text"></p>

            <input type="submit" id="submit">
        </form>
    </div>
</div>`]