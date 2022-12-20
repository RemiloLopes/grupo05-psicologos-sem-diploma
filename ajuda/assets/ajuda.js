const texto = document.getElementById("mensage")
const contador = document.getElementById("contador")

texto.addEventListener('input', function() {
    contador.textContent = 400 - texto.value.length;
  });