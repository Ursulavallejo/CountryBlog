const express = require('express')
const app = express()
const port = 3000

//en array med kortdata
const cards = [
{ title: 'kort 1', description: 'Beskrivning av kort 1' }
];

//en route för att rendera kortkomponenten
app.get('/', (req, res) => { 
    const cardElements = cards.map(card => `
        <div class="card">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
        </div>
        `).join('');

        const html = `
        <html>
            <head>
                <title>kortkompoment</title>
                <style>
                    .card {
                        border: 1px solid #ccc;
                        padding: 10px;
                        margin-bottom: 10px;
                    }
                </style>
            </head>
            <body>
                ${cardElements}
            </body>
        </html>
        `;
        res.send(html);
});

app.listen(port, () => {
console.log(`servern körs på port ${port}`)});