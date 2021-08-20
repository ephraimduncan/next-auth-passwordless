import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import * as Fauna from "faunadb";
import { FaunaAdapter } from "@next-auth/fauna-adapter";

const client = new Fauna.Client({
  secret: process.env.FAUNA_SECRET,
});

export default NextAuth({
  providers: [
    Providers.Email({
      // server: {
      //   host: process.env.EMAIL_SERVER_HOST,
      //   port: process.env.EMAIL_SERVER_PORT,
      //   auth: {
      //     user: process.env.EMAIL_SERVER_USER,
      //     pass: process.env.EMAIL_SERVER_PASSWORD,
      //   },
      // },
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),

    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  adapter: FaunaAdapter({ faunaClient: client }),
});
