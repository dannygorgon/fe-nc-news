import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState("jessjelly");
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};
