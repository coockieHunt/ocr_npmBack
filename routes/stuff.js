const express = require('express')
const stuffCtrl = require('../controllers/stuff.js')

const router = express.Router();

router.post('/api/stuff', stuffCtrl.createThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete(':id', stuffCtrl.deleteThing);
router.get('/:id', stuffCtrl.getOneThing);
router.use('/', stuffCtrl.getAllThing);

module.exports = router;