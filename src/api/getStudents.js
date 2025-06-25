export function getStudents() {
  fetch("http://localhost:3000/students")
    .then((response) => response.json())
    .then((data) => renderStudents(data))
    .catch((error) => console.error("Помилка отримання студентів:", error));
}

function renderStudents(students) {
  const studentsTableBody = document.querySelector("#students-table tbody");
  studentsTableBody.innerHTML = "";
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.skills.join(", ")}</td>
      <td>${student.email}</td>
      <td>${student.isEnrolled ? "Так" : "Ні"}</td>
      <td>
        <button class="update-btn" data-id="${student.id}">Оновити</button>
        <button class="delete-btn" data-id="${student.id}">Видалити</button>
      </td>
    `;
    studentsTableBody.appendChild(row);
  });
}
