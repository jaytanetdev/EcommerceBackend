import { Prisma,PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export {db,Prisma};
