// Advanced Algebra Practice Script

// Practice data structure with 5 algebra problems
const practiceData = {
  currentQuestion: 0,
  startTime: null,
  elapsedTime: 0,
  timerInterval: null,
  questions: [
    {
      id: 1,
      passage: `<p>Solve the quadratic equation by factoring:</p><p>3x² - 11x - 4 = 0</p>`,
      questionText: "What are the solutions for x?",
      options: [
        { id: "A", text: "x = -1/3, x = 4" },
        { id: "B", text: "x = -4, x = 1/3" },
        { id: "C", text: "x = 4, x = -1/3" },
        { id: "D", text: "x = 1/3, x = -4" }
      ],
      markedForReview: false,
      selectedOption: null,
      correctOption: "A",
      topic: "Quadratics",
      knowledgePoint: "Solving quadratic equations by factoring"
    },
    {
      id: 2,
      passage: `<p>If f(x) = 2x² - 3x + 1, find f(-2).</p>`,
      questionText: "What is the value of f(-2)?",
      options: [
        { id: "A", text: "-5" },
        { id: "B", text: "3" },
        { id: "C", text: "15" },
        { id: "D", text: "-1" }
      ],
      markedForReview: false,
      selectedOption: null,
      correctOption: "C",
      topic: "Functions",
      knowledgePoint: "Evaluating functions at specific points"
    },
    {
      id: 3,
      passage: `<p>Simplify the following expression:</p><p>\frac{2x² - 7x - 15}{x - 5}</p>`,
      questionText: "What is the simplified expression?",
      options: [
        { id: "A", text: "2x + 3" },
        { id: "B", text: "2x - 3" },
        { id: "C", text: "2x - 5" },
        { id: "D", text: "2x + 5" }
      ],
      markedForReview: false,
      selectedOption: null,
      correctOption: "A",
      topic: "Polynomials",
      knowledgePoint: "Simplifying rational expressions by factoring"
    },
    {
      id: 4,
      passage: `<p>Solve the system of equations:</p><p>3x + 2y = 13</p><p>5x - 2y = 3</p>`,
      questionText: "What is the solution (x, y)?",
      options: [
        { id: "A", text: "(2, 3.5)" },
        { id: "B", text: "(2, 2)" },
        { id: "C", text: "(2, -1)" },
        { id: "D", text: "(1, 5)" }
      ],
      markedForReview: false,
      selectedOption: null,
      correctOption: "A",
      topic: "Systems of Equations",
      knowledgePoint: "Solving linear systems using elimination or substitution"
    },
    {
      id: 5,
      passage: `<p>Find the equation of the line that passes through the points (2, 5) and (4, 9).</p>`,
      questionText: "What is the equation of the line in slope-intercept form?",
      options: [
        { id: "A", text: "y = 2x - 1" },
        { id: "B", text: "y = 2x + 1" },
        { id: "C", text: "y = 2x" },
        { id: "D", text: "y = 3x - 1" }
      ],
      markedForReview: false,
      selectedOption: null,
      correctOption: "B",
      topic: "Linear Equations",
      knowledgePoint: "Finding the equation of a line given two points"
    }
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  // Initialize practice session
  initializePractice();
  
  // Event listeners for navigation buttons
  document.getElementById('nextBtn').addEventListener('click', goToNextQuestion);
  document.getElementById('prevBtn').addEventListener('click', goToPrevQuestion);
  document.getElementById('markReviewBtn').addEventListener('click', toggleMarkForReview);
  
  // Event listener for tools button
  document.getElementById('toolsBtn').addEventListener('click', toggleToolsBox);
  
  // Event listeners for question indicators
  const questionIndicators = document.querySelectorAll('.question-indicator');
  questionIndicators.forEach(indicator => {
    indicator.addEventListener('click', () => goToQuestion(parseInt(indicator.dataset.question)));
  });
});

// Initialize the practice session
function initializePractice() {
  displayQuestion();
  startElapsedTimer();
  updateProgressIndicators();
}

// Display the current question
function displayQuestion() {
  const currentQuestion = practiceData.questions[practiceData.currentQuestion];
  
  // Update question counter
  document.getElementById('questionCounter').textContent = `Question ${practiceData.currentQuestion + 1} of ${practiceData.questions.length}`;
  
  // Update passage content
  document.getElementById('passageContent').innerHTML = currentQuestion.passage;
  
  // Update question content
  document.getElementById('questionNumber').textContent = practiceData.currentQuestion + 1;
  document.getElementById('questionText').textContent = currentQuestion.questionText;
  
  // Update options
  const optionsContainer = document.getElementById('questionOptions');
  optionsContainer.innerHTML = '';
  
  currentQuestion.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.className = `question-option${currentQuestion.selectedOption === option.id ? ' selected' : ''}`;
    optionElement.dataset.optionId = option.id;
    
    optionElement.innerHTML = `
      <div class="option-letter">${option.id}</div>
      <div class="option-text">${option.text}</div>
    `;
    
    optionElement.addEventListener('click', () => selectOption(optionElement));
    optionsContainer.appendChild(optionElement);
  });
  
  // Update mark for review button
  const markReviewBtn = document.getElementById('markReviewBtn');
  if (currentQuestion.markedForReview) {
    markReviewBtn.classList.add('marked');
    markReviewBtn.innerHTML = '<i class="fas fa-bookmark"></i><span>Marked for Review</span>';
  } else {
    markReviewBtn.classList.remove('marked');
    markReviewBtn.innerHTML = '<i class="far fa-bookmark"></i><span>Mark for Review</span>';
  }
  
  // Update navigation buttons
  document.getElementById('prevBtn').disabled = practiceData.currentQuestion === 0;
  const nextBtn = document.getElementById('nextBtn');
  
  if (practiceData.currentQuestion === practiceData.questions.length - 1) {
    nextBtn.innerHTML = '<span class="nav-btn-text">Submit Practice</span><i class="fas fa-check nav-btn-icon"></i>';
  } else {
    nextBtn.innerHTML = '<span class="nav-btn-text">Next Question</span><i class="fas fa-chevron-right nav-btn-icon"></i>';
  }
}

