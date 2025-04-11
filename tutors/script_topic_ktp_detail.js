// script_topic_ktp_detail.js

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

// Sample KTPs for the "Linear Equations in Two Variables" topic
const ktpData = [
  {
    title: "Create and use a linear equation in two variables to solve problems in a variety of contexts.",
    correct: 3,
    incorrect: 1
  },
  {
    title: "Identify or create a linear equation in two variables to model a constraint or condition on two quantities.",
    correct: 2,
    incorrect: 2
  },
  {
    title: "For a linear equation in two variables that represents a context, interpret a solution, constant, variable, factor, or term based on the context, including situations where seeing structure provides an advantage.",
    correct: 1,
    incorrect: 3
  },
  {
    title: "Interpret the graph of a linear equation in the form Ax + By = C in a context.",
    correct: 4,
    incorrect: 0
  },
  {
    title: "Make connections between an algebraic representation and a graph of a linear equation in two variables not in context.",
    correct: 2,
    incorrect: 1
  },
  {
    title: "Make connections between a table and an algebraic representation or between a table and a graph of a linear equation in two variables not in context.",
    correct: 3,
    incorrect: 2
  },
  {
    title: "Make connections between a table, an algebraic representation, or a graph of a linear equation in two variables in a context.",
    correct: 1,
    incorrect: 2
  },
  {
    title: "For a linear equation in two variables that represents a context, given a value of one quantity in the relationship, find a value of the other, if it exists.",
    correct: 5,
    incorrect: 1
  },
  {
    title: "Write an equation for a line given two points on the line, one point and the slope of the line, or one point and a parallel or perpendicular line.",
    correct: 2,
    incorrect: 3
  }
];

