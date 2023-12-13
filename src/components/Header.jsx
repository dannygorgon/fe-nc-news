import { useContext } from "react"
import { UserContext } from "../../contexts/UserContexts"
import Button from '@mui/material/Button';
const Header = () => {
    const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);

    const logout = () => {
      // Set user to null and loggedIn to false
      setUser(null);
      setLoggedIn(false);
    };
  
  
    return (
        <header>
            <div className="m-5 header-container flex justify-between">
            <h1>NC News</h1>
            <div className="flex flex-col items-center justify-center"> 
                {loggedIn && <p>Logged in as {user}</p>}
                {loggedIn ? (
                    <Button variant="contained" onClick={logout}>Logout</Button>
                ) : (
                    <Button variant="contained">Login</Button>
                )}
            </div>
            </div>
           

        </header>
    )
}

export default Header