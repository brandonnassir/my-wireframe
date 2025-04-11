// script_my_practice_sets.js

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

// Sample practice set data
const practiceSets = [
  {
    id: 1,
    name: "SAT Math Practice Set #1",
    description: "Algebra fundamentals and problem solving practice set",
    questions: 15,
    created: "June 15, 2023",
    lastUsed: "June 20, 2023",
    subject: "Math",
    assigned: true,
    problems: [
      {
        id: 101,
        title: "Algebra Linear Equations",
        content: "Solve for x: 2x + 5 = 13",
        difficulty: "Easy",
        topic: "Algebra",
        subtopic: "Linear Equations"
      },
      {
        id: 102,
        title: "Functions and Graphs",
        content: "If f(x) = 2x² + 3x - 4, find f(2)",
        difficulty: "Medium",
        topic: "Algebra",
        subtopic: "Functions"
      },
      {
        id: 103,
        title: "Quadratic Formula",
        content: "Solve using the quadratic formula: x² - 6x + 8 = 0",
        difficulty: "Medium",
        topic: "Algebra",
        subtopic: "Quadratic Equations"
      },
      {
        id: 104,
        title: "Geometry - Triangle Area",
        content: "Find the area of a triangle with base 8 cm and height 5 cm",
        difficulty: "Easy",
        topic: "Geometry",
        subtopic: "Area"
      }
    ]
  },
  {
    id: 2,
    name: "SAT Math Practice Set #2",
    description: "Geometry and advanced algebra concepts",
    questions: 20,
    created: "June 18, 2023",
    lastUsed: "June 21, 2023",
    subject: "Math",
    assigned: true,
    problems: [
      {
        id: 201,
        title: "Circle Geometry",
        content: "Find the area of a circle with radius 6 cm",
        difficulty: "Easy",
        topic: "Geometry",
        subtopic: "Circles"
      },
      {
        id: 202,
        title: "Advanced Quadratics",
        content: "Find the range of the function f(x) = -3x² + 12x - 7",
        difficulty: "Hard",
        topic: "Algebra",
        subtopic: "Quadratic Functions"
      },
      {
        id: 203,
        title: "Coordinate Geometry",
        content: "Find the distance between the points (3, 4) and (6, 8)",
        difficulty: "Medium",
        topic: "Geometry",
        subtopic: "Coordinate Geometry"
      }
    ]
  },
  {
    id: 3,
    name: "SAT Math Practice Set #3",
    description: "Data analysis and statistics practice problems",
    questions: 12,
    created: "June 22, 2023",
    lastUsed: "June 23, 2023",
    subject: "Math",
    assigned: false,
    problems: [
      {
        id: 301,
        title: "Mean and Median",
        content: "Find the mean and median of the following data set: 12, 15, 18, 22, 30, 15, 8, 10",
        difficulty: "Easy",
        topic: "Statistics",
        subtopic: "Measures of Central Tendency"
      },
      {
        id: 302,
        title: "Standard Deviation",
        content: "Calculate the standard deviation of the data set: 5, 7, 5, 8, 9, 6",
        difficulty: "Hard",
        topic: "Statistics",
        subtopic: "Measures of Dispersion"
      }
    ]
  },
  {
    id: 4,
    name: "SAT English Practice Set #1",
    description: "Critical reading and grammar fundamentals",
    questions: 18,
    created: "July 2, 2023",
    lastUsed: "July 10, 2023",
    subject: "English",
    assigned: true,
    problems: [
      {
        id: 401,
        title: "Subject-Verb Agreement",
        content: "Choose the correct form of the verb: The team of researchers (is/are) conducting an important experiment.",
        difficulty: "Medium",
        topic: "Grammar",
        subtopic: "Subject-Verb Agreement"
      },
      {
        id: 402,
        title: "Parallel Structure",
        content: "Correct the sentence if needed: The professor asked students to read the chapter, write a summary, and that they should submit it by Friday.",
        difficulty: "Medium",
        topic: "Grammar",
        subtopic: "Parallel Structure"
      }
    ]
  },
  {
    id: 5,
    name: "SAT English Practice Set #2",
    description: "Vocabulary and sentence correction exercises",
    questions: 25,
    created: "July 15, 2023",
    lastUsed: "July 20, 2023",
    subject: "English",
    assigned: false,
    problems: [
      {
        id: 501,
        title: "Vocabulary in Context",
        content: "The artist's _____ style set him apart from other painters of his generation. A) prolific B) eccentric C) lucrative D) mundane",
        difficulty: "Medium",
        topic: "Reading",
        subtopic: "Vocabulary"
      },
      {
        id: 502,
        title: "Pronoun Reference",
        content: "Identify the error in pronoun reference: The marketing team presented their proposal, but it was rejected because of its inconsistency.",
        difficulty: "Hard",
        topic: "Grammar",
        subtopic: "Pronouns"
      }
    ]
  }
];

