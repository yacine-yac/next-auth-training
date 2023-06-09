import {useSession} from "next-auth/react"

export default function Auth({children}){
    const session =useSession();
    // if(session.data==undefined){return <h1>failed to get session</h1>}

    return session.status ==="loading" 
            ?   <h1>Loading the intire page</h1> 
            : session.status ==="unauthenticated" ?
                <h1>not auth intire page</h1>
            : children ;
}