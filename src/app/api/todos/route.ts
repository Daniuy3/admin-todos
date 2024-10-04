import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import * as yup from "yup";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const skip = Number(searchParams.get("skip") || "0");
  const take = Number(searchParams.get("take") || "10");

  if (isNaN(skip) || isNaN(take)) {
    return new NextResponse(
      JSON.stringify({
        error: "Invalid query params",
      }),
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    skip,
    take,
  });

  return new NextResponse(
    JSON.stringify({
      data: todos,
    }),
    { status: 200 }
  );
}

const postSchema = yup.object({
    description : yup.string().required(),
    completed: yup.boolean().optional().default(false)
})

export async function POST(request : NextRequest){
    
    try {
        const {completed, description} = await postSchema.validate(  await request.json()  )

        const todo = await prisma.todo.create({
            data: {
                description,
                completed
            }
        });

        return new NextResponse(JSON.stringify({
            data: todo
        }), { status: 201 });
    }
    catch{
        return new NextResponse(JSON.stringify({
            error: 'Invalid body'
        }), { status: 400 });
    } 
}
