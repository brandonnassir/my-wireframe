// script.js

// Toggle function to open/close sidebar on smaller screens
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openbtn");
  const closeBtn = document.getElementById("closebtn");

  // If the sidebar is collapsed (width:0), expand it; otherwise, collapse it.
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    closeBtn.style.display = "none";
  } else {
    sidebar.style.width = "250px";
    closeBtn.style.display = "block";
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

  // Example function to simulate fetching student data
  loadStudentData();
});

// Function to simulate loading student data
function loadStudentData() {
  // This would typically fetch data from a backend API
  // For demo purposes, we're using sample data
  
  // Simulate a loading delay
  setTimeout(() => {
    // Sample data could be used to populate charts, recent activity, etc.
    console.log("Student data loaded");
    
    // Sample chart data could be loaded here
    if (document.querySelector('.performance-chart')) {
      initializePerformanceChart();
    }
  }, 500);
}

// Example function to initialize a performance chart
// This would be used on the performance page
function initializePerformanceChart() {
  // This is a placeholder for chart initialization code
  // In a real implementation, you might use a library like Chart.js
  console.log("Performance chart initialized");
} 