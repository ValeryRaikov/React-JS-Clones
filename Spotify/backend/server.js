import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// app congig
const app = express();
const port = process.env.PORT || 3030;

// middlewares
app.use(express.json());
app.use(cors());

// initializing routes
app.get('/', (req, res) => {
    res.send('API working');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);	
});