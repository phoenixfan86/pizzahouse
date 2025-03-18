import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/mongodb";

export async function GET() {
  try {
     await connectToDatabase();

   if (!mongoose.connection.db) {
      throw new Error("Database connection is undefined");
    }
    
    const collections = await mongoose.connection.db.listCollections().toArray();
    
    const collectionNames = collections.map(col => col.name);

    return NextResponse.json(collectionNames);
  } catch (error) {
    console.error("Error fetching collections:", error);
    return NextResponse.json({ error: "Couldn't fetch collections" }, { status: 500 });
  }
}
