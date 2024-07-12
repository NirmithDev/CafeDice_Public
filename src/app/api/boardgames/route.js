import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
export async function GET() {
    const client = await clientPromise;
    const db = client.db("core");
    const boardgamesRes = await db.collection("boardgames").find().toArray()
    return NextResponse.json({boardgamesRes})

}