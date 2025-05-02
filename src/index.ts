import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cityRoutes from './routes/cityRoutes';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/api/cities', cityRoutes);

app.get('/', (_req, res) => {
	res.send('Where to Live API is running 🚀');
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
