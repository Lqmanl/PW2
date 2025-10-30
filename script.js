document.getElementById("email").onblur = function () {
  this.style.backgroundColor = "#f8d7da";
};

document.getElementById("email").onfocus = function () {
  this.style.backgroundColor = "#d1e7dd";
};

function toUpperCaseInput(id) {
  const input = document.getElementById(id);
  input.onchange = function () {
    this.value = this.value.toUpperCase();
  };
}

function previewImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const output = document.getElementById('studentImage');
    output.src = reader.result; 
  }

  if (file) {
    reader.readAsDataURL(file); 
  }
}

toUpperCaseInput("studentName");
toUpperCaseInput("fatherName");
toUpperCaseInput("motherName");

document.getElementById("registerBtn").addEventListener("click", function () {
  const form = document.getElementById("registrationForm");
  if (form.checkValidity()) {
    const myModal = new bootstrap.Modal(document.getElementById("registerModal"));
    document.querySelector("#registerModal .modal-body").textContent =
      "✅ Your details have been saved!";
    myModal.show();
  } else {
    form.reportValidity(); 
  }
})
