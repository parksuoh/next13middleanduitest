import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  let cookie= request.cookies.get('refresh_token')?.value
  console.log(Math.floor(Math.random() * 100))

}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/:path*', '/testa/:path*', '/testb/:path*'],
// }