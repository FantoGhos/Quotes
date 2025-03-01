fetch('./quote.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        initializeQuotes(data);
    })
    .catch(error => console.error('Error loading JSON:', error));

function initializeQuotes(data) {
    const quotes = data.quotes;
    const quoteButton = document.getElementById('quoteButton');
    const quoteDisplay = document.getElementById('quoteDisplay');
    const authorDisplay = document.getElementById('authorDisplay');

    if (quoteButton && quoteDisplay && authorDisplay) {
        quoteButton.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const selectedQuote = quotes[randomIndex];
            quoteDisplay.innerHTML = `<em>"${selectedQuote.quote}"</em>`;
            authorDisplay.innerHTML = `-${selectedQuote.author}`;
            console.log(randomIndex);
        });
    }
}
