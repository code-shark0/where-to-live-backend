import express from 'express';
import cors from 'cors';
import { db } from './drizzle.config';
import { cities } from './schema/cities';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/cities', async (_req, res) => {
    try {
        const cityList = await db.select().from(cities);
        res.json(cityList);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch cities' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});