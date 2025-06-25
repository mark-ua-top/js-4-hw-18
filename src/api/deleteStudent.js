export function deleteStudent(id) {
  if (!confirm("Ви впевнені, що хочете видалити цього студента?")) return;

  fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Не вдалося видалити студента");
      return res.json();
    })
    .then(() => {
      import("./getStudents.js").then((module) => module.getStudents());
    })
    .catch((err) => {
      console.error("Помилка видалення студента:", err);
      showMessage("Помилка при видаленні студента", true);
    });
}
