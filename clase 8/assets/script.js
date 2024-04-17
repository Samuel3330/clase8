// Cree un programa que pida un nivel al usuario y calcule la experiencia que tiene
// del nivel 1 al 10 cada nivel pide 100 exp, 1=100, 2=200, 10=1000
// por cada 10 niveles, un nivel va a aumentar 100exp de lo que pide
// Ejemplo : del nivel 11 al 20 cada nivel pide 200 exp, 11 = 1200, 12=1400, 20=3000
// tener en cuenta que cada nivel tiene acumulada la experiencia de los nivels anteriores

const btn = document.querySelector("#main");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});
