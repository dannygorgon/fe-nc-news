import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

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
            <div className="flex flex-col items-center"> 
                {loggedIn && <p>{user}</p>}
                {loggedIn ? (
                    <>
                      <Avatar>{user[0]}</Avatar>
                      <Button variant="contained" onClick={logout}>Logout</Button>
                    </>
                ) : (
                    <Button variant="contained">Login</Button>
                )}
            </div>
            </div>
        </header>
    )
}

export default Header