const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const myData = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

fs.writeFile('data.json', JSON.stringify(myData), err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data written to file');
});


// Define routes, middleware, etc.

app.listen(8080, () => {
    console.log('server listening on port 8080');
})

app.get('/', (req, res) => {
    res.send('Hello from our server!');
})