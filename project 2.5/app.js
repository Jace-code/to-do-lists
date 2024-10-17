let todoinput = document.querySelector(".Todo-input")
let todobtn = document.querySelector(".Todo-button")
let todocontainer = document.querySelector(".Todo-container")
let li = document.querySelector(".Todo-list")

todobtn.addEventListener("click",function(){
    if(todoinput.value === ""){
        alert("you must write something")
    }else{
        let li = document.createElement("li")
        li.innerHTML = todoinput.value
        todocontainer.appendChild(li)
        let deletebtn = document.createElement("BUTTON")
        deletebtn.innerHTML = 'delete'
        li.appendChild(deletebtn)
    }
    todoinput.value="";
    saveData();
}
)

todocontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",todocontainer.innerHTML)
}

function showTasks(){
    todocontainer.innerHTML = localStorage.getItem("data")
}

showTasks();