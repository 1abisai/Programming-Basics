// Logout and Login 
function change(button1) {
    if (button1.innerText === 'Login') {
        button1.innerText = "Logout"
    }
    else {
        button1.innerText = 'Login'
    }
}
// remove definition
function remove(button2) {
    button2.remove(add)
}
