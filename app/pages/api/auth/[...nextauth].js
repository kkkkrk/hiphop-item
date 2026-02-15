import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import { connectDB } from '../../../util/database'; // Adjust path as needed

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23liKdspmvLZRN9VD5',
            clientSecret: '4ce6ef6c9d815a3da465de1050d5ef953228fdb0',
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const client = await connectDB;
                const db = client.db('forum'); // Assuming your database name is 'forum'

                let user = await db.collection('user').findOne({ email: credentials.email });

                if (!user) {
                    return null;
                }

                const checkPassword = await bcrypt.compare(credentials.password, user.password);

                if (checkPassword) {
                    // Return user object without sensitive information
                    return { id: user._id.toString(), name: user.name, email: user.email };
                } else {
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        session: async ({ session, token }) => {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
            return session;
        }
    },
    secret: 'dudwns123'
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };