import * as yup from "yup";
import { NextRequest, NextResponse } from "next/server";
import { error } from "console";
import { Todo } from "@prisma/client";
interface segmentsI {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  return todo;
};

export async function GET(request: NextRequest, segments: segmentsI) {
  const todo = await getTodo(segments.params.id);

  if (!todo) {
    return new NextResponse(
      JSON.stringify({
        error: "Todo not founded",
      }),
      { status: 404 }
    );
  }

  return new NextResponse(
    JSON.stringify({
      data: todo,
    }),
    { status: 200 }
  );
}

const postSchema = yup.object({
  description: yup.string().optional(),
  completed: yup.boolean().optional(),
});

export async function PUT(request: NextRequest, segments: segmentsI) {
  const { id } = segments.params;

  const todo = await getTodo(id);

  if (!todo) {
    return new NextResponse(
      JSON.stringify({
        error: "Todo not founded",
      }),
      { status: 404 }
    );
  }

  try {
    const { completed, description } = await postSchema.validate(
      await request.json()
    );

    await prisma.todo.update({
      where: { id },
      data: {
        description: description || todo.description,
        completed: completed,
      },
    });

    return new NextResponse(
      JSON.stringify({
        message: "Todo Updated",
      }),
      { status: 200 }
    );
  } catch {
    return NextResponse.json(error, { status: 400 });
  }
}
