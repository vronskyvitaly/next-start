import NextAuth from 'next-auth'
import { options } from './options'
/**
 * @info authorization example
 * @video https://youtu.be/w2h54xz6Ndw?si=-l7NyF1xdWLS84S2
 * @gitHub https://github.com/gitdagray/next-auth-intro
 */

const handler = NextAuth(options)

export { handler as GET, handler as POST }
