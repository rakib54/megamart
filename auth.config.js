export const authConfig = {
  session: {
    strategy: "jwt",
    maxAge: 3600
  },
  providers: [],
  trustHost: process.env.NODE_ENV === 'development' ? ['localhost:3000'] : ['megamart-shopping.vercel.app'],
}