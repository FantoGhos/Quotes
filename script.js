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
            quoteDisplay.innerHTML = `"${selectedQuote.quote}"`;
            authorDisplay.innerHTML = `<em>-${selectedQuote.author}</em>`;
            console.log(randomIndex);
        });
    }
}
