const Rating = document.querySelectorAll(".rating");
const btnEl = document.getElementById("Sendbtn");
const containerEl = document.getElementById("container");

let selectedRating = "";

Rating.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
      <div class="feedback-message">
        <strong>Thank you!</strong>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        <button class="closebtn" id="closebtn">Close</button>
      </div>
    `;
    const closeBtn = document.getElementById("closebtn");
    closeBtn.addEventListener("click", () => {
      location.reload();
    });

    document.querySelector('.feedback-message').style.display = 'block';
  } else {
    alert("Please select a feedback emoji first");
  }
});

function removeActive() {
  Rating.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}