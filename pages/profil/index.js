import {getServerSession} from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
export default function Profil({session}){
 
  const {name}=session?.user;
    return <>
      <h1>Hello in your profil Mr: {name} </h1>
    </>
}
export async function getServerSideProps({req,res}){ 
    const session=await getServerSession(req,res,authOptions);
    // if the session is not exists we will redirect user to another page
    // and keep tracking in url which page that would to visit
      return  session 
      ?  {
        props:{session}
      }
      :{
        redirect:{
          destination:`../direction?h=${req.url}`,
          permanent:false
        }
      }
}