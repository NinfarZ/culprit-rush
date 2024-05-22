import { NextResponse } from "next/server";
import { map } from "../map";
import { parseArgs } from "util";

export async function GET(request: Request,
    {params}: {params: {location: string}}
) {
    const location = map.find(
        (location) => location.name === params.location
    )
    return NextResponse.json(location);
}

export async function PATCH(request: Request,
    {params}: {params: {location: string}}
) {
    const body = await request.json()
    const { peopleInside } = body
    const index = map.findIndex(
        location => location.name === params.location
    )
    map[index].peopleInside = peopleInside
}