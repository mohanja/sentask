
const btn=document.getElementById("btn")

var inputs=document.getElementById("food"),
tab = [],
index;

for(var i=0;i<items.length;i++){
   items[i]
}

function refresh(){
   tab.length=0
   items=document.querySelectorAll("#foods div")
   for(var i=0; i<items.length;i++){
   tab.push(items[i].innerHTML)
}
}

function added(){
   const names=document.getElementById("foods")
   text=document.createTextNode(inputs.value)
   divitem=document.createElement("div")
   
   divitem.appendChild(text)
   names.appendChild(divitem)

   refresh()

   divitem.onclick=function(){
      index = tab.indexOf(divitem.innerHTML)
      console.log(divitem.innerHTML+"INDEX=>"+index)
      inputs.value=divitem.innerHTML;
   }
}
function edit(){
   console.log(items[index])
   items[index].innerHTML=inputs.value;
   refresh()
}


function deletes(){

   items[index].parentNode.removeChild(items[index])
    inputs.value=" "
}

// const input=document.createElement("input")
// const title=document.createElement("h1")
// const div=document.createElement("div")
// const btn=document.createElement("button")

// input.setAttribute("type","text")
// input.setAttribute("id","input")
// input.setAttribute("placeholder","Enter the you food name")

// title.setAttribute("id","title")
// title.innerHTML="Enter the your favorite food"

// btn.innerHTML="add list"
// btn.setAttribute("onclick","added(event)")

// function added(event){
//    event.preventDefault();
 
 
// }

// document.body.append(title,input,btn,div)
