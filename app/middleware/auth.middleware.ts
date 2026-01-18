import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function authMiddleware(req: NextRequest) {
  const isAdmin = false;

  if (!isAdmin && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
