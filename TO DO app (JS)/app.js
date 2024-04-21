let input=document.querySelector("#inputTask");
let ul = document.querySelector("ul");
let button = document.querySelector("button");

button.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText=input.value;
    
    let delbutton=document.createElement("button");
    delbutton.innerHTML="delete";
    delbutton.classList.add("delete");
    
    li.appendChild(delbutton);
    ul.appendChild(li);
    input.value="";
});

let delbutton = document.querySelector(".delete");

ul.addEventListener("click",function(event){
    if(event.target.nodeName =="BUTTON"){
        console.log(event.target.nodeName);
        let li = event.target.parentElement;
        li.remove();
        console.log("deleted");
    }
})
