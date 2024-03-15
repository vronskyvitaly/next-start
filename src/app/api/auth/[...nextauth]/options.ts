import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDB } from '@/utils/db'
import bcrypt from 'bcrypt'
import Users from '@/models/user'

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'email',
          placeholder: 'Your email'
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'Your password'
        }
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        // const user = { id: "42", name: "Dave", password: "nextauth" }
        //
        // if (credentials?.username === user.name && credentials?.password === user.password) {
        //     return user
        // } else {
        //     return null
        // }
        await connectToDB()
        try {
          const user = await Users.findOne({ email: credentials?.email })
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password as string,
              user.password
            )
            if (isPasswordCorrect) {
              return user
            }
          }
        } catch (err: any) {
          throw new Error(err)
        }
      }
    })
  ]
}
