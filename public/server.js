const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'lablinkdemo',
  password: '020823',
  port: 5432,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/js', express.static('js'));
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/pseudo-images', express.static('pseudo-images'));

app.get('/newsData.js', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM news');
        
        let jsContent = 'var newsData = [\n';

        for (let row of result.rows) {
            jsContent += `{
    id: "${row.id}",
    title: "${row.title}",
    author: "${row.author}",
    date: "${row.date}",
    description: \`${row.description}\`,
    imageUrl: "${row.imageurl}",
},\n`;
        }

        jsContent += '];';

        res.setHeader('Content-Type', 'application/javascript');
        res.send(jsContent);
    } catch (err) {
        console.error('Error generating JS:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// Add these lines at the top
const path = require('path');

// Add this line to serve your HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'news.html'));
});

