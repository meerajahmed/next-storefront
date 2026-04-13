import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  providers: [], // Configured in auth.ts (with Prisma)
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/admin');
      const isOnAuth = nextUrl.pathname.startsWith('/sign-in') || nextUrl.pathname.startsWith('/sign-up');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isOnAuth) {
        if (isLoggedIn) {
          return Response.redirect(new URL('/', nextUrl));
        }
        return true;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
