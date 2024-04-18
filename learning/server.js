const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.text());

app.get('/api', (req, res) => {
    console.log(req.body);
    res.send("Sucessful");
})

app.listen('5000', () => {    
        console.log(`Server running on port 5000`);
    
})
