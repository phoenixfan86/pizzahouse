import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Pizza from "@/models/Pizza";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { error: "Could not connect to database" },
      { status: 500 }
    );
  }

  const data = await req.json();

  if (!data.name || !data.price || !data.ingredients || !data.image) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const pizza = new Pizza(data);

  try {
    await pizza.save();
  } catch (error) {
    console.error("Pizza saving error:", error);
    return NextResponse.json(
      { error: "Could not add pizza" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Pizza added successfully", pizza },
    { status: 201 }
  );
}


export async function GET() {
  try {
    await connectToDatabase();
    const pizzas = await Pizza.find();
    console.log("Піци з бази:", pizzas);
    return NextResponse.json(pizzas);
  } catch (error) {
    console.error("Error receiving pizzas:", error);
    return NextResponse.json({ error: "Couldn't get the pizza" }, { status: 500 });
  }
}