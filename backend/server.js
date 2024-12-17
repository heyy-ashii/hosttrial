const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db/db');  // Import the database connection
const articleRoutes = require('./routes/articleRoutes');  // Import articleRoutes
const homeRoutes = require('./routes/homeRoutes');  // Import homeRoutes

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Connect to MongoDB
connectDB();  // Now using the modularized DB connection

// Routes
app.use('/api/articles', articleRoutes);  // Use the articleRoutes for all `/api/articles` requests
app.use('/', homeRoutes);  // Use homeRoutes for the home route 
app.use('/admin',articleRoutes)



// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
