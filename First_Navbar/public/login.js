const login = document.querySelector("#tombol-login");
const register = document.querySelector("#tombol-register");
const container = document.querySelector(".container");

register.addEventListener('click', () => {
    container.classList.add("mode-register");
});

login.addEventListener('click', () => {
    container.classList.remove("mode-register");
});
