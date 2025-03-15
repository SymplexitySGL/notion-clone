/**
 * Main JavaScript for Notion Clone
 * 
 * This file handles all interactive elements of the Notion clone website.
 * Following modular architecture principles, each functionality is separated
 * into its own function.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initMobileMenu();
  initDropdownMenus();
  initScrollAnimations();
});

/**
 * Mobile menu functionality
 * Handles toggling the mobile navigation menu
 */
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const headerContainer = document.querySelector('.header-container');
  
  if (!mobileMenuToggle) return;
  
  mobileMenuToggle.addEventListener('click', () => {
    headerContainer.classList.toggle('mobile-menu-active');
    document.body.classList.toggle('no-scroll');
    
    // Toggle aria-expanded for accessibility
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
  });
}

/**
 * Dropdown menu enhancements
 * Adds keyboard navigation and accessibility features to dropdown menus
 */
function initDropdownMenus() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    const content = dropdown.querySelector('.dropdown-content');
    
    if (!link || !content) return;
    
    // Add aria attributes
    link.setAttribute('aria-haspopup', 'true');
    link.setAttribute('aria-expanded', 'false');
    
    // Handle keyboard navigation
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isExpanded = link.getAttribute('aria-expanded') === 'true';
        link.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
          content.classList.add('dropdown-active');
          // Focus the first link in the dropdown
          const firstLink = content.querySelector('a');
          if (firstLink) firstLink.focus();
        } else {
          content.classList.remove('dropdown-active');
        }
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        link.setAttribute('aria-expanded', 'false');
        content.classList.remove('dropdown-active');
      }
    });
  });
}

/**
 * Scroll animations
 * Adds subtle animations to elements as they enter the viewport
 */
function initScrollAnimations() {
  // Simple implementation of scroll animations
  const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    element.classList.add('pre-animation');
    observer.observe(element);
  });
}

/**
 * Form submission handler
 * Handles form submissions with validation
 * 
 * @param {Event} event - The form submission event
 */
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  
  // Basic form validation
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      // Add error styling
      field.classList.add('input-error');
      
      // Add error message if it doesn't exist
      let errorMessage = field.parentNode.querySelector('.error-message');
      if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'This field is required';
        field.parentNode.appendChild(errorMessage);
      }
    } else {
      // Remove error styling
      field.classList.remove('input-error');
      const errorMessage = field.parentNode.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.remove();
      }
    }
  });
  
  if (isValid) {
    // Submit form or show success message
    console.log('Form submitted successfully');
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you for your submission!';
    form.appendChild(successMessage);
    
    // Reset form
    form.reset();
    
    // Remove success message after 3 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  }
}

// Add event listeners to all forms
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', handleFormSubmit);
});