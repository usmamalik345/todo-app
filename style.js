let addNew = document.querySelector("#Addtask");

const addForm = document.querySelector(".add"); //reference to form
const list = document.querySelector(".todos"); //reference to ul

let newTask = document.querySelector("#newtask");

var todos = document.querySelector(".todos");

let detlte = document.querySelector(".delete");

let li = document.createComment("li");

taskArray = "";

todos.addEventListener("click", (e) => {
  // if (e.target.tagName === "I")
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();

    console.log(e);
  }
});

addNew.addEventListener("click", AddTasks);
// detlte.addEventListener("click", Delete);

function AddTasks() {
  var x = document.querySelector("#newtask").value;

  todos.innerHTML += `    <li class="list-group-item d-flex justify-content-between align-items-center" >
  <span>${x}</span>
  <i class="fa fa-trash-o delete"></i>

</li>`;
}

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
