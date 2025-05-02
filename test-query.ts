import { db } from './drizzle.config';
import { cities } from './schema/cities';

async function run() {
    const result = await db.select().from(cities);
    console.log(result);
}

run();
