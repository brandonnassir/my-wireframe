/***************************************
  script_problem_selection.js
***************************************/

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

/****************************
  FILTER DATA STRUCTURES
****************************/

// Filter categories (demo data)
const difficulties = ["Easy", "Medium", "Hard", "Advanced"];
const domains = ["Algebra", "Advanced Math", "Problem Solving and Data Analysis", "Geometry and Trigonometry"];

/*
  For "Select a Topic", each domain has subtopics.
  We'll only show them if that domain is selected.
*/
const topicsData = [
  {
    domain: "Algebra",
    subtopics: [
      "Linear Equations in Two Variables",
      "Linear Functions",
      "Linear Inequalities in One or Two Variables",
      "Systems of Two Linear Equations in Two Variables"
    ]
  },
  {
    domain: "Advanced Math",
    subtopics: [
      "Equivalent Expressions",
      "Nonlinear Equations in One Variable and Systems of Equations in Two Variables",
      "Nonlinear Functions"
    ]
  },
  {
    domain: "Problem Solving and Data Analysis",
    subtopics: [
      "Evaluating Statistical Claims",
      "Observational Studies and Experiments",
      "Inference from Sample Statistics and Margin of Error",
      "One-Variable Data Distributions and Measures of Center and Spread",
      "Percentages",
      "Probability and Conditional Probability",
      "Ratios, Rates, Proportional Relationships, and Units",
      "Two-Variable Data - Models and Scatterplots"
    ]
  },
  {
    domain: "Geometry and Trigonometry",
    subtopics: [
      "Area and Volume",
      "Circles",
      "Lines, Angles, and Triangles",
      "Right Triangles and Trigonometry"
    ]
  }
];

/*
  "Select a Knowledge Testing Point" is now dynamic:
  We'll gather the union of all KTPs that appear in the problem data
  for the currently selected topics.
*/
let allKTPs = []; // We'll populate from problem data, or we can keep some dummy data
// For microSkills, we keep it always visible
const microSkills = ["In Context", "Tables", "Graphs", "Short Answer", "Images"];

/****************************
  USER SELECTIONS
****************************/
let selectedDifficulties = [];
let selectedDomains = [];
let selectedTopics = [];
let selectedMicroSkills = []; // Add missing declaration of selectedMicroSkills
// We'll track selected KTP. We'll display these only if the KTP is relevant to the chosen topics.
let selectedKnowledgePoints = [];

// For problem inclusion
let includedProblemIds = new Set();  // store unique keys for each included problem

// Dummy solutions for problems
const problemSolutions = {
  "Solve for y in 2y + 3 = 9": "To solve for y, subtract 3 from both sides: 2y = 6. Then divide both sides by 2: y = 3.",
  "If f(x) = 3x + 1, find f(4)": "Substitute x = 4 into the function: f(4) = 3(4) + 1 = 12 + 1 = 13.",
  "Solve the system of equations: y = 2x and x + y = 6": "Substitute y = 2x into the second equation: x + 2x = 6, so 3x = 6, which gives x = 2. Then y = 2(2) = 4. The solution is (2, 4).",
  "Solve the inequality 5x - 2 > 3": "Add 2 to both sides: 5x > 5. Divide both sides by 5: x > 1.",
  "Find the slope of the line passing through the points (1, 2) and (4, 8)": "Slope = (y₂ - y₁)/(x₂ - x₁) = (8 - 2)/(4 - 1) = 6/3 = 2.",
  "Graph the solution set of x + 2y = 6": "Rearrange to y = (6 - x)/2 or y = 3 - x/2. Plot points (0, 3), (2, 2), (4, 1), (6, 0).",
  "Solve the system of equations: 3x + y = 5 and 2x - y = 1": "Add the equations: 3x + y + 2x - y = 5 + 1, which gives 5x = 6, so x = 6/5. Substitute x = 6/5 into the first equation: 3(6/5) + y = 5, which gives 18/5 + y = 5, so y = 5 - 18/5 = 7/5. The solution is (6/5, 7/5).",
  "Factor the polynomial 2x^2 + 6x": "Factor out the GCF: 2x(x + 3).",
  "Factor the polynomial x^2 - 4": "This is a difference of squares: x² - 4 = (x + 2)(x - 2).",
  "Solve the quadratic equation x^2 - 5x + 6 = 0": "Factor as (x - 2)(x - 3) = 0, so x = 2 or x = 3.",
  "Solve the equation |2x - 1| = 5": "Case 1: 2x - 1 = 5, so 2x = 6, x = 3. Case 2: 2x - 1 = -5, so 2x = -4, x = -2. The solutions are x = -2 or x = 3.",
  "Solve the system of equations: y = x^2 + 1 and y = 3x - 2": "Set the equations equal to each other: x² + 1 = 3x - 2, which gives x² - 3x + 3 = 0. Use the quadratic formula to find x = (3 ± √(9-12))/2 = (3 ± √(-3))/2. This has no real solutions, so the system has no real solutions.",
  "If f(x) = 2^x, find f(3)": "Substitute x = 3 into the function: f(3) = 2³ = 8.",
  "Find the x-value for which the quadratic function f(x) = x^2 - 4x + 4 has its minimum": "Rewrite as f(x) = (x - 2)² + 0, which is in vertex form with a minimum at x = 2.",
  "A survey of 100 people found that 40 prefer chocolate over vanilla. What percentage prefer vanilla?": "If 40 out of 100 prefer chocolate, then 100 - 40 = 60 prefer vanilla. So 60% prefer vanilla.",
  "A bag contains 5 red marbles and 7 blue marbles. If one marble is drawn at random, what is the probability of drawing a red marble?": "Probability = number of favorable outcomes / total number of possible outcomes = 5 / (5 + 7) = 5/12.",
  "A car travels 150 miles in 3 hours. What is its rate in miles per hour?": "Rate = distance / time = 150 miles / 3 hours = 50 miles per hour.",
  "A researcher wants to test a new medication. She randomly assigns 50 volunteers to receive the medication and another 50 to receive a placebo. What type of study is this?": "This is a controlled experiment because the researchers are randomly assigning subjects to different treatment groups.",
  "In a study, 35 out of 200 people tested had a particular gene. Based on this sample, estimate the percentage of the population with that gene.": "Percentage = (35 / 200) × 100% = 17.5%",
  "You have a data set: 2, 5, 5, 9, 10. What is the median of this set?": "Arrange the data in order: 2, 5, 5, 9, 10. The middle value is 5, so the median is 5.",
  "In a scatterplot showing the relationship between hours studied and test scores, the points appear to rise from left to right. What kind of correlation is indicated?": "A positive correlation, meaning as the hours studied increases, test scores also tend to increase.",
  "A study claims that eating an apple a day reduces doctor visits by 15 percent. What would you need to confirm before accepting this claim?": "You would need to examine: 1) Was this a controlled experiment or observational study? 2) Was the sample size large enough? 3) Was the sample representative of the population? 4) Were confounding variables controlled for? 5) Was the study peer-reviewed? 6) Has the study been replicated?",
  "Find the area of a rectangle with length 8 and width 3": "Area = length × width = 8 × 3 = 24 square units."
};

