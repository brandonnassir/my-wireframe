// Main Navigation Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.getElementById('mobileToggle');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      const mainNav = document.querySelector('.main-nav');
      mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
  
  // Interface Tabs on Homepage
  const tabButtons = document.querySelectorAll('.tab-button');
  
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to current button
        this.classList.add('active');
        
        // Get the tab to show
        const tabId = this.getAttribute('data-tab');
        const tabToShow = document.getElementById(tabId + '-tab');
        
        if (tabToShow) {
          tabToShow.classList.add('active');
        }
      });
    });
  }
  
  // Handle URL parameters for direct role selection
  const urlParams = new URLSearchParams(window.location.search);
  const roleParam = urlParams.get('role');
  
  if (roleParam && window.location.pathname.includes('demo.html')) {
    // Auto-select the role based on URL parameter
    const validRoles = ['student', 'tutor', 'admin'];
    if (validRoles.includes(roleParam)) {
      const roleCard = document.querySelector(`.role-card[data-role="${roleParam}"]`);
      if (roleCard) {
        // Trigger click on the appropriate role card
        setTimeout(() => {
          roleCard.click();
          // Auto-continue to profile creation
          const roleNextBtn = document.getElementById('roleNextBtn');
          if (roleNextBtn && !roleNextBtn.disabled) {
            roleNextBtn.click();
          }
        }, 500);
      }
    }
  }
  
  // Demo Registration Process
  setupDemoRegistration();
});

// Handle all demo registration functionality
function setupDemoRegistration() {
  // Demo page elements
  const roleCards = document.querySelectorAll('.role-card');
  const roleNextBtn = document.getElementById('roleNextBtn');
  const profileForm = document.getElementById('profileForm');
  const roleSelectionForm = document.getElementById('roleSelectionForm');
  const profileNextBtn = document.getElementById('profileNextBtn');
  const profileBackBtn = document.getElementById('profileBackBtn');
  const readyForm = document.getElementById('readyForm');
  const readyBackBtn = document.getElementById('readyBackBtn');
  const startDemoBtn = document.getElementById('startDemoBtn');
  
  // Step indicators
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  
  // Role-specific field containers
  const studentFields = document.getElementById('studentFields');
  const tutorFields = document.getElementById('tutorFields');
  const adminFields = document.getElementById('adminFields');
  
  // Variables to store selections
  let selectedRole = '';
  let userData = {};
  
  // If none of these elements exist, we're not on the demo page
  if (!roleCards.length || !roleNextBtn) return;
  
  // Step 1: Role Selection
  roleCards.forEach(card => {
    card.addEventListener('click', function() {
      // Remove selected class from all cards
      roleCards.forEach(c => c.classList.remove('selected'));
      
      // Add selected class to clicked card
      this.classList.add('selected');
      
      // Store the selected role
      selectedRole = this.getAttribute('data-role');
      
      // Enable the next button
      roleNextBtn.disabled = false;
    });
  });
  
  // Move from role selection to profile form
  roleNextBtn.addEventListener('click', function() {
    roleSelectionForm.style.display = 'none';
    profileForm.style.display = 'block';
    
    // Update step indicators
    step1.classList.remove('active');
    step2.classList.add('active');
    
    // Show role-specific fields based on selection
    studentFields.style.display = 'none';
    tutorFields.style.display = 'none';
    adminFields.style.display = 'none';
    
    if (selectedRole === 'student') {
      studentFields.style.display = 'block';
    } else if (selectedRole === 'tutor') {
      tutorFields.style.display = 'block';
    } else if (selectedRole === 'admin') {
      adminFields.style.display = 'block';
    }
  });
  
  // Move back to role selection
  profileBackBtn.addEventListener('click', function() {
    profileForm.style.display = 'none';
    roleSelectionForm.style.display = 'block';
    
    // Update step indicators
    step2.classList.remove('active');
    step1.classList.add('active');
  });
  
  // Collect form data and move to confirmation
  profileNextBtn.addEventListener('click', function() {
    // Get common field values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    
    // Validate required fields
    if (!fullName || !email) {
      alert('Please fill in your name and email.');
      return;
    }
    
    // Store common data
    userData = {
      role: selectedRole,
      fullName: fullName,
      email: email
    };
    
    // Collect role-specific data
    if (selectedRole === 'student') {
      userData.age = document.getElementById('studentAge').value;
      userData.grade = document.getElementById('studentGrade').value;
      userData.focusAreas = getCheckedValues('focusAreas');
    } else if (selectedRole === 'tutor') {
      userData.specialization = document.getElementById('tutorSpecialization').value;
      userData.experience = document.getElementById('tutorExperience').value;
      userData.teachingLevels = getCheckedValues('teachingLevels');
    } else if (selectedRole === 'admin') {
      userData.centerName = document.getElementById('adminCenterName').value;
      userData.position = document.getElementById('adminPosition').value;
      userData.centerSize = document.getElementById('adminCenterSize').value;
    }
    
    // Update summary
    document.getElementById('summaryRole').textContent = capitalizeFirstLetter(selectedRole);
    document.getElementById('summaryName').textContent = fullName;
    document.getElementById('summaryEmail').textContent = email;
    
    // Add additional summary items based on role
    const additionalSummary = document.getElementById('additionalSummary');
    additionalSummary.innerHTML = '';
    
    if (selectedRole === 'student') {
      if (userData.age) addSummaryItem(additionalSummary, 'Age', userData.age);
      if (userData.grade) addSummaryItem(additionalSummary, 'Grade', getGradeText(userData.grade));
      if (userData.focusAreas && userData.focusAreas.length) {
        addSummaryItem(additionalSummary, 'Focus Areas', userData.focusAreas.join(', '));
      }
    } else if (selectedRole === 'tutor') {
      if (userData.specialization) addSummaryItem(additionalSummary, 'Specialization', getSpecializationText(userData.specialization));
      if (userData.experience) addSummaryItem(additionalSummary, 'Experience', userData.experience);
      if (userData.teachingLevels && userData.teachingLevels.length) {
        addSummaryItem(additionalSummary, 'Teaching Levels', userData.teachingLevels.join(', '));
      }
    } else if (selectedRole === 'admin') {
      if (userData.centerName) addSummaryItem(additionalSummary, 'Center Name', userData.centerName);
      if (userData.position) addSummaryItem(additionalSummary, 'Position', getPositionText(userData.position));
      if (userData.centerSize) addSummaryItem(additionalSummary, 'Center Size', getCenterSizeText(userData.centerSize));
    }
    
    // Show the ready form
    profileForm.style.display = 'none';
    readyForm.style.display = 'block';
    
    // Update step indicators
    step2.classList.remove('active');
    step3.classList.add('active');
    
    // Store user data in session storage for demo
    sessionStorage.setItem('demoUserData', JSON.stringify(userData));
  });
  
  // Move back to profile form
  readyBackBtn.addEventListener('click', function() {
    readyForm.style.display = 'none';
    profileForm.style.display = 'block';
    
    // Update step indicators
    step3.classList.remove('active');
    step2.classList.add('active');
  });
  
  // Start the demo
  startDemoBtn.addEventListener('click', function() {
    // Redirect to appropriate dashboard based on role
    if (selectedRole === 'student') {
      window.location.href = '../my-wireframe/students/student_home.html';
    } else if (selectedRole === 'tutor') {
      window.location.href = '../my-wireframe/tutors/tutor_home.html';
    } else if (selectedRole === 'admin') {
      window.location.href = '../my-wireframe/administrators/administrator_home.html';
    }
  });
}

