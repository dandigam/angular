const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

const app = express();
app.use(bodyParser.json);
app.use(cors());

app.get('/', function (req, res) {
    res.send("Hello from server");
})

app.post('/save', function(req,res) {
    console.log(req.body)
    res.status(200).send({"message":"Data Received"});
})

app.listen(port, function () {
    console.log("Server running on localhost: " + port);
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
