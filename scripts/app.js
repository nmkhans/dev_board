const completedTaskCount = document.getElementById("completed__task");
const assignedTaskCount = document.getElementById("assigned__task");
const taskbtnList = document.getElementsByClassName("task__btn");
const activityLogList = document.getElementById("activity__log");
const clearHistoryBtn = document.getElementById("clear__history")

for (const taskBtn of taskbtnList) {
  taskBtn.addEventListener("click", completeTask);
}

function updateBtn(btn) {
  btn.classList.remove("bg-[#3752FD]");
  btn.classList.add("disabled:!bg-[#3752FD]/20");
  btn.disabled = true;
}

function updateCompletedTask(element) {
  let currentCompletedTask = parseInt(element.innerText);
  let newCompletedTask = currentCompletedTask + 1;

  element.innerText = newCompletedTask;
}

function updateAssignedTask(element) {
  let currentAssignedTask = parseInt(element.innerText);
  let newAssignedTask = currentAssignedTask - 1;

  if(newAssignedTask === 0) {
    alert("Congratulations! You have completed all the task.")
  }

  element.innerText = `0${newAssignedTask}`;
}

function completeTask(e) {
  alert("Board updated Successfully.");

  updateBtn(e.target);

  updateCompletedTask(completedTaskCount);

  updateAssignedTask(assignedTaskCount);
}
