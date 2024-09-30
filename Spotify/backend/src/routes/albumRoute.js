import express from 'express';

import { addAlbum, listAlbum, updateAlbum, removeAlbum } from '../controllers/albumController.js';
import upload from '../middleware/multer.js';

const albumRouter = express.Router();

albumRouter.post('/add', upload.single('image'), addAlbum);
albumRouter.get('/albums', listAlbum);
albumRouter.put('album/:id', updateAlbum);
albumRouter.delete('/remove', removeAlbum);

export default albumRouter;