function toggleMenu() {
    document.getElementById("listNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerNav');
x.onclick = toggleMenu;

/*"use strict";
function validateForm(){
    var status = true;

    varx;

    x = document.forms.estimate.name.value;
    console.log(x);

    return status;
}*/

function createThanks(){

    var n = document.getElementById("name");
    var e = document.forms.estimate.email.value;
    var p = document.forms.estimate.phone.value;
    var contact;
    
    if(e!="" && p!=""){
        contact = e +" and/or "+p;
    }
    else if(e!=""){
        contact = e;
    }
    else if(p!=""){
        contact = p;
    }

    var message = "Thank you! "+n+" will be contacted at "+contact+" within two business days.";
console.log(message);
    return message;
}