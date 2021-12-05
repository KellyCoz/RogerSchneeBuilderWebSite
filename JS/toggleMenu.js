function toggleMenu() {
    document.getElementById("listNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerNav');
x.onclick = toggleMenu;