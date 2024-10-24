addBtn.addEventListener("click", handleAddBtn);
const todoList = document.querySelector(".todoList");

document.querySelector('.deleteBtn').parentElement.remove()

function handleAddBtn() {
  todo = addList.value;
  todoList.innerHTML += `<li class=todo-list-item> ${todo} <a href='#' class=deleteBtn>🗑️</a></li>`
  bindclickEvents();
}

function bindclickEvents () {
  const deleteBtns = document.querySelectorAll(".deleteBtn");


  for (const button of deleteBtns) {
    button.addEventListener("click", removeTodo)
  }
}



function removeTodo() {
  this.parentElement.remove();
  console.log(this);
 
}

bindclickEvents();