// Variables for modal navigation
let currentProblemIndex = 0;
let filteredProblemsForModal = [];

/****************************
  PROBLEMS DATA
****************************/
const problems = [
  {
    "ProblemText": "Solve for y in 2y + 3 = 9",
    "ContentDomain": "Algebra",
    "Topic": "Linear Functions",
    "KnowledgeTestingPoint": "Fluently manipulate linear expressions to solve for unknown variables",
    "Difficulty": "Easy",
    "Attempts": 1
  },
  {
    "ProblemText": "If f(x) = 3x + 1, find f(4)",
    "ContentDomain": "Algebra",
    "Topic": "Linear Functions",
    "KnowledgeTestingPoint": "Evaluate linear functions for given inputs",
    "Difficulty": "Easy",
    "Attempts": 0
  },
  {
    "ProblemText": "Solve the system of equations: y = 2x and x + y = 6",
    "ContentDomain": "Algebra",
    "Topic": "Systems of Two Linear Equations in Two Variables",
    "KnowledgeTestingPoint": "Apply substitution or elimination methods to find solutions to linear systems",
    "Difficulty": "Medium",
    "Attempts": 2
  },
  {
    "ProblemText": "Solve the inequality 5x - 2 > 3",
    "ContentDomain": "Algebra",
    "Topic": "Linear Inequalities in One or Two Variables",
    "KnowledgeTestingPoint": "Manipulate inequalities to isolate the variable",
    "Difficulty": "Easy",
    "Attempts": 0
  },
  {
    "ProblemText": "Find the slope of the line passing through the points (1, 2) and (4, 8)",
    "ContentDomain": "Algebra",
    "Topic": "Linear Equations in Two Variables",
    "KnowledgeTestingPoint": "Identify the rate of change in a linear relationship",
    "Difficulty": "Medium",
    "Attempts": 3
  },
  {
    "ProblemText": "Graph the solution set of x + 2y = 6",
    "ContentDomain": "Algebra",
    "Topic": "Linear Equations in Two Variables",
    "KnowledgeTestingPoint": "Translate linear equations into graphical form",
    "Difficulty": "Hard",
    "Attempts": 4
  },
  {
    "ProblemText": "Solve the system of equations: 3x + y = 5 and 2x - y = 1",
    "ContentDomain": "Algebra",
    "Topic": "Systems of Two Linear Equations in Two Variables",
    "KnowledgeTestingPoint": "Use elimination or substitution to solve for multiple variables",
    "Difficulty": "Medium",
    "Attempts": 2
  },
  {
    "ProblemText": "Factor the polynomial 2x^2 + 6x",
    "ContentDomain": "Advanced Math",
    "Topic": "Equivalent Expressions",
    "KnowledgeTestingPoint": "Identify and factor out the greatest common factor from a polynomial",
    "Difficulty": "Easy",
    "Attempts": 1
  },
  {
    "ProblemText": "Factor the polynomial x^2 - 4",
    "ContentDomain": "Advanced Math",
    "Topic": "Equivalent Expressions",
    "KnowledgeTestingPoint": "Rewrite expressions using the difference of squares",
    "Difficulty": "Medium",
    "Attempts": 2
  },
  {
    "ProblemText": "Solve the quadratic equation x^2 - 5x + 6 = 0",
    "ContentDomain": "Advanced Math",
    "Topic": "Nonlinear Equations in One Variable and Systems of Equations in Two Variables",
    "KnowledgeTestingPoint": "Use factoring to find roots of quadratic equations",
    "Difficulty": "Easy",
    "Attempts": 2
  },
  {
    "ProblemText": "Solve the equation |2x - 1| = 5",
    "ContentDomain": "Advanced Math",
    "Topic": "Nonlinear Equations in One Variable and Systems of Equations in Two Variables",
    "KnowledgeTestingPoint": "Apply properties of absolute value to solve linear absolute value equations",
    "Difficulty": "Medium",
    "Attempts": 3
  },
  {
    "ProblemText": "Solve the system of equations: y = x^2 + 1 and y = 3x - 2",
    "ContentDomain": "Advanced Math",
    "Topic": "Nonlinear Equations in One Variable and Systems of Equations in Two Variables",
    "KnowledgeTestingPoint": "Find intersection points between linear and quadratic functions",
    "Difficulty": "Hard",
    "Attempts": 4
  },
  {
    "ProblemText": "If f(x) = 2^x, find f(3)",
    "ContentDomain": "Advanced Math",
    "Topic": "Nonlinear Functions",
    "KnowledgeTestingPoint": "Evaluate exponential functions at given points",
    "Difficulty": "Easy",
    "Attempts": 0
  },
  {
    "ProblemText": "Find the x-value for which the quadratic function f(x) = x^2 - 4x + 4 has its minimum",
    "ContentDomain": "Advanced Math",
    "Topic": "Nonlinear Functions",
    "KnowledgeTestingPoint": "Identify the vertex of a quadratic function using vertex formula or completing the square",
    "Difficulty": "Medium",
    "Attempts": 2
  },
  {
    "ProblemText": "A survey of 100 people found that 40 prefer chocolate over vanilla. What percentage prefer vanilla?",
    "ContentDomain": "Problem Solving and Data Analysis",
    "Topic": "Percentages",
    "KnowledgeTestingPoint": "Compute percentage given a part of the total",
    "Difficulty": "Easy",
    "Attempts": 1
  },
  {
    "ProblemText": "A bag contains 5 red marbles and 7 blue marbles. If one marble is drawn at random, what is the probability of drawing a red marble?",
    "ContentDomain": "Problem Solving and Data Analysis",
    "Topic": "Probability and Conditional Probability",
    "KnowledgeTestingPoint": "Determine probability as favorable outcomes over total outcomes",
    "Difficulty": "Easy",
    "Attempts": 0
  },
  {
    "ProblemText": "A car travels 150 miles in 3 hours. What is its rate in miles per hour?",
    "ContentDomain": "Problem Solving and Data Analysis",
    "Topic": "Ratios, Rates, Proportional Relationships, and Units",
    "KnowledgeTestingPoint": "Use ratios to find unit rates",
    "Difficulty": "Easy",
    "Attempts": 1
  },
  {
    "ProblemText": "A researcher wants to test a new medication. She randomly assigns 50 volunteers to receive the medication and another 50 to receive a placebo. What type of study is this?",
    "ContentDomain": "Problem Solving and Data Analysis",
    "Topic": "Observational Studies and Experiments",
    "KnowledgeTestingPoint": "Distinguish between observational studies and experiments",
    "Difficulty": "Medium",
    "Attempts": 2
  },
  {
    "ProblemText": "In a study, 35 out of 200 people tested had a particular gene. Based on this sample, estimate the percentage of the population with that gene.",
    "ContentDomain": "Problem Solving and Data Analysis",
    "Topic": "Inference from Sample Statistics and Margin of Error",
    "KnowledgeTestingPoint": "Use sample proportions to estimate population proportions",
    "Difficulty": "Medium",
    "Attempts": 3
  },
  {
    "ProblemText": "You have a data set: 2, 5, 5, 9, 10. What is the median of this set?",
    "ContentDomain": "Problem Solving and Data Analysis",
    "Topic": "One-Variable Data Distributions and Measures of Center and Spread",
    "KnowledgeTestingPoint": "Identify measures of central tendency from data",
    "Difficulty": "Easy",
    "Attempts": 1
  },
  {
    "ProblemText": "In a scatterplot showing the relationship between hours studied and test scores, the points appear to rise from left to right. What kind of correlation is indicated?",
    "ContentDomain": "Problem Solving and Data Analysis",
    "Topic": "Two-Variable Data - Models and Scatterplots",
    "KnowledgeTestingPoint": "Interpret correlation from a visual representation of data",
    "Difficulty": "Medium",
    "Attempts": 2
  },
  {
    "ProblemText": "A study claims that eating an apple a day reduces doctor visits by 15 percent. What would you need to confirm before accepting this claim?",
    "ContentDomain": "Problem Solving and Data Analysis",
    "Topic": "Evaluating Statistical Claims",
    "KnowledgeTestingPoint": "Assess the validity and reliability of statistical claims in context",
    "Difficulty": "Hard",
    "Attempts": 5
  },
  {
    "ProblemText": "Find the area of a rectangle with length 8 and width 3",
    "ContentDomain": "Geometry and Trigonometry",
    "Topic": "Area and Volume",
    "KnowledgeTestingPoint": "Calculate area using length times width",
    "Difficulty": "Easy",
    "Attempts": 0
  }
];