// Start the elapsed timer
function startElapsedTimer() {
  practiceData.startTime = practiceData.startTime || Date.now();
  const timerDisplay = document.getElementById('timerDisplay');
  
  // Clear any existing timer
  if (practiceData.timerInterval) {
    clearInterval(practiceData.timerInterval);
  }
  
  // Update timer display immediately
  updateTimerDisplay();
  
  // Set the timer interval
  practiceData.timerInterval = setInterval(updateTimerDisplay, 1000);
}

// Update the timer display
function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timerDisplay');
  const elapsedSeconds = Math.floor((Date.now() - practiceData.startTime) / 1000);
  practiceData.elapsedTime = elapsedSeconds;
  
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Go to the next question
function goToNextQuestion() {
  const currentQuestion = practiceData.questions[practiceData.currentQuestion];
  
  if (practiceData.currentQuestion < practiceData.questions.length - 1) {
    practiceData.currentQuestion++;
    displayQuestion();
    updateProgressIndicators();
  } else {
    // This is the last question, submit the practice
    if (confirm('Are you ready to submit your practice? You can review your answers before submitting.')) {
      submitPractice();
    }
  }
}

// Go to the previous question
function goToPrevQuestion() {
  if (practiceData.currentQuestion > 0) {
    practiceData.currentQuestion--;
    displayQuestion();
    updateProgressIndicators();
  }
}

// Go to a specific question
function goToQuestion(questionIndex) {
  practiceData.currentQuestion = questionIndex;
  displayQuestion();
  updateProgressIndicators();
}

// Select an answer option
function selectOption(optionElement) {
  const optionId = optionElement.dataset.optionId;
  const currentQuestion = practiceData.questions[practiceData.currentQuestion];
  
  // Update selected option in data
  currentQuestion.selectedOption = optionId;
  
  // Update UI to show selected option
  document.querySelectorAll('.question-option').forEach(option => {
    option.classList.remove('selected');
  });
  
  optionElement.classList.add('selected');
  
  // Update progress indicators
  updateProgressIndicators();
}

// Toggle mark for review
function toggleMarkForReview() {
  const currentQuestion = practiceData.questions[practiceData.currentQuestion];
  currentQuestion.markedForReview = !currentQuestion.markedForReview;
  
  const markReviewBtn = document.getElementById('markReviewBtn');
  if (currentQuestion.markedForReview) {
    markReviewBtn.classList.add('marked');
    markReviewBtn.innerHTML = '<i class="fas fa-bookmark"></i><span>Marked for Review</span>';
  } else {
    markReviewBtn.classList.remove('marked');
    markReviewBtn.innerHTML = '<i class="far fa-bookmark"></i><span>Mark for Review</span>';
  }
  
  updateProgressIndicators();
}

// Toggle tools box
function toggleToolsBox() {
  const toolsBox = document.getElementById('examToolsBox');
  toolsBox.classList.toggle('active');
}

// Update the progress indicators
function updateProgressIndicators() {
  const indicators = document.querySelectorAll('.question-indicator');
  
  practiceData.questions.forEach((question, index) => {
    const indicator = indicators[index];
    
    indicator.classList.remove('active', 'marked', 'answered');
    
    if (index === practiceData.currentQuestion) {
      indicator.classList.add('active');
    }
    
    if (question.markedForReview) {
      indicator.classList.add('marked');
    }
    
    if (question.selectedOption) {
      indicator.classList.add('answered');
    }
  });
}

// Submit the practice
function submitPractice() {
  // Stop the timer
  clearInterval(practiceData.timerInterval);
  
  // Calculate score
  let correctAnswers = 0;
  practiceData.questions.forEach(question => {
    if (question.selectedOption === question.correctOption) {
      correctAnswers++;
    }
  });
  
  // Prepare data to send to results page (including topic and knowledgePoint)
  const resultsData = {
    score: correctAnswers,
    totalQuestions: practiceData.questions.length,
    timeSpent: practiceData.elapsedTime,
    questions: practiceData.questions.map(q => ({
      id: q.id,
      passage: q.passage,
      questionText: q.questionText,
      options: q.options,
      selectedOption: q.selectedOption,
      correctOption: q.correctOption,
      topic: q.topic,
      knowledgePoint: q.knowledgePoint
    }))
  };
  
  // Store results in localStorage
  localStorage.setItem('algebraPracticeResults', JSON.stringify(resultsData));
  
  // Redirect to results page
  window.location.href = 'algebra_practice_results.html';
} 