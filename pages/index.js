import Navbar from "../__components/Navbar";
import Login from "../__components/login";
import Welcom from "../__components/welcom"; 
import { useSession } from "next-auth/react";
function Home() {
  const session=useSession();
  console.log('seee',session);
  return (<>
            <h1>you are {session.data ? "IN" : "out"} </h1> 
            <Navbar />
          {session.data ? <Welcom /> : <Login />} 
  </> );
}

Home.controlling=true;
export default Home;