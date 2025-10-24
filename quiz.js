// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

    // Function to check the user's answer
    function checkAnswer() {
        // Correct answer
        const correctAnswer = "4";

        // Retrieve the selected answer
        const selectedOption = document.querySelector('input[name="quiz"]:checked');

        // Access the feedback element
        const feedback = document.getElementById("feedback");

        // If no answer is selected
        if (!selectedOption) {
            feedback.textContent = "Please select an answer before submitting.";
            feedback.style.color = "#dc3545";
            return;
        }

        const userAnswer = selectedOption.value;

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well Done.";
            feedback.style.color = "#28a745";
        } else {
            feedback.textContent = "That's incorrect. Try Again!";
            feedback.style.color = "#dc3545";
        }
    }

    // Add event listener to the button **outside** the function
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
});
