// script_subject_sat_math.js

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
  
// Function to handle tab switching
function openTab(tabName) {
  // Hide all tab content
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });
  
  // Show the selected tab content and set the button as active
  document.getElementById(tabName).classList.add('active');
  
  // Find and activate the button that corresponds to this tab
  const activeButton = document.querySelector(`.tab-btn[onclick="openTab('${tabName}')"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}
  
// Function to handle assigning practice for a specific domain
function assignPracticeDomain(domain) {
  // Redirect to problem selection with the domain pre-selected
  window.location.href = `problem_selection.html?domain=${domain}&student=Cole Stone`;
}

// Function to handle viewing topic detail
function viewTopicDetail(topic) {
  // Store the selected topic in sessionStorage for use in the details page
  sessionStorage.setItem('selectedTopic', topic);
  // Navigate to the topic details page
  window.location.href = "topic_ktp_detail.html";
}
  
  /* 
    Diagnostic exam data. 
    Ordered from most recent (#5) to oldest (#1).
  */
  const diagnostics = [
    { diagnosticNum: "Diagnostic 5", totalScore: 1140, mathScore: 530, englishScore: 610, date: "5/15/25" },
    { diagnosticNum: "Diagnostic 4", totalScore: 1150, mathScore: 560, englishScore: 590, date: "4/27/25" },
    { diagnosticNum: "Diagnostic 3", totalScore: 1050, mathScore: 530, englishScore: 520, date: "3/16/25" },
    { diagnosticNum: "Diagnostic 2", totalScore: 1020, mathScore: 530, englishScore: 490, date: "2/5/25" },
    { diagnosticNum: "Diagnostic 1", totalScore: 1010, mathScore: 520, englishScore: 490, date: "1/5/25" }
  ];
  
  /* 
    Practice set data. 
    Ordered from most recent to oldest.
    Based on provided dates:
      - 2/13/25 (Advanced Math)
      - 2/5/25 (Algebra)
      - 1/28/25 (Advanced Math)
      - 1/24/25 (Geometry and Trigonometry)
      - 1/21/25 (Problem Solving and Data Analysis)
      - 1/5/25 (Algebra)
  */
  const practiceSets = [
    { domain: "Advanced Math", score: "60%", date: "2/13/25", teacher: "Ms. Chen" },
    { domain: "Algebra", score: "80%", date: "2/5/25", teacher: "Mr. Johnson" },
    { domain: "Mixed Problems", score: "70%", date: "1/28/25", teacher: "Ms. Chen" },
    { domain: "Geometry and Trigonometry", score: "60%", date: "1/24/25", teacher: "Dr. Patel" },
    { domain: "Problem Solving and Data Analysis", score: "80%", date: "1/21/25", teacher: "Mr. Rodriguez" },
    { domain: "Algebra", score: "50%", date: "1/5/25", teacher: "Mr. Johnson" }
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    // Render the diagnostic cards
    renderDiagnosticCards();
  
    // Render the practice set cards
    renderPracticeSetCards();
  
    // Attach event to assign practice button
    document.getElementById("assignPracticeBtn").addEventListener("click", () => {
      alert("Here you would open a form or page to assign new practice problems.");
    });
  });
  
  /***********************************************************
    RENDER DIAGNOSTIC CARDS
  ************************************************************/
  function renderDiagnosticCards() {
    const container = document.getElementById("diagnosticContainer");
  
    // Clear container just in case
    container.innerHTML = "";
  
    // For each diagnostic, create a card
    diagnostics.forEach((diag) => {
      const card = document.createElement("div");
      card.className = "subject-card";
  
      // Diagnostic title as a heading
      const diagTitle = document.createElement("h3");
      diagTitle.textContent = diag.diagnosticNum;
  
      // Total Score as a paragraph
      const diagScore = document.createElement("p");
      diagScore.textContent = `Total Score: ${diag.totalScore}`;
  
      // Math and English scores as paragraphs
      const diagMath = document.createElement("p");
      diagMath.textContent = `Math: ${diag.mathScore}`;
  
      const diagEnglish = document.createElement("p");
      diagEnglish.textContent = `English: ${diag.englishScore}`;
  
      // Date completed as paragraph
      const diagDate = document.createElement("p");
      diagDate.textContent = `Completed: ${diag.date}`;
  
      // View details button (styled as in assignments.html)
      const viewDetailsBtn = document.createElement("a");
      viewDetailsBtn.className = "view-details-btn";
      viewDetailsBtn.textContent = "View Details";
      viewDetailsBtn.href = "#"; // Placeholder
      
      // Example click event
      viewDetailsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`Navigating to detailed view for ${diag.diagnosticNum}!`);
      });
  
      // Append elements to card
      card.appendChild(diagTitle);
      card.appendChild(diagScore);
      card.appendChild(diagMath);
      card.appendChild(diagEnglish);
      card.appendChild(diagDate);
      card.appendChild(viewDetailsBtn);
  
      // Add card to container
      container.appendChild(card);
    });
  }
  
  /***********************************************************
    RENDER PRACTICE SET CARDS
  ************************************************************/
  function renderPracticeSetCards() {
    const container = document.getElementById("practiceSetContainer");
    container.innerHTML = "";
  
    practiceSets.forEach((set) => {
      const card = document.createElement("div");
      card.className = "assignment-card";
      card.style.cursor = "pointer"; // Make the card appear clickable
      
      // Add click event to the entire card
      card.addEventListener("click", (e) => {
        if (set.domain === "Problem Solving and Data Analysis") {
          window.location.href = "practice_set_detail.html";
        } else {
          alert(`Viewing details for ${set.domain} practice set!`);
        }
      });
  
      // Assignment header section
      const headerDiv = document.createElement("div");
      headerDiv.className = "assignment-header";
      
      // Content Domain as heading
      const domainHeading = document.createElement("h3");
      domainHeading.textContent = set.domain;
      
      // Add "Completed" status badge
      const statusSpan = document.createElement("span");
      statusSpan.className = "assignment-status completed";
      statusSpan.textContent = "Completed";
      
      headerDiv.appendChild(domainHeading);
      headerDiv.appendChild(statusSpan);
      
      // Assignment details section
      const detailsDiv = document.createElement("div");
      detailsDiv.className = "assignment-details";
      
      // Add teacher info
      const teacherInfo = document.createElement("p");
      teacherInfo.innerHTML = `<strong>Assigned by:</strong> ${set.teacher}`;
      
      // Date completed
      const dateInfo = document.createElement("p");
      dateInfo.innerHTML = `<strong>Completed:</strong> ${set.date}`;
      
      detailsDiv.appendChild(teacherInfo);
      detailsDiv.appendChild(dateInfo);
      
      // Assignment progress section to match the incomplete cards
      const progressDiv = document.createElement("div");
      progressDiv.className = "assignment-progress";
      
      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      
      const scoreValue = parseInt(set.score);
      let scoreClass = "danger";
      
      if (scoreValue >= 80) {
        scoreClass = "success";
      } else if (scoreValue >= 70) {
        scoreClass = "primary";
      } else if (scoreValue >= 60) {
        scoreClass = "warning";
      }
      
      const progressFill = document.createElement("div");
      progressFill.className = "progress-fill";
      progressFill.style.width = set.score; // Use the score as the fill width
      progressFill.style.backgroundColor = `var(--${scoreClass})`; // Color based on score
      
      progressBar.appendChild(progressFill);
      
      const progressText = document.createElement("span");
      progressText.className = "progress-text";
      progressText.innerHTML = `<span style="color: var(--${scoreClass});">${set.score}</span> Score`;
      
      progressDiv.appendChild(progressBar);
      progressDiv.appendChild(progressText);
      
      // Assemble card
      card.appendChild(headerDiv);
      card.appendChild(detailsDiv);
      card.appendChild(progressDiv);
  
      container.appendChild(card);
    });
  }
  