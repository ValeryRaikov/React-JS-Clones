import express from "express";

import { addSong, listSongs, updateSong, removeSong } from "../controllers/songController.js";
import upload from "../middleware/multer.js";

const songRouter = express.Router();

songRouter.post('/add', upload.fields([{ name: 'image', maxCount: 1 }, {name: 'audio', maxCount: 1}]), addSong);
songRouter.get('/songs', listSongs);
songRouter.put('/update/:id', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), updateSong);
songRouter.delete('/remove', removeSong);

export default songRouter;
