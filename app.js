const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
loadEventListeners();
function loadEventListeners() {
  // **************** ADD TASK EVENT ********************
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (taskInput.value === "") {
      alert("Add a Task");
    }

    const li = document.createElement("li");
    const link = document.createElement("a");
    li.append(taskInput.value);
    li.className = "collection-item";
    link.className = "delete-item secondary-content";
    link.innerHTML = `<i class="fas fa-times"></i>`;
    li.append(link);
    taskList.append(li);
    taskInput.value = "";
    // store in local storage
  });

  // **************** DELETE TASK EVENT FROM THE LIST ********************
  document.querySelector(".collection").addEventListener("click", function (e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
      e.target.parentElement.parentElement.remove();
    }
  });

  // **************** CLEARING ALL TASK EVENTS FROM THE LIST ********************
  clearButton.addEventListener("click", function () {
    // let allTasks = taskList.children;
    // let arr = Array.from(allTasks);
    // arr.forEach(function (i) {
    //   i.remove();
    // });
    //OR
    // while (taskList.firstChild) {
    //   taskList.removeChild(taskList.firstChild);
    // }
    //OR
    let allTasks = document.querySelectorAll(".collection-item");
    if (confirm("Are you sure")) {
      allTasks.forEach(function (i) {
        i.remove();
      });
    }
  });

  // **************** FILTERING THROUGH THE LIST ********************

  filter.addEventListener("keyup", function () {
    const textOfFilterInput = filter.value.toLowerCase();

    const allTaskItems = document.querySelectorAll(".collection-item");

    allTaskItems.forEach(function (current) {
      const textOnTaskItems = current.firstChild.textContent.toLocaleLowerCase();
      if (textOnTaskItems.indexOf(textOfFilterInput) != -1) {
        current.style.display = "block";
      } else {
        current.style.display = "none";
      }
    });
  });
}
