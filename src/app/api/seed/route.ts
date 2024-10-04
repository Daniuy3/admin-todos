import prisma from '@/lib/prisma'
import { NextResponse} from 'next/server'

export async function GET() { 


  await prisma.todo.deleteMany()

  await prisma.todo.createMany({
    data: [
      {description: "piedra del alma", completed: true},
      {description: "piedra del tiempo"},
      {description: "piedra del espacio"},
      {description: "piedra de la mente"},
      {description: "piedra del poder"},
      {description: "piedra de la realidad"},
    ]
  })

  return new NextResponse(JSON.stringify({
    message: 'Seed Excecuted'
  }), { status: 200 } );
}