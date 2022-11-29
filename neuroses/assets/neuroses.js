// function showContent(ev,n) {
//     (ev||event).preventDefault();
//     let elem = document.getElementsByClassName("hidden-content")
//     if (n === 0){
//         var x = document.getElementById("neuroses");
//         for (let i = 0; i < elem.length; i++) {
//             element = elem[i]
//             if (i !== 0){
//                 element.style.display = "none";
//             }
//         }
//         // for (let i = 0; i < elem.length; i++) {
//         //     let element = elem[i];
//         //     element.style.display = "none";
//         // }
//     }
//     else if (n === 1){
//         var x = document.getElementById("ansiedade");
//         for (let i = 0; i < elem.length; i++) {
//             element = elem[i]
//             if (i !== 0){
//                 element.style.display = "none";
//             }
//         }
//     }
//     else if (n === 2){
//         var x = document.getElementById("depressao");
//         for (let i = 0; i < elem.length; i++) {
//             element = elem[i]
//             if (i !== 1){
//                 element.style.display = "none";
//             }
//         }
//     }
//     else if (n === 3){
//         var x = document.getElementById("burnout");
//         for (let i = 0; i < elem.length; i++) {
//             element = elem[i]
//             if (i !== 2){
//                 element.style.display = "none";
//             }
//         }
//     }
//     var compStyle = window.getComputedStyle(x);
//     var display = compStyle.getPropertyValue('display')
//     if (display === "none") {
//     x.style.display = "block";
//     } else {
//     x.style.display = "none";
//     }
// }

// function showContent2(ev,elem){
//     (ev||event).preventDefault();
//     var compStyle = window.getComputedStyle(elem);
//     var display = compStyle.getPropertyValue('display');
//     if (display === "block"){
//         elem.style.display = "none";
//     } else {
//         elem.style.display = "block";
//     }
//     console.log(display)
// }

function showContent(ev,elem){
    (ev||event).preventDefault();
    let hidden = document.getElementsByClassName("hidden-content")
    for (let element of hidden){
        if (element !== elem){
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    }
}