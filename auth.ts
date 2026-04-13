import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/db/prisma';
import Credentials from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts-edge';
import { authConfig } from './auth.config';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials === null) return null;

        // Find user by email
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });

        // Check if user exists and has a password
        if (user && user.password) {
          const isMatch = compareSync(
            credentials.password as string,
            user.password
          );

          // If password matches, return user
          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }

        // If user not found or password doesn't match
        return null;
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async session({ session, user, token }: any) {
      // Set the user ID and role from the token
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.name = token.name;

      return session;
    },
    async jwt({ token, user, trigger, session }: any) {
      // Assign user fields to the token
      if (user) {
        token.role = user.role;

        // If user has no name then use the first part of email
        if (user.name === 'NO_NAME') {
          token.name = user.email!.split('@')[0];

          // Update database to reflect this change
          await prisma.user.update({
            where: { id: user.id },
            data: { name: token.name },
          });
        }
      }

      return token;
    },
  },
});
