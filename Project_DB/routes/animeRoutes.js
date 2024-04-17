const express= require('express');
const animeController = require('../controllers/animeController')
const router = express.Router();


router.get('/', animeController.anime_index);
router.get('/create', animeController.anime_create_get)
router.get('/:id', animeController.anime_details)
router.post('/',animeController.anime_create_post)
router.delete('/:id', animeController.anime_delete)
router.get('/update/:id', animeController.anime_update_get)
router.post('/update/:id',animeController.anime_update_post)


module.exports= router;
