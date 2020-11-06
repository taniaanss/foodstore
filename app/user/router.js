const router = require('express').Router();
const multer = require('multer');

const categoryControler = require('./controller');

router.post('/categories', multer().none(), categoryControler.store);
router.put('/categories/:id', multer().none(), categoryControler.update);
router.get('/categories', multer().none(), categoryControler.index);
router.delete('/categories/:id', multer().none(), categoryControler.destroy);

module.exports = router;