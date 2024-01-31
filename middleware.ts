import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export async function middleware(request: NextRequest) {
  // Pass through if you dont have any auth cookie
  if (
    !request.cookies.has('access-token') &&
    !request.cookies.has('refresh-token')
  ) {
    // Redirect un-authorize
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', request.url))
    } else if (request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.next()
    }
  }

  // Fetch Auth
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth', {
      mode: 'cors',
      method: 'GET',
      credentials: 'include',
      headers: {
        // Include cookies from the incoming request
        Cookie: request.cookies.toString() || '',
        // Add any other necessary headers
        'Content-Type': 'application/json',
      },
    })

    // Validation for Dashboard
    if (response.ok && request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.next()
    }

    // Validation for Login page
    if (request.nextUrl.pathname.startsWith('/login')) {
      if (response.ok) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      } else {
        return NextResponse.next()
      }
    }
  } catch (error) {
    // Handle error auth fetch
    console.error('Error fetch auth')
    return NextResponse.next()
  }

  // Fallback
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}
