import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
export function middleware(request: NextRequest) {

// i would like to check if the user is logged in or not
// if the user is logged in i would like to redirect him to the admin page

  const token = cookies().get('token')

  if (!token ){
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }


  //secure app routes verify all cookies before allowing access
  return NextResponse.next()

}

export const config = {
  matcher : ['/admin/:path*']
} 
