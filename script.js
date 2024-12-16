// ================ WORD LISTS ================
const words = {
    spanish: [
        // Greetings and Basic Phrases
        { word: "Hola", translation: "Hello" },
        { word: "Adiós", translation: "Goodbye" },
        { word: "Gracias", translation: "Thank you" },
        { word: "Por favor", translation: "Please" },
        { word: "De nada", translation: "You're welcome" },
        { word: "Buenos días", translation: "Good morning" },
        { word: "Buenas tardes", translation: "Good afternoon" },
        { word: "Buenas noches", translation: "Good night" },
        { word: "¿Cómo estás?", translation: "How are you?" },
        { word: "Muy bien", translation: "Very good" },
        
        // Common Words
        { word: "Sí", translation: "Yes" },
        { word: "No", translation: "No" },
        { word: "Tal vez", translation: "Maybe" },
        { word: "Siempre", translation: "Always" },
        { word: "Nunca", translation: "Never" },
        
        // Numbers
        { word: "Uno", translation: "One" },
        { word: "Dos", translation: "Two" },
        { word: "Tres", translation: "Three" },
        { word: "Cuatro", translation: "Four" },
        { word: "Cinco", translation: "Five" },
        
        // Colors
        { word: "Rojo", translation: "Red" },
        { word: "Azul", translation: "Blue" },
        { word: "Verde", translation: "Green" },
        { word: "Amarillo", translation: "Yellow" },
        { word: "Negro", translation: "Black" },
        
        // Family
        { word: "Familia", translation: "Family" },
        { word: "Madre", translation: "Mother" },
        { word: "Padre", translation: "Father" },
        { word: "Hermano", translation: "Brother" },
        { word: "Hermana", translation: "Sister" },
        
        // Food and Drink
        { word: "Agua", translation: "Water" },
        { word: "Pan", translation: "Bread" },
        { word: "Leche", translation: "Milk" },
        { word: "Café", translation: "Coffee" },
        { word: "Arroz", translation: "Rice" },
        
        // Common Verbs
        { word: "Ser", translation: "To be (permanent)" },
        { word: "Estar", translation: "To be (temporary)" },
        { word: "Tener", translation: "To have" },
        { word: "Ir", translation: "To go" },
        { word: "Venir", translation: "To come" }
    ],
    
    french: [
        // Greetings and Basic Phrases
        { word: "Bonjour", translation: "Hello" },
        { word: "Au revoir", translation: "Goodbye" },
        { word: "Merci", translation: "Thank you" },
        { word: "S'il vous plaît", translation: "Please" },
        { word: "De rien", translation: "You're welcome" },
        { word: "Bon matin", translation: "Good morning" },
        { word: "Bonsoir", translation: "Good evening" },
        { word: "Bonne nuit", translation: "Good night" },
        { word: "Comment allez-vous?", translation: "How are you?" },
        { word: "Très bien", translation: "Very good" },
        
        // Common Words
        { word: "Oui", translation: "Yes" },
        { word: "Non", translation: "No" },
        { word: "Peut-être", translation: "Maybe" },
        { word: "Toujours", translation: "Always" },
        { word: "Jamais", translation: "Never" },
        
        // Numbers
        { word: "Un", translation: "One" },
        { word: "Deux", translation: "Two" },
        { word: "Trois", translation: "Three" },
        { word: "Quatre", translation: "Four" },
        { word: "Cinq", translation: "Five" },
        
        // Colors
        { word: "Rouge", translation: "Red" },
        { word: "Bleu", translation: "Blue" },
        { word: "Vert", translation: "Green" },
        { word: "Jaune", translation: "Yellow" },
        { word: "Noir", translation: "Black" },
        
        // Family
        { word: "Famille", translation: "Family" },
        { word: "Mère", translation: "Mother" },
        { word: "Père", translation: "Father" },
        { word: "Frère", translation: "Brother" },
        { word: "Sœur", translation: "Sister" },
        
        // Food and Drink
        { word: "Eau", translation: "Water" },
        { word: "Pain", translation: "Bread" },
        { word: "Lait", translation: "Milk" },
        { word: "Café", translation: "Coffee" },
        { word: "Riz", translation: "Rice" },
        
        // Common Verbs
        { word: "Être", translation: "To be" },
        { word: "Avoir", translation: "To have" },
        { word: "Aller", translation: "To go" },
        { word: "Venir", translation: "To come" },
        { word: "Faire", translation: "To do/make" }
    ],
    
    german: [
        // Greetings and Basic Phrases
        { word: "Hallo", translation: "Hello" },
        { word: "Auf Wiedersehen", translation: "Goodbye" },
        { word: "Danke", translation: "Thank you" },
        { word: "Bitte", translation: "Please/You're welcome" },
        { word: "Guten Morgen", translation: "Good morning" },
        { word: "Guten Tag", translation: "Good day" },
        { word: "Guten Abend", translation: "Good evening" },
        { word: "Gute Nacht", translation: "Good night" },
        { word: "Wie geht's?", translation: "How are you?" },
        { word: "Sehr gut", translation: "Very good" },
        
        // Common Words
        { word: "Ja", translation: "Yes" },
        { word: "Nein", translation: "No" },
        { word: "Vielleicht", translation: "Maybe" },
        { word: "Immer", translation: "Always" },
        { word: "Nie", translation: "Never" },
        
        // Numbers
        { word: "Eins", translation: "One" },
        { word: "Zwei", translation: "Two" },
        { word: "Drei", translation: "Three" },
        { word: "Vier", translation: "Four" },
        { word: "Fünf", translation: "Five" },
        
        // Colors
        { word: "Rot", translation: "Red" },
        { word: "Blau", translation: "Blue" },
        { word: "Grün", translation: "Green" },
        { word: "Gelb", translation: "Yellow" },
        { word: "Schwarz", translation: "Black" },
        
        // Family
        { word: "Familie", translation: "Family" },
        { word: "Mutter", translation: "Mother" },
        { word: "Vater", translation: "Father" },
        { word: "Bruder", translation: "Brother" },
        { word: "Schwester", translation: "Sister" },
        
        // Food and Drink
        { word: "Wasser", translation: "Water" },
        { word: "Brot", translation: "Bread" },
        { word: "Milch", translation: "Milk" },
        { word: "Kaffee", translation: "Coffee" },
        { word: "Reis", translation: "Rice" },
        
        // Common Verbs
        { word: "Sein", translation: "To be" },
        { word: "Haben", translation: "To have" },
        { word: "Gehen", translation: "To go" },
        { word: "Kommen", translation: "To come" },
        { word: "Machen", translation: "To do/make" }
    ],
    
    italian: [
        // Greetings and Basic Phrases
        { word: "Ciao", translation: "Hello/Goodbye" },
        { word: "Arrivederci", translation: "Goodbye" },
        { word: "Grazie", translation: "Thank you" },
        { word: "Per favore", translation: "Please" },
        { word: "Prego", translation: "You're welcome" },
        { word: "Buongiorno", translation: "Good morning" },
        { word: "Buonasera", translation: "Good evening" },
        { word: "Buonanotte", translation: "Good night" },
        { word: "Come stai?", translation: "How are you?" },
        { word: "Molto bene", translation: "Very good" },
        
        // Common Words
        { word: "Sì", translation: "Yes" },
        { word: "No", translation: "No" },
        { word: "Forse", translation: "Maybe" },
        { word: "Sempre", translation: "Always" },
        { word: "Mai", translation: "Never" },
        
        // Numbers
        { word: "Uno", translation: "One" },
        { word: "Due", translation: "Two" },
        { word: "Tre", translation: "Three" },
        { word: "Quattro", translation: "Four" },
        { word: "Cinque", translation: "Five" },
        
        // Colors
        { word: "Rosso", translation: "Red" },
        { word: "Blu", translation: "Blue" },
        { word: "Verde", translation: "Green" },
        { word: "Giallo", translation: "Yellow" },
        { word: "Nero", translation: "Black" },
        
        // Family
        { word: "Famiglia", translation: "Family" },
        { word: "Madre", translation: "Mother" },
        { word: "Padre", translation: "Father" },
        { word: "Fratello", translation: "Brother" },
        { word: "Sorella", translation: "Sister" },
        
        // Food and Drink
        { word: "Acqua", translation: "Water" },
        { word: "Pane", translation: "Bread" },
        { word: "Latte", translation: "Milk" },
        { word: "Caffè", translation: "Coffee" },
        { word: "Riso", translation: "Rice" },
        
        // Common Verbs
        { word: "Essere", translation: "To be" },
        { word: "Avere", translation: "To have" },
        { word: "Andare", translation: "To go" },
        { word: "Venire", translation: "To come" },
        { word: "Fare", translation: "To do/make" }
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
let learnedWords = JSON.parse(localStorage.getItem("learnedWords")) || {};

// ================ DOM REFERENCES ================
document.addEventListener("DOMContentLoaded", () => {
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

    // Create quiz toggle button
    const toggleQuizButton = document.createElement("button");
    toggleQuizButton.textContent = "Start Quiz";
    toggleQuizButton.id = "start-quiz";
    toggleQuizButton.classList.add("quiz-toggle-button");
    if (flashcardsSection) {
        flashcardsSection.appendChild(toggleQuizButton);
    }

    // ================ FLASHCARD FUNCTIONS ================
    function displayFlashcard() {
        console.log("Displaying flashcard for language:", selectedLanguage);
        if (!selectedLanguage || !words[selectedLanguage]) {
            console.error("No language selected or no words available");
            return;
        }

        const currentWord = words[selectedLanguage][currentIndex];
        if (currentWord) {
            flashcardWord.textContent = currentWord.word;
            flashcardTranslation.textContent = currentWord.translation;
            flashcardTranslation.classList.add("hidden");
            flashcardWord.classList.remove("hidden");
            
            // Update progress display
            updateProgressDisplay();
        }
    }

    function flipCard() {
        flashcardTranslation.classList.toggle("hidden");
        flashcardWord.classList.toggle("hidden");
    }

    function nextCard() {
        if (currentIndex < words[selectedLanguage].length - 1) {
            markWordAsLearned(words[selectedLanguage][currentIndex].word);
            currentIndex++;
            displayFlashcard();
        } else {
            alert("Congratulations! You've completed all flashcards. Starting over!");
            currentIndex = 0;
            displayFlashcard();
        }
    }

    // ================ QUIZ FUNCTIONS ================
    function startQuiz() {
        if (!selectedLanguage) {
            alert("Please select a language first!");
            return;
        }
        quizSection.classList.remove("hidden");
        flashcardsSection.classList.add("hidden");
        toggleQuizButton.disabled = true;
        quizIndex = 0;
        score = 0;
        displayQuestion();
    }

    function displayQuestion() {
        if (quizIndex >= words[selectedLanguage].length) {
            endQuiz();
            return;
        }

        const currentWord = words[selectedLanguage][quizIndex];
        questionDiv.textContent = `What is the translation of "${currentWord.word}"?`;
        
        // Generate and display options
        const options = generateOptions(currentWord.translation);
        optionsDiv.innerHTML = "";
        options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("quiz-option");
            button.addEventListener("click", () => selectOption(button));
            optionsDiv.appendChild(button);
        });

        // Reset quiz result and start timer
        quizResultDiv.classList.add("hidden");
        startTimer();
    }

    function generateOptions(correctAnswer) {
        const options = [correctAnswer];
        const allTranslations = words[selectedLanguage].map(item => item.translation);
        
        while (options.length < 4) {
            const randomTranslation = allTranslations[Math.floor(Math.random() * allTranslations.length)];
            if (!options.includes(randomTranslation)) {
                options.push(randomTranslation);
            }
        }
        
        return options.sort(() => Math.random() - 0.5);
    }

    function selectOption(button) {
        const buttons = document.querySelectorAll(".quiz-option");
        buttons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        selectedOption = button.textContent;
    }

    function submitAnswer() {
        clearInterval(timer);
        const currentWord = words[selectedLanguage][quizIndex];
        
        if (selectedOption === currentWord.translation) {
            score++;
            quizResultDiv.textContent = "Correct! 🎉";
            quizResultDiv.style.color = "#2ecc71";
        } else {
            quizResultDiv.textContent = `Incorrect. The correct answer is "${currentWord.translation}"`;
            quizResultDiv.style.color = "#e74c3c";
        }
        
        quizResultDiv.classList.remove("hidden");
        selectedOption = "";
        quizIndex++;
        
        setTimeout(displayQuestion, 2000);
    }

    function endQuiz() {
        clearInterval(timer);
        const percentage = Math.round((score / words[selectedLanguage].length) * 100);
        alert(`Quiz Complete!\nYour Score: ${score}/${words[selectedLanguage].length} (${percentage}%)`);
        
        quizSection.classList.add("hidden");
        flashcardsSection.classList.remove("hidden");
        toggleQuizButton.disabled = false;
    }

    // ================ TIMER FUNCTIONS ================
    function startTimer() {
        timeLeft = 15;
        updateTimerDisplay();
        clearInterval(timer);
        
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                submitAnswer();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        timerDiv.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 5) {
            timerDiv.style.color = "#e74c3c";
        } else {
            timerDiv.style.color = "#2c3e50";
        }
    }

    // ================ PROGRESS TRACKING ================
    function markWordAsLearned(word) {
        learnedWords[word] = true;
        localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
        updateProgressDisplay();
    }

    function updateProgressDisplay() {
        const totalWords = words[selectedLanguage].length;
        const learnedCount = Object.keys(learnedWords).length;
        wordsLearned.textContent = `${learnedCount}/${totalWords}`;
    }

    // ================ CUSTOM WORDS ================
    function addCustomWord(event) {
        event.preventDefault();
        const wordInput = document.getElementById("custom-word");
        const translationInput = document.getElementById("custom-translation");
        
        const newWord = {
            word: wordInput.value.trim(),
            translation: translationInput.value.trim()
        };

        if (newWord.word && newWord.translation) {
            words[selectedLanguage].push(newWord);
            saveCustomWord(newWord);
            alert(`Added: ${newWord.word} - ${newWord.translation}`);
            wordInput.value = "";
            translationInput.value = "";
        }
    }

    function saveCustomWord(wordObj) {
        const customWords = JSON.parse(localStorage.getItem("customWords")) || {};
        if (!customWords[selectedLanguage]) {
            customWords[selectedLanguage] = [];
        }
        customWords[selectedLanguage].push(wordObj);
        localStorage.setItem("customWords", JSON.stringify(customWords));
    }

    // ================ EVENT LISTENERS ================
    if (languageSelect) {
        languageSelect.addEventListener("change", () => {
            selectedLanguage = languageSelect.value;
            if (selectedLanguage) {
                flashcardsSection.classList.remove("hidden");
                progressSection.classList.remove("hidden");
                addWordsSection.classList.remove("hidden");
                currentIndex = 0;
                displayFlashcard();
            }
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

    if (submitAnswerButton) {
        submitAnswerButton.addEventListener("click", submitAnswer);
    }

    if (addWordForm) {
        addWordForm.addEventListener("submit", addCustomWord);
    }

    // ================ INITIALIZATION ================
    // Load custom words from localStorage
    const customWords = JSON.parse(localStorage.getItem("customWords")) || {};
    for (const lang in customWords) {
        if (words[lang]) {
            words[lang] = [...words[lang], ...customWords[lang]];
        }
    }

    // Initialize progress display
    updateProgressDisplay();
});
