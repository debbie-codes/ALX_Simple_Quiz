function checkAnswer () {

    // Identification of the correct answer
    const correctAnswer = "4";

    // Retrieval of the user selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Accessing the Feedback element
    const feedback = document.getElementById("feedback");

    // Checking if the user selected an answer
    if(!selectedOption){
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545";
        return;
    }

    const userAnswer = selectedOption.value;

    // Comparison of the user answer with the correct answer
    if(userAnswer===correctAnswer){
        feedback.textContent = "Correct! Well Done.";
        feedback.style.color = "#28a745";
    } else{
        feedback.textContent ="That's incorrect. Try Again!"
        feedback.style.color = "#dc3545"
    }

    // Addition of an Event Listener that works with the submit button
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);

}