export function addStudent(e) {
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

  // Валідація простенька (наприклад, ім'я не пусте)
  if (!student.name) {
    showMessage("Ім'я не може бути порожнім", true);
    return;
  }

  fetch("http://localhost:3000/students", {
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
    })
    .catch((error) => {
      console.error("Помилка при додаванні студента:", error);
      showMessage("Не вдалося додати студента", true);
    });
}

function showMessage(text, isError = false) {
  let msgElem = document.getElementById("message-box");
  if (!msgElem) {
    msgElem = document.createElement("div");
    msgElem.id = "message-box";
    msgElem.style.position = "fixed";
    msgElem.style.top = "10px";
    msgElem.style.right = "10px";
    msgElem.style.padding = "10px 20px";
    msgElem.style.borderRadius = "5px";
    msgElem.style.fontWeight = "bold";
    msgElem.style.zIndex = "1000";
    msgElem.style.transition = "opacity 0.5s";
    document.body.appendChild(msgElem);
  }
  msgElem.textContent = text;
  msgElem.style.backgroundColor = isError ? "#f44336" : "#4caf50";
  msgElem.style.color = "white";
  msgElem.style.opacity = "1";

  setTimeout(() => {
    if (msgElem) msgElem.style.opacity = "0";
  }, 3000);
}