// On page load, build filter cards. Then parse problem data for possible KTPs & do an initial render.
window.addEventListener("DOMContentLoaded", () => {
  // Build filter cards
  buildDifficultyCards();
  buildDomainCards();
  buildMicroSkillCards(); 

  // We do NOT build topics or KTP yet. We'll handle them dynamically based on selection.
  // But we can parse the problem array for all unique KTP to have them on hand:
  parseAllKTPsFromProblems();

  // Check if we have a subject parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject');
  
  // If we have a subject parameter, pre-select the appropriate domain
  if (subjectParam) {
    preSelectDomainBasedOnSubject(subjectParam);
  }

  renderProblemList(); // initial list
  updateCounters(); // update the counters

  // Set up event listeners for the new buttons
  document.getElementById("clearSelectionsBtn").addEventListener("click", clearAllSelections);
  document.getElementById("exportProblemsBtn").addEventListener("click", showExportModal);
  document.getElementById("cancelExport").addEventListener("click", hideExportModal);
  document.getElementById("confirmExport").addEventListener("click", exportProblems);
  document.getElementById("createSetBtn").addEventListener("click", createPracticeSet);

  // Set up solution modal event listeners
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

  // Add custom styles to make problem cards more aesthetic
  addCustomStyles();

  // Autogenerate Set functionality
  const autogenerateBtn = document.getElementById('autogenerateSetBtn');
  const autogenerateModal = document.getElementById('autogenerateModal');
  const closeAutogenerateModal = document.getElementById('closeAutogenerateModal');
  const generateTypeRadios = document.querySelectorAll('input[name="generateType"]');
  const domainSelection = document.getElementById('domainSelection');
  const topicSelection = document.getElementById('topicSelection');
  const cancelAutoGenerate = document.getElementById('cancelAutoGenerate');
  const generateSetBtn = document.getElementById('generateSet');
  
  // Review Generated Set Modal elements
  const reviewGeneratedSetModal = document.getElementById('reviewGeneratedSetModal');
  const closeReviewModal = document.getElementById('closeReviewModal');
  const reviewPrevCard = document.getElementById('reviewPrevCard');
  const reviewNextCard = document.getElementById('reviewNextCard');
  const removeProblem = document.getElementById('removeProblem');
  const cancelReview = document.getElementById('cancelReview');
  const createFromGenerated = document.getElementById('createFromGenerated');
  const reviewCurrentCard = document.getElementById('reviewCurrentCard');
  const reviewTotalCards = document.getElementById('reviewTotalCards');
  const reviewTotalCount = document.getElementById('reviewTotalCount');
  const setContentInfo = document.getElementById('setContentInfo');
  const reviewCardContent = document.getElementById('reviewCardContent');
  
  // Track current card in review modal
  let currentReviewCardIndex = 0;
  let generatedProblems = [];
  
  // Open autogenerate modal
  autogenerateBtn.addEventListener('click', function() {
    autogenerateModal.style.display = 'block';
  });
  
  // Close autogenerate modal
  closeAutogenerateModal.addEventListener('click', function() {
    autogenerateModal.style.display = 'none';
  });
  
  // Toggle between domain and topic selection
  generateTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === 'domain') {
        domainSelection.style.display = 'block';
        topicSelection.style.display = 'none';
      } else {
        domainSelection.style.display = 'none';
        topicSelection.style.display = 'block';
      }
    });
  });
  
  // Handle domain and topic selection
  const domainCards = document.querySelectorAll('#domainSelection .option-card');
  const topicCards = document.querySelectorAll('#topicSelection .option-card');
  
  function clearSelections(cards) {
    cards.forEach(card => card.classList.remove('selected'));
  }
  
  domainCards.forEach(card => {
    card.addEventListener('click', function() {
      clearSelections(domainCards);
      this.classList.add('selected');
    });
  });
  
  topicCards.forEach(card => {
    card.addEventListener('click', function() {
      clearSelections(topicCards);
      this.classList.add('selected');
    });
  });
  
  // Cancel autogenerate
  cancelAutoGenerate.addEventListener('click', function() {
    autogenerateModal.style.display = 'none';
  });
  
  // Generate practice set
  generateSetBtn.addEventListener('click', function() {
    // Get selected domain or topic
    const generateType = document.querySelector('input[name="generateType"]:checked').value;
    let selectedContent = '';
    
    if (generateType === 'domain') {
      const selectedDomain = document.querySelector('#domainSelection .option-card.selected');
      if (!selectedDomain) {
        alert('Please select a content domain');
        return;
      }
      selectedContent = selectedDomain.dataset.domain;
    } else {
      const selectedTopic = document.querySelector('#topicSelection .option-card.selected');
      if (!selectedTopic) {
        alert('Please select a topic');
        return;
      }
      selectedContent = selectedTopic.dataset.topic;
    }
    
    // Get number of problems and difficulty
    const problemsCount = document.getElementById('problemsCount').value;
    const difficultyLevel = document.getElementById('difficultyLevel').value;
    
    // Generate dummy problems (for demo purposes)
    generateDummyProblems(selectedContent, problemsCount, difficultyLevel, generateType);
    
    // Close autogenerate modal and open review modal
    autogenerateModal.style.display = 'none';
    openReviewModal(selectedContent, generateType);
  });
  
  // Generate dummy problems for demo purposes
  function generateDummyProblems(content, count, difficulty, type) {
    generatedProblems = [];
    
    for (let i = 0; i < count; i++) {
      const problemDifficulty = difficulty === 'mixed' ? 
        ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)] : 
        difficulty === 'any' ? 
          ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)] : 
          difficulty;
      
      generatedProblems.push({
        id: 'problem_' + (i + 1),
        title: `Problem ${i + 1}`,
        text: generateProblemText(content, problemDifficulty),
        difficulty: problemDifficulty,
        content: content,
        contentType: type
      });
    }
  }
  
  // Generate placeholder problem text
  function generateProblemText(content, difficulty) {
    const difficultyDescriptions = {
      'easy': 'straightforward problem testing basic understanding',
      'medium': 'problem requiring application of multiple concepts',
      'hard': 'challenging problem requiring deep understanding and analysis'
    };
    
    return `<div class="problem-content">
      <p class="problem-text">This is a sample ${difficultyDescriptions[difficulty]} related to ${content}.</p>
      <div class="problem-image-placeholder">
        <div class="placeholder-icon"><i class="fas fa-square-root-alt"></i></div>
        <p>Problem image or diagram would appear here</p>
      </div>
      <div class="problem-options">
        <div class="option"><span class="option-letter">A.</span> Sample option 1</div>
        <div class="option"><span class="option-letter">B.</span> Sample option 2</div>
        <div class="option"><span class="option-letter">C.</span> Sample option 3</div>
        <div class="option"><span class="option-letter">D.</span> Sample option 4</div>
      </div>
      <div class="solution-preview" style="margin-top: 15px; border-top: 1px dashed #ccc; padding-top: 10px;">
        <p><strong>Solution:</strong> The correct answer is <span class="correct-answer">C</span>.</p>
        <p>Explanation: This is where a detailed explanation of the solution would appear.</p>
      </div>
    </div>`;
  }
  
  // Open review modal
  function openReviewModal(content, type) {
    setContentInfo.textContent = content;
    updateReviewCardCount();
    displayReviewCard(0);
    reviewGeneratedSetModal.style.display = 'block';
  }
  
  // Update card count in review modal
  function updateReviewCardCount() {
    reviewTotalCards.textContent = generatedProblems.length;
    reviewTotalCount.textContent = generatedProblems.length;
    
    // Disable navigation buttons if needed
    reviewPrevCard.disabled = currentReviewCardIndex === 0;
    reviewNextCard.disabled = currentReviewCardIndex === generatedProblems.length - 1;
  }
  
  // Display a specific problem card
  function displayReviewCard(index) {
    if (index < 0 || index >= generatedProblems.length) return;
    
    currentReviewCardIndex = index;
    reviewCurrentCard.textContent = index + 1;
    
    const problem = generatedProblems[index];
    reviewCardContent.innerHTML = `
      <div class="problem-card" data-id="${problem.id}">
        <div class="problem-header">
          <h4>${problem.title}</h4>
          <div class="problem-meta">
            <span class="difficulty-badge ${problem.difficulty}-level">${problem.difficulty}</span>
            <span class="content-badge">${problem.content}</span>
          </div>
        </div>
        ${problem.text}
      </div>
    `;
    
    updateReviewCardCount();
  }
  
  // Navigate to previous card
  reviewPrevCard.addEventListener('click', function() {
    if (currentReviewCardIndex > 0) {
      displayReviewCard(currentReviewCardIndex - 1);
    }
  });
  
  // Navigate to next card
  reviewNextCard.addEventListener('click', function() {
    if (currentReviewCardIndex < generatedProblems.length - 1) {
      displayReviewCard(currentReviewCardIndex + 1);
    }
  });
  
  // Remove current problem
  removeProblem.addEventListener('click', function() {
    if (generatedProblems.length <= 1) {
      alert('You cannot remove all problems from the set. At least one problem must remain.');
      return;
    }
    
    generatedProblems.splice(currentReviewCardIndex, 1);
    
    // Adjust current index if removing the last problem
    if (currentReviewCardIndex >= generatedProblems.length) {
      currentReviewCardIndex = generatedProblems.length - 1;
    }
    
    displayReviewCard(currentReviewCardIndex);
    updateReviewCardCount();
  });
  
  // Close review modal
  closeReviewModal.addEventListener('click', function() {
    reviewGeneratedSetModal.style.display = 'none';
  });
  
  // Cancel review
  cancelReview.addEventListener('click', function() {
    reviewGeneratedSetModal.style.display = 'none';
  });
  
  // Create practice set from generated problems
  createFromGenerated.addEventListener('click', function() {
    // For demo purposes, show a success message
    alert('Practice set created successfully with ' + generatedProblems.length + ' problems!');
    reviewGeneratedSetModal.style.display = 'none';
    
    // In a real implementation, this would save the set to the database
    // and redirect to the practice set detail page
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === autogenerateModal) {
      autogenerateModal.style.display = 'none';
    }
    if (event.target === reviewGeneratedSetModal) {
      reviewGeneratedSetModal.style.display = 'none';
    }
  });
});

