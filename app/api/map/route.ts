import { NextResponse } from "next/server";
import { map } from "./map";

export async function GET() {
    return NextResponse.json(map);
}

export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json({
        data,
    });
}
