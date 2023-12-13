import { useContext } from "react"
import { UserContext } from "../../contexts/UserContexts"

const Header = () => {
    const {user} = useContext(UserContext);
  
    return (
        <header>
            <h1>NC News</h1>
            <p>Logged in as {user}</p>
     
        </header>
    )
}

export default Header