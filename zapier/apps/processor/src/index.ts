
import { prisma } from 'zapier-database';
const client = prisma;  

async function main(){
    const users = await client.user.findMany();
    console.log(users);
}