import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.legoSet.createMany({
    data: [
      {
        name: 'The Cherry Blossom Garden',
        ownedBy: 'Quentin',
        year: 2024,
        pieceCount: 298,
        theme: 'Minecraft',
        imageUrl: null,
      },
      {
        name: 'Camp Nou FC Barcelona',
        ownedBy: 'Papa',
        year: 2021,
        pieceCount: 5509,
        theme: 'Creator Expert',
        imageUrl: null,
      },
      {
        name: 'Pretty Pink Flower Bouquet',
        ownedBy: 'Maman',
        year: 2025,
        pieceCount: 749,
        theme: 'Botanicals',
        imageUrl: null,
      }
    ]
  })
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())