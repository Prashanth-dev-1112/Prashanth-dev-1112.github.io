const cors = require('cors'); 
const express = require('express');
const app = express();app.use(cors());
app.use(express.json());

const fs = require('fs');


//READ Request Handlers
app.get('/api/ingredients', (req,res)=> {
    let rawdata = fs.readFileSync('data.json');
    let ingredients = JSON.parse(rawdata);
    res.send(ingredients);
});
 
//UPDATE Request Handler
app.post('/api/ingredients', (req, res) => {
    let jsonObj = JSON.parse(req.body.body)
    let data = JSON.stringify(jsonObj);
    fs.writeFileSync('data.json', data);
    res.send(data);
});

 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));