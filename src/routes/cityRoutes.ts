import express from 'express';
import prisma from '../prisma/client';

const router = express.Router();

router.get('/', async (_req, res) => {
	const cities = await prisma.city.findMany();
	res.json(cities);
});

router.get('/:id', async (req, res) => {
	const city = await prisma.city.findUnique({
		where: {
			id: Number(req.params.id),
		},
	});
	res.json(city);
});

export default router;
