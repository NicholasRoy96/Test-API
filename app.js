const express = require('express');
const app = express();
const port = 3000;
const main = require('./db');

main().catch(console.error);

app.listen(port, () => console.log(`App listening on port ${port}!`));