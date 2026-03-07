//this is accessible anywhere in the app

import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Default User",
});

export default UserContext;