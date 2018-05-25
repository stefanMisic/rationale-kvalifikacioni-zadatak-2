const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello Express!'));

app.listen(4000, () => console.log('Express server listening on port 4000!'));
