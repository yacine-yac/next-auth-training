export default function Login(){
    return <>
            <form>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit" onClick={(e)=>e.preventDefault()}>Send</button>
            </form>
    </>
}