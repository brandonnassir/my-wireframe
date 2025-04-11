// Toggle sidebar on mobile
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");
  const openBtn = document.getElementById("openbtn");
  const closeBtn = document.getElementById("closebtn");
  
  if (sidebar.style.width === "280px") {
    sidebar.style.width = "0";
    sidebar.style.boxShadow = "none";
    mainContent.style.marginLeft = "0";
    openBtn.style.display = "block";
    closeBtn.style.opacity = "0";
  } else {
    sidebar.style.width = "280px";
    sidebar.style.boxShadow = "var(--box-shadow)";
    closeBtn.style.opacity = "1";
    
    // Only on larger screens, adjust the margin
    if (window.innerWidth > 992) {
      mainContent.style.marginLeft = "280px";
    }
  }
}

// Initialize responsive behavior based on screen size
function initResponsive() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");
  const openBtn = document.getElementById("openbtn");
  const closeBtn = document.getElementById("closebtn");
  
  // On page load, check if we're on mobile
  if (window.innerWidth <= 992) {
    sidebar.style.width = "0";
    sidebar.style.boxShadow = "none";
    mainContent.style.marginLeft = "0";
    openBtn.style.display = "block";
    closeBtn.style.opacity = "0";
  }
  
  // Add resize listener
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 992) {
      sidebar.style.width = "0";
      sidebar.style.boxShadow = "none";
      mainContent.style.marginLeft = "0";
      openBtn.style.display = "block";
    } else {
      sidebar.style.width = "280px";
      sidebar.style.boxShadow = "var(--box-shadow)";
      mainContent.style.marginLeft = "280px";
      openBtn.style.display = "none";
    }
  });
}

// Tab functionality for profile page
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabButtons.length === 0) return; // Exit if not on the profile page
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and content
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show the corresponding content
      const tabName = button.getAttribute('data-tab');
      document.getElementById(`${tabName}-tab`).classList.add('active');
    });
  });
}

// Call the init functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initResponsive();
  initTabs();
}); 