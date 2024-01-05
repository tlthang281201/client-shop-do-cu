import { NextResponse } from "next/server";

export function middleware(request) {
  let cookie = request.cookies.get("user");
  let url = request.nextUrl.pathname;
  // Listen to inserts
  // console.log(JSON.parse(cookie.value).role);

  if (url.startsWith("/user") || url.startsWith("/dang-tin")) {
    if (cookie) {
      return NextResponse.next();
    } else {
      const returnUrl = request.nextUrl.pathname;
      return NextResponse.redirect(
        new URL(
          `/dang-nhap?return=${encodeURIComponent(returnUrl)}`,
          request.url
        )
      );
    }
  }
  if (url.startsWith("/dang-nhap") || url.startsWith("/dang-ky")) {
    if (cookie) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.next();
    }
  }
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
    "/((?!api|_next/static|_next/image).*)",
  ],
};