// Sample student data (in a real app, this would be fetched from an API)
const students = [
  { id: 1, name: "Ally Stanton", grade: "12th Grade", center: "C2 Education" },
  { id: 2, name: "Brenda McDonald", grade: "11th Grade", center: "1-1 Tutoring" },
  { id: 3, name: "Cole Stone", grade: "9th Grade", center: "C2 Education" },
  { id: 4, name: "Alex Hades", grade: "8th Grade", center: "Whiz Kidz Tutoring" },
  { id: 5, name: "Abby Cloud", grade: "11th Grade", center: "1-1 Tutoring" },
  { id: 6, name: "Butch Wright", grade: "10th Grade", center: "Whiz Kidz Tutoring" }
];

// Global variable to track current sets and deletion state
let currentPracticeSets = [...practiceSets];
let setToDelete = null;
let setPracticeToAssign = null;
let currentViewingSet = null;
let currentCardIndex = 0;
let isEditMode = false;
let removedProblems = [];

// DOM elements
const searchInput = document.getElementById('searchInput');
const sortFilter = document.getElementById('sortFilter');
const subjectFilter = document.getElementById('subjectFilter');
const practiceSetsList = document.getElementById('practiceSetsList');
const loadingIndicator = document.getElementById('loadingIndicator');
const emptyState = document.getElementById('emptyState');

// Modal elements
const deleteModal = document.getElementById('deleteModal');
const confirmDeleteBtn = document.getElementById('confirmDelete');
const cancelDeleteBtn = document.getElementById('cancelDelete');
const closeDeleteModalBtn = document.getElementById('closeDeleteModal');

const assignModal = document.getElementById('assignModal');
const closeAssignModalBtn = document.getElementById('closeAssignModal');
const confirmAssignBtn = document.getElementById('confirmAssign');
const cancelAssignBtn = document.getElementById('cancelAssign');
const studentSearchInput = document.getElementById('studentSearchInput');
const studentsList = document.getElementById('studentsList');

// Card stack elements
const cardStackModal = document.getElementById('cardStackModal');
const cardStackTitle = document.getElementById('cardStackTitle');
const closeCardStackModalBtn = document.getElementById('closeCardStackModal');
const closePreviewBtn = document.getElementById('closePreview');
const cardStackContent = document.getElementById('cardStackContent');
const currentCardEl = document.getElementById('currentCard');
const totalCardsEl = document.getElementById('totalCards');
const prevCardBtn = document.getElementById('prevCard');
const nextCardBtn = document.getElementById('nextCard');
const editModeToggle = document.getElementById('editModeToggle');
const editButtonsContainer = document.getElementById('editButtonsContainer');
const saveChangesBtn = document.getElementById('saveChanges');

// Event listeners setup
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the page
  initializePage();

  // Add search and filter listeners
  if (searchInput) searchInput.addEventListener('input', filterSets);
  if (sortFilter) sortFilter.addEventListener('change', filterSets);
  if (subjectFilter) subjectFilter.addEventListener('change', filterSets);
  
  // Delete modal event listeners
  if (confirmDeleteBtn) confirmDeleteBtn.addEventListener('click', handleConfirmDelete);
  if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', handleCancelDelete);
  if (closeDeleteModalBtn) closeDeleteModalBtn.addEventListener('click', handleCancelDelete);
  
  // Assign modal event listeners
  if (confirmAssignBtn) confirmAssignBtn.addEventListener('click', handleAssignConfirm);
  if (cancelAssignBtn) cancelAssignBtn.addEventListener('click', handleAssignCancel);
  if (closeAssignModalBtn) closeAssignModalBtn.addEventListener('click', handleAssignCancel);
  if (studentSearchInput) studentSearchInput.addEventListener('input', filterStudents);
  
  // Card stack event listeners
  if (closeCardStackModalBtn) closeCardStackModalBtn.addEventListener('click', closeCardStackPreview);
  if (closePreviewBtn) closePreviewBtn.addEventListener('click', closeCardStackPreview);
  if (prevCardBtn) prevCardBtn.addEventListener('click', navigateToPrevCard);
  if (nextCardBtn) nextCardBtn.addEventListener('click', navigateToNextCard);
  if (editModeToggle) editModeToggle.addEventListener('click', toggleEditMode);
  if (saveChangesBtn) saveChangesBtn.addEventListener('click', saveChanges);
  
  // Add click event listener to close modals when clicking outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === deleteModal) {
      handleCancelDelete();
    }
    if (event.target === assignModal) {
      handleAssignCancel();
    }
    if (event.target === cardStackModal) {
      closeCardStackPreview();
    }
  });
  
  // Add keyboard event listener to close modals with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      // Check which modal is currently open
      if (deleteModal && deleteModal.style.display === 'flex') {
        handleCancelDelete();
      } else if (assignModal && assignModal.style.display === 'flex') {
        handleAssignCancel();
      } else if (cardStackModal && cardStackModal.style.display === 'flex') {
        closeCardStackPreview();
      }
    }
  });
});

