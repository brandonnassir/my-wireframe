// script_profile.js

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

// DOM Elements
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const saveButtons = document.querySelectorAll('.save-btn');
const deleteAccountBtn = document.getElementById('delete-account');
const deleteAccountModal = document.getElementById('deleteAccountModal');
const confirmDeleteBtn = document.getElementById('confirm-delete-account');
const cancelDeleteBtn = document.getElementById('cancel-delete-account');
const deleteConfirmationInput = document.getElementById('delete-confirmation');
const saveNotification = document.getElementById('saveNotification');
const avatarUploadInput = document.getElementById('avatar-upload-input');
const avatarPreview = document.getElementById('avatar-preview');

// Initialize all event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Tab switching
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      switchTab(button.dataset.tab);
    });
  });

  // Save buttons functionality
  saveButtons.forEach(button => {
    button.addEventListener('click', () => {
      saveChanges(button.id);
    });
  });

  // Delete account workflow
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', () => {
      deleteAccountModal.style.display = 'flex';
    });
  }

  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener('click', () => {
      closeDeleteModal();
    });
  }

  // Validate delete confirmation input
  if (deleteConfirmationInput) {
    deleteConfirmationInput.addEventListener('input', validateDeleteConfirmation);
  }

  // Handle final delete confirmation
  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', handleAccountDeletion);
  }

  // Profile picture upload
  if (avatarUploadInput) {
    avatarUploadInput.addEventListener('change', handleAvatarUpload);
  }

  // Update profile name in real-time as user types
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const profileNameElement = document.getElementById('profile-name');

  if (firstNameInput && lastNameInput && profileNameElement) {
    const updateProfileName = () => {
      profileNameElement.textContent = `${firstNameInput.value} ${lastNameInput.value}`;
    };

    firstNameInput.addEventListener('input', updateProfileName);
    lastNameInput.addEventListener('input', updateProfileName);
  }
});

// Switch between tabs
function switchTab(tabId) {
  // Remove active class from all tabs
  tabButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  
  tabContents.forEach(content => {
    content.classList.remove('active');
  });
  
  // Add active class to selected tab
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(`${tabId}-tab`).classList.add('active');
}

// Handle form submissions
function saveChanges(buttonId) {
  // Simulate form processing
  const formType = buttonId.replace('save-', '');
  
  // In a real app, you would validate and send data to a server here
  console.log(`Saving ${formType} information...`);
  
  // Simulate API call delay
  setTimeout(() => {
    showSaveNotification();
  }, 500);
}

// Show success notification
function showSaveNotification() {
  saveNotification.style.display = 'flex';
  saveNotification.style.opacity = '1';
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    saveNotification.style.opacity = '0';
    setTimeout(() => {
      saveNotification.style.display = 'none';
    }, 300);
  }, 3000);
}

// Close delete account modal
function closeDeleteModal() {
  deleteAccountModal.style.display = 'none';
  deleteConfirmationInput.value = '';
  confirmDeleteBtn.disabled = true;
}

// Validate delete confirmation input
function validateDeleteConfirmation() {
  if (deleteConfirmationInput.value === 'DELETE') {
    confirmDeleteBtn.disabled = false;
  } else {
    confirmDeleteBtn.disabled = true;
  }
}

// Handle account deletion
function handleAccountDeletion() {
  // In a real app, this would send a request to delete the account
  console.log('Account deletion confirmed');
  
  // Simulate processing
  confirmDeleteBtn.textContent = 'Processing...';
  
  setTimeout(() => {
    closeDeleteModal();
    
    // Show a final message before redirecting
    alert('Your account has been deleted. You will be redirected to the login page.');
    
    // In a real app, this would redirect to the login page
    window.location.href = 'tutor_home.html';
  }, 1500);
}

// Handle avatar upload
function handleAvatarUpload(event) {
  const file = event.target.files[0];
  
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      avatarPreview.src = e.target.result;
      
      // In a real app, you would upload this to a server
      console.log('Avatar updated');
    };
    
    reader.readAsDataURL(file);
  }
}

