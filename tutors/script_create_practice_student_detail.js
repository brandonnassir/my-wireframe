// script_student_detail.js

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
  
  // Potential expansions:
  //  - Add event listeners to subject cards to open a "subject detail" page
  //  - Offer an "Edit Student Info" button to demonstrate future functionality
  



  document.addEventListener("DOMContentLoaded", () => {
    const satMathCard = document.getElementById("satMathCard");
    satMathCard.addEventListener("click", () => {
      window.location.href = "problem_selection.html";
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const satEnglishCard = document.getElementById("satEnglishCard");
    satEnglishCard.addEventListener("click", () => {
      window.location.href = "problem_selection.html";
    });
  });
