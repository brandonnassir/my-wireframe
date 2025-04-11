// script_subject_selection.js

// Toggle sidebar for mobile
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closebtn");

  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    closeBtn.style.display = "none";
  } else {
    sidebar.style.width = "250px";
    closeBtn.style.display = "block";
  }
}

// When the DOM is fully loaded, add event listeners to the subject cards
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the subject cards
  const satMathCard = document.getElementById("satMathCard");
  const satEnglishCard = document.getElementById("satEnglishCard");
  const actCard = document.getElementById("actCard");
  
  // Add click event listeners to each card
  satMathCard.addEventListener("click", () => {
    // Redirect to problem selection page, potentially with query parameter for the subject
    window.location.href = "problem_selection.html?subject=sat-math";
  });
  
  satEnglishCard.addEventListener("click", () => {
    window.location.href = "problem_selection.html?subject=sat-english";
  });
  
  actCard.addEventListener("click", () => {
    window.location.href = "problem_selection.html?subject=act";
  });
  
  // Add hover effect for better UX
  const allCards = document.querySelectorAll(".subject-card");
  allCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovering");
    });
    
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovering");
    });
  });
}); 