import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoClientPromise from "./database/mongoClientPromise";
import { userModel } from "./models/user-model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.DATABASE_NAME
  }),

  session: {
    strategy: "jwt",
    maxAge: 3600
  },

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
    })
  ],
})