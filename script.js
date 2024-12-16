// Word lists for different languages
const words = {
    spanish: [
        { word: "Hola", translation: "Hello" },
        { word: "Adiós", translation: "Goodbye" },
        { word: "Gracias", translation: "Thank you" },
        { word: "Por favor", translation: "Please" },
        { word: "Sí", translation: "Yes" },
        { word: "No", translation: "No" },
        // Add more Spanish words
    ],
    french: [
        { word: "Bonjour", translation: "Hello" },
        { word: "Au revoir", translation: "Goodbye" },
        { word: "Merci", translation: "Thank you" },
        { word: "S'il vous plaît", translation: "Please" },
        { word: "Oui", translation: "Yes" },
        { word: "Non", translation: "No" },
        // Add more French words
    ],
    german: [
        { word: "Hallo", translation: "Hello" },
        { word: "Auf Wiedersehen", translation: "Goodbye" },
        { word: "Danke", translation: "Thank you" },
        { word: "Bitte", translation: "Please" },
        { word: "Ja", translation: "Yes" },
        { word: "Nein", translation: "No" },
        // Add more German words
    ],
    // Add more languages as desired
};

let selectedLanguage = "";
let currentIndex = 0;
let learnedWords = 0;

// Reference to DOM elements
const languageSelect = document.getElementById("language");
const flashcardsSection = document.getElementById("flashcards");
const flashcardWord = document.getElementById("word");
const flashcardTranslation = document.getElementById("translation");
const flipButton = document.getElementById("flip-button");
const nextButton = document.getElementById("next-button");
const progressSection = document.getElementById("progress");
const wordsLearned = document.getElementById("words-learned");
const addWordsSection = document.getElementById("add-words");
const addWordForm = document.getElementById("add-word-form");

// Initialize the app
function init() {
    languageSelect.addEventListener("change", handleLanguageSelection);
    flipButton.addEventListener("click", flipCard);
    nextButton.addEventListener("click", nextCard);
    addWordForm.addEventListener("submit", addCustomWord);
    loadProgress();
}

// Handle language selection
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

// Display the current flashcard
function displayFlashcard() {
    const currentWord = words[selectedLanguage][currentIndex];
    if (currentWord) {
        flashcardWord.textContent = currentWord.word;
        flashcardTranslation.textContent = currentWord.translation;
        flashcardTranslation.classList.add("hidden");
    }
}

// Flip the flashcard to show translation
function flipCard() {
    flashcardTranslation.classList.toggle("hidden");
}

// Move to the next flashcard
function nextCard() {
    if (currentIndex < words[selectedLanguage].length - 1) {
        currentIndex++;
        displayFlashcard();
    } else {
        alert("You've reached the end of the flashcards!");
        currentIndex = 0;
        displayFlashcard();
    }
    // Increment learned words
    learnedWords++;
    updateProgress();
}

// Update progress display
function updateProgress() {
    wordsLearned.textContent = learnedWords;
    saveProgress();
}

// Load progress from localStorage
function loadProgress() {
    const storedProgress = localStorage.getItem("learnedWords");
    if (storedProgress) {
        learnedWords = parseInt(storedProgress);
        wordsLearned.textContent = learnedWords;
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem("learnedWords", learnedWords);
}

// Add custom words
function addCustomWord(event) {
    event.preventDefault();
    const customWord = document.getElementById("custom-word").value.trim();
    const customTranslation = document.getElementById("custom-translation").value.trim();
    if (customWord && customTranslation) {
        words[selectedLanguage].push({ word: customWord, translation: customTranslation });
        alert(`Added "${customWord}": "${customTranslation}" to ${selectedLanguage} words.`);
        addWordForm.reset();
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", init);
