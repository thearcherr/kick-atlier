import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Setup __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src')));

app.set('views', path.join(__dirname, 'views')); // Absolute path to "views" directory
app.set('view engine', 'ejs');

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'src')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});
 
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 