// Sample data
let qaDatabase = [
    { question: "What is JavaScript?", answer: "JavaScript is a programming language used for web development." },
    { question: "What is HTML?", answer: "HTML stands for HyperText Markup Language and is used to structure web pages." },
    { question: "What is CSS?", answer: "CSS is used to style HTML content and make it look appealing." }
];

// Function to search questions
function searchQuestion() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    // Clear previous results
    results.innerHTML = "";

    // Filter and display matching questions
    qaDatabase.forEach((qa) => {
        if (qa.question.toLowerCase().includes(input)) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${qa.question}</strong><span>${qa.answer}</span>`;
            results.appendChild(li);
        }
    });

    /
    