function add(element){
    var name = element.getAttribute("name");
    var myList = document.getElementById("sepet");
    var newItem = document.createElement("li");
    newItem.innerHTML = name;
    myList.appendChild(newItem);
}