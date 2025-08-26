import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const sets = await prisma.legoSet.findMany()
  return Response.json(sets)
}