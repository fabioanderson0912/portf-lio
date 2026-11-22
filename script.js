// 1. Menu do celular: abre e fecha ao clicar no ☰
const botaoMenu = document.getElementById("menu-celular");
const links = document.getElementById("links");

botaoMenu.addEventListener("click", function () {
  links.classList.toggle("aberto");
});

// Fecha o menu quando clicar em um link
const itensMenu = document.querySelectorAll("#links a");
itensMenu.forEach(function (item) {
  item.addEventListener("click", function () {
    links.classList.remove("aberto");
  });
});

// 2. Perguntas: abre a resposta ao clicar na pergunta
const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach(function (pergunta) {
  const titulo = pergunta.querySelector(".pergunta-titulo");

  titulo.addEventListener("click", function () {
    pergunta.classList.toggle("aberta");
  });
});

// 3. Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();