/********************************************
  BUILD CARDS FOR EACH FILTER CATEGORY
*********************************************/
function buildDifficultyCards() {
  const container = document.getElementById("difficultyContainer");
  difficulties.forEach(diff => {
    const card = document.createElement("div");
    card.className = "filter-card";
    card.textContent = diff;

    card.addEventListener("click", () => {
      toggleSelection(selectedDifficulties, diff, card);
    });

    container.appendChild(card);
  });
}

function buildDomainCards() {
  const container = document.getElementById("domainContainer");
  domains.forEach(dom => {
    const card = document.createElement("div");
    card.className = "filter-card";
    card.textContent = dom;

    card.addEventListener("click", () => {
      toggleSelection(selectedDomains, dom, card);
      updateTopicVisibility(); // show/hide 'Select a Topic' & rebuild the topic UI
    });

    container.appendChild(card);
  });
}

function buildMicroSkillCards() {
  const container = document.getElementById("microSkillContainer");
  microSkills.forEach(ms => {
    const card = document.createElement("div");
    card.className = "filter-card";
    card.textContent = ms;
    card.addEventListener("click", () => {
      toggleSelection(selectedMicroSkills, ms, card);
    });
    container.appendChild(card);
  });
}

/********************************************
  TOPICS: Only shown if one or more domains
  are selected. Rebuild "topicSection" each time.
*********************************************/
function updateTopicVisibility() {
  const topicBlock = document.getElementById("topicBlock");

  if (selectedDomains.length === 0) {
    // hide the entire block
    topicBlock.style.display = "none";
    // also clear any topic selections
    selectedTopics.length = 0;
    // hide KTP block as well
    document.getElementById("ktpBlock").style.display = "none";
  } else {
    // show the block
    topicBlock.style.display = "block";
  }

  // Rebuild the "topicSection"
  buildTopicSection();

  // After we rebuild topics, re-render the problem list
  renderProblemList();
}

