const addButton = document.getElementById("addButton");
let userInput = document.getElementById("userInput");
const showlist = document.getElementById("showlist");





addButton.addEventListener("click", function(){
  let list = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  let label = document.createElement("label");
  label.innerText = userInput.value;
  
  let delbtn = document.createElement("button");
  delbtn.className = "delete";
  delbtn.innerText = "Delete";



  list.appendChild(checkbox);
list.appendChild(label);
list.appendChild(delbtn);


showlist.appendChild(list);
userInput.value = "";



checkbox.addEventListener("click", function(){
 list.style.textDecoration = "line-through";
});



delbtn.addEventListener("click", function(){
  showlist.removeChild(list);
})


})












/*

function getTask(){
let list = document.createElement("li");
let checkbox = document.createElement("input");
checkbox.type = "checkbox";

let label = document.createElement("label");
label.innerText = userInput.value;

let delbtn = document.createElement("button");
delbtn.className = "delete";
delbtn.innerText = "Delete";


list.appendChild(checkbox);
list.appendChild(label);
list.appendChild(delbtn);
userInput.value = "";
return list;







}

function displayTask(){
  if(userInput.value ==""){
    alert("Invalid Input!!");
  }else
 showlist.appendChild(getTask());

}


function checkTask(){


}






addButton.addEventListener("click" ,displayTask);


*/



/*


addButton.addEventListener("click", function (){
let list = document.createElement("li");
list.innerText = userInput.value;
showlist.appendChild(list);
userInput.value = "";


list.addEventListener("click",function(){
list.style.textDecoration = "line-through";
}
)


list.addEventListener("dblclick", function (){
showlist.removeChild(list);
})

})
*/


 





