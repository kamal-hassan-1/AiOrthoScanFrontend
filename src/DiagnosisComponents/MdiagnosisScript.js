// Example functionality to handle file upload
document.querySelector('.attach-btn').addEventListener('click', () => {
    alert('Attach button clicked! File upload functionality goes here.');
});

  // Example functionality for the Treatment button
document.querySelector('.treatment-btn').addEventListener('click', () => {
    alert('Dear User, Apologoes for inconvenience but the AI OrthoScan is limited to only 2 modules for now');
});
// JavaScript for Button Interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons
    const buttons = document.querySelectorAll(".attach-btn, .settings-btn, .treatment-btn");

    // Add hover effect
    buttons.forEach((button) => {
        // On hover: reduce opacity and add a border
        button.addEventListener("mouseover", () => {
            button.style.opacity = "0.8";
            button.style.border = "2px solid #00bfa5"; // Add teal border
        });

        // On hover out: restore original styles
        button.addEventListener("mouseout", () => {
            button.style.opacity = "1";
            button.style.border = "none"; // Remove border
        });
    });
});