// Initialize page
function initializePage() {
  showLoading();
  
  // Simulate loading data from server
  setTimeout(() => {
    renderPracticeSets(currentPracticeSets);
    hideLoading();
  }, 500);
}

// Filter practice sets based on search input and filters
function filterSets() {
  if (!searchInput || !sortFilter || !subjectFilter) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  const sortValue = sortFilter.value;
  const subjectValue = subjectFilter.value;
  
  // Filter based on search and subject
  let filteredSets = practiceSets.filter(set => {
    // Check subject filter
    if (subjectValue !== 'all' && set.subject !== subjectValue) {
      return false;
    }
    
    // Check search term
    if (searchTerm !== '') {
      const matchesName = set.name.toLowerCase().includes(searchTerm);
      const matchesDescription = set.description.toLowerCase().includes(searchTerm);
      
      return matchesName || matchesDescription;
    }
    
    return true;
  });
  
  // Sort the filtered sets
  filteredSets.sort((a, b) => {
    switch (sortValue) {
      case 'newest':
        return new Date(b.created) - new Date(a.created);
      case 'oldest':
        return new Date(a.created) - new Date(b.created);
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
  
  // Update the current practice sets and render
  currentPracticeSets = filteredSets;
  renderPracticeSets(currentPracticeSets);
}

// Filter students in the assign modal
function filterStudents() {
  if (!studentSearchInput || !studentsList) return;
  
  const searchTerm = studentSearchInput.value.toLowerCase().trim();
  
  // Clear previous list
  studentsList.innerHTML = '';
  
  // Filter and populate student list
  const filteredStudents = searchTerm === '' 
    ? students 
    : students.filter(student => 
        student.name.toLowerCase().includes(searchTerm) || 
        student.grade.toLowerCase().includes(searchTerm) ||
        student.center.toLowerCase().includes(searchTerm)
      );
  
  if (filteredStudents.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No matching students found';
    studentsList.appendChild(noResults);
    return;
  }
  
  filteredStudents.forEach(student => {
    const studentOption = document.createElement('div');
    studentOption.className = 'student-option';
    
    const studentRadio = document.createElement('input');
    studentRadio.type = 'radio';
    studentRadio.name = 'selectedStudent';
    studentRadio.id = `student-${student.id}`;
    studentRadio.value = student.id;
    
    const studentLabel = document.createElement('label');
    studentLabel.htmlFor = `student-${student.id}`;
    studentLabel.textContent = `${student.name} (${student.grade}) - ${student.center}`;
    
    studentOption.appendChild(studentRadio);
    studentOption.appendChild(studentLabel);
    studentsList.appendChild(studentOption);
  });
}

// Render practice sets to DOM
function renderPracticeSets(sets) {
  practiceSetsList.innerHTML = '';
  
  if (sets.length === 0) {
    showEmptyState();
    return;
  }
  
  hideEmptyState();
  
  sets.forEach(set => {
    const card = document.createElement('div');
    card.className = 'problem-card';
    
    const title = document.createElement('h3');
    title.textContent = set.name;
    
    const description = document.createElement('p');
    description.textContent = set.description;
    
    const meta = document.createElement('div');
    meta.className = 'problem-meta';
    
    const questionsSpan = document.createElement('span');
    questionsSpan.innerHTML = `<i class="fas fa-tasks"></i> ${set.questions} Questions`;
    
    const createdSpan = document.createElement('span');
    createdSpan.innerHTML = `<i class="fas fa-calendar-plus"></i> ${set.created}`;
    
    const lastUsedSpan = document.createElement('span');
    lastUsedSpan.innerHTML = `<i class="fas fa-calendar-check"></i> ${set.lastUsed}`;
    
    const subjectSpan = document.createElement('span');
    const subjectIcon = set.subject === 'Math' ? 'fa-calculator' : 'fa-book';
    subjectSpan.innerHTML = `<i class="fas ${subjectIcon}"></i> ${set.subject}`;
    
    meta.appendChild(questionsSpan);
    meta.appendChild(subjectSpan);
    meta.appendChild(createdSpan);
    meta.appendChild(lastUsedSpan);
    
    const btnRow = document.createElement('div');
    btnRow.className = 'btn-row';
    
    const viewBtn = createButton('<i class="fas fa-eye"></i> View', 'primary-btn');
    viewBtn.onclick = () => showCardStackPreview(set.id);
    
    const editBtn = createButton('<i class="fas fa-edit"></i> Edit', 'secondary-btn');
    editBtn.onclick = () => showCardStackPreview(set.id, true);
    
    const assignBtn = createButton('<i class="fas fa-user-plus"></i> Assign', 'secondary-btn');
    assignBtn.onclick = () => showAssignModal(set.id);
    
    const deleteBtn = createButton('<i class="fas fa-trash-alt"></i>', 'danger-btn');
    deleteBtn.onclick = () => showDeleteConfirmation(set.id);
    
    btnRow.appendChild(viewBtn);
    btnRow.appendChild(editBtn);
    btnRow.appendChild(assignBtn);
    btnRow.appendChild(deleteBtn);
    
    // Assemble card
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(meta);
    card.appendChild(btnRow);
    
    practiceSetsList.appendChild(card);
  });
}

// Button factory function
function createButton(html, className) {
  const button = document.createElement('button');
  button.innerHTML = html;
  button.className = className;
  return button;
}

// Show and hide UI states
function showLoading() {
  loadingIndicator.style.display = 'flex';
  practiceSetsList.style.display = 'none';
  emptyState.style.display = 'none';
}

function hideLoading() {
  loadingIndicator.style.display = 'none';
  practiceSetsList.style.display = 'grid';
}

function showEmptyState() {
  emptyState.style.display = 'flex';
  practiceSetsList.style.display = 'none';
}

function hideEmptyState() {
  emptyState.style.display = 'none';
  practiceSetsList.style.display = 'grid';
}

// Modal controls
function showDeleteConfirmation(id) {
  setToDelete = id;
  deleteModal.style.display = 'flex';
}

function handleConfirmDelete() {
  if (setToDelete !== null) {
    // Remove from data
    currentPracticeSets = currentPracticeSets.filter(set => set.id !== setToDelete);
    
    // In real app, you would make an API call here
    // For this demo, we're also updating the original array
    const indexInOriginal = practiceSets.findIndex(set => set.id === setToDelete);
    if (indexInOriginal !== -1) {
      practiceSets.splice(indexInOriginal, 1);
    }
    
    // Update stats and re-render
    renderPracticeSets(currentPracticeSets);
    
    // Close the modal
    handleCancelDelete();
    
    // Show success message
    showToast("Practice set deleted successfully");
  }
}

function handleCancelDelete() {
  setToDelete = null;
  if (deleteModal) {
    deleteModal.style.display = 'none';
  }
}

// Assign modal controls
function showAssignModal(id) {
  setPracticeToAssign = id;
  
  // Reset student search and populate initial list
  if (studentSearchInput) {
    studentSearchInput.value = '';
  }
  filterStudents();
  
  // Show the modal
  if (assignModal) {
    assignModal.style.display = 'flex';
  }
}

function handleAssignConfirm() {
  const selectedStudent = document.querySelector('input[name="selectedStudent"]:checked');
  
  if (!selectedStudent) {
    alert('Please select a student to assign the practice set to');
    return;
  }
  
  const studentId = parseInt(selectedStudent.value);
  const student = students.find(s => s.id === studentId);
  const practiceSet = practiceSets.find(set => set.id === setPracticeToAssign);
  
  if (student && practiceSet) {
    // In a real application, you would make an API call here to save the assignment
    
    // Mark the set as assigned for our stats
    practiceSet.assigned = true;
    
    // Show success message
    showToast(`Successfully assigned "${practiceSet.name}" to ${student.name}`);
    
    // Close the modal
    handleAssignCancel();
  }
}

function handleAssignCancel() {
  setPracticeToAssign = null;
  if (assignModal) {
    assignModal.style.display = 'none';
  }
}

// Card Stack Preview Functions
function showCardStackPreview(setId, startInEditMode = false) {
  // Find the selected practice set
  currentViewingSet = practiceSets.find(set => set.id === setId);
  
  if (!currentViewingSet || !currentViewingSet.problems || currentViewingSet.problems.length === 0) {
    showToast('This practice set has no problems to display', 'warning');
    return;
  }
  
  // Reset variables
  currentCardIndex = 0;
  isEditMode = startInEditMode;
  removedProblems = [];
  
  // Update UI based on edit mode
  if (editModeToggle) {
    editModeToggle.classList.toggle('active', isEditMode);
  }
  
  if (editButtonsContainer) {
    editButtonsContainer.style.display = isEditMode ? 'block' : 'none';
  }
  
  // Set title
  if (cardStackTitle) {
    cardStackTitle.innerHTML = `<i class="fas fa-book-open"></i> ${currentViewingSet.name}`;
  }
  
  // Update card count
  if (totalCardsEl) {
    totalCardsEl.textContent = currentViewingSet.problems.length;
  }
  
  if (currentCardEl) {
    currentCardEl.textContent = '1';
  }
  
  // Render all cards
  renderCardStackContent();
  
  // Show the first card
  showCard(0);
  
  // Show modal
  if (cardStackModal) {
    cardStackModal.style.display = 'flex';
  }
}

function renderCardStackContent() {
  // Check if cardStackContent exists
  if (!cardStackContent) return;
  
  // Clear previous content
  cardStackContent.innerHTML = '';
  
  // If no set is selected, return
  if (!currentViewingSet || !currentViewingSet.problems) return;
  
  // Create a card for each problem
  currentViewingSet.problems.forEach((problem, index) => {
    const card = document.createElement('div');
    card.className = 'problem-card-preview';
    card.id = `problem-card-${problem.id}`;
    card.dataset.index = index;
    card.dataset.id = problem.id;
    
    if (isEditMode) {
      card.classList.add('edit-mode');
    }
    
    // Card title
    const title = document.createElement('h3');
    title.textContent = problem.title;
    
    // Problem content
    const content = document.createElement('div');
    content.className = 'problem-content';
    content.textContent = problem.content;
    
    // Meta information
    const meta = document.createElement('div');
    meta.className = 'problem-meta';
    
    meta.innerHTML = `
      <span><i class="fas fa-tag"></i> ${problem.topic}</span>
      <span><i class="fas fa-layer-group"></i> ${problem.subtopic}</span>
      <span><i class="fas fa-thermometer-half"></i> ${problem.difficulty}</span>
    `;
    
    // Remove button (for edit mode)
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-problem-btn';
    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
    removeBtn.addEventListener('click', () => removeProblem(problem.id));
    
    // Assemble card
    card.appendChild(title);
    card.appendChild(content);
    card.appendChild(meta);
    card.appendChild(removeBtn);
    
    // Add to container
    cardStackContent.appendChild(card);
  });
  
  // After rendering all cards, show the first one
  showCard(0);
}

function showCard(index) {
  // Check if any cards exist
  const allCards = document.querySelectorAll('.problem-card-preview');
  if (allCards.length === 0) {
    if (currentCardEl) currentCardEl.textContent = '0';
    if (totalCardsEl) totalCardsEl.textContent = '0';
    
    // If there are no cards, close the preview
    setTimeout(() => {
      closeCardStackPreview();
    }, 100);
    return;
  }
  
  // Hide all cards
  allCards.forEach(card => card.classList.remove('active'));
  
  // Validate index bounds
  if (index < 0) index = 0;
  if (index >= allCards.length) index = allCards.length - 1;
  
  // Show the card at specified index
  const card = allCards[index];
  if (card) {
    card.classList.add('active');
    currentCardIndex = index;
    if (currentCardEl) currentCardEl.textContent = index + 1;
  }
  
  // Update navigation buttons
  updateNavButtons();
}

function updateNavButtons() {
  if (!prevCardBtn || !nextCardBtn) return;
  
  // Get count of remaining problems
  const problemCount = document.querySelectorAll('.problem-card-preview').length;
  
  // Disable/enable previous button
  prevCardBtn.disabled = currentCardIndex === 0;
  
  // Disable/enable next button
  nextCardBtn.disabled = currentCardIndex >= problemCount - 1;
}

function navigateToPrevCard() {
  if (currentCardIndex > 0) {
    showCard(currentCardIndex - 1);
  }
}

function navigateToNextCard() {
  const problemCount = document.querySelectorAll('.problem-card-preview').length;
  
  if (currentCardIndex < problemCount - 1) {
    showCard(currentCardIndex + 1);
  }
}

function toggleEditMode() {
  isEditMode = !isEditMode;
  
  // Update UI
  if (editModeToggle) {
    editModeToggle.classList.toggle('active', isEditMode);
  }
  
  if (editButtonsContainer) {
    editButtonsContainer.style.display = isEditMode ? 'block' : 'none';
  }
  
  // Toggle edit-mode class on all cards
  const allCards = document.querySelectorAll('.problem-card-preview');
  allCards.forEach(card => {
    if (isEditMode) {
      card.classList.add('edit-mode');
    } else {
      card.classList.remove('edit-mode');
    }
  });
}

function removeProblem(problemId) {
  // Find the problem in the current set
  const problemIndex = currentViewingSet.problems.findIndex(p => p.id === problemId);
  
  if (problemIndex !== -1) {
    // Add to removed problems array for undo functionality
    removedProblems.push(currentViewingSet.problems[problemIndex]);
    
    // Remove the problem card from DOM
    const card = document.getElementById(`problem-card-${problemId}`);
    if (card) {
      card.remove();
      
      // Update counts
      if (totalCardsEl) {
        totalCardsEl.textContent = document.querySelectorAll('.problem-card-preview').length;
      }
      
      // Navigate to appropriate card
      if (currentCardIndex >= document.querySelectorAll('.problem-card-preview').length) {
        showCard(currentCardIndex - 1);
      } else {
        showCard(currentCardIndex);
      }
      
      // Show toast message with undo option
      showToast(`Problem removed from set`, 'warning');
    }
  }
}

function saveChanges() {
  // Get all remaining problem IDs
  const remainingCards = document.querySelectorAll('.problem-card-preview');
  const remainingProblemIds = Array.from(remainingCards).map(card => parseInt(card.dataset.id));
  
  // Filter the current set's problems to only include remaining problems
  currentViewingSet.problems = currentViewingSet.problems.filter(p => remainingProblemIds.includes(p.id));
  
  // Update the questions count in the practice set
  currentViewingSet.questions = currentViewingSet.problems.length;
  
  // Exit edit mode
  isEditMode = false;
  if (editModeToggle) {
    editModeToggle.classList.remove('active');
  }
  
  if (editButtonsContainer) {
    editButtonsContainer.style.display = 'none';
  }
  
  // Reset removed problems
  removedProblems = [];
  
  // Update the UI
  renderPracticeSets(currentPracticeSets);
  
  // Show success message
  showToast(`Changes to "${currentViewingSet.name}" saved successfully`);
  
  // Close the preview
  closeCardStackPreview();
}

function closeCardStackPreview() {
  // If there are unsaved changes in edit mode, confirm before closing
  if (isEditMode && removedProblems.length > 0) {
    if (!confirm('You have unsaved changes. Are you sure you want to close without saving?')) {
      return;
    }
  }
  
  // Reset state
  currentViewingSet = null;
  currentCardIndex = 0;
  isEditMode = false;
  removedProblems = [];
  
  // Hide modal
  if (cardStackModal) {
    cardStackModal.style.display = 'none';
  }
}

// Toast notification
function showToast(message, type = 'success') {
  // Check if a toast container already exists
  let toastContainer = document.querySelector('.toast-container');
  
  // If not, create one
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  
  // Create a new toast
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'warning' ? 'toast-warning' : ''}`;
  
  // Set icon based on type
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  
  toast.innerHTML = `
    <div class="toast-icon">
      <i class="fas ${icon}"></i>
    </div>
    <div class="toast-message">${message}</div>
  `;
  
  // Add to container
  toastContainer.appendChild(toast);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('toast-hide');
    setTimeout(() => {
      toast.remove();
      
      // Remove container if empty
      if (toastContainer.children.length === 0) {
        toastContainer.remove();
      }
    }, 300);
  }, 3000);
}

// Action handlers
function viewPracticeSet(id) {
  // No longer redirects - now shows card stack preview
  showCardStackPreview(id);
}

function editPracticeSet(id) {
  // Now opens the card stack preview in edit mode
  showCardStackPreview(id, true);
} 