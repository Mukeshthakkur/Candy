
var list = document.getElementById("list")

function add(){
    var input = document.getElementById("todoItem");

    // create li tag with text
    var li = document.createElement('li');
    var liText = document.createTextNode(input.value);
    li.appendChild(liText)
    list.appendChild(li)
    input.value = ""



    // create del button
    var delBtn = document.createElement('button');
    var delText = document.createTextNode("DELETE");
    delBtn.appendChild(delText)
    delBtn.setAttribute("class","del")
    delBtn.setAttribute("onclick", "remove(this)")


    // create edit button
    var editBtn = document.createElement('button');
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","del")
    editBtn.setAttribute("onclick", "edit(this)")



    li.appendChild(delBtn)
    li.appendChild(editBtn)
    li.setAttribute("class", "list")
}


function remove(a){
    a.parentNode.remove()
}

function removeAll(){
    list.innerHTML = ""
}

function edit(a){
    var val = a.parentNode.firstChild.nodeValue;
    var editval = prompt("Enter edit value", val)
    a.parentNode.firstChild.nodeValue = editval
}
