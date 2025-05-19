import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
    {
        id: 1,
        title: `joke-1`,
        content: `This is 1st joke`
    },
    {
        id: 2,
        title: `joke-2`,
        content: `This is 2nd joke`
    },
    {
        id: 3,
        title: `joke-3`,
        content: `This is 3rd joke`
    }
];

    res.send(jokes);
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`);
})