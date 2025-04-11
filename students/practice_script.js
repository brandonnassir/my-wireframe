// Practice Page Functionality

// Function to toggle sidebar visibility (used in mobile view)
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('.main-content');
  
  if (sidebar.style.width === '280px' || sidebar.style.width === '') {
    sidebar.style.width = '0';
    sidebar.style.boxShadow = 'none';
    mainContent.style.marginLeft = '0';
  } else {
    sidebar.style.width = '280px';
    sidebar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    
    // Only adjust margin on desktop
    if (window.innerWidth > 992) {
      mainContent.style.marginLeft = '280px';
    }
  }
}

// Function to navigate from practice subject view back to subject selection
function showSubjectSelection() {
  document.getElementById('subjectSelectionView').style.display = 'block';
  document.getElementById('subjectPracticeView').style.display = 'none';
}

// Function to navigate to specific practice topic page
function navigateToPracticeTopic(topic, level) {
  window.location.href = `math_practice_topics.html?topic=${encodeURIComponent(topic)}&level=${level}`;
}

// Function to start a practice session (placeholder)
function startPractice(practiceType) {
  console.log('Starting practice:', practiceType);
  // In a full implementation, this would navigate to the appropriate practice page
  
  // Simple example implementation
  if (practiceType === 'quick-math') {
    alert('Starting a quick math practice session with random questions across topics.');
  } else if (practiceType === 'custom-math') {
    alert('Starting the custom practice set creation workflow.');
  }
}

// Function to go back from topic practice to main practice page
function goBackToPractice() {
  window.location.href = 'practice.html';
}

// Initialize the page based on URL parameters (for math_practice_topics.html)
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the math practice topics page
  const topicTitle = document.getElementById('topicTitle');
  
  if (topicTitle) {
    const urlParams = new URLSearchParams(window.location.search);
    const topicName = urlParams.get('topic') || 'Algebra';
    const studentLevel = urlParams.get('level') || 'medium';
    
    // Set the topic title
    topicTitle.textContent = topicName + ' Practice';
    
    // Add recommended badge based on student level
    let recommendedCardIds = [];
    
    switch(studentLevel) {
      case 'easy':
        recommendedCardIds = ['easy-level-1', 'easy-level-2'];
        break;
      case 'medium':
        recommendedCardIds = ['medium-level-1', 'medium-level-2'];
        break;
      case 'hard':
        recommendedCardIds = ['hard-level-1', 'hard-level-2'];
        break;
      case 'advanced':
        recommendedCardIds = ['advanced-level-1', 'advanced-level-2'];
        break;
    }
    
    // Add recommended badge to the cards
    recommendedCardIds.forEach(id => {
      const card = document.getElementById(id);
      if (card) {
        const badge = document.createElement('span');
        badge.className = 'recommended-badge';
        badge.textContent = 'Recommended';
        card.appendChild(badge);
      }
    });
  }
}); 