
const add = document.getElementById("add")
const list = document.querySelector("ul");
const popUp = document.querySelector(".pop-up");

// popUp.style.display="none";
popUp.classList.add("hidden");
let taskNo=1;
add.addEventListener("click", function(e){
    
    const newTask = document.createElement("li");
    const checkBox= document.createElement("input");
     checkBox.type="checkbox";
    checkBox.setAttribute("id",taskNo);
  
    checkBox.classList.add("check-box")
    const item= document.createElement("input");
    item.type="text";
    // item.setAttribute("id" ,taskNo);
    item.placeholder="Type something";
    item.classList.add("text");
    list.appendChild(newTask);
    newTask.append(checkBox);
    newTask.append(item);
     taskNo++;
})
 const soundEffect = new Audio("bubble.mp3");
list.addEventListener("click", function(e){
    if(e.target.type==="checkbox"){
      const id=e.target;
      parentList= id.parentElement;
     
       const sibling = e.target.nextElementSibling;
    //   console.log(sibling);
     if(e.target.checked){
        if(sibling.value===""){
            soundEffect.play();
            navigator.vibrate(100);
         e.target.checked=false;
         popUp.classList.remove("hidden");
        //  alert("Please type something");
        const okay = document.querySelector("#okay");
        okay.addEventListener("click",(e)=>{
          popUp.classList.add("hidden");
        })
         return;
        }else{
               sibling.style.color="green";
         sibling.style.textDecoration="line-through";
         sibling.disabled=true;
        }
         
     }else{
         sibling.style.color="black";
         sibling.style.textDecoration="none";
         sibling.disabled=false;
     }
    }
})

const clear= document.querySelector("#clear");

clear.addEventListener("click", function(e) {
    const listi = list.children;
    for (let i = listi.length - 1; i >= 0; i--) {
        if (listi[i].children[0].checked) {
            listi[i].remove();
        }
    }
});


