// script_students.js

// Array of student data
const students = [
    { name: "Ally Stanton", grade: "12th Grade", center: "C2 Education" },
    { name: "Brenda McDonald", grade: "11th Grade", center: "1-1 Tutoring" },
    { name: "Cole Stone", grade: "9th Grade", center: "C2 Education" },
    { name: "Alex Hades", grade: "8th Grade", center: "Whiz Kidz Tutoring" },
    { name: "Abby Cloud", grade: "11th Grade", center: "1-1 Tutoring" },
    { name: "Butch Wright", grade: "10th Grade", center: "Whiz Kidz Tutoring" }
  ];
  
  // Sidebar toggle for mobile
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
  
  function renderStudents() {
    const searchQuery = document.getElementById("studentSearch").value.toLowerCase().trim();
    const selectedCenter = document.getElementById("centerFilter").value;
  
    // 1) Filter by center
    let filtered = students.filter(student => {
      if (selectedCenter === "All") return true;
      return student.center === selectedCenter;
    });
  
    // 2) Sort by relevancy to the search query
    if (searchQuery) {
      filtered.sort((a, b) => {
        const aMatches = occurrences(a.name.toLowerCase(), searchQuery);
        const bMatches = occurrences(b.name.toLowerCase(), searchQuery);
        return bMatches - aMatches;
      });
    }
  
    // 3) Remove students who don't match at all
    if (searchQuery) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchQuery)
      );
    }
  
    // Update DOM
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards
  
    const noResultsDiv = document.getElementById("noResults");
    if (filtered.length === 0) {
      noResultsDiv.style.display = "block";
    } else {
      noResultsDiv.style.display = "none";
    }
  
    // Create a card for each filtered student
    filtered.forEach(student => {
      // Instead of a <div>, create an <a> so it's clickable
      const cardLink = document.createElement("a");
      cardLink.className = "student-card";
      cardLink.style.textDecoration = "none"; // remove default underline
      cardLink.style.color = "inherit"; // maintain text color from CSS
  
      // If the student's name is Cole Stone, point to "student_detail.html".
      // Otherwise, you could leave it as "#" for no action or some placeholder.
      if (student.name === "Cole Stone") {
        cardLink.href = "student_detail.html"; 
        // Optionally open in a new tab:
        // cardLink.target = "_blank"; 
      } else {
        // For the demo, you can link to "#", do nothing, or show an alert
        cardLink.href = "#"; 
      }
  
      // Card content
      const studentName = document.createElement("h2");
      studentName.textContent = student.name;
  
      const studentGrade = document.createElement("p");
      studentGrade.textContent = student.grade;
  
      const studentCenter = document.createElement("p");
      studentCenter.style.fontStyle = "italic";
      studentCenter.textContent = student.center;
  
      // Append the elements to the link
      cardLink.appendChild(studentName);
      cardLink.appendChild(studentGrade);
      cardLink.appendChild(studentCenter);
  
      // Finally, append the link to the container
      container.appendChild(cardLink);
    });
  }
  
  // Helper function to count occurrences of subStr in str
  function occurrences(str, subStr) {
    let count = 0;
    let pos = str.indexOf(subStr);
  
    while (pos !== -1) {
      count++;
      pos = str.indexOf(subStr, pos + 1);
    }
    return count;
  }
  
  // Initialization
  window.addEventListener("DOMContentLoaded", () => {
    renderStudents(); // Show all students by default
  
    // Search input event
    document.getElementById("studentSearch").addEventListener("input", renderStudents);
  
    // Dropdown filter event
    document.getElementById("centerFilter").addEventListener("change", renderStudents);
  });
  