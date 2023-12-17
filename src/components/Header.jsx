import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContexts";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

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
    setUser(null);
    setLoggedIn(false);
    handleClose();
  };

  return (
    <header>
      <div className="header-container flex items-center justify-between bg-red-800 p-8">
        <Link
          className="text-2xl text-white font-bold hover:text-blue-500"
          to="/"
        >
          NC News
        </Link>
        <Link
          className="text-lg text-white font-extrabold hover:text-blue-500"
          to="/topics"
        >
          Topics
        </Link>
        <div className="flex items-center text-lg text-white space-x-4 font-extrabold">
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
  );
};

export default Header;
