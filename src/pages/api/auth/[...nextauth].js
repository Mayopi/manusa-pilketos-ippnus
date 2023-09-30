require("dotenv").config();
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import Admin from "@/models/Admin";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const admin = await Admin.findOne({ username });

        if (!admin) throw Error("Tidak ada Admin yang cocok dengan kredensial!");

        const result = await bcrypt.compare(password, admin.password);

        if (!result) throw Error("Username atau Password salah!");

        return admin;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