// Sample problems data for "Linear Equations in Two Variables" topic
const problems = [
  {
    ProblemText: "Find the slope of the line passing through the points (1, 2) and (4, 8)",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "Write an equation for a line given two points on the line, one point and the slope of the line, or one point and a parallel or perpendicular line.",
    Difficulty: "Medium",
    IsCorrect: true,
    Solution: "Slope = (y₂ - y₁)/(x₂ - x₁) = (8 - 2)/(4 - 1) = 6/3 = 2."
  },
  {
    ProblemText: "Graph the solution set of x + 2y = 6",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "Interpret the graph of a linear equation in the form Ax + By = C in a context.",
    Difficulty: "Hard",
    IsCorrect: true,
    Solution: "Rearrange to y = (6 - x)/2 or y = 3 - x/2. Plot points (0, 3), (2, 2), (4, 1), (6, 0)."
  },
  {
    ProblemText: "The cost C(n) of producing n items is given by C(n) = 500 + 12n. What is the fixed cost and what is the cost per item?",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "For a linear equation in two variables that represents a context, interpret a solution, constant, variable, factor, or term based on the context, including situations where seeing structure provides an advantage.",
    Difficulty: "Medium",
    IsCorrect: false,
    Solution: "The fixed cost is $500 (the constant term). The cost per item is $12 (the coefficient of n)."
  },
  {
    ProblemText: "A company charges $50 plus $25 per hour for consulting services. Write an equation for the total cost C in terms of the number of hours h.",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "Create and use a linear equation in two variables to solve problems in a variety of contexts.",
    Difficulty: "Easy",
    IsCorrect: true,
    Solution: "C = 50 + 25h, where C is the total cost in dollars and h is the number of hours."
  },
  {
    ProblemText: "The equation y = 3x + 2 represents the relationship between the cost y in dollars and the number of items x. What does the 3 represent in this context?",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "For a linear equation in two variables that represents a context, interpret a solution, constant, variable, factor, or term based on the context, including situations where seeing structure provides an advantage.",
    Difficulty: "Medium",
    IsCorrect: true,
    Solution: "The 3 represents the cost per item, or the rate of change of cost with respect to the number of items."
  },
  {
    ProblemText: "A line passes through the points (3, 5) and has a slope of 2. Find the equation of the line in slope-intercept form.",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "Write an equation for a line given two points on the line, one point and the slope of the line, or one point and a parallel or perpendicular line.",
    Difficulty: "Hard",
    IsCorrect: false,
    Solution: "Using the point-slope form: y - y₁ = m(x - x₁), we have y - 5 = 2(x - 3). Simplifying: y - 5 = 2x - 6, so y = 2x - 1."
  },
  {
    ProblemText: "The table shows the cost of renting a car for different numbers of days: (1 day, $65), (2 days, $110), (3 days, $155). Find a linear equation that models this relationship.",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "Make connections between a table and an algebraic representation or between a table and a graph of a linear equation in two variables not in context.",
    Difficulty: "Medium",
    IsCorrect: true,
    Solution: "Let y be the cost and x be the number of days. Finding the rate of change: (110-65)/(2-1) = 45 per day. The equation is y = 65 + 45(x-1) = 20 + 45x."
  },
  {
    ProblemText: "A line has y-intercept 4 and is perpendicular to the line with equation y = 3x + 1. Find the equation of the line.",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "Write an equation for a line given two points on the line, one point and the slope of the line, or one point and a parallel or perpendicular line.",
    Difficulty: "Advanced",
    IsCorrect: false,
    Solution: "The slope of y = 3x + 1 is 3. A perpendicular line has slope -1/3. With y-intercept 4, the equation is y = -1/3 x + 4."
  },
  {
    ProblemText: "If a car travels at a constant speed of 60 miles per hour, write an equation for the distance d traveled in terms of the time t in hours.",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "Create and use a linear equation in two variables to solve problems in a variety of contexts.",
    Difficulty: "Easy",
    IsCorrect: true,
    Solution: "d = 60t, where d is the distance in miles and t is the time in hours."
  },
  {
    ProblemText: "The line with equation y = 2x + 3 is graphed in the coordinate plane. What is the y-coordinate of the point on the line with x-coordinate 4?",
    ContentDomain: "Algebra",
    Topic: "Linear Equations in Two Variables",
    KnowledgeTestingPoint: "For a linear equation in two variables that represents a context, given a value of one quantity in the relationship, find a value of the other, if it exists.",
    Difficulty: "Easy",
    IsCorrect: true,
    Solution: "Substitute x = 4 into the equation: y = 2(4) + 3 = 8 + 3 = 11."
  }
];

// Variables for filtering
let selectedKTP = null;
let filteredProblems = [];
let currentProblemIndex = 0;

// Wait for DOM to be fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // Get the topic from sessionStorage
  const selectedTopic = sessionStorage.getItem('selectedTopic') || 'Linear Equations in Two Variables';
  
  // Update the page title with the selected topic
  document.getElementById('topicTitle').textContent = selectedTopic;
  
  // Render the KTP cards and problem list
  renderKTPCards();
  renderProblemList();
  
  // Set up event listeners for modals
  setupModalListeners();
});