// Add custom CSS for the additional elements on the profile page
document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.textContent = `
    /* Tab Navigation */
    .profile-tabs {
      display: flex;
      border-bottom: 1px solid var(--gray-300);
      margin-bottom: 2rem;
      overflow-x: auto;
    }
    
    .tab-btn {
      padding: 1rem 1.5rem;
      background: none;
      border: none;
      border-bottom: 3px solid transparent;
      font-weight: 500;
      color: var(--gray-600);
      cursor: pointer;
      transition: var(--transition);
    }
    
    .tab-btn:hover {
      color: var(--primary);
    }
    
    .tab-btn.active {
      color: var(--primary);
      border-bottom-color: var(--primary);
    }
    
    /* Tab Content */
    .tab-content {
      display: none;
    }
    
    .tab-content.active {
      display: block;
    }
    
    /* Profile Header */
    .profile-header {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .profile-avatar {
      position: relative;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
    }
    
    .profile-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .avatar-upload {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: var(--primary);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: var(--transition);
    }
    
    .avatar-upload:hover {
      background-color: var(--primary-dark);
    }
    
    .upload-icon {
      color: white;
      font-size: 1.25rem;
    }
    
    .profile-info h2 {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
      color: var(--gray-900);
    }
    
    .profile-info p {
      color: var(--gray-600);
      margin-bottom: 0.25rem;
    }
    
    /* Form Sections */
    .form-section {
      background-color: var(--white);
      border-radius: var(--card-border-radius);
      padding: 1.75rem;
      margin-bottom: 1.5rem;
      box-shadow: var(--card-shadow);
    }
    
    .form-section h3 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      color: var(--gray-900);
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--gray-200);
      position: relative;
    }
    
    .form-section h3::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 50px;
      height: 3px;
      background-color: var(--primary);
      border-radius: 3px;
    }
    
    .form-row {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1.25rem;
    }
    
    @media (max-width: 768px) {
      .form-row {
        flex-direction: column;
        gap: 1rem;
      }
      
      .profile-header {
        flex-direction: column;
        text-align: center;
      }
    }
    
    .form-group {
      flex: 1;
      margin-bottom: 1.25rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: var(--gray-700);
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid var(--gray-300);
      border-radius: var(--border-radius);
      font-size: 1rem;
      transition: var(--transition);
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: var(--primary-light);
      outline: none;
      box-shadow: 0 0 0 3px rgba(76, 81, 191, 0.15);
    }
    
    .form-group input[disabled] {
      background-color: var(--gray-100);
      cursor: not-allowed;
    }
    
    .form-group small {
      display: block;
      margin-top: 0.5rem;
      color: var(--gray-600);
      font-size: 0.85rem;
    }
    
    /* Form Actions */
    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
    }
    
    .save-btn {
      background-color: var(--primary);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
      box-shadow: 0 4px 12px rgba(76, 81, 191, 0.15);
    }
    
    .save-btn:hover {
      background-color: var(--primary-dark);
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(76, 81, 191, 0.2);
    }
    
    /* Checkbox Grid */
    .checkbox-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .checkbox-item input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: var(--primary);
    }
    
    /* Toggle Switches */
    .toggle-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid var(--gray-200);
    }
    
    .toggle-item:last-child {
      border-bottom: none;
    }
    
    .toggle-info {
      flex: 1;
    }
    
    .toggle-info h4 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
      color: var(--gray-800);
    }
    
    .toggle-info p {
      font-size: 0.9rem;
      color: var(--gray-600);
      margin: 0;
    }
    
    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 24px;
    }
    
    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .toggle-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--gray-300);
      transition: var(--transition);
      border-radius: 24px;
    }
    
    .toggle-slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: var(--transition);
      border-radius: 50%;
    }
    
    .toggle-switch input:checked + .toggle-slider {
      background-color: var(--primary);
    }
    
    .toggle-switch input:focus + .toggle-slider {
      box-shadow: 0 0 1px var(--primary);
    }
    
    .toggle-switch input:checked + .toggle-slider:before {
      transform: translateX(26px);
    }
    
    /* Password Requirements */
    .password-requirements {
      background-color: var(--gray-100);
      padding: 1rem;
      border-radius: var(--border-radius);
      margin-bottom: 1.5rem;
    }
    
    .password-requirements p {
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--gray-700);
    }
    
    .password-requirements ul {
      margin-left: 1.5rem;
      margin-bottom: 0;
    }
    
    .password-requirements li {
      font-size: 0.9rem;
      color: var(--gray-600);
      margin-bottom: 0.25rem;
    }
    
    /* Danger Zone */
    .danger-zone {
      border: 1px solid var(--danger);
      border-left-width: 4px;
    }
    
    .danger-btn {
      background-color: white;
      color: var(--danger);
      border: 1px solid var(--danger);
      border-radius: var(--border-radius);
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
    }
    
    .danger-btn:hover {
      background-color: var(--danger);
      color: white;
    }
    
    /* Modals */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    
    .modal-content {
      background-color: white;
      border-radius: var(--card-border-radius);
      padding: 2rem;
      width: 90%;
      max-width: 500px;
      box-shadow: var(--card-shadow);
    }
    
    .modal-content h3 {
      margin-bottom: 1rem;
      color: var(--gray-900);
    }
    
    .modal-content p {
      margin-bottom: 1.5rem;
      color: var(--gray-700);
    }
    
    .modal-content input {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid var(--gray-300);
      border-radius: var(--border-radius);
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }
    
    .cancel-btn {
      background-color: var(--gray-200);
      color: var(--gray-700);
      border: none;
      border-radius: var(--border-radius);
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition);
    }
    
    .cancel-btn:hover {
      background-color: var(--gray-300);
    }
    
    /* Notifications */
    .notification {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background-color: white;
      border-radius: var(--border-radius);
      padding: 1rem 1.5rem;
      box-shadow: 0 10px 30px rgba(76, 81, 191, 0.2);
      display: flex;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 9999;
      border-left: 4px solid var(--success);
    }
    
    .notification-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .notification-icon {
      color: var(--success);
      font-size: 1.25rem;
      font-weight: bold;
    }
    
    .notification-message {
      color: var(--gray-800);
      font-weight: 500;
    }
  `;
  
  document.head.appendChild(style);
}); 