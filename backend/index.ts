import express = require('express');

const greetings: Record<string, string> = {
    'hu': 'Szia',
    'en': 'Hello'
};

const app = express();

app.use(express.json());

app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello World!'});
});

app.get('/api/greet/:name', (req, res) => {
    //http://localhost:3000/api/greet/szoszi
    const name = req.params['name'];

    //http://localhost:3000/api/greet/szoszi?lang=en
    const lang = req.query['lang'] as string || 'en';

    if (!Object.keys(greetings).includes(lang)) {
        res.status(404).json({ error: 'The given language does not exist.' });
        return;
    }

    res.json({ message: greetings[lang] + ' ' + name });
});

app.post('/api/greet', (req, res) => {
    // expected body { "lang": "it", "greeting": "Ciao" }

    const lang = req.body.lang;
    const greeting = req.body.greeting;

    if (!lang || !greeting) {
        res.status(400).json({ error: 'Language and greeting must be defined.' })
        return;
    }

    if (Object.keys(greetings).includes(lang)) {
        res.status(409).json({ error: 'The given language already exists.' })
        return;
    }

    greetings[lang] = greeting;
    res.send();
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening on port 3000 ...')
});