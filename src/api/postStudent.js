export async function addStudent(e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const courseInput = document.getElementById("course");
  const skillsInput = document.getElementById("skills");
  const emailInput = document.getElementById("email");
  const isEnrolledInput = document.getElementById("isEnrolled");

  const student = {
    name: nameInput.value.trim(),
    age: parseInt(ageInput.value, 10),
    course: courseInput.value.trim(),
    skills: skillsInput.value.split(",").map((s) => s.trim()),
    email: emailInput.value.trim(),
    isEnrolled: isEnrolledInput.checked,
  };

  if (!student.name) {
    showMessage("Ім'я не може бути порожнім", true);
    return;
  }

  await  fetch("http://localhost:3000/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  })
    .then((response) => {
      if (!response.ok) throw new Error(`Помилка: ${response.statusText}`);
      return response.json();
    })
    .then(() => {
      document.getElementById("add-student-form").reset();
      showMessage("Студента додано успішно!");
      import("./getStudents.js").then((module) => module.getStudents());
    });
}
