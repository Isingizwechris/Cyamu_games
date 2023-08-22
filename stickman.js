document.addEventListener("DOMContentLoaded", function () {
    const words = ["apple", "banana", "cherry", "grape", "orange", "pear", "strawberry", "watermelon"];
    let currentWordIndex = 0;
    let score = 0;

    const wordElement = document.getElementById("word");
    const inputElement = document.getElementById("input");
    const scoreElement = document.getElementById("score");

    function displayNewWord() {
        if (currentWordIndex >= words.length) {
            alert("Game over! Final score: " + score);
            location.reload();
            return;
        }

        wordElement.textContent = words[currentWordIndex];
        inputElement.value = "";
    }

    inputElement.addEventListener("input", function () {
        if (inputElement.value === words[currentWordIndex]) {
            currentWordIndex++;
            score++;
            scoreElement.textContent = "Score: " + score;
            displayNewWord();
        }
    });

    displayNewWord();
});
