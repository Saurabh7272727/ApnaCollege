const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./Controller/Router.jsx');
const ejs = require('ejs');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router, (err, data) => {
    console.log("middleware");
})

app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT}`);
});