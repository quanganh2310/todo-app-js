let value;
let todoInput = document.querySelector(".todo-input");
let removeBtn = document.querySelectorAll(".remove-btn");
let i;


todoInput.addEventListener('keyup', function (event) {
  value = event.target.value;
  console.log(value);
});

for (i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener('click', function (event) {
    let item = this.parentElement.parentElement;
    item.style.display = "none";
  });
}


todoInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    
    if (value !== '') {
      let todoList = document.querySelector(".todo-list");

      let item = document.createElement("div");
      item.className = "todo-item";

      let leftContent = document.createElement("div");
      leftContent.className = "item-left-content";

      let rightContent = document.createElement("div");
      rightContent.className = "item-right-content";

      let span = document.createElement("span");
      let txt = document.createTextNode(value);

      let checkedIcon = document.createElement("i");
      checkedIcon.className = "fa fa-circle-o";

      let closeIcon = document.createElement("i");
      closeIcon.className = "fa fa-close remove-btn";

      

      span.appendChild(txt);
      item.appendChild(leftContent);
      item.appendChild(rightContent);
      leftContent.appendChild(checkedIcon);
      leftContent.appendChild(span);
      rightContent.appendChild(closeIcon);
      todoList.appendChild(item);

      let input = document.querySelector(".todo-input");
      input.value = '';

      let removeBtn = document.querySelectorAll(".remove-btn");

      for (i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', function (event) {
          let item = this.parentElement.parentElement;
          item.style.display = "none";
        });
      }
    }
  }


});
