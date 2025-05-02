import { sqliteTable, integer, real, text } from 'drizzle-orm/sqlite-core';

export const cities = sqliteTable('cities', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    costOfLivingIndex: real('cost_of_living_index').notNull(),
    crimeIndex: real('crime_index').notNull(),
    medianIncome: integer('median_income').notNull(),
    walkabilityScore: integer('walkability_score').notNull(),
    averageTemperature: real('average_temperature').notNull(),
});
