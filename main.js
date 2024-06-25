// toggle display of content
function toggleContent(contentId) {
    var contentContainers = document.querySelectorAll('.content-container');
    // switch between showing and not showing text
    contentContainers.forEach(function(container) {
        if (container.id === contentId) {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    });
}

// show all content
function showAllContent() {
    var contentContainers = document.querySelectorAll('.content-container');
    // make all text be shown
    contentContainers.forEach(function(container) {
        container.style.display = "block";
    });
}

// initialize event listeners
function initialize() {
    // toggle to show my skills
    var toggleSkillsButton = document.getElementById("toggle-skills-button");
    toggleSkillsButton.addEventListener("click", function() {
        toggleContent("skills-container");
    });
    // toggle to show past projects
    var toggleProjectsButton = document.getElementById("toggle-projects-button");
    toggleProjectsButton.addEventListener("click", function() {
        toggleContent("projects-container");
    });
    // toggle to show contact info
    var displayContactButton = document.getElementById("display-contact-button");
    displayContactButton.addEventListener("click", function() {
        toggleContent("contact-container");
    });
    // toggle to show all three
    var showAllButton = document.getElementById("show-all-button");
    showAllButton.addEventListener("click", showAllContent);
}

document.addEventListener("DOMContentLoaded", initialize);