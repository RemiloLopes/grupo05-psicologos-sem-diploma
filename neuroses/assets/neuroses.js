// FUNÇÃO DE MUDAR O DISPLAY DOS BOTÕES
// function showButtons(ev,elem){
//     (ev||event).preventDefault();
//     let compStyle = window.getComputedStyle(elem);
//     let display = compStyle.getPropertyValue('display');
//     if (display === "block"){
//         elem.style.display = "none"
//     } else{
//         elem.style.display = "block"
//     }
//     let arr = document.getElementsByClassName("retratil")
//     for (let element of arr){
//         if (element !== elem){
//             element.style.width = "none";
//         }
//     }
// }


// FUNÇÃO DE PEGAR BOTÃO PELO ARRAY
// function showButtons(ev,elem){
//     (ev||event).preventDefault();
// //     let arr = document.getElementsByClassName("side-hidden");
// //     let tamanho = arr.length
// //     console.log(tamanho)
// //     console.log(arr)
// //     for (let element = 0; element < tamanho; element++) {
// //         arr[0].classList.toggle("side-show");
// //         arr[0].classList.toggle("side-hidden");
// //         arr[0].style.animation = "slide_down 0.3s 1 both"
// //     }
// // }

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
            } else {
                item.style.height = "0px";
                item.style.fontSize = "0rem"
                item.style.margin = "0%"
                item.style.padding = "0%"
            }
        } else{
            item.style.height = "0px";
                item.style.fontSize = "0rem"
                item.style.margin = "0%"
                item.style.padding = "0%"
        }
            i++;
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