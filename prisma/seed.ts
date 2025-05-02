import prisma from '../src/prisma/client';

async function main() {
	await prisma.city.createMany({
		data: [
			{
				"name": "Seattle, WA",
				"costOfLivingIndex": 85,
				"crimeIndex": 45,
				"medianIncome": 92000,
				"walkabilityScore": 74,
				"averageTemperature": 53
			},
			{
				"name": "Austin, TX",
				"costOfLivingIndex": 75,
				"crimeIndex": 50,
				"medianIncome": 71000,
				"walkabilityScore": 41,
				"averageTemperature": 68
			},
			{
				"name": "Denver, CO",
				"costOfLivingIndex": 80,
				"crimeIndex": 40,
				"medianIncome": 78000,
				"walkabilityScore": 61,
				"averageTemperature": 52
			},
			{
				"name": "Portland, OR",
				"costOfLivingIndex": 78,
				"crimeIndex": 55,
				"medianIncome": 75000,
				"walkabilityScore": 65,
				"averageTemperature": 54
			},
			{
				"name": "Miami, FL",
				"costOfLivingIndex": 88,
				"crimeIndex": 60,
				"medianIncome": 57000,
				"walkabilityScore": 77,
				"averageTemperature": 77
			},
			{
				"name": "Boston, MA",
				"costOfLivingIndex": 90,
				"crimeIndex": 35,
				"medianIncome": 82000,
				"walkabilityScore": 82,
				"averageTemperature": 51
			},
			{
				"name": "Phoenix, AZ",
				"costOfLivingIndex": 72,
				"crimeIndex": 48,
				"medianIncome": 68000,
				"walkabilityScore": 41,
				"averageTemperature": 75
			},
			{
				"name": "Minneapolis, MN",
				"costOfLivingIndex": 70,
				"crimeIndex": 38,
				"medianIncome": 77000,
				"walkabilityScore": 68,
				"averageTemperature": 46
			},
			{
				"name": "Nashville, TN",
				"costOfLivingIndex": 68,
				"crimeIndex": 52,
				"medianIncome": 70000,
				"walkabilityScore": 36,
				"averageTemperature": 62
			},
			{
				"name": "San Diego, CA",
				"costOfLivingIndex": 92,
				"crimeIndex": 33,
				"medianIncome": 86000,
				"walkabilityScore": 71,
				"averageTemperature": 65
			},
			{
				"name": "Chicago, IL",
				"costOfLivingIndex": 76,
				"crimeIndex": 58,
				"medianIncome": 72000,
				"walkabilityScore": 77,
				"averageTemperature": 50
			},
			{
				"name": "New York, NY",
				"costOfLivingIndex": 95,
				"crimeIndex": 40,
				"medianIncome": 85000,
				"walkabilityScore": 88,
				"averageTemperature": 55
			},
			{
				"name": "Atlanta, GA",
				"costOfLivingIndex": 73,
				"crimeIndex": 59,
				"medianIncome": 69000,
				"walkabilityScore": 49,
				"averageTemperature": 63
			},
			{
				"name": "Salt Lake City, UT",
				"costOfLivingIndex": 71,
				"crimeIndex": 42,
				"medianIncome": 74000,
				"walkabilityScore": 57,
				"averageTemperature": 52
			},
			{
				"name": "Charlotte, NC",
				"costOfLivingIndex": 69,
				"crimeIndex": 50,
				"medianIncome": 68000,
				"walkabilityScore": 38,
				"averageTemperature": 61
			},
			{
				"name": "San Francisco, CA",
				"costOfLivingIndex": 100,
				"crimeIndex": 55,
				"medianIncome": 105000,
				"walkabilityScore": 89,
				"averageTemperature": 60
			},
			{
				"name": "Los Angeles, CA",
				"costOfLivingIndex": 93,
				"crimeIndex": 56,
				"medianIncome": 79000,
				"walkabilityScore": 68,
				"averageTemperature": 66
			},
			{
				"name": "Kansas City, MO",
				"costOfLivingIndex": 65,
				"crimeIndex": 47,
				"medianIncome": 66000,
				"walkabilityScore": 32,
				"averageTemperature": 55
			},
			{
				"name": "Pittsburgh, PA",
				"costOfLivingIndex": 67,
				"crimeIndex": 43,
				"medianIncome": 72000,
				"walkabilityScore": 63,
				"averageTemperature": 50
			},
			{
				"name": "Raleigh, NC",
				"costOfLivingIndex": 66,
				"crimeIndex": 39,
				"medianIncome": 75000,
				"walkabilityScore": 42,
				"averageTemperature": 59
			}
		]
	});
	console.log('Seeded data');
}

main().finally(() => prisma.$disconnect());
