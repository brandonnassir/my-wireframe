// script_performance_topics.js

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

/*
  Data structure for domains & topics, each topic has a "rating" like "3/4".
*/
const domainsData = [
  {
    name: "Algebra",
    topics: [
      { title: "Linear Equations in Two Variables", rating: "4/4" },
      { title: "Linear Functions", rating: "4/4" },
      { title: "Linear Inequalities in One or Two Variables", rating: "3/4" },
      { title: "Systems of Two Linear Equations in Two Variables", rating: "3/4" }
    ]
  },
  {
    name: "Advanced Math",
    topics: [
      { title: "Equivalent Expressions", rating: "1/4" },
      { title: "Nonlinear Equations in One Variable and Systems of Equations in Two Variables", rating: "2/4" },
      { title: "Nonlinear Functions", rating: "1/4" }
    ]
  },
  {
    name: "Problem Solving and Data Analysis",
    topics: [
      { title: "Evaluating Statistical Claims - Observational Studies and Experiments", rating: "0/4" },
      { title: "Inference from Sample Statistics and Margin of Error", rating: "1/4" },
      { title: "One-Variable Data- Distributions and Measures of Center and Spread", rating: "3/4" },
      { title: "Percentages", rating: "0/4" },
      { title: "Probability and Conditional Probability", rating: "2/4" },
      { title: "Ratios, Rates, Proportional Relationships, and Units", rating: "1/4" },
      { title: "Two-Variable Data - Models and Scatterplots", rating: "0/4" }
    ]
  },
  {
    name: "Geometry and Trigonometry",
    topics: [
      { title: "Area and Volume", rating: "3/4" },
      { title: "Circles", rating: "4/4" },
      { title: "Lines, Angles, and Triangles", rating: "2/4" },
      { title: "Right Triangles and Trigonometry", rating: "3/4" }
    ]
  }
];

/* When the page loads, build the domain + topic cards */
window.addEventListener("DOMContentLoaded", () => {
  renderDomains();
});

/*
  Build domain-card for each domain, 
  then create a horizontal scroll container with multiple topic-cards
*/
function renderDomains() {
  const container = document.getElementById("domainsContainer");
  container.innerHTML = "";

  domainsData.forEach(domain => {
    // Domain card
    const domainCard = document.createElement("div");
    domainCard.className = "domain-card";

    // Domain Title
    const domainTitle = document.createElement("h2");
    domainTitle.textContent = domain.name;
    domainCard.appendChild(domainTitle);

    // Horizontal scroll container
    const scrollContainer = document.createElement("div");
    scrollContainer.className = "topic-scroll-container";

    // For each topic, create a card
    domain.topics.forEach(topic => {
      const topicCard = document.createElement("div");
      topicCard.className = "topic-card";

      // =====================
      // Content section
      // =====================
      const contentDiv = document.createElement("div");
      contentDiv.className = "topic-card-content";

      // Topic title
      const topicTitle = document.createElement("h3");
      topicTitle.textContent = topic.title;
      contentDiv.appendChild(topicTitle);

      topicCard.appendChild(contentDiv);

      // =====================
      // Footer (progress bar + button)
      // =====================
      const footerDiv = document.createElement("div");
      footerDiv.className = "topic-card-footer";

      // Performance bar
      const perfBar = document.createElement("div");
      perfBar.className = "performance-bar";

      const ratingValue = parseInt(topic.rating.split("/")[0], 10);
      const ratingMax = 4;

      for (let i = 0; i < ratingMax; i++) {
        const segment = document.createElement("div");
        segment.className = "segment";
        if (i < ratingValue) {
          segment.classList.add("filled");
        }
        perfBar.appendChild(segment);
      }

      footerDiv.appendChild(perfBar);

      // "View Details" button
      const detailsBtn = document.createElement("button");
      detailsBtn.className = "view-details-btn";
      detailsBtn.textContent = "View Details";

      // Replace the alert with navigation to the KTP detail page
      detailsBtn.addEventListener("click", () => {
        // Store the selected topic in sessionStorage for use in the details page
        sessionStorage.setItem('selectedTopic', topic.title);
        // Navigate to the new topic details page
        window.location.href = "topic_ktp_detail.html";
      });

      footerDiv.appendChild(detailsBtn);

      // Add footer to card
      topicCard.appendChild(footerDiv);

      // Add topicCard to the scroll container
      scrollContainer.appendChild(topicCard);
    });

    // Add scroll container to domain card
    domainCard.appendChild(scrollContainer);

    // Finally, add the domainCard to #domainsContainer
    container.appendChild(domainCard);
  });
}
