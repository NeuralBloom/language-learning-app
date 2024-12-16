// ================ WORD LISTS ================
const words = {
    spanish: [
        // Greetings & Common Phrases
        { word: "Hola", translation: "Hello" },
        { word: "Adiós", translation: "Goodbye" },
        { word: "Por favor", translation: "Please" },
        { word: "Gracias", translation: "Thank you" },
        { word: "De nada", translation: "You're welcome" },
        { word: "Buenos días", translation: "Good morning" },
        { word: "Buenas noches", translation: "Good night" },
        { word: "¿Cómo estás?", translation: "How are you?" },
        { word: "Mucho gusto", translation: "Nice to meet you" },
        { word: "Hasta luego", translation: "See you later" },

        // Common Words
        { word: "Sí", translation: "Yes" },
        { word: "No", translation: "No" },
        { word: "Bien", translation: "Good/Well" },
        { word: "Mal", translation: "Bad" },
        { word: "Ahora", translation: "Now" },
        { word: "Aquí", translation: "Here" },
        { word: "Allí", translation: "There" },
        { word: "Hoy", translation: "Today" },
        { word: "Mañana", translation: "Tomorrow" },
        { word: "Ayer", translation: "Yesterday" },

        // Numbers
        { word: "Uno", translation: "One" },
        { word: "Dos", translation: "Two" },
        { word: "Tres", translation: "Three" },
        { word: "Cuatro", translation: "Four" },
        { word: "Cinco", translation: "Five" },
        { word: "Diez", translation: "Ten" },
        { word: "Veinte", translation: "Twenty" },
        { word: "Treinta", translation: "Thirty" },
        { word: "Cien", translation: "Hundred" },
        { word: "Mil", translation: "Thousand" },

        // Colors
        { word: "Rojo", translation: "Red" },
        { word: "Azul", translation: "Blue" },
        { word: "Verde", translation: "Green" },
        { word: "Amarillo", translation: "Yellow" },
        { word: "Negro", translation: "Black" },
        { word: "Blanco", translation: "White" },
        { word: "Morado", translation: "Purple" },
        { word: "Naranja", translation: "Orange" },
        { word: "Gris", translation: "Gray" },
        { word: "Marrón", translation: "Brown" },

        // Family
        { word: "Madre", translation: "Mother" },
        { word: "Padre", translation: "Father" },
        { word: "Hermano", translation: "Brother" },
        { word: "Hermana", translation: "Sister" },
        { word: "Hijo", translation: "Son" },
        { word: "Hija", translation: "Daughter" },
        { word: "Abuelo", translation: "Grandfather" },
        { word: "Abuela", translation: "Grandmother" },
        { word: "Tío", translation: "Uncle" },
        { word: "Tía", translation: "Aunt" },

        // Food & Drink
        { word: "Agua", translation: "Water" },
        { word: "Pan", translation: "Bread" },
        { word: "Leche", translation: "Milk" },
        { word: "Café", translation: "Coffee" },
        { word: "Arroz", translation: "Rice" },
        { word: "Carne", translation: "Meat" },
        { word: "Pescado", translation: "Fish" },
        { word: "Fruta", translation: "Fruit" },
        { word: "Verdura", translation: "Vegetable" },
        { word: "Huevo", translation: "Egg" }
    ],

    french: [
        // Greetings & Common Phrases
        { word: "Bonjour", translation: "Hello" },
        { word: "Au revoir", translation: "Goodbye" },
        { word: "S'il vous plaît", translation: "Please" },
        { word: "Merci", translation: "Thank you" },
        { word: "De rien", translation: "You're welcome" },
        { word: "Bonsoir", translation: "Good evening" },
        { word: "Bonne nuit", translation: "Good night" },
        { word: "Comment allez-vous?", translation: "How are you?" },
        { word: "Enchanté(e)", translation: "Nice to meet you" },
        { word: "À bientôt", translation: "See you soon" },

        // Common Words
        { word: "Oui", translation: "Yes" },
        { word: "Non", translation: "No" },
        { word: "Bien", translation: "Good/Well" },
        { word: "Mal", translation: "Bad" },
        { word: "Maintenant", translation: "Now" },
        { word: "Ici", translation: "Here" },
        { word: "Là", translation: "There" },
        { word: "Aujourd'hui", translation: "Today" },
        { word: "Demain", translation: "Tomorrow" },
        { word: "Hier", translation: "Yesterday" },

        // Numbers
        { word: "Un", translation: "One" },
        { word: "Deux", translation: "Two" },
        { word: "Trois", translation: "Three" },
        { word: "Quatre", translation: "Four" },
        { word: "Cinq", translation: "Five" },
        { word: "Dix", translation: "Ten" },
        { word: "Vingt", translation: "Twenty" },
        { word: "Trente", translation: "Thirty" },
        { word: "Cent", translation: "Hundred" },
        { word: "Mille", translation: "Thousand" },

        // Colors
        { word: "Rouge", translation: "Red" },
        { word: "Bleu", translation: "Blue" },
        { word: "Vert", translation: "Green" },
        { word: "Jaune", translation: "Yellow" },
        { word: "Noir", translation: "Black" },
        { word: "Blanc", translation: "White" },
        { word: "Violet", translation: "Purple" },
        { word: "Orange", translation: "Orange" },
        { word: "Gris", translation: "Gray" },
        { word: "Marron", translation: "Brown" },

        // Family
        { word: "Mère", translation: "Mother" },
        { word: "Père", translation: "Father" },
        { word: "Frère", translation: "Brother" },
        { word: "Sœur", translation: "Sister" },
        { word: "Fils", translation: "Son" },
        { word: "Fille", translation: "Daughter" },
        { word: "Grand-père", translation: "Grandfather" },
        { word: "Grand-mère", translation: "Grandmother" },
        { word: "Oncle", translation: "Uncle" },
        { word: "Tante", translation: "Aunt" },

        // Food & Drink
        { word: "Eau", translation: "Water" },
        { word: "Pain", translation: "Bread" },
        { word: "Lait", translation: "Milk" },
        { word: "Café", translation: "Coffee" },
        { word: "Riz", translation: "Rice" },
        { word: "Viande", translation: "Meat" },
        { word: "Poisson", translation: "Fish" },
        { word: "Fruit", translation: "Fruit" },
        { word: "Légume", translation: "Vegetable" },
        { word: "Œuf", translation: "Egg" }
    ],

    german: [
        // Greetings & Common Phrases
        { word: "Hallo", translation: "Hello" },
        { word: "Auf Wiedersehen", translation: "Goodbye" },
        { word: "Bitte", translation: "Please" },
        { word: "Danke", translation: "Thank you" },
        { word: "Bitte schön", translation: "You're welcome" },
        { word: "Guten Morgen", translation: "Good morning" },
        { word: "Gute Nacht", translation: "Good night" },
        { word: "Wie geht es dir?", translation: "How are you?" },
        { word: "Freut mich", translation: "Nice to meet you" },
        { word: "Bis später", translation: "See you later" },

// Continuing German words...
        // Common Words
        { word: "Ja", translation: "Yes" },
        { word: "Nein", translation: "No" },
        { word: "Gut", translation: "Good" },
        { word: "Schlecht", translation: "Bad" },
        { word: "Jetzt", translation: "Now" },
        { word: "Hier", translation: "Here" },
        { word: "Dort", translation: "There" },
        { word: "Heute", translation: "Today" },
        { word: "Morgen", translation: "Tomorrow" },
        { word: "Gestern", translation: "Yesterday" },

        // Numbers
        { word: "Eins", translation: "One" },
        { word: "Zwei", translation: "Two" },
        { word: "Drei", translation: "Three" },
        { word: "Vier", translation: "Four" },
        { word: "Fünf", translation: "Five" },
        { word: "Zehn", translation: "Ten" },
        { word: "Zwanzig", translation: "Twenty" },
        { word: "Dreißig", translation: "Thirty" },
        { word: "Hundert", translation: "Hundred" },
        { word: "Tausend", translation: "Thousand" },

        // Colors
        { word: "Rot", translation: "Red" },
        { word: "Blau", translation: "Blue" },
        { word: "Grün", translation: "Green" },
        { word: "Gelb", translation: "Yellow" },
        { word: "Schwarz", translation: "Black" },
        { word: "Weiß", translation: "White" },
        { word: "Lila", translation: "Purple" },
        { word: "Orange", translation: "Orange" },
        { word: "Grau", translation: "Gray" },
        { word: "Braun", translation: "Brown" },

        // Family
        { word: "Mutter", translation: "Mother" },
        { word: "Vater", translation: "Father" },
        { word: "Bruder", translation: "Brother" },
        { word: "Schwester", translation: "Sister" },
        { word: "Sohn", translation: "Son" },
        { word: "Tochter", translation: "Daughter" },
        { word: "Großvater", translation: "Grandfather" },
        { word: "Großmutter", translation: "Grandmother" },
        { word: "Onkel", translation: "Uncle" },
        { word: "Tante", translation: "Aunt" }
    ],

    italian: [
        // Greetings & Common Phrases
        { word: "Ciao", translation: "Hello" },
        { word: "Arrivederci", translation: "Goodbye" },
        { word: "Per favore", translation: "Please" },
        { word: "Grazie", translation: "Thank you" },
        { word: "Prego", translation: "You're welcome" },
        { word: "Buongiorno", translation: "Good morning" },
        { word: "Buonanotte", translation: "Good night" },
        { word: "Come stai?", translation: "How are you?" },
        { word: "Piacere", translation: "Nice to meet you" },
        { word: "A presto", translation: "See you soon" },

        // Common Words
        { word: "Sì", translation: "Yes" },
        { word: "No", translation: "No" },
        { word: "Bene", translation: "Good/Well" },
        { word: "Male", translation: "Bad" },
        { word: "Adesso", translation: "Now" },
        { word: "Qui", translation: "Here" },
        { word: "Lì", translation: "There" },
        { word: "Oggi", translation: "Today" },
        { word: "Domani", translation: "Tomorrow" },
        { word: "Ieri", translation: "Yesterday" },

        // Numbers
        { word: "Uno", translation: "One" },
        { word: "Due", translation: "Two" },
        { word: "Tre", translation: "Three" },
        { word: "Quattro", translation: "Four" },
        { word: "Cinque", translation: "Five" },
        { word: "Dieci", translation: "Ten" },
        { word: "Venti", translation: "Twenty" },
        { word: "Trenta", translation: "Thirty" },
        { word: "Cento", translation: "Hundred" },
        { word: "Mille", translation: "Thousand" },

        // Colors
        { word: "Rosso", translation: "Red" },
        { word: "Blu", translation: "Blue" },
        { word: "Verde", translation: "Green" },
        { word: "Giallo", translation: "Yellow" },
        { word: "Nero", translation: "Black" },
        { word: "Bianco", translation: "White" },
        { word: "Viola", translation: "Purple" },
        { word: "Arancione", translation: "Orange" },
        { word: "Grigio", translation: "Gray" },
        { word: "Marrone", translation: "Brown" },

        // Family
        { word: "Madre", translation: "Mother" },
        { word: "Padre", translation: "Father" },
        { word: "Fratello", translation: "Brother" },
        { word: "Sorella", translation: "Sister" },
        { word: "Figlio", translation: "Son" },
        { word: "Figlia", translation: "Daughter" },
        { word: "Nonno", translation: "Grandfather" },
        { word: "Nonna", translation: "Grandmother" },
        { word: "Zio", translation: "Uncle" },
        { word: "Zia", translation: "Aunt" }
    ]
};

