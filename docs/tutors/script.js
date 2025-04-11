// Tutor portal script.js

// Toggle function to open/close sidebar on smaller screens
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openbtn");
  const closeBtn = document.getElementById("closebtn");

  // If the sidebar is collapsed (width:0), expand it; otherwise, collapse it.
  if (sidebar.style.width === "280px") {
    sidebar.style.width = "0";
    closeBtn.style.opacity = "0";
  } else {
    sidebar.style.width = "280px";
    closeBtn.style.opacity = "1";
  }
}

// Check for mobile view on page load and apply appropriate settings
document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closebtn");
  
  // If mobile view, ensure sidebar is initially hidden
  if (window.innerWidth <= 992) {
    sidebar.style.width = "0";
    closeBtn.style.opacity = "0";
  }

  // Initialize calendar functionality
  setupCalendar();
  
  // Load recent student activity (placeholder for future API integration)
  loadRecentActivity();
});

// Function to handle calendar navigation
function setupCalendar() {
  const prevMonthBtn = document.querySelector('.calendar-nav-btn:first-child');
  const nextMonthBtn = document.querySelector('.calendar-nav-btn:last-child');
  const monthDisplay = document.querySelector('.calendar-nav h3');
  const calendarGrid = document.querySelector('.calendar-grid');
  
  // Current displayed month (starting with April 2023)
  let currentMonth = 3; // 0-indexed, so 3 is April
  let currentYear = 2023;
  
  // Sample data for sessions/assignments
  const sessionsData = {
    // Format: 'YYYY-MM-DD': true
    '2023-04-15': true,
    '2023-04-16': true,
    '2023-04-18': true,
    '2023-04-20': true,
    '2023-05-05': true,
    '2023-05-12': true,
    '2023-05-19': true,
  };
  
  // Initialize calendar display on page load
  ensureCalendarStyles();
  
  if (prevMonthBtn && nextMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendarDisplay();
    });
    
    nextMonthBtn.addEventListener('click', () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendarDisplay();
    });
  }
  
  function updateCalendarDisplay() {
    // Update month/year display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    monthDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Future implementation: update calendar days based on month/year
    // This would regenerate the calendar grid based on the selected month/year
    console.log(`Calendar updated to ${monthNames[currentMonth]} ${currentYear}`);
  }
  
  // Function to ensure calendar elements have proper styling
  function ensureCalendarStyles() {
    // Make sure calendar grid has display:grid set
    if (calendarGrid) {
      // Apply grid layout with !important to override any inline styles
      calendarGrid.style.cssText = 'display: grid !important; grid-template-columns: repeat(7, 1fr) !important; gap: 0.15rem !important;';
      
      // Apply styles to calendar days if needed
      const calendarDays = document.querySelectorAll('.calendar-day');
      calendarDays.forEach(day => {
        // Apply compact sizing to each day
        day.style.cssText = 'display: flex !important; align-items: center !important; justify-content: center !important; min-width: 24px !important; min-height: 24px !important; font-size: 0.7rem !important;';
      });
      
      // Make weekday headers smaller
      const weekdayHeaders = document.querySelectorAll('.calendar-weekday');
      weekdayHeaders.forEach(header => {
        header.style.fontSize = '0.7rem';
        header.style.padding = '0.15rem';
      });
    }
  }
}

// Function to load recent student activity
function loadRecentActivity() {
  // This would typically fetch data from a backend API
  // For now, we're just logging to console
  console.log("Recent student activity loaded");
  
  // In the future, this could dynamically update the activity cards
  // based on real student data from an API
}
  