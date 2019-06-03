// Get the modal
var intro_section = document.getElementById('intro');
var education_section = document.getElementById('education');
var skills_section = document.getElementById('skills');
var details_section = document.getElementById("detail");
var contact_section = document.getElementById('contact');


// Get the button that opens the modal
var button1 = document.getElementById("about");
var button2 = document.getElementById("academics");
var button3 = document.getElementById("talent");
var button4 = document.getElementById("c_details");
var button5 = document.getElementById("references");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
button1.onclick = function() {
    intro_section.style.display = "block";
}
button2.onclick = function() {
    education_section.style.display = "block";
}
button3.onclick = function() {
    skills_section.style.display = "block";
}
button4.onclick = function() {
  details_section.style.display = "block";
}
button5.onclick = function() {
    contact_section.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
for (const elem in span) {
    span[elem].onclick = function() {
        intro_section.style.display = "none";
        education_section.style.display = "none";
        skills_section.style.display = "none";
        details_section.style.display = "none";
        contact_section.style.display = "none";
    }

}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == intro_section) {
        intro_section.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == education_section) {
        education_section.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == skills_section) {
        skills_section.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == details_section) {
        details_section.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == contact_section) {
        contact_section.style.display = "none";
    }
}
