const express = require('express');
const cors = require('cors');
const fs = require('fs');
const session = require('express-session');

const app = express();
app.use(cors());
app.use(express.json());

// Use the session middleware
app.use(session({
    secret: 'scrooge-duck',  // a secret string used to sign the session ID cookie
    resave: false,  // don't save session if unmodified
    saveUninitialized: false  // don't create session until something stored
  }))


// Define routes, middleware, etc.

app.listen(8080, () => {
    console.log('server listening on port 8080');
})

app.get('/', (req, res) => {
    res.send('Hello from our server!');
})

app.post('/signup', (req, res) => {
    const { userName, password } = req.body;

    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            console.error(err);
            return res.status(500).send('Error reading from file');
        }

        let users = [];
        if (data) {
            try {
                users = JSON.parse(data);
            } catch (parseErr) {
                console.error(parseErr);
                return res.status(500).send('Error parsing users file');
            }
        }

        // Check if username already exists
        if (users.some(user => user.userName === userName)) {
            return res.status(400).send('Username already exists');
        }

        // Hash the password here before saving (using bcrypt or similar)

        // Add the new user
        users.push({ userName, password });
        

        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error writing to file');
            }
            console.log("Username and password written to file");
            res.status(200).send("User signed up successfully");
        });
    });
});

app.post('/signin', (req, res) => {
    const { userName, password } = req.body;
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            console.error(err);
            return res.status(500).send('Error reading from file');
        }

        let users = [];
        if (data) {
            try {
                users = JSON.parse(data);
            } catch (parseErr) {
                console.error(parseErr);
                return res.status(500).send('Error parsing users file');
            }
        }

        // Find the user by username
        const user = users.find(user => user.userName === userName);

        // Check if user exists and password matches
        if (!user || user.password !== password) {
            return res.status(400).send('Invalid username or password');
        }

        req.session.user = {userName};
        console.log("User set to " + JSON.stringify(req.session.user));
        res.status(200).send("User signed up successfully");
    });
})