/* Build the "Select a Topic" UI dynamically 
   based on the domain(s) that are selected. */
function buildTopicSection() {
  const topicSection = document.getElementById("topicSection");
  topicSection.innerHTML = ""; // Clear existing

  // For each domain in topicsData, if it's selected, show domain heading + subtopics
  topicsData.forEach(data => {
    if (selectedDomains.includes(data.domain)) {
      // domain heading
      const domainHeading = document.createElement("div");
      domainHeading.className = "topic-domain-heading";
      domainHeading.textContent = data.domain;
      topicSection.appendChild(domainHeading);

      // card container
      const scrollDiv = document.createElement("div");
      scrollDiv.className = "card-scroll-container";

      data.subtopics.forEach(sub => {
        const card = document.createElement("div");
        card.className = "filter-card";
        card.textContent = sub;

        // check if already selected
        if (selectedTopics.includes(sub)) {
          card.classList.add("selected");
        }

        card.addEventListener("click", () => {
          toggleSelection(selectedTopics, sub, card);
          updateKTPVisibility(); // manage KTP after topic change
        });

        scrollDiv.appendChild(card);
      });

      topicSection.appendChild(scrollDiv);
    }
  });
}

/********************************************
  KTP: Only appear if one or more topics 
  are selected. We gather the union of 
  possible KTP from the problem array 
  for the chosen topics.
*********************************************/
function parseAllKTPsFromProblems() {
  // We can store all KTP from the entire problem set
  // but we'll only display the relevant ones once topics are chosen
  const setKTP = new Set();
  problems.forEach(prob => {
    setKTP.add(prob.KnowledgeTestingPoint);
  });
  allKTPs = Array.from(setKTP);
}

/* Show/hide KTP block based on topic selection 
   and build the subset of KTP that actually match
   the currently selected topics.
*/
function updateKTPVisibility() {
  const ktpBlock = document.getElementById("ktpBlock");

  if (selectedTopics.length === 0) {
    // hide
    ktpBlock.style.display = "none";
    selectedKnowledgePoints.length = 0;
  } else {
    // show
    ktpBlock.style.display = "block";
  }
  buildKTPCards();
  renderProblemList();
}

