export async function deleteStudent(id) {
  if (!confirm("Ви впевнені, що хочете видалити цього студента?")) return;

  await fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  });

  const module = import("./getStudents.js");
  module.getStudents();
}
