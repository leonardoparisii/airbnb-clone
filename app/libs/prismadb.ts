import { PrismaClient } from "@prisma/client";
// This is good to use for hot reload in next 13

declare global{
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client;