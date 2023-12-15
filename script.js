const idade = document.querySelector("#idade");
const btnClassificar = document.querySelector("#btn-classificar");
const resultado = document.querySelector("#resultado");

btnClassificar.addEventListener("click", function() {
  const idadeUsuario = Number(idade.value);

  if (idadeUsuario < 0) {
    resultado.innerHTML = "Idade inválida";
  } else if (idadeUsuario <= 12) {
    resultado.innerHTML = "Faixa etária: Infantil";
  } else if (idadeUsuario <= 18) {
    resultado.innerHTML = "Faixa etária: Adolescente";
  } else if (idadeUsuario <= 65) {
    resultado.innerHTML = "Faixa etária: Adulto";
  } else {
    resultado.innerHTML = "Faixa etária: Idoso";
  }
});


