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
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: FaunaAdapter({ faunaClient: client }),
});
