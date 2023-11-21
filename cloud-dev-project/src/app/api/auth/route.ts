// import { NextRequest } from "next/server";
// export async function GET(request: NextRequest) {
//     const authToken = request.cookies.get("authToken");
//     const res = {
//         statusCode: 200,

//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers': '*',
//         },
//         body: JSON.stringify({ ...authToken })
//     }
//     return new Response(JSON.stringify({ ...authToken }));
// }

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Extract the value of the 'authToken' cookie
  const authToken = request.cookies.get('authToken');

  // Your logic here...

  // Prepare the response
  const res = NextResponse.json({ authToken });

  // Set CORS headers
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Headers', '*');

  return res;
}
