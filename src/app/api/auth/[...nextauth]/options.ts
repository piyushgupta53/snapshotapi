import prisma from "@/lib/prisma";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  events: {
    signIn: async ({ user }) => {
      await prisma.user.findUnique({
        where: {
          email: user.email!,
        },
        select: {
          id: true,
        },
      });
    },
  },
  callbacks: {
    async signIn({ profile }) {
      try {
        await prisma.user.upsert({
          where: { email: profile?.email ?? "" },
          update: { name: profile?.name ?? "" },
          create: {
            email: profile?.email ?? "",
            name: profile?.name ?? "",
          },
        });
        return true;
      } catch (error) {
        console.error("Error during sign in:", error);
        return false;
      }
    },

    async session({ session }) {
      if (session.user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email ?? "" },
          select: { id: true },
        });

        if (dbUser) {
          session.user.id = dbUser.id;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};
