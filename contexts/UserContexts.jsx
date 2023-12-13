import { createContext } from "react";


export const UserContext = createContext();

export const UserProvider = (props) => {
    console.log(props);
    return <UserContext.Provider value={{user: "dannycodes"}}>{props.children}</UserContext.Provider>
}