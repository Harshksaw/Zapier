
import { prisma } from '../../../packages/databases'
const client = prisma;  

async function main(){
    const users = await client.user.findMany();
    console.log(users);
}