(function () {
  "use strict";

  var todoApp = (function () {
    document.addEventListener("DOMContentLoaded", function () {
      init();
    });

    var init = function () {
      document.getElementById("add-task").addEventListener(
        "click",
        function () {
          var newTitle = document.getElementById("title").value,
            newContent = document.getElementById("content").value;
          if (validate(newTitle)) {
            addTodo(newTitle, newContent);
          }
        },
        false
      );

      document.getElementById("todos").addEventListener(
        "click",
        function (e) {
          if (e.target && e.target.nodeName == "BUTTON") {
            deleteTodo(e.target.parentNode);
          }
        },
        false
      );
    };

    var validate = function (newTitle, newContent) {
      if (newTitle.length === 0) {
        var target = document.getElementById("title");
        target.className = target.className + " error";
        return false;
      } else {
        return true;
      }
    };

    var addTodo = function (title, content) {
      var newTodo = document.createElement("section"),
        h2 = document.createElement("h2"),
        newTitle = document.createTextNode(title),
        p = document.createElement("p"),
        newContent = document.createTextNode(content),
        button = document.createElement("button"),
        deleteBtn = document.createTextNode("delete");

      h2.appendChild(newTitle);
      newTodo.appendChild(h2);
      p.appendChild(newContent);
      newTodo.appendChild(p);
      button.appendChild(deleteBtn);
      newTodo.appendChild(button);

      document.getElementById("todos").appendChild(newTodo);
      document.getElementById("form").reset();
    };

    var deleteTodo = function (todo) {
      todo.parentNode.removeChild(todo);
    };
  })();
})();

// const taskInput = document.querySelector(".task-input input"),
//   filters = document.querySelectorAll(".filters span"),
//   clearAll = document.querySelector(".clear-btn"),
//   taskBox = document.querySelector(".task-box");

// let editId,
//   isEditTask = false,
//   todos = JSON.parse(localStorage.getItem("todo-list"));

// filters.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.querySelector("span.active").classList.remove("active");
//     btn.classList.add("active");
//     showTodo(btn.id);
//   });
// });

// function showTodo(filter) {
//   let liTag = "";
//   if (todos) {
//     todos.forEach((todo, id) => {
//       let completed = todo.status == "completed" ? "checked" : "";
//       if (filter == todo.status || filter == "all") {
//         liTag += `<li class="task">
//                             <label for="${id}">
//                                 <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
//                                 <p class="${completed}">${todo.name}</p>
//                             </label>
//                             <div class="settings">
//                                 <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
//                                 <ul class="task-menu">
//                                     <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
//                                     <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
//                                 </ul>
//                             </div>
//                         </li>`;
//       }
//     });
//   }
//   taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
//   let checkTask = taskBox.querySelectorAll(".task");
//   !checkTask.length
//     ? clearAll.classList.remove("active")
//     : clearAll.classList.add("active");
//   taskBox.offsetHeight >= 300
//     ? taskBox.classList.add("overflow")
//     : taskBox.classList.remove("overflow");
// }
// showTodo("all");

// function showMenu(selectedTask) {
//   let menuDiv = selectedTask.parentElement.lastElementChild;
//   menuDiv.classList.add("show");
//   document.addEventListener("click", (e) => {
//     if (e.target.tagName != "I" || e.target != selectedTask) {
//       menuDiv.classList.remove("show");
//     }
//   });
// }

// function updateStatus(selectedTask) {
//   let taskName = selectedTask.parentElement.lastElementChild;
//   if (selectedTask.checked) {
//     taskName.classList.add("checked");
//     todos[selectedTask.id].status = "completed";
//   } else {
//     taskName.classList.remove("checked");
//     todos[selectedTask.id].status = "pending";
//   }
//   localStorage.setItem("todo-list", JSON.stringify(todos));
// }

// function editTask(taskId, textName) {
//   editId = taskId;
//   isEditTask = true;
//   taskInput.value = textName;
//   taskInput.focus();
//   taskInput.classList.add("active");
// }

// function deleteTask(deleteId, filter) {
//   isEditTask = false;
//   todos.splice(deleteId, 1);
//   localStorage.setItem("todo-list", JSON.stringify(todos));
//   showTodo(filter);
// }

// clearAll.addEventListener("click", () => {
//   isEditTask = false;
//   todos.splice(0, todos.length);
//   localStorage.setItem("todo-list", JSON.stringify(todos));
//   showTodo();
// });

// taskInput.addEventListener("keyup", (e) => {
//   let userTask = taskInput.value.trim();
//   if (e.key == "Enter" && userTask) {
//     if (!isEditTask) {
//       todos = !todos ? [] : todos;
//       let taskInfo = { name: userTask, status: "pending" };
//       todos.push(taskInfo);
//     } else {
//       isEditTask = false;
//       todos[editId].name = userTask;
//     }
//     taskInput.value = "";
//     localStorage.setItem("todo-list", JSON.stringify(todos));
//     showTodo(document.querySelector("span.active").id);
//   }
// });

// function addMore() {
//   let inputVal = document.getElementById("name").value;

//   if (inputVal == " ") {
//     document.getElementById("error").innerHTML = "plase enter value";
//   }
// }

// let addNew = document.querySelector("#Addtask");

// value = [];

// function displayData() {
//   var inputData = document.getElementById("newtask");

//   value.push(inputData.value);
//   inputData.value = "";
// }

// addNew.addEventListener("click", function AddTasks() {
//   document.getElementsByClassName("todos").innerHTML = value.join(", ");
//   console.log(Addtask);
// });

// Below is the entire code running

// let a   ddNew = document.querySelector("#Addtask");

// const addForm = document.querySelector(".add"); //reference to form
// const list = document.querySelector(".todos"); //reference to ul

// let newTask = document.querySelector("#newtask");

// var todos = document.querySelector(".todos");

// let detlte = document.querySelector(".delete");

// let li = document.createComment("li");

// taskArray = "";

// todos.addEventListener("click", (e) => {
//   // if (e.target.tagName === "I")
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.remove();

//     console.log(e);
//   }
// });

// addNew.addEventListener("click", AddTasks);
// // detlte.addEventListener("click", Delete);

// function AddTasks() {
//   var x = document.querySelector("#newtask").value;

//   todos.innerHTML += `    <li class="list-group-item d-flex justify-content-between align-items-center" >
//   <span>${x}</span>
//   <i class="fa fa-trash-o delete"></i>

// </li>`;
// }

// All the code above is running

//   var listLength = newTask.children.length;

//   for (i = 0; i < listLength; i++) {
//     newTask.removeChild(newTask.children[0]);
//   }

//   if (x !== "") {
//     let span = document.createElement("span");
//     let test = document.createTextNode(x);
//     span.append(test);
//     span.addEventListener("click", () => {
//       span.parentNode.removeChild(span);
//     });
//     todos.appendChild(span);
//     document.querySelector("#newtask").value = "";
//   }

// todos.removeChild(menu.lastElementChild);

// todos.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const button = event.target;
//     const li = button.parentMode;
//     const ul = li.parentMode;
//     if (button.textContent === "remove") {
//       ul.removeChild(li);
//     }
//   }
// });
