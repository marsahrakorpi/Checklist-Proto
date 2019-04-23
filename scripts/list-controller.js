userLoggedIn = false;
document.addEventListener('DOMContentLoaded', () => { 
    let user = localStorage.getItem('proto_loggedInUser');
    if(user === "" || user === null || typeof(user) === undefined) {
        this.userLoggedIn = false;
    } else {
        this.userLoggedIn = true;
    }
    loadUserList();
}, false);

//lists:::
/*
Key: username + _list   (if username = john, then key = john_list)
Value: [{"title" : String, "completed" : Boolean}]

*/
function loadUserList(){
    let user = localStorage.getItem('proto_loggedInUser');
    let checkList = document.getElementById('checklist-main');
    if(!userLoggedIn) {
        checkList.innerHTML = "<h4>Please log in to access your checklist</h4>"
        return;
    }

    let userList = localStorage.getItem(user+"_list")
    let html = "<table>"
    if(userList){
        userList.forEach((item) => {
            console.log(item);
        }) 
    } else {
        html += "<tr>You have no items on your checklist! Press the + button to add some.</tr>"
    }

    html += "</table>"

    checkList.innerHTML = html;

    
}