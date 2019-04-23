authenticated = false;
user = ""
document.addEventListener('DOMContentLoaded', () => { 
    user = localStorage.getItem('proto_loggedInUser');
    if(user === "" || user === null || typeof(user) === undefined) {
        localStorage.setItem("undefined_list", null);
        this.authenticated = false;
        user = "undefined"
    } else {
        this.authenticated = true;
    }

    let userList = JSON.parse(localStorage.getItem(user+"_list"))
    loadUserList(userList);
}, false);

//lists:::
/*
Key: username + _list   (if username = john, then key = john_list)
Value: [{"title" : String, "completed" : Boolean}]

*/
function loadUserList(userList){

    let checkList = document.getElementById('checklist-main');
    checkList.innerHTML = "";

    document.getElementById('checklistAddButton').classList.remove('hidden');

    let html = "<ul id='checkList'>"

    if(userList){
        userList.forEach((item) => {
            html+="<li onclick='toggleCompletion("+JSON.stringify(item)+")'"

            if(item.completed) {
                html += "class='completed'"
            } 

            html += ">"+item.title

            html+="</li>"
        }) 
    } else {
        html += "<li>You have no items on your checklist! Press the + button to add some.</li>"
    }

    html += "</ul>"

    checkList.innerHTML = html;

    
}

function addItemToList(){

    let item = document.getElementById('listAddItem').value;

    if(item === "" || item === null) {
        return;
    }

    let userList = JSON.parse(localStorage.getItem(user+"_list"))

    if(userList === null || typeof(userlist) === undefined){
        userList = [];
    }
    let task = {"title":item, "completed":false};
    
    if (userList.some(item => item.title === task.title)){
        return alert("Task with this name already exists, please choose another");
    }
    console.log(userList);
    userList.push(task);

    localStorage.setItem(user+"_list", JSON.stringify(userList));
    //empty the input after submitting
    document.getElementById('listAddItem').value = "";

    loadUserList(userList);
}

function toggleCompletion(item) {
    item.completed = !item.completed

    let userList = JSON.parse(localStorage.getItem(user+"_list"))

    userList.map((a) => {
        if(a.title === item.title){
            return a.completed = item.completed
        }
    });

    localStorage.setItem(user+"_list", JSON.stringify(userList));

    loadUserList(userList);
}