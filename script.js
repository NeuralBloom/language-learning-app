// ================ WORD LISTS ================
const words = {
    spanish: [
        { word: "Hola", translation: "Hello" },
        { word: "Adiós", translation: "Goodbye" },
        { word: "Gracias", translation: "Thank you" },
        { word: "Por favor", translation: "Please" },
        { word: "Sí", translation: "Yes" },
        { word: "No", translation: "No" },
        { word: "Buenos días", translation: "Good morning" },
        { word: "Buenas noches", translation: "Good night" },
        { word: "¿Cómo estás?", translation: "How are you?" },
        { word: "Bien", translation: "Good" },
        { word: "Mal", translation: "Bad" },
        { word: "Agua", translation: "Water" },
        { word: "Comida", translation: "Food" },
        { word: "Casa", translation: "House" },
        { word: "Perro", translation: "Dog" },
        { word: "Gato", translation: "Cat" },
        { word: "Amor", translation: "Love" },
        { word: "Familia", translation: "Family" },
        { word: "Amigo", translation: "Friend" },
        { word: "Trabajo", translation: "Work" }
    ],
    french: [
        { word: "Bonjour", translation: "Hello" },
        { word: "Au revoir", translation: "Goodbye" },
        { word: "Merci", translation: "Thank you" },
        { word: "S'il vous plaît", translation: "Please" },
        { word: "Oui", translation: "Yes" },
        { word: "Non", translation: "No" },
        { word: "Bon matin", translation: "Good morning" },
        { word: "Bonne nuit", translation: "Good night" },
        { word: "Comment allez-vous?", translation: "How are you?" },
        { word: "Bien", translation: "Good" },
        { word: "Mal", translation: "Bad" },
        { word: "L'eau", translation: "Water" },
        { word: "La nourriture", translation: "Food" },
        { word: "La maison", translation: "House" },
        { word: "Le chien", translation: "Dog" },
        { word: "Le chat", translation: "Cat" },
        { word: "L'amour", translation: "Love" },
        { word: "La famille", translation: "Family" },
        { word: "L'ami", translation: "Friend" },
        { word: "Le travail", translation: "Work" }
    ],
    german: [
        { word: "Hallo", translation: "Hello" },
        { word: "Auf Wiedersehen", translation: "Goodbye" },
        { word: "Danke", translation: "Thank you" },
        { word: "Bitte", translation: "Please" },
        { word: "Ja", translation: "Yes" },
        { word: "Nein", translation: "No" },
        { word: "Guten Morgen", translation: "Good morning" },
        { word: "Gute Nacht", translation: "Good night" },
        { word: "Wie geht es dir?", translation: "How are you?" },
        { word: "Gut", translation: "Good" },
        { word: "Schlecht", translation: "Bad" },
        { word: "Wasser", translation: "Water" },
        { word: "Essen", translation: "Food" },
        { word: "Haus", translation: "House" },
        { word: "Hund", translation: "Dog" },
        { word: "Katze", translation: "Cat" },
        { word: "Liebe", translation: "Love" },
        { word: "Familie", translation: "Family" },
        { word: "Freund", translation: "Friend" },
        { word: "Arbeit", translation: "Work" }
    ],
    italian: [
        { word: "Ciao", translation: "Hello" },
        { word: "Arrivederci", translation: "Goodbye" },
        { word: "Grazie", translation: "Thank you" },
        { word: "Per favore", translation: "Please" },
        { word: "Sì", translation: "Yes" },
        { word: "No", translation: "No" },
        { word: "Buongiorno", translation: "Good morning" },
        { word: "Buonanotte", translation: "Good night" },
        { word: "Come stai?", translation: "How are you?" },
        { word: "Bene", translation: "Good" },
        { word: "Male", translation: "Bad" },
        { word: "Acqua", translation: "Water" },
        { word: "Cibo", translation: "Food" },
        { word: "Casa", translation: "House" },
        { word: "Cane", translation: "Dog" },
        { word: "Gatto", translation: "Cat" },
        { word: "Amore", translation: "Love" },
        { word: "Famiglia", translation: "Family" },
        { word: "Amico", translation: "Friend" },
        { word: "Lavoro", translation: "Work" }
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
quizSection.insertBefore(timerDiv, questionDiv);

// Create quiz toggle button
const toggleQuizButton = document.createElement("button");
toggleQuizButton.textContent = "Start Quiz";
toggleQuizButton.id = "start-quiz";
toggleQuizButton.style.marginTop = "10px";
toggleQuizButton.style.backgroundColor = "#e67e22";
toggleQuizButton.style.color = "#fff";
toggleQuizButton.style.border = "none";
toggleQuizButton.style.padding = "10px 20px";
toggleQuizButton.style.borderRadius = "4px";
toggleQuizButton.style.cursor = "pointer";
toggleQuizButton.addEventListener("click", startQuiz);
flashcardsSection.appendChild(toggleQuizButton);

// ================ INITIALIZATION ================
function init() {
    loadCustomWords();
    languageSelect.addEventListener("change", handleLanguageSelection);
    flipButton.addEventListener("click", flipCard);
    nextButton.addEventListener("click", nextCard);
    addWordForm.addEventListener("submit", addCustomWord);
    loadProgress();
}

// ================ FLASHCARD FUNCTIONS ================
function handleLanguageSelection() {
    selectedLanguage = languageSelect.value;
    if (selectedLanguage) {
        flashcardsSection.classList.remove("hidden");
        progressSection.classList.remove("hidden");
        addWordsSection.classList.remove("hidden");
        currentIndex = 0;
        displayFlashcard();
    }
}

function displayFlashcard() {
    const currentWord = words[selectedLanguage][currentIndex];
    if (currentWord) {
        flashcardWord.textContent = currentWord.word;
        flashcardTranslation.textContent = currentWord.translation;
        flashcardTranslation.classList.add("hidden");
        document.getElementById("card").classList.remove("flipped");
    }
}

function flipCard() {
    flashcardTranslation.classList.toggle("hidden");
    document.getElementById("card").classList.toggle("flipped");
}

function nextCard() {
    if (currentIndex < words[selectedLanguage].length - 1) {
        markWordAsLearned(words[selectedLanguage][currentIndex].word);
        currentIndex++;
        displayFlashcard();
    } else {
        alert("You've reached the end of the flashcards!");
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

    const options = generateOptions(currentWord.translation);
    optionsDiv.innerHTML = "";
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("quiz-option");
        button.addEventListener("click", selectOption);
        optionsDiv.appendChild(button);
    });

    quizResultDiv.classList.add("hidden");
    quizResultDiv.textContent = "";

    resetTimer();
    startTimer();
}

function generateOptions(correctTranslation) {
    const options = [correctTranslation];
    const allTranslations = words[selectedLanguage].map(item => item.translation);
    while (options.length < 4) {
        const randomTranslation = allTranslations[Math.floor(Math.random() * allTranslations.length)];
        if (!options.includes(randomTranslation)) {
            options.push(randomTranslation);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

function selectOption(event) {
    const buttons = document.querySelectorAll(".quiz-option");
    buttons.forEach(btn => btn.style.backgroundColor = "#95a5a6");
    event.target.style.backgroundColor = "#3498db";
    selectedOption = event.target.textContent;
}

function submitAnswer() {
    clearInterval(timer);
    if (!selectedOption) {
        quizResultDiv.textContent = `Time's up! The correct answer is "${words[selectedLanguage][quizIndex].translation}".`;
        quizResultDiv.style.color = "#e74c3c";
    } else {
        const currentWord = words[selectedLanguage][quizIndex];
        if (selectedOption === currentWord.translation) {
            score++;
            quizResultDiv.textContent = "Correct!";
            quizResultDiv.style.color = "#2ecc71";
        } else {
            quizResultDiv.textContent = `Incorrect! The correct answer is "${currentWord.translation}".`;
            quizResultDiv.style.color = "#e74c3c";
        }
    }
    quizResultDiv.classList.remove("hidden");
    quizIndex++;
    selectedOption = "";
    setTimeout(displayQuestion, 2000);
}

function endQuiz() {
    resetTimer();
    quizSection.classList.add("hidden");
    flashcardsSection.classList.remove("hidden");
    toggleQuizButton.disabled = false;
    alert(`Quiz Completed! Your Score: ${score} / ${words[selectedLanguage].length}`);
}

// ================ TIMER FUNCTIONS ================
function startTimer() {
    timeLeft = 15;
    timerDiv.textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDiv.textContent = "Time's up!";
            submitAnswer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timerDiv.textContent = "";
}

// ================ PROGRESS TRACKING ================
function updateProgress() {
    wordsLearned.textContent = Object.keys(learnedWords).length;
    saveProgress();
}

function saveProgress() {
    localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
}

function markWordAsLearned(word) {
    learnedWords[word] = true;
    updateProgress();
}

function loadProgress() {
    wordsLearned.textContent = Object.keys(learnedWords).length;
}

// ================ CUSTOM WORDS FUNCTIONS ================
function loadCustomWords() {
    const custom = JSON.parse(localStorage.getItem("customWords")) || {};
    for (let lang in custom) {
        if (words[lang]) {
            words[lang] = [...words[lang], ...custom[lang]];
        }
    }
}

function saveCustomWords(lang, wordObj) {
    const custom = JSON.parse(localStorage.getItem("customWords")) || {};
    if (custom[lang]) {
        custom[lang].push(wordObj);
    } else {
        custom[lang] = [wordObj];
    }
    localStorage.setItem("customWords", JSON.stringify(custom));
}

function addCustomWord(event) {
    event.preventDefault();
    const customWord = document.getElementById("custom-word").value.trim();
    const customTranslation = document.getElementById("custom-translation").value.trim();
    if (customWord && customTranslation) {
        const newWord = { word: customWord, translation: customTranslation };
        words[selectedLanguage].push(newWord);
        saveCustomWords(selectedLanguage, newWord);
        alert(`Added "${customWord}": "${customTranslation}" to ${selectedLanguage} words.`);
        addWordForm.reset();
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", init);
