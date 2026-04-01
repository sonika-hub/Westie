const express = require('express');
const path = require('path');
const app = express();

// Set EJS and Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes...
app.get('/', (req, res) => res.render('index', { title: 'Home' }));
app.get('/gallery', (req, res) => res.render('gallery', { title: 'Archive' }));

// Export for Vercel
module.exports = app; 

// Only listen if NOT running on Vercel
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
}