// Render KTP cards in the left column
function renderKTPCards() {
  const container = document.getElementById('ktpContainer');
  container.innerHTML = '';
  
  ktpData.forEach(ktp => {
    const card = document.createElement('div');
    card.className = 'ktp-card';
    if (selectedKTP === ktp.title) {
      card.classList.add('selected');
    }
    
    // Card header
    const header = document.createElement('div');
    header.className = 'ktp-card-header';
    
    // KTP title
    const title = document.createElement('h3');
    title.textContent = ktp.title;
    header.appendChild(title);
    
    // Progress metrics
    const progressContainer = document.createElement('div');
    progressContainer.className = 'ktp-progress-container';
    
    // Correct problems count with green box
    const correctBox = document.createElement('div');
    correctBox.className = 'ktp-metric correct';
    correctBox.innerHTML = `<span class="count">${ktp.correct}</span><span class="label">Correct</span>`;
    
    // Incorrect problems count with red box
    const incorrectBox = document.createElement('div');
    incorrectBox.className = 'ktp-metric incorrect';
    incorrectBox.innerHTML = `<span class="count">${ktp.incorrect}</span><span class="label">Incorrect</span>`;
    
    progressContainer.appendChild(correctBox);
    progressContainer.appendChild(incorrectBox);
    
    // Append components to card
    card.appendChild(header);
    card.appendChild(progressContainer);
    
    // Add click event listener for filtering
    card.addEventListener('click', () => {
      if (selectedKTP === ktp.title) {
        // If already selected, deselect it (show all problems)
        selectedKTP = null;
        card.classList.remove('selected');
        document.getElementById('matchCount').textContent = 'Showing all problems';
      } else {
        // Deselect all other cards
        document.querySelectorAll('.ktp-card').forEach(c => c.classList.remove('selected'));
        
        // Select this card
        selectedKTP = ktp.title;
        card.classList.add('selected');
        
        // Update count message
        const filteredCount = problems.filter(p => p.KnowledgeTestingPoint === ktp.title).length;
        document.getElementById('matchCount').textContent = `${filteredCount} matching problem${filteredCount !== 1 ? 's' : ''}`;
      }
      
      // Re-render problem list with filter
      renderProblemList();
    });
    
    container.appendChild(card);
  });
}

// Render problem list in the right column
function renderProblemList() {
  const container = document.getElementById('problemList');
  container.innerHTML = '';
  
  // Filter problems by selected KTP if any
  filteredProblems = selectedKTP 
    ? problems.filter(p => p.KnowledgeTestingPoint === selectedKTP)
    : problems;
  
  if (filteredProblems.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.innerHTML = '<p>No problems match the selected filter.</p>';
    container.appendChild(noResults);
    return;
  }
  
  filteredProblems.forEach((problem, index) => {
    const card = document.createElement('div');
    card.className = 'problem-card';
    
    // Add correct/incorrect status indicator
    if (problem.IsCorrect !== undefined) {
      card.classList.add(problem.IsCorrect ? 'correct' : 'incorrect');
    }
    
    // Problem text
    const problemText = document.createElement('h3');
    problemText.textContent = problem.ProblemText;
    
    // Metadata
    const meta = document.createElement('div');
    meta.className = 'problem-meta';
    meta.innerHTML = `
      <span class="difficulty ${problem.Difficulty.toLowerCase()}">${problem.Difficulty}</span>
      <span class="ktp">${problem.KnowledgeTestingPoint.length > 60 ? 
        problem.KnowledgeTestingPoint.substring(0, 60) + '...' : 
        problem.KnowledgeTestingPoint}</span>
    `;
    
    // Append components to card
    card.appendChild(problemText);
    card.appendChild(meta);
    
    // View solution button
    const viewBtn = document.createElement('button');
    viewBtn.className = 'view-solution-btn';
    viewBtn.textContent = 'View Solution';
    viewBtn.addEventListener('click', () => openSolutionModal(index));
    
    card.appendChild(viewBtn);
    container.appendChild(card);
  });
}

// Open the solution modal
function openSolutionModal(index) {
  currentProblemIndex = index;
  const problem = filteredProblems[index];
  
  // Set modal content
  document.getElementById('modalProblemTitle').textContent = 'Problem Solution';
  document.getElementById('modalProblemText').textContent = problem.ProblemText;
  document.getElementById('modalSolution').textContent = problem.Solution;
  document.getElementById('modalDomain').textContent = problem.ContentDomain;
  document.getElementById('modalTopic').textContent = problem.Topic;
  document.getElementById('modalKTP').textContent = problem.KnowledgeTestingPoint;
  document.getElementById('modalDifficulty').textContent = problem.Difficulty;
  
  // Show the modal
  document.getElementById('solutionModal').style.display = 'block';
  
  // Enable/disable navigation buttons
  document.getElementById('prevProblemBtn').disabled = index === 0;
  document.getElementById('nextProblemBtn').disabled = index === filteredProblems.length - 1;
}

