import { createContext } from "react";
import { useState } from "react";

export let AuthContext = createContext(null);

function AuthContextProvider(props) {
  const [userData, setuserData] = useState(null);
  return (
    <AuthContext.Provider value={{ userData, setuserData }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
