import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
    const authToken = request.cookies.get("authToken");
    const res = {
        statusCode: 200,

        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        body:NextResponse.json({ ...authToken })
    }
    return NextResponse.json({ ...authToken });
}

