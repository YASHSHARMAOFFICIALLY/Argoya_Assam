import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  adapter: PrismaPg | undefined;
};

const connectionString = process.env.DATABASE_URL;

if (!globalForPrisma.adapter) {
  const pool = new Pool({ connectionString });
  globalForPrisma.adapter = new PrismaPg(pool);
}

export const db = globalForPrisma.prisma || new PrismaClient({ adapter: globalForPrisma.adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
