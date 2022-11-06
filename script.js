
/*Создайте поле textarea, значение которого будет автоматически сохраняться 
при каждом его изменении.

Когда пользователь закроет страницу и потом откроет её заново 
он должен увидеть последнее введённое значение.
*/

input.value = localStorage.getItem('input');
input.oninput = () => {
  localStorage.setItem('input', input.value)
};

// Переключить тему и сохранить выбор пользователя (localStorage)

const btn = document.querySelector(".btn");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});