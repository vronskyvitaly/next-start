'use client'
/**
 * @info authorization example
 * @video https://youtu.be/w2h54xz6Ndw?si=-l7NyF1xdWLS84S2
 * @gitHub https://github.com/gitdagray/next-auth-intro
 */
import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({
  children
}: {
  children: React.ReactNode
}) {
  return <SessionProvider>{children}</SessionProvider>
}
