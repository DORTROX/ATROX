import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Mongo } from "@/lib/connectMongo";
import { User } from "@/models/User";

async function searchById(id) {
  try {
    const user = await User.findOne({ GoogleId: id });
    if (user) {
      return user;
    }
    return false;
  } catch {
    return false;
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.id_token) {
        await Mongo();
        const exists = await searchById(account.providerAccountId);
        if (exists == false) {
          const NewUser = await new User({
            GoogleId: account.providerAccountId,
            Name: profile.name,
            Email: profile.email,
            Token: account.id_token,
            Image: profile.picture,
          });
          await NewUser.save();
          token.user = NewUser.toObject();  // Convert to plain JavaScript object
          return token;
        }
        token.user = exists.toObject();  // Convert to plain JavaScript object
        return token;
      }
      return token;
    }
,    
    async session({ session, token}) {
      session.user = token;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
