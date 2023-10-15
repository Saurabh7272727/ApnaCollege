const express = require('express');
const router = express.Router();
const { HomeHandler, SiginHandler, PostSiginHandler, LoginHandler, AccountHandler, imgHandler, UpdateHandler, DeleteHandler, DeleteHandlerAll, VerifyHandler, EventHandler, EventPageHandler } = require('./Controller.jsx');
const { updateMany } = require('../MongoDB/MongoDB.jsx');

router.get('/', HomeHandler);
router.post('/login/:firstName/:password', LoginHandler)
router.get('/Sigin', SiginHandler).post('/Sigin', PostSiginHandler);
router.get('/account/:firstName/:id', AccountHandler);
router.get('/img', imgHandler);
router.post(`/update/:id`, UpdateHandler);
router.post(`/delete/:id`, DeleteHandler);
router.post(`/deleteall`, DeleteHandlerAll);
router.post('/verify', VerifyHandler);
router.get('/event', EventHandler);
router.get('/eventpage', EventPageHandler);
module.exports = router;