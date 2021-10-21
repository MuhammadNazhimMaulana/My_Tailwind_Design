// Ambil semuanya
const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu')

// Add event listener
btn.addEventListener("click", () =>{
    menu.classList.toggle("hidden");
});

