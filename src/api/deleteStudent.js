export function deleteStudent(id) {
  if (!confirm("Ви впевнені, що хочете видалити цього студента?")) return;

  fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  }).then(() => {
    import("./getStudents.js").then((module) => module.getStudents());
  });
}
