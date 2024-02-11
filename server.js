const express = require('express');
const app = express();
const port = 3000;
const data = require("./budgetData.json");
const cors = require("cors");

/*app.use('/', express.static('public'));*/
const budget = {
    myBudget: [
    {
        title: 'Power',
        budget: 20
    },
    {
        title: 'Gas',
        budget: 15
    },
    {
        title: 'Internet',
        budget: 15
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Groceries',
        budget: 80
    },
    {
        title: 'Toiletries',
        budget: 20
    },
    {
        title: 'Other',
        budget: 50
    },
]};

app.use(cors());
app.get('/hello', (req, res) => {
    res.send('Hello World!');
})

app.get('/budget', (req, res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});