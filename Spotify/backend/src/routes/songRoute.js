import express from "express";

import { addSong, listSongs } from "../controllers/songController.js";

const songRouter = express.Router();

songRouter.post('/add', addSong);
songRouter.get('/songs', listSongs);

export default songRouter;
