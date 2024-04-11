let list = document.querySelectorAll(".list");
let leftBox = document.querySelector("#left");
let rightBox = document.querySelector("#right");

leftBox.addEventListener("dragover", function(e){
    e.preventDefault();
});
rightBox.addEventListener("dragover", function(e){
    e.preventDefault();
});

leftBox.addEventListener("drop", function(e){
    e.preventDefault();
    let selected = document.querySelector('.dragging');
    leftBox.appendChild(selected);
    selected.classList.remove('dragging');
});
rightBox.addEventListener("drop", function(e){
    e.preventDefault();
    let selected = document.querySelector('.dragging');
    rightBox.appendChild(selected);
    selected.classList.remove('dragging');
});
list.forEach(list => {
    list.addEventListener("dragstart", function(e) {
        e.target.classList.add('dragging');
    });
});