// Setup modal listeners
function setupModalListeners() {
  // Close modal
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.getElementById('closeModalBtn').addEventListener('click', closeModal);
  
  // Previous problem
  document.getElementById('prevProblemBtn').addEventListener('click', () => {
    if (currentProblemIndex > 0) {
      openSolutionModal(currentProblemIndex - 1);
    }
  });
  
  // Next problem
  document.getElementById('nextProblemBtn').addEventListener('click', () => {
    if (currentProblemIndex < filteredProblems.length - 1) {
      openSolutionModal(currentProblemIndex + 1);
    }
  });
  
  // Close on outside click
  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('solutionModal')) {
      closeModal();
    }
  });
}

// Close modal
function closeModal() {
  document.getElementById('solutionModal').style.display = 'none';
}

// Add custom CSS for the new elements
function addCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* KTP Cards */
    .ktp-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 16px;
    }
    
    .ktp-card {
      background-color: var(--white);
      border-radius: var(--card-border-radius);
      padding: 16px;
      box-shadow: var(--card-shadow);
      cursor: pointer;
      transition: var(--transition);
      border: 1px solid transparent;
    }
    
    .ktp-card:hover {
      box-shadow: 0 8px 24px rgba(67, 97, 238, 0.15);
      transform: translateY(-2px);
    }
    
    .ktp-card.selected {
      border-color: var(--primary);
      background-color: rgba(67, 97, 238, 0.05);
    }
    
    .ktp-card-header h3 {
      font-size: 1rem;
      margin-bottom: 12px;
      line-height: 1.4;
      color: var(--gray-800);
    }
    
    .ktp-progress-container {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }
    
    .ktp-metric {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 8px;
      min-width: 60px;
    }
    
    .ktp-metric.correct {
      background-color: rgba(12, 206, 107, 0.15);
    }
    
    .ktp-metric.incorrect {
      background-color: rgba(239, 71, 111, 0.15);
    }
    
    .ktp-metric .count {
      font-size: 1.25rem;
      font-weight: 600;
    }
    
    .ktp-metric.correct .count {
      color: var(--success);
    }
    
    .ktp-metric.incorrect .count {
      color: var(--danger);
    }
    
    .ktp-metric .label {
      font-size: 0.75rem;
      color: var(--gray-700);
    }
    
    /* Problem Cards */
    .problem-card {
      position: relative;
      border-left: 4px solid var(--gray-400);
    }
    
    .problem-card.correct {
      border-left-color: var(--success);
    }
    
    .problem-card.incorrect {
      border-left-color: var(--danger);
    }
    
    .view-solution-btn {
      background-color: var(--primary);
      color: var(--white);
      border: none;
      border-radius: 6px;
      padding: 8px 16px;
      font-size: 0.875rem;
      cursor: pointer;
      transition: var(--transition);
      margin-top: 12px;
    }
    
    .view-solution-btn:hover {
      background-color: var(--primary-dark);
    }
    
    /* Difficulty tags */
    .difficulty {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 4px;
      margin-right: 8px;
    }
    
    .difficulty.easy {
      background-color: rgba(12, 206, 107, 0.15);
      color: #0a8c4a;
    }
    
    .difficulty.medium {
      background-color: rgba(255, 209, 102, 0.15);
      color: #b38600;
    }
    
    .difficulty.hard {
      background-color: rgba(239, 71, 111, 0.15);
      color: #c61c4d;
    }
    
    .difficulty.advanced {
      background-color: rgba(63, 55, 201, 0.15);
      color: #2b268b;
    }
  `;
  document.head.appendChild(style);
}

// Call the custom styles function on page load
window.addEventListener('load', addCustomStyles);
