document.getElementById("bookingform").addEventListener("submit", function(e) {
  e.preventDefauilt();
  
  let name = document.getElementById("name").Value;
  alert("Appointment booked for " + name);
});

//Scroll to booking section
function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
  });
}