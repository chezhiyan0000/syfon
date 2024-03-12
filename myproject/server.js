const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/validation')
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const db = mongoose.connection;

// Schema definition
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// Model definition
const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Send the HTML file to the client
});

app.post('/submit', async (req, res) => {
    // Handle form submission...
});

app.get('/display', async (req, res) => {
    // Handle data display...
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
