//your JS code here. If required.
// Asking for confirmation using confirm
const userConfirmation = confirm("Do you want to proceed?");

// Checking the user's response
if (userConfirmation) {
  // Displaying an alert if OK is clicked
  alert("You clicked OK. Proceeding...");
} else {
  // Displaying an alert if Cancel is clicked
  alert("You clicked Cancel. Exiting...");
}
