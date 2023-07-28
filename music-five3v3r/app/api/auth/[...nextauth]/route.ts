import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

console.log(process.env.COGNITO_ISSUER);
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID || "",
      clientSecret: process.env.COGNITO_CLIENT_SECRET || "",
      issuer: process.env.COGNITO_ISSUER,
    }),
    // ...add more providers here
  ],
});

export { handler as GET, handler as POST };
