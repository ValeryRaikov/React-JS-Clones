import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import songRouter from './src/routes/songRoute.js';
import connectDatabase from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// app congig
const app = express();
const port = process.env.PORT || 3030;
connectDatabase();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// initializing routes
app.use('/api/song', songRouter);
app.use('/api/album', albumRouter);

app.get('/', (req, res) => {
    res.send('API working');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);	
});