//NAVBAR MOBILE
function showNav(){
    let navbar = document.getElementById("mobile-nav");
    if (navbar.classList.contains("shown-nav")) {
        setTimeout(function() {
            navbar.style.right = -50 + "vw";
        }, 20);
        setTimeout(function() {
            navbar.classList.remove("shown-nav");
        }, 100);
    }
    else {
        navbar.classList.add("shown-nav")
        setTimeout(function() {
            navbar.style.right = 0 + "vw";
        }, 20);
    }
}
//ICONE SIDEBAR MOBILE
let icone = document.getElementById("botao-sidebar");
let barra = document.getElementById("slide-topicos")
let section = document.querySelector("section");
let altura = section.scrollHeight;
barra.style.height = altura-200 + "px";

let sidebar = document.getElementById("sidebar");
setInterval(function(){
    let iconCompStyle = window.getComputedStyle(icone);
    const display = iconCompStyle.getPropertyValue('display');
    if(display == "none"){
        sidebar.style.removeProperty('display');
        sidebar.style.removeProperty('marginTop');
        sidebar.style.removeProperty('position');
        sidebar.style.removeProperty('top');
        sidebar.style.removeProperty('left');
    }
}, 200)

//SIDEBAR MOBILE
function openSide(elem){
    console.log(elem);
    if (elem.style.position != "fixed"){
        elem.style.position = "fixed";
    }
    if (elem.style.display == "flex") {
        setTimeout(function() {
            elem.style.left = -50 + "vw";
        }, 20);
        setTimeout(function() {
            elem.style.display = "none";;
        }, 100);
    }
    else{
        elem.style.display = "flex";
        setTimeout(function() {
            elem.style.margin = 0;
            elem.style.height = 60 + "vh";
            elem.style.left = 1 + "vw";
            elem.style.top = 40 + "vh";
        }, 20);
    }
}

const mainButtons = document.querySelectorAll(`#transtornos li div`);
for (item of mainButtons){
    item.style.height = "3rem";
    item.style.fontSize = "1rem";
    item.style.margin = "2% 0";
    item.style.padding = "2%";
    item.style.border = "1px solid rgb(255, 255, 255, 0.5)"
}

function showButtons(ev,elem){
    (ev||event).preventDefault();
    let filhos = document.getElementsByClassName("side-hidden")
    let buttons = [];
    let i = 0;
    let compStyle = "";
    let altura = "";
    let sameParent = [];
    for (item of filhos){
        buttons[i] = item.parentElement;
        i++;
    }
    i=0;
    for (item of buttons){
        buttons[i] = item.parentElement;
        i++;
    }
    i = 0
    for (item of buttons){
        if (item === elem){
            sameParent[i] = true;
        } else{
            sameParent[i] = false;
        }
        i++;
    }
    i=0;
    for (item of filhos){
        if (sameParent[i]){
            compStyle = window.getComputedStyle(item);
            altura = compStyle.getPropertyValue('height');
            if (altura === "0px"){
                item.style.height = "3rem";
                item.style.fontSize = "1rem"
                item.style.margin = "2% 0"
                item.style.padding = "2%"
                item.style.border = "1px solid rgb(255, 255, 255, 0.5)"
            } else {
                item.style.height = "0px";
                item.style.fontSize = "0rem"
                item.style.margin = "0%"
                item.style.padding = "0%"
                item.style.border = "0px"
            }
        } else{
            item.style.height = "0px";
                item.style.fontSize = "0rem"
                item.style.margin = "0%"
                item.style.padding = "0%"
                item.style.border = "0px"
        }
            i++;
    }
}

function showButtons2(ev,elem){
    (ev||event).preventDefault();
    let id = elem.id
    let filhos = document.querySelectorAll(`#${id} .side-hidden2`);
    let netos = document.querySelectorAll(`#${id} .side-hidden`);
    let todos = document.querySelectorAll(`.side-hidden2`);
    let todosNetos = document.querySelectorAll(`.side-hidden`);
    for (item of filhos){
        compStyle = window.getComputedStyle(item);
        altura = compStyle.getPropertyValue('height');
        if (altura === "0px"){
            item.style.height = "3rem";
            item.style.fontSize = "1rem"
            item.style.margin = "2px 0"
            item.style.padding = "2%"
            item.style.border = "1px solid rgb(255, 255, 255, 0.5)"
        } else {
            for (element of netos){
                element.style.height = "0px";
                element.style.fontSize = "0rem"
                element.style.margin = "0%"
                element.style.padding = "0%"
                element.style.border = "0px"
            }
            item.style.height = "0px";
            item.style.fontSize = "0rem"
            item.style.margin = "0%"
            item.style.padding = "0%"
            item.style.border = "0px"
        }
    }
    for (let i = 0; i<todos.length;i++){
        if (todos[i].parentElement.parentElement.id !== id){
            todos[i].style.height = "0px";
            todos[i].style.fontSize = "0rem"
            todos[i].style.margin = "0%"
            todos[i].style.padding = "0%"
            todos[i].style.border = "0px"
            }
        }
    for (element of todosNetos){
        if (element.parentElement.id !== id){
            element.style.height = "0px";
            element.style.fontSize = "0rem"
            element.style.margin = "0%"
            element.style.padding = "0%"
            element.style.border = "0px"
        }
    }
}


function showContent(ev,elem){
    (ev||event).preventDefault();
    let hidden = document.getElementsByClassName("hidden-content")
    for (let element of hidden){
        if (element !== elem){
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
    }
}


function changeDisplayOn(ev,elem){
    (ev||event).preventDefault();
    let compStyle = window.getComputedStyle(elem);
    let display = compStyle.getPropertyValue('display');
    if (display == 'none'){
        elem.style.display = "block";
        document.querySelector('#verTabela h3').innerText = "Fechar Tabela"
    } else {
        elem.style.display = "none";
        document.querySelector('#verTabela h3').innerText = "Ver Tabela"
    }

}