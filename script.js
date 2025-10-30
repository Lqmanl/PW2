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

// Image preview feature
document.getElementById("studentImage").addEventListener("change", function (event) {
  const file = event.target.files[0];
  const preview = document.getElementById("imagePreview");

  if (file) {
    // Make sure it's an image
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.classList.remove("d-none"); // show the image
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image file only.");
      preview.src = "#";
      preview.classList.add("d-none");
    }
  } else {
    preview.src = "#";
    preview.classList.add("d-none");
  }
});

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
    form.reportValidity(); // show built-in HTML5 validation errors
  }
})
