import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  //withAuth augments your 'request' with the users token
  function middleware(request: NextRequestWithAuth) {
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);

    if (
      request.nextUrl.pathname.startsWith("/admins") &&
      request.nextauth.token?.role !== "superadmin" &&
      request.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(
        new URL("/denied",request.url)
      )
    }
  },
  {
    // below allows only admin users to access the dashboard, but anything else is allowed
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admins"],
};
