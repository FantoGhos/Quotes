fetch('./quote.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data && data.quotes) {
            initializeQuotes(data);
        } else {
            console.error('Invalid JSON structure');
        }
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
            clickOfButton();
        });
    }
}

const numberOfClicks = document.getElementsByClassName('number-of-clicks')[0];
let clickCount = 0;

function clickOfButton() {
    clickCount++;
    if (numberOfClicks) {
        numberOfClicks.innerHTML = `Кількість кліків: ${clickCount}`;
    }
    alertMessage();
}

function alertMessage() {
    if(clickCount === 10) {
        alert("Ви вже 10 разів натиснули на кнопку!");
    }
    if (clickCount === 50) {
        alert("Фух, ви вже натиснули 50 разів на кнопку!");
    }
    if (clickCount === 100) {
        alert("Ви шо тю тю? Ви вже 100 разів натиснули на кнопку...");
    }
    if (clickCount === 500) {
        alert("Ви вже 500 разів натиснули на кнопку! Вам не набридло?");
    }
    if (clickCount === 1000) {
        alert("Ти йобнувся? 1000 разів натиснути на кнопку? Це не нормально...");
    }
}
