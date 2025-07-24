export async function updateStudent(id) {
  const newName = prompt("Введіть нове ім'я студента:");
  if (!newName) return;

  await fetch(`http://localhost:3000/students/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newName }),
  })
    .then((res) => res.json())
    .then(() => {
      import("./getStudents.js").then((module) => module.getStudents());
    });
}
