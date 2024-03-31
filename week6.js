window.onload = function (){
    var btn = document.getElementById('btnAdd')
    btn.onclick = function(){
        console.log('Annoumous Function')
    }
}
function handlebing(){
    console.log('Hand First');
}
 function handlebind(){
    console.log('asychronize function')
    var btn = document.getElementById('btnbing');
    btn.onclick = handlebing;
 }
 // second lecture work
 window.onload = function todo1(){
    
    var btn = document.getElementById('fruit');
    btn.onclick = addtodo;
 }
 

 function addtodo(){
    var myinput = document.getElementById('myinput').value;
    var todos = document.getElementById('dos');
    var newtextnode = document.createTextNode(myinput);
    var newli = document.createElement("li");
    newli.appendChild(newtextnode);
    todos.appendChild(newli);
   
 }
 function hanldedelete(e){
    var tag = e.target;
    var li = tag.parentNode;
li.parentNode.removeChild (li);
}
