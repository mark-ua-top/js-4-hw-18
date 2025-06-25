import { getStudents } from "./api/getStudents.js";
import { addStudent } from "./api/postStudent.js";
import { updateStudent } from "./api/patchStudent.js";
import { deleteStudent } from "./api/deleteStudent.js";

document
  .getElementById("get-students-btn")
  .addEventListener("click", getStudents);

document
  .getElementById("add-student-form")
  .addEventListener("submit", addStudent);

document
  .getElementById("students-table")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const id = e.target.dataset.id;
      if (e.target.classList.contains("update-btn")) {
        updateStudent(id);
      }
      if (e.target.classList.contains("delete-btn")) {
        deleteStudent(id);
      }
    }
  });
