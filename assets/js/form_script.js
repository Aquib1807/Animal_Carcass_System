// Function to generate a random token ID
function generateToken() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 10; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

// Handle form submission
$("#complaintForm").submit(function (event) {
  event.preventDefault();
  const formData = $(this).serializeArray();
  const token = generateToken();
  formData.push({ name: "token", value: token });

  // Submit form data to the server using AJAX
  $.ajax({
    type: "POST",
    url: "submit_complaint.php",
    data: formData,
    success: function (response) {
      alert("Complaint submitted successfully. Token ID: " + token);
    },
    error: function () {
      alert("Error submitting the complaint.");
    },
  });
});
