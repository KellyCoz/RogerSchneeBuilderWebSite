function toggleMenu() {
    document.getElementById("listNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerNav');
x.onclick = toggleMenu;

"use strict";
function validateForm(){
    var status = true;

    varx;

    x = document.forms.estimate.name.value;
    console.log(x);

    return status;
}