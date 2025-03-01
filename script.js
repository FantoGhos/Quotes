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
    if (quoteButton && quoteDisplay) {
        quoteButton.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const selectedQuote = quotes[randomIndex];
            quoteDisplay.innerText = `"${selectedQuote.quote}" - ${selectedQuote.author}`;
        });
    }
}
