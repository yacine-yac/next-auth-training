import NextAuth from "next-auth";
import Githubrovider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions={
    providers:[
        Githubrovider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        // CredentialsProvider({
        //     async  authorize(credentials){
        //             const mainCredentials={
        //                 email:credentials.email,
        //                 password:credentials.password
        //             }
        //             const requesting=await fetch("/Api/auth/checking",{body:mainCredentials,method:"POST"})
        //             const response=await requesting.json();
        //             return response.status ? response.session : null;
        //     }
        // })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async  seginIn(context){console.log("1>>>>",context); return true},
        async redirect(context){console.log("2>>>>",context);return context.baseUrl},
        async session(context){console.log("3>>>>",context); return context.session},
        async jwt(context){console.log("4>>>>",context);return context.token},

    }
}

export default NextAuth(authOptions);