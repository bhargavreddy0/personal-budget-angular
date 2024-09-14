const express = require('express');
const app = express();
const port = 3000;

app.use('/',express.static('public'));

const budget ={ mybudget:[
    { title: "Eat out", budget: 40},
    { title: "Rent", budget: 150},
    { title: "Groceries", budget: 110},
    
]};

app.get('/budget',(req,res)=>{
    res.json(budget);
});

app.get('/hello', (req,res) => {
    res.send('Hello World!');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});