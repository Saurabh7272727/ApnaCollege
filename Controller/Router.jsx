const express = require('express');
const router = express.Router();
const { HomeHandler, SiginHandler, PostSiginHandler, LoginHandler, AccountHandler } = require('./Controller.jsx');

router.get('/', HomeHandler);
router.post('/login/:firstName/:password', LoginHandler)
router.get('/Sigin', SiginHandler).post('/Sigin', PostSiginHandler);
router.get('/account/:firstName/:id', AccountHandler)
module.exports = router;