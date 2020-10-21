function myConfirm() {
    let r = confirm("Would you like to send an email?");
    if (r == true) {
        window.open("mailto:darveloper@gmail.com?subject=Website Inquiry")
    }
    else {
        alert("You pressed cancel!")
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }