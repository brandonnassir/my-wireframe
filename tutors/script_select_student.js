/*******************************************
  script_select_student.js
********************************************/

// Toggle sidebar (mobile)
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
  
  // We'll store our single "demo" student, Cole Stone
  const students = [
    {
      name: "Cole Stone",
      grade: "9th Grade",
      center: "Scarsdale Tutoring Center"
    }
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    // Render the single student card
    renderStudentCards(students);
  
    // Handle search input
    const searchInput = document.getElementById("studentSearch");
    searchInput.addEventListener("input", () => {
      filterStudents(searchInput.value.trim());
    });
  });
  
  // Renders the student card(s)
  function renderStudentCards(data) {
    const container = document.getElementById("studentCards");
    container.innerHTML = ""; // Clear old content
  
    data.forEach(stu => {
      const card = document.createElement("div");
      card.className = "student-card";
  
      // Student name
      const nameEl = document.createElement("h2");
      nameEl.textContent = stu.name;
  
      // Student grade
      const gradeEl = document.createElement("p");
      gradeEl.textContent = stu.grade;
  
      // (Optional) center name
      const centerEl = document.createElement("p");
      centerEl.style.fontStyle = "italic";
      centerEl.textContent = stu.center;
  
      card.appendChild(nameEl);
      card.appendChild(gradeEl);
      card.appendChild(centerEl);
  
      // Clicking the card could proceed to the next step in the creation flow
      card.addEventListener("click", () => {
        alert(`You have selected ${stu.name}. Proceeding to customize the practice set...`);
        // In a real app, navigate to the next step/form to build the practice set:
        // window.location.href = 'practice_set_config.html';
      });
  
      container.appendChild(card);
    });
  }
  
  // Filters the single student (Cole Stone) based on search query
  function filterStudents(query) {
    const container = document.getElementById("studentCards");
    const noResults = document.getElementById("noResults");
    const match = students.filter(stu => 
      stu.name.toLowerCase().includes(query.toLowerCase())
    );
  
    if (match.length === 0) {
      container.innerHTML = "";
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
      renderStudentCards(match);
    }
  }
  