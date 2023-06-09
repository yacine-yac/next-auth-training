import Link from 'next/link';
export default function Redirecting(){
    return <>
     <h1>Hello user, you don't have the permission to acces to this ressources</h1>
     <Link href="/" >Please Go Back</Link>
    </>
}