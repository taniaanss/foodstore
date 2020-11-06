const router = require('express').Router();
const multer = require('multer');

const tagControler = require('./controller');

router.post('/tag', multer().none(), tagControler.store);
router.put('/tag/:id', multer().none(), tagControler.update);
router.get('/tag', multer().none(), tagControler.index);
router.delete('/tag/:id', multer().none(), tagControler.destroy);

module.exports = router;