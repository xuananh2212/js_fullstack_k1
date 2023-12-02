import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "vui lòng nhập tên tài khoản",
          required: true,
        },
        email: {
          label: "email:",
          type: "text",
          placeholder: "vui lòng nhập email",
          required: true,
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "vui lòng nhập password",
          required: true,
        },
      },
      async authorize(credentials) {
        const response = await fetch(
          `https://api-social-psi.vercel.app/api/v1/auth`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );
        const data = await response.json();
        console.log(data, "1111");
        if (data.status === 401) {
          return null;
        } else {
          return data;
        }
      },
    }),
  ],
};
