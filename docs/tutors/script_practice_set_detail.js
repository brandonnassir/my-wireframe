// script_practice_set_detail.js

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
  
  // Dummy data for problems
  // (As provided in the instructions, focusing on 'Problem Solving and Data Analysis')
  const problems = [
    {
      "Problem Number": 1,
      "Problem text": "A bag contains 5 red marbles and 3 blue marbles. If one marble is randomly selected, what is the probability it is red?",
      "Options": {
        "A": "5/8",
        "B": "3/8",
        "C": "5/3",
        "D": "3/5"
      },
      "You selected the correct answer. The correct answer is": "You selected the correct answer. The correct answer is: A",
      "Solution": "Choice A is correct. There are 8 total marbles. The number of red marbles is 5. The probability of selecting a red marble is 5 out of 8, or 5/8.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Calculate the probability of an event using a description of a situation."
    },
    {
      "Problem Number": 2,
      "Problem text": "A card is drawn from a standard deck of 52 cards. What is the probability of drawing a queen?",
      "Options": {
        "A": "1/4",
        "B": "1/13",
        "C": "4/13",
        "D": "4/52"
      },
      "You selected the correct answer. The correct answer is": "B",
      "Solution": "Choice B is correct. There are 4 queens in a deck. The probability of drawing a queen is 4 out of 52, or 1/13.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Interpret probability based on a real-world context."
    },
    {
      "Problem Number": 3,
      "Problem text": "A student randomly chooses a day of the week to do homework. What is the probability they choose Saturday?",
      "Options": {
        "A": "1/5",
        "B": "2/7",
        "C": "1/7",
        "D": "1/6"
      },
      "You selected the correct answer. The correct answer is": "C",
      "Solution": "Choice C is correct. There are 7 days in a week. The chance of picking Saturday is 1 out of 7, or 1/7.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Calculate simple probabilities in real-life situations."
    },
    {
      "Problem Number": 4,
      "Problem text": "A drawer has 6 white socks and 4 black socks. One sock is picked at random. What is the probability it is black?",
      "Options": {
        "A": "6/10",
        "B": "4/10",
        "C": "4/6",
        "D": "6/4"
      },
      "You selected the correct answer. The correct answer is": "B",
      "Solution": "Choice B is correct. There are 10 socks total. The number of black socks is 4, so the probability is 4/10 or 2/5.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Express the probability of a specific outcome from a set of possible outcomes."
    },
    {
      "Problem Number": 5,
      "Problem text": "A spinner is divided into 4 equal sections labeled A, B, C, and D. What is the probability it lands on B?",
      "Options": {
        "A": "1/2",
        "B": "1/3",
        "C": "2/4",
        "D": "1/4"
      },
      "You selected the correct answer. The correct answer is": "D",
      "Solution": "Choice D is correct. There are 4 sections. Each section has an equal chance of being selected. So, the probability is 1/4.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Interpret equally likely outcomes."
    },
    {
      "Problem Number": 6,
      "Problem text": "A class has 12 boys and 8 girls. If a student is picked at random, what is the probability it is a girl?",
      "Options": {
        "A": "2/5",
        "B": "8/12",
        "C": "12/20",
        "D": "8/20"
      },
      "You selected the correct answer. The correct answer is": "A",
      "Solution": "Choice A is correct. The total number of students is 20. The number of girls is 8, so the probability is 8/20 or 2/5.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Determine probability from real-world proportions."
    },
    {
      "Problem Number": 7,
      "Problem text": "A box contains 10 pens, 7 of which work. What is the probability of picking a pen that works?",
      "Options": {
        "A": "3/10",
        "B": "10/7",
        "C": "7/10",
        "D": "7/3"
      },
      "You selected the correct answer. The correct answer is": "You selected the correct answer. The correct answer is: C",
      "Solution": "Choice C is correct. Out of 10 pens, 7 work. The probability is 7/10.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Identify probability from described outcomes."
    },
    {
      "Problem Number": 8,
      "Problem text": "A survey finds that 3 out of every 5 students prefer math. What is the probability that a randomly selected student prefers math?",
      "Options": {
        "A": "2/5",
        "B": "3/5",
        "C": "3/2",
        "D": "5/3"
      },
      "You selected the correct answer. The correct answer is": "B",
      "Solution": "Choice B is correct. The probability is already given as 3 out of 5, or 3/5.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Use ratios to describe probabilities."
    },
    {
      "Problem Number": 9,
      "Problem text": "A coin is flipped once. What is the probability it lands on heads?",
      "Options": {
        "A": "1",
        "B": "1/3",
        "C": "2/3",
        "D": "1/2"
      },
      "You selected the correct answer. The correct answer is": "D",
      "Solution": "Choice D is correct. A fair coin has two sides. The chance of heads is 1/2.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Model probability of a two-outcome event."
    },
    {
      "Problem Number": 10,
      "Problem text": "A jar has 9 red candies and 1 green candy. What is the probability of selecting the green candy?",
      "Options": {
        "A": "1/10",
        "B": "9/10",
        "C": "1/9",
        "D": "9/1"
      },
      "You selected the correct answer. The correct answer is": "You selected the correct answer. The correct answer is: A",
      "Solution": "Choice A is correct. There are 10 candies. Only 1 is green, so the probability is 1/10.",
      "Contain Domain": "Problem Solving and Data Analysis",
      "Topic": "Probability and Conditional Probability",
      "Knowledge Testing Point": "Calculate probability using frequency of outcomes."
    }
  ];
  
  // Variables for modal navigation
  let currentProblemIndex = 0;
  
  // On DOM load, we generate problem blocks
  window.addEventListener("DOMContentLoaded", () => {
    // 1) Calculate total correct answers
    const correctCount = problems.filter(prob =>
      prob["You selected the correct answer. The correct answer is"]
        .toLowerCase()
        .includes("correct answer")
    ).length;

    // 2) Display the overall student score at the top
    const scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.textContent = `${correctCount}/${problems.length}`;
    
    // Update progress bar
    const percentage = (correctCount / problems.length) * 100;
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = `${percentage}%`;
    
    // Set progress bar color based on performance
    if (percentage >= 80) {
      progressBar.style.backgroundColor = '#2ecc71'; // Green for excellent
    } else if (percentage >= 60) {
      progressBar.style.backgroundColor = '#f39c12'; // Orange for good
    } else {
      progressBar.style.backgroundColor = '#e74c3c'; // Red for needs improvement
    }

    // 3) Render the dynamic table of contents
    renderTOC();
    
    // 4) Create the problem grid view
    renderProblemGrid();

    // 5) Now render the actual problems
    renderProblems();
    
    // 6) Set up event listeners for buttons and modal
    setupEventListeners();
  });
  
  // Setup all event listeners
  function setupEventListeners() {
    // Toggle view buttons
    document.getElementById("listViewBtn").addEventListener("click", () => toggleView('list'));
    document.getElementById("gridViewBtn").addEventListener("click", () => toggleView('grid'));
    
    // Action buttons
    document.getElementById("printBtn").addEventListener("click", printPracticeSet);
    document.getElementById("exportBtn").addEventListener("click", exportResults);
    document.getElementById("assignAgainBtn").addEventListener("click", assignAgain);
    
    // Modal controls
    document.querySelector(".modal-close").addEventListener("click", closeModal);
    document.getElementById("closeModalBtn").addEventListener("click", closeModal);
    document.getElementById("prevProblemBtn").addEventListener("click", showPreviousProblem);
    document.getElementById("nextProblemBtn").addEventListener("click", showNextProblem);
    
    // Close modal on outside click
    window.addEventListener("click", (e) => {
      if (e.target === document.getElementById("solutionModal")) {
        closeModal();
      }
    });
  }
  
  // Toggle between list and grid views
  function toggleView(viewType) {
    const listView = document.getElementById("problemList");
    const gridView = document.getElementById("problemGrid");
    const listViewBtn = document.getElementById("listViewBtn");
    const gridViewBtn = document.getElementById("gridViewBtn");
    
    if (viewType === 'grid') {
      listView.style.display = "none";
      gridView.style.display = "flex";
      listViewBtn.classList.remove("active");
      gridViewBtn.classList.add("active");
    } else {
      listView.style.display = "block";
      gridView.style.display = "none";
      listViewBtn.classList.add("active");
      gridViewBtn.classList.remove("active");
    }
  }
  
  // Print functionality
  function printPracticeSet() {
    window.print();
  }
  
  // Export functionality
  function exportResults() {
    alert("Exporting results to PDF...");
    // In a real implementation, this would generate and download a PDF
  }
  
  // Assign again functionality
  function assignAgain() {
    if (confirm("Would you like to assign this practice set to the student again?")) {
      alert("Practice set has been reassigned to Cole Stone.");
    }
  }
  
  // Create grid view of problems
  function renderProblemGrid() {
    const grid = document.getElementById("problemGrid");
    grid.innerHTML = "";
    
    problems.forEach((prob, index) => {
      const isCorrect = prob["You selected the correct answer. The correct answer is"].toLowerCase().includes("correct answer");
      
      const gridItem = document.createElement("div");
      gridItem.className = `grid-item ${isCorrect ? 'correct' : 'incorrect'}`;
      
      const problemNumber = document.createElement("div");
      problemNumber.className = "problem-number";
      problemNumber.textContent = prob["Problem Number"];
      
      const statusIcon = document.createElement("div");
      statusIcon.className = "status-icon";
      statusIcon.innerHTML = isCorrect ? '✓' : '✗';
      
      gridItem.appendChild(problemNumber);
      gridItem.appendChild(statusIcon);
      
      // Add click event to open the solution modal
      gridItem.addEventListener("click", () => {
        openSolutionModal(index);
      });
      
      grid.appendChild(gridItem);
    });
  }
  
  // Create table of contents for problems
  function renderTOC() {
    const list = document.getElementById("problemsList");
    list.innerHTML = "";
  
    problems.forEach((prob, index) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      
      link.href = `#problem${prob["Problem Number"]}`;
      
      // Create a more detailed list item
      const linkContent = document.createElement("div");
      linkContent.className = "problem-link-content";
      
      const problemNumberSpan = document.createElement("span");
      problemNumberSpan.className = "problem-number-span";
      problemNumberSpan.textContent = `Problem ${prob["Problem Number"]}`;
      
      const problemPreview = document.createElement("span");
      problemPreview.className = "problem-preview";
      const previewText = prob["Problem text"].length > 50 ? 
        prob["Problem text"].substring(0, 50) + "..." : 
        prob["Problem text"];
      problemPreview.textContent = previewText;

      linkContent.appendChild(problemNumberSpan);
      linkContent.appendChild(problemPreview);
      
      // Add status indicator
      const answerCheck = prob["You selected the correct answer. The correct answer is"];
      const statusIndicator = document.createElement("span");
      
      if (answerCheck && answerCheck.toLowerCase().includes("correct answer")) {
        statusIndicator.className = "status-indicator correct";
        statusIndicator.textContent = "✓";
        link.classList.add("toc-link-correct");
      } else {
        statusIndicator.className = "status-indicator incorrect";
        statusIndicator.textContent = "✗";
        link.classList.add("toc-link-incorrect");
      }
      
      linkContent.appendChild(statusIndicator);
      link.appendChild(linkContent);
      
      // Add view solution button
      const viewSolutionBtn = document.createElement("button");
      viewSolutionBtn.className = "view-solution-button";
      viewSolutionBtn.textContent = "View Solution";
      viewSolutionBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openSolutionModal(index);
      });
      
      li.appendChild(link);
      li.appendChild(viewSolutionBtn);
      list.appendChild(li);
    });
  }
  
  // Create each problem as a block in #problemsContainer
  function renderProblems() {
    const container = document.getElementById("problemsContainer");
    container.innerHTML = ""; // Clear existing
  
    problems.forEach((prob, index) => {
      // Create the main problem card
      const block = document.createElement("div");
      block.className = "problem-block";
      block.id = `problem${prob["Problem Number"]}`;
  
      // Create card header
      const cardHeader = document.createElement("div");
      cardHeader.className = "problem-header";
      
      const title = document.createElement("h2");
      title.textContent = `Problem ${prob["Problem Number"]}`;
      
      const domainBadge = document.createElement("span");
      domainBadge.className = "domain-badge";
      domainBadge.textContent = prob["Contain Domain"];
      
      cardHeader.appendChild(title);
      cardHeader.appendChild(domainBadge);
      block.appendChild(cardHeader);
      
      // Problem content section
      const contentSection = document.createElement("div");
      contentSection.className = "problem-content";
      
      // Problem text in a highlighted box
      const problemTextBox = document.createElement("div");
      problemTextBox.className = "problem-text-box";
      
      const problemText = document.createElement("p");
      problemText.textContent = prob["Problem text"];
      problemTextBox.appendChild(problemText);
      
      contentSection.appendChild(problemTextBox);
      
      // Add multiple choice options
      const optionsContainer = document.createElement("div");
      optionsContainer.className = "options-container";
      
      Object.entries(prob.Options).forEach(([letter, text]) => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-item";
        
        const optionLetter = document.createElement("span");
        optionLetter.className = "option-letter";
        optionLetter.textContent = letter;
        
        const optionText = document.createElement("span");
        optionText.className = "option-text";
        optionText.textContent = text;
        
        optionDiv.appendChild(optionLetter);
        optionDiv.appendChild(optionText);
        
        // Highlight the selected/correct answer
        const correctAnswer = prob["You selected the correct answer. The correct answer is"]
          .split("The correct answer is")[1]?.trim()
          .replace(":", "")
          .trim();
        
        if (correctAnswer === letter) {
          optionDiv.classList.add("correct-option");
        }
        
        optionsContainer.appendChild(optionDiv);
      });
      
      contentSection.appendChild(optionsContainer);
      
      // Student response with visual indicator
      const responseBox = document.createElement("div");
      let responseText = prob["You selected the correct answer. The correct answer is"];
      
      if (responseText && responseText.toLowerCase().includes("correct answer")) {
        responseBox.className = "response-box correct-answer-box";
        
        const checkIcon = document.createElement("span");
        checkIcon.className = "response-icon";
        checkIcon.textContent = "✓";
        
        const responseContent = document.createElement("div");
        responseContent.className = "response-content";
        
        const responseLabel = document.createElement("div");
        responseLabel.className = "response-label";
        responseLabel.textContent = "Correct Answer";
        
        const responseValue = document.createElement("div");
        responseValue.className = "response-value";
        responseValue.textContent = responseText.split("The correct answer is")[1].trim();
        
        responseContent.appendChild(responseLabel);
        responseContent.appendChild(responseValue);
        
        responseBox.appendChild(checkIcon);
        responseBox.appendChild(responseContent);
      } else {
        responseBox.className = "response-box incorrect-answer-box";
        
        const crossIcon = document.createElement("span");
        crossIcon.className = "response-icon";
        crossIcon.textContent = "✗";
        
        const responseContent = document.createElement("div");
        responseContent.className = "response-content";
        
        const responseLabel = document.createElement("div");
        responseLabel.className = "response-label";
        responseLabel.textContent = "Wrong Answer";
        
        const responseValue = document.createElement("div");
        responseValue.className = "response-value";
        responseValue.textContent = "The correct answer is: " + (responseText || "not available");
        
        responseContent.appendChild(responseLabel);
        responseContent.appendChild(responseValue);
        
        responseBox.appendChild(crossIcon);
        responseBox.appendChild(responseContent);
      }
      
      contentSection.appendChild(responseBox);
      
      // Tags section for metadata
      const tagsSection = document.createElement("div");
      tagsSection.className = "tags-section";
      
      const topicTag = document.createElement("span");
      topicTag.className = "tag topic-tag";
      topicTag.textContent = prob["Topic"];
      
      const ktpTag = document.createElement("span");
      ktpTag.className = "tag ktp-tag";
      ktpTag.textContent = "KTP: " + prob["Knowledge Testing Point"].substring(0, 30) + "...";
      
      tagsSection.appendChild(topicTag);
      tagsSection.appendChild(ktpTag);
      
      contentSection.appendChild(tagsSection);
      
      // Action buttons
      const actionButtons = document.createElement("div");
      actionButtons.className = "problem-actions";
      
      const viewSolutionBtn = document.createElement("button");
      viewSolutionBtn.className = "view-solution-btn";
      viewSolutionBtn.innerHTML = '<span class="btn-icon">👁️</span> View Solution';
      viewSolutionBtn.addEventListener("click", () => openSolutionModal(index));
      
      actionButtons.appendChild(viewSolutionBtn);
      contentSection.appendChild(actionButtons);
      
      block.appendChild(contentSection);
      container.appendChild(block);
    });
  }
  
  // Open the solution modal for a specific problem
  function openSolutionModal(index) {
    currentProblemIndex = index;
    const problem = problems[index];
    
    // Set modal content
    document.getElementById("modalProblemTitle").textContent = `Problem ${problem["Problem Number"]} Solution`;
    document.getElementById("modalProblemText").textContent = problem["Problem text"];
    
    // Create options HTML for the modal
    const optionsHTML = Object.entries(problem.Options)
      .map(([letter, text]) => {
        const isCorrect = problem["You selected the correct answer. The correct answer is"]
          .split("The correct answer is")[1]?.trim()
          .replace(":", "")
          .trim() === letter;
        
        return `
          <div class="option-item ${isCorrect ? 'correct-option' : ''}">
            <span class="option-letter">${letter}</span>
            <span class="option-text">${text}</span>
          </div>
        `;
      })
      .join('');
    
    // Add options before the solution
    document.getElementById("modalProblemText").insertAdjacentHTML('afterend', 
      `<div class="options-container modal-options">${optionsHTML}</div>`);
    
    document.getElementById("modalSolution").textContent = problem["Solution"];
    document.getElementById("modalDomain").textContent = problem["Contain Domain"];
    document.getElementById("modalTopic").textContent = problem["Topic"];
    document.getElementById("modalKTP").textContent = problem["Knowledge Testing Point"];
    
    // Update navigation button states
    document.getElementById("prevProblemBtn").disabled = index === 0;
    document.getElementById("nextProblemBtn").disabled = index === problems.length - 1;
    
    // Display the modal
    const modal = document.getElementById("solutionModal");
    modal.style.display = "flex";
  }
  
  // Close the solution modal
  function closeModal() {
    document.getElementById("solutionModal").style.display = "none";
  }
  
  // Show the previous problem in the modal
  function showPreviousProblem() {
    if (currentProblemIndex > 0) {
      openSolutionModal(currentProblemIndex - 1);
    }
  }
  
  // Show the next problem in the modal
  function showNextProblem() {
    if (currentProblemIndex < problems.length - 1) {
      openSolutionModal(currentProblemIndex + 1);
    }
  }
  
  // Add custom styles for the improved components
  document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement('style');
    style.textContent = `
      /* ===== Summary Card ===== */
      .summary-card {
        background-color: var(--white);
        border-radius: var(--card-border-radius);
        box-shadow: var(--card-shadow);
        margin-bottom: 2rem;
        overflow: hidden;
      }
      
      .summary-header {
        background-color: var(--primary);
        color: white;
        padding: 1.25rem 1.5rem;
      }
      
      .summary-header h2 {
        margin: 0;
        font-size: 1.3rem;
        font-weight: 600;
      }
      
      .summary-content {
        padding: 1.5rem;
      }
      
      .student-info {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      
      .student-avatar {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1rem;
      }
      
      .student-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .student-details h3 {
        margin: 0 0 0.25rem;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--gray-900);
      }
      
      .student-details p {
        margin: 0;
        color: var(--gray-600);
        font-size: 0.95rem;
      }
      
      .score-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
      }
      
      .score-card {
        text-align: center;
      }
      
      .score-value {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary);
      }
      
      .score-label {
        font-size: 0.9rem;
        color: var(--gray-600);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .progress-container {
        flex: 1;
        height: 12px;
        background-color: var(--gray-200);
        border-radius: 6px;
        margin-left: 2rem;
        overflow: hidden;
      }
      
      .progress-bar {
        height: 100%;
        background-color: var(--primary);
        border-radius: 6px;
        transition: width 1s ease-in-out;
      }
      
      .meta-info {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;
      }
      
      .meta-item {
        display: flex;
        align-items: center;
        color: var(--gray-700);
        font-size: 0.95rem;
      }
      
      .meta-icon {
        margin-right: 0.5rem;
        font-size: 1.1rem;
      }
      
      /* ===== Action Buttons ===== */
      .action-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.25rem;
        border: none;
        border-radius: var(--border-radius);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .print-btn {
        background-color: var(--gray-200);
        color: var(--gray-800);
      }
      
      .print-btn:hover {
        background-color: var(--gray-300);
      }
      
      .export-btn {
        background-color: var(--gray-700);
        color: white;
      }
      
      .export-btn:hover {
        background-color: var(--gray-800);
      }
      
      .primary-btn {
        background-color: var(--primary);
        color: white;
      }
      
      .primary-btn:hover {
        background-color: var(--primary-dark);
      }
      
      /* ===== Problems Navigation ===== */
      .problems-navigation {
        background-color: var(--white);
        border-radius: var(--card-border-radius);
        box-shadow: var(--card-shadow);
        margin-bottom: 2rem;
        padding: 1.5rem;
      }
      
      .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;
      }
      
      .nav-header h2 {
        font-size: 1.25rem;
        margin: 0;
        color: var(--gray-900);
      }
      
      .view-toggles {
        display: flex;
        gap: 0.75rem;
      }
      
      .view-toggle {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--gray-300);
        border-radius: var(--border-radius);
        background-color: var(--white);
        color: var(--gray-700);
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .view-toggle:hover {
        border-color: var(--primary);
        color: var(--primary);
      }
      
      .view-toggle.active {
        background-color: var(--primary);
        color: white;
        border-color: var(--primary);
      }
      
      .toggle-icon {
        font-size: 1rem;
      }
      
      /* ===== Problem Grid ===== */
      .problem-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
      
      .grid-item {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      
      .grid-item.correct {
        background-color: rgba(12, 206, 107, 0.1);
        border: 1px solid rgba(12, 206, 107, 0.3);
      }
      
      .grid-item.incorrect {
        background-color: rgba(239, 71, 111, 0.1);
        border: 1px solid rgba(239, 71, 111, 0.3);
      }
      
      .grid-item:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      }
      
      .problem-number {
        font-size: 1.25rem;
        font-weight: 700;
      }
      
      .status-icon {
        margin-top: 0.5rem;
        font-size: 1.25rem;
      }
      
      .grid-item.correct .status-icon {
        color: #2ecc71;
      }
      
      .grid-item.incorrect .status-icon {
        color: #e74c3c;
      }
      
      /* ===== Problem List TOC ===== */
      .problem-list-toc ol {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .problem-list-toc li {
        padding: 0;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--gray-200);
        padding-bottom: 1rem;
      }
      
      .problem-list-toc li a {
        flex: 1;
        text-decoration: none;
        color: var(--gray-800);
        padding: 0.5rem;
        border-radius: 6px;
        transition: all 0.2s ease;
      }
      
      .problem-list-toc li a:hover {
        background-color: var(--gray-100);
      }
      
      .problem-link-content {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
      }
      
      .problem-number-span {
        font-weight: 600;
        min-width: 120px;
      }
      
      .problem-preview {
        color: var(--gray-600);
        font-size: 0.9rem;
        line-height: 1.4;
        max-width: 60%;
      }
      
      .status-indicator {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-left: auto;
      }
      
      .status-indicator.correct {
        background-color: rgba(12, 206, 107, 0.1);
        color: #2ecc71;
      }
      
      .status-indicator.incorrect {
        background-color: rgba(239, 71, 111, 0.1);
        color: #e74c3c;
      }
      
      .view-solution-button {
        padding: 0.5rem 1rem;
        background-color: var(--primary);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
      }
      
      .view-solution-button:hover {
        background-color: var(--primary-dark);
      }
      
      /* ===== Problem Block ===== */
      .problem-block {
        background-color: var(--white);
        border-radius: var(--card-border-radius);
        box-shadow: var(--card-shadow);
        margin-bottom: 2rem;
        overflow: hidden;
      }
      
      .problem-header {
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid var(--gray-200);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .problem-header h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--gray-900);
      }
      
      .domain-badge {
        background-color: var(--primary-light);
        color: white;
        padding: 0.35rem 0.75rem;
        border-radius: 50px;
        font-size: 0.85rem;
        font-weight: 500;
      }
      
      .problem-content {
        padding: 1.5rem;
      }
      
      .problem-text-box {
        background-color: var(--gray-100);
        border-radius: 8px;
        padding: 1.25rem;
        margin-bottom: 1.5rem;
      }
      
      .problem-text-box p {
        margin: 0;
        font-size: 1.05rem;
        line-height: 1.6;
        color: var(--gray-800);
      }
      
      .response-box {
        display: flex;
        align-items: center;
        padding: 1.25rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
      }
      
      .correct-answer-box {
        background-color: rgba(12, 206, 107, 0.1);
        border: 1px solid rgba(12, 206, 107, 0.3);
        border-left: 5px solid #2ecc71;
      }
      
      .incorrect-answer-box {
        background-color: rgba(239, 71, 111, 0.1);
        border: 1px solid rgba(239, 71, 111, 0.3);
        border-left: 5px solid #e74c3c;
      }
      
      .response-icon {
        font-size: 1.5rem;
        font-weight: bold;
        margin-right: 1rem;
      }
      
      .correct-answer-box .response-icon {
        color: #2ecc71;
      }
      
      .incorrect-answer-box .response-icon {
        color: #e74c3c;
      }
      
      .response-content {
        flex: 1;
      }
      
      .response-label {
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      
      .correct-answer-box .response-label {
        color: #2ecc71;
      }
      
      .incorrect-answer-box .response-label {
        color: #e74c3c;
      }
      
      .response-value {
        font-size: 1.1rem;
      }
      
      .tags-section {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
      }
      
      .tag {
        padding: 0.35rem 0.75rem;
        border-radius: 50px;
        font-size: 0.85rem;
        font-weight: 500;
      }
      
      .topic-tag {
        background-color: rgba(67, 97, 238, 0.1);
        color: var(--primary);
      }
      
      .ktp-tag {
        background-color: var(--gray-200);
        color: var(--gray-700);
      }
      
      .problem-actions {
        display: flex;
        justify-content: flex-end;
      }
      
      .view-solution-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.25rem;
        background-color: var(--primary);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .view-solution-btn:hover {
        background-color: var(--primary-dark);
      }
      
      /* ===== Solution Modal ===== */
      .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
      }
      
      .modal-content {
        background-color: var(--white);
        border-radius: var(--card-border-radius);
        max-width: 700px;
        width: 90%;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      
      .modal-header {
        padding: 1.5rem;
        border-bottom: 1px solid var(--gray-200);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .modal-header h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--primary);
      }
      
      .modal-close {
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--gray-600);
        transition: all 0.2s ease;
      }
      
      .modal-close:hover {
        color: var(--gray-900);
      }
      
      .modal-body {
        padding: 1.5rem;
        overflow-y: auto;
        flex: 1;
      }
      
      .modal-problem-text {
        background-color: var(--gray-100);
        border-radius: 8px;
        padding: 1.25rem;
        margin-bottom: 1.5rem;
        font-size: 1.05rem;
        line-height: 1.6;
        color: var(--gray-800);
      }
      
      .modal-solution {
        background-color: rgba(12, 206, 107, 0.1);
        border: 1px solid rgba(12, 206, 107, 0.3);
        border-left: 5px solid #2ecc71;
        padding: 1.25rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        color: var(--gray-800);
      }
      
      .modal-metadata {
        background-color: var(--gray-50);
        border-radius: 8px;
        padding: 1.25rem;
      }
      
      .metadata-item {
        margin-bottom: 0.75rem;
      }
      
      .metadata-item:last-child {
        margin-bottom: 0;
      }
      
      .modal-footer {
        padding: 1.25rem 1.5rem;
        border-top: 1px solid var(--gray-200);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .nav-btn {
        padding: 0.5rem 1rem;
        background-color: var(--gray-200);
        color: var(--gray-700);
        border: none;
        border-radius: var(--border-radius);
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .nav-btn:hover {
        background-color: var(--gray-300);
      }
      
      .nav-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      /* Print styles */
      @media print {
        .sidebar, .openbtn, .top-actions, .problems-navigation, .problem-actions {
          display: none !important;
        }
        
        .main-content {
          margin-left: 0;
          padding: 0;
        }
        
        .problem-block {
          break-inside: avoid;
          box-shadow: none;
          border: 1px solid #ddd;
        }
      }
      
      /* ===== Multiple Choice Options ===== */
      .options-container {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin: 1.25rem 0;
      }
      
      .option-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem 1rem;
        border: 1px solid var(--gray-200);
        border-radius: 8px;
        background-color: var(--white);
        transition: all 0.2s ease;
      }
      
      .option-item:hover {
        background-color: var(--gray-50);
      }
      
      .option-letter {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--gray-100);
        border-radius: 50%;
        font-weight: 600;
        color: var(--gray-700);
        font-size: 0.9rem;
      }
      
      .option-text {
        font-size: 1rem;
        color: var(--gray-800);
      }
      
      .option-item.correct-option {
        background-color: rgba(12, 206, 107, 0.1);
        border-color: rgba(12, 206, 107, 0.3);
      }
      
      .option-item.correct-option .option-letter {
        background-color: #2ecc71;
        color: white;
      }
    `;
    
    document.head.appendChild(style);
  });
  