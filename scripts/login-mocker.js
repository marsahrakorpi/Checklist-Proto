user = ""
sessionLength = 7 //in DAYS
document.addEventListener('DOMContentLoaded', () => { 
    this.user = setLoginButton();
    console.log(user)
}, false);

function login() {
    //since there is no login just "register the user"
    //lists are stored in ls by name because this sucks
    user = document.getElementById('username').value
    localStorage.setItem('proto_loggedInUser', user)
    refreshPage()
}

function setLoginButton(){
    //if user is not set, show login/register button
    let user = localStorage.getItem('proto_loggedInUser');
    let loginButton = document.getElementById('loginButton');
    let logoutButton = document.getElementById('logoutButton');
    if(user === "" || user === null || typeof(user) === undefined) {
        loginButton.classList.remove('hidden')
        logoutButton.classList.add('hidden')
    } else {
        loginButton.classList.add('hidden')
        logoutButton.classList.remove('hidden')
    }

    //else show sign out button
}

function logout(){
    //just remove the logged in user from ls
    localStorage.removeItem('proto_loggedInUser');
    refreshPage()
}

function refreshPage(){
    window.location.reload();
}