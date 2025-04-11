// SAT Diagnostic Exam JavaScript

// Exam data structure
const examData = {
  currentModule: 0,
  currentQuestion: 0,
  moduleTimes: [8, 8, 8, 8], // Time in minutes for each module
  modules: [
    {
      title: "Reading and Writing",
      module: 1,
      questions: [
        {
          id: 1,
          passage: `<p>In the early 1800s, the Cherokee scholar Sequoyah created the first script, or writing system, for an Indigenous language in the United States. Because it represented the sounds of spoken Cherokee so accurately, his script was easy to learn and thus quickly achieved _____ use: by 1830, over 90 percent of the Cherokee people could read and write it.</p>`,
          questionText: "Which choice completes the text with the most logical and precise word or phrase?",
          options: [
            { id: "A", text: "widespread" },
            { id: "B", text: "careful" },
            { id: "C", text: "unintended" },
            { id: "D", text: "infrequent" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "A"
        },
        {
          id: 2,
          passage: `<p>The Neolithic Revolution, which occurred around 10,000 BCE, marked a significant shift in human history as societies transitioned from hunting and gathering to agriculture. This change allowed for the development of permanent settlements, specialization of labor, and the growth of complex societies. However, it also brought new challenges, including the spread of disease in concentrated populations and increased social stratification.</p>`,
          questionText: "Based on the passage, which of the following was a consequence of the Neolithic Revolution?",
          options: [
            { id: "A", text: "The decline of complex societal structures" },
            { id: "B", text: "The establishment of nomadic lifestyles" },
            { id: "C", text: "The development of permanent settlements" },
            { id: "D", text: "The reduction of labor specialization" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "C"
        },
        {
          id: 3,
          passage: `<p>Jane Austen's novels frequently explore the theme of women's economic dependence in 19th-century England, a time when marriage was often a financial necessity for women of certain social classes. In "Pride and Prejudice," the Bennet sisters' search for suitable husbands is driven not only by romantic inclination but also by the practical need for financial security, as their family estate is entailed to a male relative.</p>`,
          questionText: "The main purpose of the passage is to",
          options: [
            { id: "A", text: "contrast Jane Austen's novels with other 19th-century literature" },
            { id: "B", text: "critique the portrayal of women in Jane Austen's novels" },
            { id: "C", text: "explain a prominent theme in Jane Austen's literary works" },
            { id: "D", text: "analyze the plot structure of \"Pride and Prejudice\"" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "C"
        }
      ]
    },
    {
      title: "Reading and Writing",
      module: 2,
      questions: [
        {
          id: 1,
          passage: `<p>In recent years, urban farming has emerged as a viable solution to address food deserts in metropolitan areas. By utilizing vacant lots, rooftops, and even vertical spaces, communities are able to grow fresh produce locally, reducing transportation costs and emissions while increasing access to nutritious food options. However, challenges such as soil contamination, limited growing seasons, and zoning restrictions have slowed widespread adoption.</p>`,
          questionText: "The primary purpose of the passage is to",
          options: [
            { id: "A", text: "advocate for specific urban farming techniques" },
            { id: "B", text: "present urban farming as both beneficial and challenging" },
            { id: "C", text: "compare different approaches to eliminating food deserts" },
            { id: "D", text: "critique current urban farming regulations" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "B"
        },
        {
          id: 2,
          passage: `<p>Researchers have long debated the extent to which language shapes our perception of the world. The Sapir-Whorf hypothesis suggests that the language we speak influences how we think and perceive reality. While the strong version of this hypothesis has been largely rejected, evidence supports a weaker version: language does affect some aspects of cognition, such as color perception and spatial orientation. For example, languages that use different words for light and dark blue lead their speakers to perceive these colors as more distinct.</p>`,
          questionText: "According to the passage, the weaker version of the Sapir-Whorf hypothesis is supported by",
          options: [
            { id: "A", text: "the complete rejection of the strong version of the hypothesis" },
            { id: "B", text: "evidence showing language has no effect on cognition" },
            { id: "C", text: "studies on color perception differences among speakers of different languages" },
            { id: "D", text: "research showing that all aspects of thought are determined by language" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "C"
        },
        {
          id: 3,
          passage: `<p>Many experts argue that the increasing automation of jobs _____ not only economic concerns but also questions about the future of work itself. While some jobs may disappear entirely, others will evolve as humans work alongside advanced technologies, requiring workers to develop new skills and adapt to changing workplace environments.</p>`,
          questionText: "Which choice best completes the text?",
          options: [
            { id: "A", text: "addresses" },
            { id: "B", text: "raises" },
            { id: "C", text: "solves" },
            { id: "D", text: "eliminates" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "B"
        }
      ]
    },
    {
      title: "Math",
      module: 1,
      questions: [
        {
          id: 1,
          passage: `<p>Solve the equation for x:</p><p>3x + 7 = 4x - 5</p>`,
          questionText: "What is the value of x?",
          options: [
            { id: "A", text: "-12" },
            { id: "B", text: "-2" },
            { id: "C", text: "12" },
            { id: "D", text: "2" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "A"
        },
        {
          id: 2,
          passage: `<p>A rectangular garden has a length of 12 feet and a width of 8 feet. If the length and width are both increased by the same amount x, the area of the garden will be 168 square feet.</p>`,
          questionText: "What is the value of x?",
          options: [
            { id: "A", text: "2 feet" },
            { id: "B", text: "3 feet" },
            { id: "C", text: "4 feet" },
            { id: "D", text: "6 feet" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "B"
        },
        {
          id: 3,
          passage: `<p>The function f(x) = 2x² - 4x + 3 has its minimum value at x = a.</p>`,
          questionText: "What is the value of a?",
          options: [
            { id: "A", text: "-1" },
            { id: "B", text: "0" },
            { id: "C", text: "1" },
            { id: "D", text: "2" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "C"
        }
      ]
    },
    {
      title: "Math",
      module: 2,
      questions: [
        {
          id: 1,
          passage: `<p>In a survey of 200 students, 120 study mathematics, 100 study physics, and 50 study both mathematics and physics.</p>`,
          questionText: "How many students in the survey study neither mathematics nor physics?",
          options: [
            { id: "A", text: "20" },
            { id: "B", text: "30" },
            { id: "C", text: "50" },
            { id: "D", text: "80" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "B"
        },
        {
          id: 2,
          passage: `<p>A circle has its center at (3, 4) and passes through the point (7, 7).</p>`,
          questionText: "What is the area of the circle?",
          options: [
            { id: "A", text: "16π" },
            { id: "B", text: "25π" },
            { id: "C", text: "36π" },
            { id: "D", text: "49π" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "B"
        },
        {
          id: 3,
          passage: `<p>A line passing through the points (2, 5) and (4, y) has a slope of 3.</p>`,
          questionText: "What is the value of y?",
          options: [
            { id: "A", text: "9" },
            { id: "B", text: "11" },
            { id: "C", text: "13" },
            { id: "D", text: "15" }
          ],
          markedForReview: false,
          selectedOption: null,
          correctOption: "B"
        }
      ]
    }
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  // Initialize exam timer
  initializeExam();
  
  // Event listeners for navigation buttons
  document.getElementById('nextBtn').addEventListener('click', goToNextQuestion);
  document.getElementById('prevBtn').addEventListener('click', goToPrevQuestion);
  document.getElementById('markReviewBtn').addEventListener('click', toggleMarkForReview);
  
  // Event listener for tools button
  document.getElementById('toolsBtn').addEventListener('click', toggleToolsBox);
  
  // Event listeners for question options
  const optionElements = document.querySelectorAll('.question-option');
  optionElements.forEach(option => {
    option.addEventListener('click', () => selectOption(option));
  });
  
  // Event listeners for question indicators
  const questionIndicators = document.querySelectorAll('.question-indicator');
  questionIndicators.forEach(indicator => {
    indicator.addEventListener('click', () => goToQuestion(parseInt(indicator.dataset.question)));
  });
});

// Initialize the exam
function initializeExam() {
  displayQuestion();
  startTimer();
  updateProgressIndicators();
}

// Display the current question
function displayQuestion() {
  const currentModule = examData.modules[examData.currentModule];
  const currentQuestion = currentModule.questions[examData.currentQuestion];
  
  // Update exam header
  document.getElementById('moduleTitle').textContent = `${currentModule.title}: Module ${currentModule.module}`;
  document.getElementById('questionCounter').textContent = `Question ${examData.currentQuestion + 1} of ${currentModule.questions.length}`;
  
  // Update passage content
  document.getElementById('passageContent').innerHTML = currentQuestion.passage;
  
  // Update question content
  document.getElementById('questionNumber').textContent = examData.currentQuestion + 1;
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
    markReviewBtn.textContent = 'Marked for Review';
  } else {
    markReviewBtn.classList.remove('marked');
    markReviewBtn.textContent = 'Mark for Review';
  }
  
  // Update navigation buttons
  document.getElementById('prevBtn').disabled = examData.currentQuestion === 0;
  document.getElementById('nextBtn').textContent = examData.currentQuestion === currentModule.questions.length - 1 ? 'Finish Module' : 'Next Question';
  
  // Update active question indicator
  updateProgressIndicators();
}

// Start the timer for the current module
function startTimer() {
  const timerDisplay = document.getElementById('timerDisplay');
  if (!timerDisplay) {
    console.error('Timer display element not found!');
    return;
  }
  
  console.log('Starting timer for module:', examData.currentModule);
  let timeRemaining = examData.moduleTimes[examData.currentModule] * 60; // Convert to minutes to seconds
  
  // Set initial display
  const initialMinutes = Math.floor(timeRemaining / 60);
  const initialSeconds = timeRemaining % 60;
  timerDisplay.textContent = `${initialMinutes}:${initialSeconds < 10 ? '0' : ''}${initialSeconds}`;
  
  // Clear any existing timer
  if (window.examTimer) {
    clearInterval(window.examTimer);
  }
  
  // Set the new timer
  window.examTimer = setInterval(() => {
    timeRemaining--;
    
    if (timeRemaining <= 0) {
      clearInterval(window.examTimer);
      console.log('Timer finished!');
      alert('Time is up for this module! Moving to the next module.');
      goToNextModule();
    } else {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      
      // Add warning styles when time is running low
      if (timeRemaining < 60) {
        timerDisplay.classList.add('danger');
      } else if (timeRemaining < 120) {
        timerDisplay.classList.add('warning');
      }
    }
  }, 1000);
  
  console.log('Timer started successfully');
}

// Go to the next question
function goToNextQuestion() {
  console.log('Going to next question');
  const currentModule = examData.modules[examData.currentModule];
  
  if (examData.currentQuestion < currentModule.questions.length - 1) {
    examData.currentQuestion++;
    displayQuestion();
    console.log('Advanced to question:', examData.currentQuestion + 1);
  } else {
    console.log('At last question of module');
    if (confirm('Are you ready to complete this module and move to the next one?')) {
      goToNextModule();
    }
  }
}

// Go to the previous question
function goToPrevQuestion() {
  console.log('Going to previous question');
  if (examData.currentQuestion > 0) {
    examData.currentQuestion--;
    displayQuestion();
    console.log('Moved back to question:', examData.currentQuestion + 1);
  } else {
    console.log('Already at first question of module');
  }
}

// Go to a specific question
function goToQuestion(questionIndex) {
  examData.currentQuestion = questionIndex;
  displayQuestion();
}

// Go to the next module
function goToNextModule() {
  if (examData.currentModule < examData.modules.length - 1) {
    examData.currentModule++;
    examData.currentQuestion = 0;
    
    // Resetting the timers and displaying the new question would happen here
    // For now, we'll just simulate moving to a break screen
    document.getElementById('examContainer').innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;">
        <h2>Module Completed!</h2>
        <p>Take a 1-minute break before the next module starts.</p>
        <p id="breakTimer">60</p>
        <button class="btn-primary" id="continueBtn" style="margin-top: 20px; display: none;">Continue to Next Module</button>
      </div>
    `;
    
    let breakTime = 60;
    const breakTimer = setInterval(() => {
      breakTime--;
      document.getElementById('breakTimer').textContent = breakTime;
      
      if (breakTime <= 0) {
        clearInterval(breakTimer);
        document.getElementById('continueBtn').style.display = 'block';
        document.getElementById('continueBtn').addEventListener('click', () => {
          location.reload(); // Simply reload the page to restart the exam flow
        });
      }
    }, 1000);
  } else {
    // End of exam
    alert('Congratulations! You have completed the diagnostic exam. Your results will be available shortly.');
    window.location.href = 'diagnostic_results.html'; // Redirect to results page
  }
}

// Select an option for the current question
function selectOption(optionElement) {
  // Get the option ID - handle both DOM element and option object
  let optionId;
  
  if (typeof optionElement === 'object' && optionElement.dataset) {
    // Direct DOM element passed (from click handler)
    optionId = optionElement.dataset.optionId;
  } else if (optionElement && optionElement.dataset && optionElement.dataset.optionId) {
    // Element from querySelectorAll
    optionId = optionElement.dataset.optionId;
  } else {
    console.error('Invalid option element:', optionElement);
    return;
  }
  
  console.log('Selected option:', optionId);
  
  const currentQuestion = examData.modules[examData.currentModule].questions[examData.currentQuestion];
  currentQuestion.selectedOption = optionId;
  
  // Update UI to show selected option
  document.querySelectorAll('.question-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Find and update the clicked option element
  const selectedElement = document.querySelector(`.question-option[data-option-id="${optionId}"]`);
  if (selectedElement) {
    selectedElement.classList.add('selected');
  }
  
  // Update progress indicators
  updateProgressIndicators();
}

// Toggle mark for review
function toggleMarkForReview() {
  const currentQuestion = examData.modules[examData.currentModule].questions[examData.currentQuestion];
  currentQuestion.markedForReview = !currentQuestion.markedForReview;
  
  const markReviewBtn = document.getElementById('markReviewBtn');
  if (currentQuestion.markedForReview) {
    markReviewBtn.classList.add('marked');
    markReviewBtn.textContent = 'Marked for Review';
  } else {
    markReviewBtn.classList.remove('marked');
    markReviewBtn.textContent = 'Mark for Review';
  }
  
  updateProgressIndicators();
}

// Toggle tools box
function toggleToolsBox() {
  const toolsBox = document.getElementById('examToolsBox');
  toolsBox.classList.toggle('active');
}

// Update progress indicators
function updateProgressIndicators() {
  const currentModule = examData.modules[examData.currentModule];
  
  currentModule.questions.forEach((question, index) => {
    const indicator = document.querySelector(`.question-indicator[data-question="${index}"]`);
    
    indicator.classList.remove('active', 'answered', 'marked');
    
    if (index === examData.currentQuestion) {
      indicator.classList.add('active');
    }
    
    if (question.selectedOption) {
      indicator.classList.add('answered');
    }
    
    if (question.markedForReview) {
      indicator.classList.add('marked');
    }
  });
} 