// ================ VARIABLES ================
let selectedLanguage = "";
let currentIndex = 0;
let quizIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let selectedOption = "";
let isPaused = false;
let isQuizActive = false;
let learnedWords = JSON.parse(localStorage.getItem("learnedWords")) || {};

// ================ DOM CONTENT LOADED ================
document.addEventListener("DOMContentLoaded", () => {
    // DOM References
    const languageSelect = document.getElementById("language");
    const flashcardsSection = document.getElementById("flashcards");
    const flashcardWord = document.getElementById("word");
    const flashcardTranslation = document.getElementById("translation");
    const flipButton = document.getElementById("flip-button");
    const nextButton = document.getElementById("next-button");
    const quizSection = document.getElementById("quiz");
    const questionDiv = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    const submitAnswerButton = document.getElementById("submit-answer");
    const quizResultDiv = document.getElementById("quiz-result");
    const progressSection = document.getElementById("progress");
    const wordsLearned = document.getElementById("words-learned");
    const addWordsSection = document.getElementById("add-words");
    const addWordForm = document.getElementById("add-word-form");

    // Create timer div
    const timerDiv = document.createElement("div");
    timerDiv.id = "timer";
    timerDiv.style.textAlign = "center";
    timerDiv.style.marginBottom = "10px";
    if (quizSection) {
        quizSection.insertBefore(timerDiv, questionDiv);
    }

    // Create quiz controls
    const quizControlsDiv = document.createElement("div");
    quizControlsDiv.classList.add("quiz-controls");

    const toggleQuizButton = document.createElement("button");
    toggleQuizButton.textContent = "Start Quiz";
    toggleQuizButton.classList.add("quiz-button", "start-quiz");
    toggleQuizButton.id = "start-quiz";

    const pauseQuizButton = document.createElement("button");
    pauseQuizButton.textContent = "Pause";
    pauseQuizButton.classList.add("quiz-button", "pause-quiz");
    pauseQuizButton.id = "pause-quiz";
    pauseQuizButton.style.display = "none";

    const cancelQuizButton = document.createElement("button");
    cancelQuizButton.textContent = "Cancel Quiz";
    cancelQuizButton.classList.add("quiz-button", "cancel-quiz");
    cancelQuizButton.id = "cancel-quiz";
    cancelQuizButton.style.display = "none";

    quizControlsDiv.appendChild(toggleQuizButton);
    quizControlsDiv.appendChild(pauseQuizButton);
    quizControlsDiv.appendChild(cancelQuizButton);

    if (flashcardsSection) {
        flashcardsSection.appendChild(quizControlsDiv);
    }
    // ================ EVENT LISTENERS ================
    if (languageSelect) {
        languageSelect.addEventListener("change", (e) => {
            selectedLanguage = e.target.value;
            currentIndex = 0;
            displayFlashcard();
            updateProgress();
        });
    }

    if (flipButton) {
        flipButton.addEventListener("click", flipCard);
    }

    if (nextButton) {
        nextButton.addEventListener("click", nextCard);
    }

    if (toggleQuizButton) {
        toggleQuizButton.addEventListener("click", startQuiz);
    }

    if (pauseQuizButton) {
        pauseQuizButton.addEventListener("click", pauseQuiz);
    }

    if (cancelQuizButton) {
        cancelQuizButton.addEventListener("click", cancelQuiz);
    }

    if (submitAnswerButton) {
        submitAnswerButton.addEventListener("click", submitAnswer);
    }

    if (addWordForm) {
        addWordForm.addEventListener("submit", addCustomWord);
    }

    // ================ FLASHCARD FUNCTIONS ================
    function displayFlashcard() {
        if (!selectedLanguage || !words[selectedLanguage]) return;
        
        const currentWord = words[selectedLanguage][currentIndex];
        if (flashcardWord) flashcardWord.textContent = currentWord.word;
        if (flashcardTranslation) {
            flashcardTranslation.textContent = currentWord.translation;
            flashcardTranslation.classList.add("hidden");
        }
    }

    function flipCard() {
        if (flashcardTranslation) {
            flashcardTranslation.classList.toggle("hidden");
            markWordAsLearned();
            updateProgress();
        }
    }

    function nextCard() {
        if (!selectedLanguage || !words[selectedLanguage]) return;
        
        currentIndex = (currentIndex + 1) % words[selectedLanguage].length;
        displayFlashcard();
    }

    // ================ QUIZ FUNCTIONS ================
    function startQuiz() {
        if (!selectedLanguage) {
            alert("Please select a language first!");
            return;
        }
        isQuizActive = true;
        isPaused = false;
        quizSection.classList.remove("hidden");
        flashcardsSection.classList.add("hidden");
        toggleQuizButton.style.display = "none";
        pauseQuizButton.style.display = "inline-block";
        cancelQuizButton.style.display = "inline-block";
        quizIndex = 0;
        score = 0;
        displayQuestion();
    }

    function pauseQuiz() {
        isPaused = !isPaused;
        pauseQuizButton.textContent = isPaused ? "Resume" : "Pause";
        
        if (isPaused) {
            clearInterval(timer);
        } else {
            startTimer();
        }
    }

    function cancelQuiz() {
        if (confirm("Are you sure you want to cancel the quiz?")) {
            isQuizActive = false;
            isPaused = false;
            clearInterval(timer);
            quizSection.classList.add("hidden");
            flashcardsSection.classList.remove("hidden");
            toggleQuizButton.style.display = "inline-block";
            pauseQuizButton.style.display = "none";
            cancelQuizButton.style.display = "none";
            pauseQuizButton.textContent = "Pause";
            resetQuizUI();
        }
    }

    function displayQuestion() {
        if (!selectedLanguage || quizIndex >= words[selectedLanguage].length) {
            endQuiz();
            return;
        }

        const currentWord = words[selectedLanguage][quizIndex];
        questionDiv.textContent = `Translate: ${currentWord.word}`;
        quizResultDiv.classList.add("hidden");

        // Generate options
        const options = generateQuizOptions(currentWord);
        optionsDiv.innerHTML = "";
        options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("quiz-option");
            button.addEventListener("click", () => selectOption(button));
            optionsDiv.appendChild(button);
        });

        startTimer();
    }

    function generateQuizOptions(currentWord) {
        const options = [currentWord.translation];
        const wordsList = words[selectedLanguage];
        
        while (options.length < 4) {
            const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
            if (!options.includes(randomWord.translation)) {
                options.push(randomWord.translation);
            }
        }
        
        return shuffleArray(options);
    }

    function selectOption(button) {
        if (isPaused) return;
        
        const buttons = document.querySelectorAll(".quiz-option");
        buttons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedOption = button.textContent;
    }

    function submitAnswer() {
        if (isPaused) return;
        
        clearInterval(timer);
        const currentWord = words[selectedLanguage][quizIndex];
        const buttons = document.querySelectorAll(".quiz-option");
        
        buttons.forEach(button => {
            if (button.textContent === currentWord.translation) {
                button.classList.add("correct-answer");
            }
            if (button.textContent === selectedOption) {
                if (selectedOption === currentWord.translation) {
                    button.classList.add("correct");
                } else {
                    button.classList.add("incorrect");
                }
            }
            button.disabled = true;
        });

        if (selectedOption === currentWord.translation) {
            score++;
            quizResultDiv.textContent = "Correct! 🎉";
            quizResultDiv.style.color = "#2ecc71";
            markWordAsLearned();
        } else {
            quizResultDiv.textContent = `Incorrect. The correct answer is "${currentWord.translation}"`;
            quizResultDiv.style.color = "#e74c3c";
        }
        
        quizResultDiv.classList.remove("hidden");
        selectedOption = "";
        quizIndex++;
        
        setTimeout(() => {
            if (isQuizActive && !isPaused) {
                displayQuestion();
            }
        }, 2000);
    }

    function endQuiz() {
        const finalScore = Math.round((score / words[selectedLanguage].length) * 100);
        quizResultDiv.textContent = `Quiz completed! Your score: ${finalScore}%`;
        quizResultDiv.classList.remove("hidden");
        
        setTimeout(() => {
            cancelQuiz();
        }, 3000);
    }

    // ================ TIMER FUNCTIONS ================
    function startTimer() {
        if (isPaused) return;
        
        timeLeft = 15;
        updateTimerDisplay();
        clearInterval(timer);
        
        timer = setInterval(() => {
            if (!isPaused) {
                timeLeft--;
                updateTimerDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    submitAnswer();
                }
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        if (timerDiv) {
            timerDiv.textContent = `Time remaining: ${timeLeft}s`;
            if (timeLeft <= 5) {
                timerDiv.style.color = "#e74c3c";
            } else {
                timerDiv.style.color = "#2c3e50";
            }
        }
    }

    // ================ PROGRESS TRACKING ================
    function markWordAsLearned() {
        if (!selectedLanguage) return;
        
        if (!learnedWords[selectedLanguage]) {
            learnedWords[selectedLanguage] = new Set();
        }
        learnedWords[selectedLanguage].add(currentIndex);
        localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
        updateProgress();
    }

    function updateProgress() {
        if (!selectedLanguage || !progressSection) return;
        
        const learned = learnedWords[selectedLanguage] ? 
            new Set(learnedWords[selectedLanguage]).size : 0;
        const total = words[selectedLanguage].length;
        const percentage = Math.round((learned / total) * 100);
        
        wordsLearned.textContent = `Progress: ${learned}/${total} words (${percentage}%)`;
    }

    // ================ CUSTOM WORDS ================
    function addCustomWord(e) {
        e.preventDefault();
        
        if (!selectedLanguage) {
            alert("Please select a language first!");
            return;
        }

        const wordInput = document.getElementById("custom-word");
        const translationInput = document.getElementById("custom-translation");
        
        const newWord = {
            word: wordInput.value.trim(),
            translation: translationInput.value.trim()
        };

        if (newWord.word && newWord.translation) {
            words[selectedLanguage].push(newWord);
            wordInput.value = "";
            translationInput.value = "";
            alert("Word added successfully!");
        } else {
            alert("Please enter both word and translation!");
        }
    }

    // ================ UTILITY FUNCTIONS ================
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function resetQuizUI() {
        questionDiv.textContent = "";
        optionsDiv.innerHTML = "";
        quizResultDiv.textContent = "";
        quizResultDiv.classList.add("hidden");
        timerDiv.textContent = "";
    }

    // Initialize the app
    if (selectedLanguage) {
        displayFlashcard();
        updateProgress();
    }
});
