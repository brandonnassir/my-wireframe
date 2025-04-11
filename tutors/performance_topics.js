// "View Details" button
const detailsBtn = document.createElement("button");
detailsBtn.className = "view-details-btn";
detailsBtn.textContent = "View Details";

// Update to navigate to the topic details page
detailsBtn.addEventListener("click", () => {
  // Store the selected topic in sessionStorage for use in the details page
  sessionStorage.setItem('selectedTopic', topic.title);
  // Navigate to the new topic details page
  window.location.href = "topic_ktp_detail.html";
});

footerDiv.appendChild(detailsBtn); 