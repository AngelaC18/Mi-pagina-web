document.addEventListener("DOMContentLoaded", function () {

  // MENÚ HAMBURGUESA
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }

  // FORMULARIO REGISTRO
  const form = document.getElementById("registerForm");
  const result = document.getElementById("result");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      result.textContent = "Registro realizado";
      form.reset();
    });
  }

});
