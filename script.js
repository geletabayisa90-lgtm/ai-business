const button = document.getElementById("startButton");

button.addEventListener("click", () => {
    const taskCard = document.querySelector(".card:last-child");

    taskCard.innerHTML = `
        <h2>✅ Today's Tasks</h2>
        <ol>
            <li>Review today's AI business goals</li>
            <li>Build one new feature</li>
            <li>Test your application</li>
            <li>Commit changes to GitHub</li>
        </ol>
    `;
});