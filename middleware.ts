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

    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Fallback
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/dashboard/:path*',
      missing: [
        {type: 'header', key: 'next-router-prefetch'},
        {type: 'header', key: 'purpose', value: 'prefetch'},
      ],
    },
    {
      source: '/login',
      missing: [
        {type: 'header', key: 'next-router-prefetch'},
        {type: 'header', key: 'purpose', value: 'prefetch'},
      ],
    },
  ],
}
