import style from "./nav.module.css"
import Link from "next/link";
import { signIn,signOut ,useSession } from "next-auth/react"; 
function Navbar(){
    const {status}=useSession();
    console.log(status);
    return <>
        <div className={style.nav}>
            <Link href='/profil'>profil</Link>
           {
                status=="unauthenticated" 
                ?
                <button onClick={()=>signIn("github")}>SIgn</button>
                :
                <button onClick={()=>signOut()}>SignOut</button>
           } 
        </div>
    </>
}
export default Navbar;