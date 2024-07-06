import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { authConfig } from "./auth.config";
import mongoClientPromise from "./database/mongoClientPromise";
import { userModel } from "./models/user-model";


async function refreshAccessToken(token) {
  try {
    const url = "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token?.refreshToken
      })

    const response = await fetch(url, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
    });

    const refreshedToken = await response.json();

    if (!response.ok) {
      throw refreshedToken
    }

    return {
      ...token,
      accessToken: refreshedToken?.access_token,
      accessTokenExpires: Date.now() + refreshedToken?.expires_in * 1000,
      refreshToken: refreshedToken?.refresh_token,
    }

  } catch (error) {

    return {
      ...token,
      error: "RefreshAccessTokenError"
    }
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.DATABASE_NAME
  }),

  ...authConfig,

  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {}
      },

      async authorize(credential) {
        if (credential == null) {
          return null;
        }

        try {
          const user = await userModel.findOne({ email: credential.email });

          if (user?.email && user?.password) {
            const isMatch = await bcrypt.compare(credential.password, user?.password);

            if (isMatch) {
              return user
            } else {
              throw new Error("Username or Password is incorrect!")
            }
          } else {
            throw new Error(`User not found with this email address: ${credential.email}`)
          }
        } catch (error) {
          throw new Error(`Something went Wrong!, try again.`)
        }
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        // params: {
        //   prompt: "concent",
        //   access_type: "offline",
        //   response_type: "code"
        // }
      }
    })
  ],

  callbacks: {
    async jwt({ user, token, account }) {

      if (user && account) {  // we will get the account details once in login and it will find in token
        return {
          accessToken: account?.access_token,
          accessTokenExpires: Date.now() + account?.expires_in * 1000,
          refreshToken: account?.refresh_token,
          user,
        }
      }

      if (Date.now() < token?.accessTokenExpires) {
        return token;   // if token is not expires, return same token
      }

      return refreshAccessToken(token);
    },

    async session({ session, token }) {

      session.user = token?.user;
      session.user.id = token?.user?._id || token?.user?.id;
      session.accessToken = token?.accessToken;
      session.error = token?.error;



      return session;
    }
  }
})