/* Build the actual KTP container 
   The KTPs we show = union of 
   all KTP that appear in the problem array
   for the selected topics.
*/
function buildKTPCards() {
  const container = document.getElementById("ktpContainer");
  container.innerHTML = ""; // clear old

  // gather union of KTP from the problem set for selected topics
  const relevantKTP = new Set();
  problems.forEach(prob => {
    if (selectedTopics.includes(prob.Topic)) {
      relevantKTP.add(prob.KnowledgeTestingPoint);
    }
  });

  const relevantKTPArray = Array.from(relevantKTP);

  relevantKTPArray.forEach(kpt => {
    const card = document.createElement("div");
    card.className = "filter-card";
    card.textContent = kpt;

    // if already selected, highlight
    if (selectedKnowledgePoints.includes(kpt)) {
      card.classList.add("selected");
    }

    card.addEventListener("click", () => {
      toggleSelection(selectedKnowledgePoints, kpt, card);
    });

    container.appendChild(card);
  });

  // if none are relevant, we might display a small message or just remain empty
}

/********************************************
  TOGGLE SELECTION LOGIC
*********************************************/
function toggleSelection(selectionArray, value, cardElement) {
  const index = selectionArray.indexOf(value);
  if (index === -1) {
    // Not selected yet, so select it
    selectionArray.push(value);
    cardElement.classList.add("selected");
  } else {
    // Already selected, remove it
    selectionArray.splice(index, 1);
    cardElement.classList.remove("selected");
  }

  // We re-render problem list after every selection
  renderProblemList();
  updateCounters(); // Update counters when selection changes
}

/********************************************
  RENDER PROBLEM LIST
  - Filter based on selections
*********************************************/
function renderProblemList() {
  const container = document.getElementById("problemList");
  container.innerHTML = "";

  // Filter logic:
  // 1) If difficulties are selected, must match problem's Difficulty
  // 2) If domains are selected, must match problem's ContentDomain
  // 3) If topics are selected, must match problem's Topic
  // 4) If knowledgePoints are selected, do partial or exact match
  // 5) MicroSkills are not in problem data, so we skip them for filtering in this demo

  const filteredProblems = problems.filter((prob) => {
    // Difficulty filter
    if (selectedDifficulties.length > 0 && !selectedDifficulties.includes(prob.Difficulty)) {
      return false;
    }
    // Domain filter
    if (selectedDomains.length > 0 && !selectedDomains.includes(prob.ContentDomain)) {
      return false;
    }
    // Topic filter
    if (selectedTopics.length > 0 && !selectedTopics.includes(prob.Topic)) {
      return false;
    }
    // KTP filter (partial or exact match)
    if (selectedKnowledgePoints.length > 0) {
      let matchKP = false;
      for (let kp of selectedKnowledgePoints) {
        // We do a partial text match
        if (prob.KnowledgeTestingPoint.toLowerCase().includes(kp.toLowerCase())) {
          matchKP = true;
          break;
        }
      }
      if (!matchKP) return false;
    }

    return true;
  });

  // Save filtered problems for modal navigation
  filteredProblemsForModal = [...filteredProblems];

  // Update match count
  document.getElementById("matchCount").textContent = `${filteredProblems.length} matches`;

  // Display results
  if (filteredProblems.length === 0) {
    const msg = document.createElement("p");
    msg.className = "no-results-message";
    msg.textContent = "No problems match your current filters.";
    container.appendChild(msg);
  } else {
    filteredProblems.forEach((prob, idx) => {
      const card = document.createElement("div");
      card.className = "problem-card";

      // Unique key for this problem
      const problemKey = `${prob.ProblemText}-${idx}`;
      
      // Check if already included and add class if it is
      if (includedProblemIds.has(problemKey)) {
        card.classList.add("included");
      }

      // Create a content wrapper div for the problem text
      const contentWrapper = document.createElement("div");
      contentWrapper.className = "problem-content";
  
      // Problem text with improved styling
      const title = document.createElement("h3");
      title.textContent = prob.ProblemText;
      contentWrapper.appendChild(title);
      
      // Create meta info section
      const metaInfo = document.createElement("div");
      metaInfo.className = "problem-meta-info";
      
      // Domain and topic badge
      const domainBadge = document.createElement("span");
      domainBadge.className = "domain-badge";
      domainBadge.textContent = prob.ContentDomain;
      metaInfo.appendChild(domainBadge);
      
      // Difficulty badge with color coding
      const difficultyBadge = document.createElement("span");
      difficultyBadge.className = `difficulty-badge ${prob.Difficulty.toLowerCase()}-difficulty`;
      difficultyBadge.textContent = prob.Difficulty;
      metaInfo.appendChild(difficultyBadge);
      
      // Add meta info to content wrapper
      contentWrapper.appendChild(metaInfo);
      
      // KTP info
      const ktpInfo = document.createElement("div");
      ktpInfo.className = "ktp-info";
      ktpInfo.innerHTML = `<strong>Knowledge Point:</strong> ${prob.KnowledgeTestingPoint}`;
      contentWrapper.appendChild(ktpInfo);
      
      // Attempts info
      const attemptsInfo = document.createElement("div");
      attemptsInfo.className = "attempts-info";
      attemptsInfo.innerHTML = `<strong>Previous Attempts:</strong> ${prob.Attempts}`;
      contentWrapper.appendChild(attemptsInfo);
      
      // Add the content wrapper to the card
      card.appendChild(contentWrapper);

      // Add button row with improved styling
      const btnRow = document.createElement("div");
      btnRow.className = "btn-row";

      // "View Solution" button
      const solutionBtn = document.createElement("button");
      solutionBtn.className = "view-solution-btn";
      solutionBtn.innerHTML = `<span class="btn-icon">👁</span> View Solution`;
      solutionBtn.addEventListener("click", () => {
        openSolutionModal(idx);
      });
      btnRow.appendChild(solutionBtn);

      // "Include" button with improved styling
      const includeBtn = document.createElement("button");
      includeBtn.className = "include-btn";
      
      // If already included, style it
      if (includedProblemIds.has(problemKey)) {
        includeBtn.classList.add("included");
        includeBtn.innerHTML = `<span class="btn-icon">✓</span> Included`;
      } else {
        includeBtn.innerHTML = `<span class="btn-icon">+</span> Include`;
      }

      // Toggle on click
      includeBtn.addEventListener("click", () => {
        if (includedProblemIds.has(problemKey)) {
          includedProblemIds.delete(problemKey);
          includeBtn.classList.remove("included");
          includeBtn.innerHTML = `<span class="btn-icon">+</span> Include`;
          card.classList.remove("included");
        } else {
          includedProblemIds.add(problemKey);
          includeBtn.classList.add("included");
          includeBtn.innerHTML = `<span class="btn-icon">✓</span> Included`;
          card.classList.add("included");
        }
        updateCounters(); // Update the selected count
        updateCreateSetButtonState(); // Update the create set button state
      });

      btnRow.appendChild(includeBtn);
      card.appendChild(btnRow);
      container.appendChild(card);
    });
  }
  
  // Update the counters after rendering
  updateCounters();
  updateCreateSetButtonState();
}

