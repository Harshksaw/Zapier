// packages/database/src/index.ts
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// Export all types from Prisma client
export * from '@prisma/client';