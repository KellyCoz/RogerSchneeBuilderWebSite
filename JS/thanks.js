const urlParams = new URLSearchParams(window.location.search); // grabs the url params

let thankYou = `Thank you ${urlParams.get('name')}. You will be contacted within one business day at ${urlParams.get('phone')} with a followup email sent to ${urlParams.get('email')}`; // etc..... build your message here
let messageDiv = document.getElementById('message'); // grab where you want the message to go by the ID
console.log(thankYou);

messageDiv.innerHTML += thankYou; // update the objects inner HTML with the text