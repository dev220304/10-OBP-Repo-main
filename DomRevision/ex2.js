let students = document.querySelectorAll(".student");


console.log("Total students:", students.length);

students.forEach(function(student) {
  console.log(student.textContent);
  student.style.color="green"
});


let button = document.getElementById("highlightBtn");

button.addEventListener("click", function() {
  students.forEach(function(student) {
    student.classList.add("highlight");
  });


  button.textContent = "Students Highlighted";
});