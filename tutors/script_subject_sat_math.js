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
    { domain: "Advanced Math", score: "60%", date: "2/13/25" },
    { domain: "Algebra", score: "80%", date: "2/5/25" },
    { domain: "Advanced Math", score: "70%", date: "1/28/25" },
    { domain: "Geometry and Trigonometry", score: "60%", date: "1/24/25" },
    { domain: "Problem Solving and Data Analysis", score: "80%", date: "1/21/25" },
    { domain: "Algebra", score: "50%", date: "1/5/25" }
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
      card.className = "subject-card";
  
      // Content Domain as heading
      const domainHeading = document.createElement("h3");
      domainHeading.textContent = set.domain;
  
      // Score as paragraph
      const scorePara = document.createElement("p");
      scorePara.textContent = `Score: ${set.score}`;
      
      // Add color to score based on percentage
      const scoreValue = parseInt(set.score);
      if (scoreValue >= 80) {
        scorePara.innerHTML = `Score: <span style="color: var(--success);">${set.score}</span>`;
      } else if (scoreValue >= 70) {
        scorePara.innerHTML = `Score: <span style="color: var(--primary);">${set.score}</span>`;
      } else if (scoreValue >= 60) {
        scorePara.innerHTML = `Score: <span style="color: var(--warning);">${set.score}</span>`;
      } else {
        scorePara.innerHTML = `Score: <span style="color: var(--danger);">${set.score}</span>`;
      }
  
      // Date as paragraph
      const datePara = document.createElement("p");
      datePara.textContent = `Completed: ${set.date}`;
  
      // View details link
      const viewDetailsBtn = document.createElement("a");
      viewDetailsBtn.className = "view-details-btn";
      viewDetailsBtn.textContent = "View Details";
      viewDetailsBtn.href = "#"; // Placeholder
  
      viewDetailsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (set.domain === "Problem Solving and Data Analysis") {
          // Only navigate if this subject domain is 'Problem Solving and Data Analysis'
          window.location.href = "practice_set_detail.html";
        } else {
            alert(`Viewing details for ${set.domain} practice set!`);
        }
      });
      
      // Assemble card
      card.appendChild(domainHeading);
      card.appendChild(scorePara);
      card.appendChild(datePara);
      card.appendChild(viewDetailsBtn);
  
      container.appendChild(card);
    });
  }
  