/********************************************
  NEW FUNCTIONALITY
*********************************************/

// Update the counters showing selected and matched problems
function updateCounters() {
  // Update selected problems count
  document.getElementById("selectedCount").textContent = includedProblemIds.size;
  
  // Also update export count in the modal
  document.getElementById("exportCount").textContent = includedProblemIds.size;
}

// Clear all selections and reset the interface
function clearAllSelections() {
  // Clear all selection arrays
  selectedDifficulties.length = 0;
  selectedDomains.length = 0;
  selectedTopics.length = 0;
  selectedKnowledgePoints.length = 0;
  selectedMicroSkills.length = 0;
  
  // Clear included problems
  includedProblemIds.clear();
  
  // Remove 'selected' class from all filter cards
  document.querySelectorAll('.filter-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  // Hide topic and KTP blocks
  document.getElementById("topicBlock").style.display = "none";
  document.getElementById("ktpBlock").style.display = "none";
  
  // Re-render problem list
  renderProblemList();
  
  // Update counters
  updateCounters();
  updateCreateSetButtonState();
}

// Show the export modal
function showExportModal() {
  // Only show if there are problems selected
  if (includedProblemIds.size === 0) {
    alert("Please select at least one problem to export.");
    return;
  }
  
  document.getElementById("exportModal").style.display = "flex";
}

// Hide the export modal
function hideExportModal() {
  document.getElementById("exportModal").style.display = "none";
}

// Export the selected problems
function exportProblems() {
  const format = document.querySelector('input[name="exportFormat"]:checked').value;
  const includeSolutions = document.getElementById("includeSolutions").checked;
  const includeMetadata = document.getElementById("includeMetadata").checked;
  
  // Here you would normally implement the actual export functionality
  // For demo purposes, we'll just show an alert
  alert(`Exporting ${includedProblemIds.size} problems in ${format.toUpperCase()} format.\nInclude Solutions: ${includeSolutions}\nInclude Metadata: ${includeMetadata}`);
  
  // Hide the modal
  hideExportModal();
}

// Update the state of the Create Practice Set button
function updateCreateSetButtonState() {
  const createSetBtn = document.getElementById("createSetBtn");
  
  if (includedProblemIds.size > 0) {
    createSetBtn.disabled = false;
  } else {
    createSetBtn.disabled = true;
  }
}

// Create a practice set with selected problems
function createPracticeSet() {
  if (includedProblemIds.size === 0) {
    alert("Please select at least one problem to create a practice set.");
    return;
  }
  
  // Here you would normally implement the functionality to create a practice set
  // For demo purposes, we'll just show an alert
  alert(`Creating practice set with ${includedProblemIds.size} problems.`);
  
  // In a real app, you might redirect to a configuration page or save the set
  // window.location.href = "practice_set_config.html";
}

// Add custom styles for the new elements
function addCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Action Buttons */
    .top-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .clear-btn, .export-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      border: none;
      border-radius: var(--border-radius);
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .clear-btn {
      background-color: var(--gray-200);
      color: var(--gray-700);
    }
    
    .clear-btn:hover {
      background-color: var(--gray-300);
    }
    
    .export-btn {
      background-color: var(--primary);
      color: white;
    }
    
    .export-btn:hover {
      background-color: var(--primary-dark);
    }
    
    .btn-icon {
      font-size: 1.1rem;
    }
    
    /* Selection Summary */
    .selection-summary {
      background-color: var(--white);
      border-radius: var(--border-radius);
      padding: 0.75rem 1rem;
      margin-bottom: 1.5rem;
      box-shadow: var(--card-shadow);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .counter {
      font-size: 1rem;
      font-weight: 500;
    }
    
    .counter span {
      font-weight: 700;
      color: var(--primary);
    }
    
    /* Problem List Header */
    .problem-list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    
    .match-count {
      background-color: var(--gray-200);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.9rem;
      color: var(--gray-700);
    }
    
    /* Enhanced Problem Cards */
    .problem-card {
      display: flex;
      flex-direction: column;
      background-color: var(--white);
      border-radius: var(--card-border-radius);
      box-shadow: var(--card-shadow);
      margin-bottom: 1.25rem;
      overflow: hidden;
      border: 1px solid var(--gray-200);
      transition: all 0.2s ease;
    }
    
    .problem-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    }
    
    .problem-card.included {
      border-left: 5px solid var(--primary);
    }
    
    .problem-content {
      padding: 1.5rem;
      flex: 1;
    }
    
    .problem-card h3 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      color: var(--gray-900);
      line-height: 1.5;
    }
    
    .problem-meta-info {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .domain-badge {
      background-color: var(--primary-light);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .difficulty-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
      color: white;
    }
    
    .easy-difficulty {
      background-color: #2ecc71;
    }
    
    .medium-difficulty {
      background-color: #f39c12;
    }
    
    .hard-difficulty {
      background-color: #e74c3c;
    }
    
    .advanced-difficulty {
      background-color: #8e44ad;
    }
    
    .ktp-info, .attempts-info {
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
      color: var(--gray-700);
    }
    
    /* Button Row */
    .btn-row {
      display: flex;
      justify-content: space-between;
      padding: 1rem 1.5rem;
      background-color: #f8f9fa;
      border-top: 1px solid var(--gray-200);
    }
    
    .view-solution-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: var(--border-radius);
      background-color: var(--white);
      color: var(--primary);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid var(--primary);
    }
    
    .view-solution-btn:hover {
      background-color: var(--primary);
      color: white;
    }
    
    .include-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: var(--border-radius);
      background-color: var(--white);
      color: var(--gray-700);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid var(--gray-300);
    }
    
    .include-btn:hover {
      background-color: var(--gray-100);
      border-color: var(--gray-400);
    }
    
    .include-btn.included {
      background-color: var(--success);
      color: white;
      border-color: var(--success);
    }
    
    /* Create Set Button */
    .create-set-action {
      margin-top: 2rem;
      text-align: center;
    }
    
    .create-set-btn {
      background-color: var(--primary);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(67, 97, 238, 0.15);
    }
    
    .create-set-btn:hover {
      background-color: var(--primary-dark);
      box-shadow: 0 6px 16px rgba(67, 97, 238, 0.2);
    }
    
    .create-set-btn:disabled {
      background-color: var(--gray-300);
      color: var(--gray-500);
      cursor: not-allowed;
      box-shadow: none;
    }
    
    /* No Results Message */
    .no-results-message {
      text-align: center;
      padding: 2rem;
      color: var(--gray-600);
      background-color: var(--white);
      border-radius: var(--card-border-radius);
      box-shadow: var(--card-shadow);
    }
    
    /* Export Modal */
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
      overflow-y: auto;
      padding: 2rem;
    }
    
    .modal-content {
      background-color: var(--white);
      border-radius: var(--card-border-radius);
      padding: 2rem;
      max-width: 600px;
      width: 100%;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      position: relative;
    }
    
    .modal h3 {
      margin-top: 0;
      margin-bottom: 1.5rem;
      color: var(--gray-900);
      font-size: 1.5rem;
    }
    
    .export-options h4 {
      margin: 1.5rem 0 0.75rem;
      color: var(--gray-800);
      font-size: 1.1rem;
    }
    
    .radio-group, .checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
    
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 2rem;
    }
    
    .cancel-btn, .confirm-btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: var(--border-radius);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .cancel-btn {
      background-color: var(--gray-200);
      color: var(--gray-700);
    }
    
    .cancel-btn:hover {
      background-color: var(--gray-300);
    }
    
    .confirm-btn {
      background-color: var(--primary);
      color: white;
    }
    
    .confirm-btn:hover {
      background-color: var(--primary-dark);
    }
    
    /* Solution Modal Styles */
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--gray-200);
    }
    
    .modal-close {
      font-size: 1.75rem;
      color: var(--gray-500);
      cursor: pointer;
      transition: color 0.2s;
    }
    
    .modal-close:hover {
      color: var(--gray-700);
    }
    
    .modal-body {
      margin-bottom: 1.5rem;
    }
    
    .modal-problem-text {
      background-color: var(--gray-100);
      padding: 1.25rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--gray-800);
    }
    
    .modal-solution {
      background-color: #e3f2fd;
      padding: 1.25rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 1.05rem;
      line-height: 1.6;
      color: #0d47a1;
      border-left: 4px solid #1976d2;
    }
    
    .modal-metadata {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--gray-200);
    }
    
    .metadata-item {
      font-size: 0.95rem;
      color: var(--gray-700);
    }
    
    .modal-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid var(--gray-200);
    }
    
    .nav-btn {
      background: none;
      border: 1px solid var(--gray-300);
      padding: 0.5rem 1rem;
      border-radius: var(--border-radius);
      color: var(--gray-700);
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .nav-btn:hover:not(:disabled) {
      background-color: var(--gray-100);
      border-color: var(--gray-400);
    }
    
    .nav-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .primary-btn {
      background-color: var(--primary);
      color: white;
      border: none;
      padding: 0.5rem 1.5rem;
      border-radius: var(--border-radius);
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .primary-btn:hover {
      background-color: var(--primary-dark);
    }
  `;
  document.head.appendChild(style);
}

// Open the solution modal for a specific problem
function openSolutionModal(index) {
  currentProblemIndex = index;
  const problem = filteredProblemsForModal[index];
  
  // Set modal content
  document.getElementById("modalProblemTitle").textContent = `Problem Solution`;
  document.getElementById("modalProblemText").textContent = problem.ProblemText;
  document.getElementById("modalSolution").textContent = problemSolutions[problem.ProblemText] || "Solution not available for this problem.";
  document.getElementById("modalDomain").textContent = problem.ContentDomain;
  document.getElementById("modalTopic").textContent = problem.Topic;
  document.getElementById("modalKTP").textContent = problem.KnowledgeTestingPoint;
  document.getElementById("modalDifficulty").textContent = problem.Difficulty;
  
  // Update navigation button states
  document.getElementById("prevProblemBtn").disabled = index === 0;
  document.getElementById("nextProblemBtn").disabled = index === filteredProblemsForModal.length - 1;
  
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
  if (currentProblemIndex < filteredProblemsForModal.length - 1) {
    openSolutionModal(currentProblemIndex + 1);
  }
}

// Function to pre-select domain based on the subject parameter
function preSelectDomainBasedOnSubject(subject) {
  let domainToSelect = "";
  
  // Map subject parameter to domain
  switch(subject) {
    case 'sat-math':
      // Select all math-related domains
      ['Algebra', 'Advanced Math', 'Problem Solving and Data Analysis', 'Geometry and Trigonometry'].forEach(domain => {
        const domainCards = document.querySelectorAll('#domainContainer .filter-card');
        for (const card of domainCards) {
          if (card.textContent === domain) {
            // Simulate a click on this domain card
            card.click();
            break;
          }
        }
      });
      break;
    case 'sat-english':
      // Could add code here to handle English domains if they existed in the data
      alert("SAT English practice sets are coming soon!");
      break;
    case 'act':
      // Could add code here to handle ACT domains if they existed in the data
      alert("ACT practice sets are coming soon!");
      break;
  }
}
