import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContexts";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const logout = () => {
      // Set user to null and loggedIn to false
      setUser(null);
      setLoggedIn(false);
      handleClose();
    };
  
    return (
        <header>
            <div className="m-5 header-container flex justify-between">
            <h1>NC News</h1>
            <div className="flex items-center space-x-4"> 
                {loggedIn && <p>{user}</p>}
                {loggedIn ? (
                    <>
                      <Avatar onClick={handleClick}>{user[0]}</Avatar>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={logout}>Logout</MenuItem>
                      </Menu>
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