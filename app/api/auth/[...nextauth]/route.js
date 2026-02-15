import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

const { handlers: { GET, POST } } = NextAuth({
    providers: [
        Github({
            clientId: "Ov23liKdspmvLZRN9VD5",
            clientSecret: "2ace5862affff81a30790e9bdd2ec962cad8c853",
        })
    ],
    secret: "secr3t" // Ideally this should be in .env
})

export { GET, POST }
