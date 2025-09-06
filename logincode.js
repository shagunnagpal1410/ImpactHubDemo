 // Bootstrap form validation
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.forEach.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();

    // NGO toggle logic
    document.addEventListener("DOMContentLoaded", function() {
      const ngoYes = document.getElementById("ngo_yes");
      const ngoNo = document.getElementById("ngo_no");
      const ngoFields = document.getElementById("ngo_fields");
      const i6 = document.getElementById("i6");
      const i9 = document.getElementById("i9");

      function toggleNgoFields() {
        if (ngoYes.checked) {
          ngoFields.style.display = "block";
          i6.setAttribute("required", "true");
          i9.setAttribute("required", "true");
        } else {
          ngoFields.style.display = "none";
          i6.removeAttribute("required");
          i9.removeAttribute("required");
        }
      }

      ngoYes.addEventListener("change", toggleNgoFields);
      ngoNo.addEventListener("change", toggleNgoFields);
    });