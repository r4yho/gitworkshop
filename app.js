import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/:page', (req, res) => {
    const page = req.params.page;
    res.render(page, (err, html) => {
        if (err) {
            res.status(404).send('This page does not exist yet, add an ejs file in the views tab!');
        } else {
            res.send(html);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`Access the server: http://localhost:${PORT}`);
});