// Helper Functions

// Get values of checked checkboxes with the same name
function getCheckedValues(name) {
  const checkedBoxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  return Array.from(checkedBoxes).map(cb => cb.value);
}

// Add an item to the account summary
function addSummaryItem(container, label, value) {
  const summaryItem = document.createElement('div');
  summaryItem.className = 'summary-item';
  
  const summaryLabel = document.createElement('div');
  summaryLabel.className = 'summary-label';
  summaryLabel.textContent = label + ':';
  
  const summaryValue = document.createElement('div');
  summaryValue.className = 'summary-value';
  summaryValue.textContent = value;
  
  summaryItem.appendChild(summaryLabel);
  summaryItem.appendChild(summaryValue);
  container.appendChild(summaryItem);
}

// Capitalize first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get readable text for grade selection
function getGradeText(grade) {
  const gradeMap = {
    '9': '9th Grade',
    '10': '10th Grade',
    '11': '11th Grade',
    '12': '12th Grade',
    'college': 'College Student'
  };
  return gradeMap[grade] || grade;
}

// Get readable text for specialization
function getSpecializationText(specialization) {
  const specializationMap = {
    'math': 'Mathematics',
    'reading': 'Reading & Writing',
    'science': 'Science',
    'test-prep': 'Test Preparation',
    'multiple': 'Multiple Subjects'
  };
  return specializationMap[specialization] || specialization;
}

// Get readable text for position
function getPositionText(position) {
  const positionMap = {
    'owner': 'Owner/Founder',
    'director': 'Director',
    'manager': 'Manager',
    'coordinator': 'Program Coordinator',
    'other': 'Other'
  };
  return positionMap[position] || position;
}

// Get readable text for center size
function getCenterSizeText(size) {
  const sizeMap = {
    'small': 'Small (1-5 tutors)',
    'medium': 'Medium (6-15 tutors)',
    'large': 'Large (16-30 tutors)',
    'enterprise': 'Enterprise (31+ tutors)'
  };
  return sizeMap[size] || size;
} 