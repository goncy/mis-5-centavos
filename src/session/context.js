import React from "react";

import Login from "./screens/Login";
import auth from "./resources";

const SessionContext = React.createContext();

const SessionProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [status, setStatus] = React.useState("init");

  const state = { user };
  const actions = { signOut: auth.signOut, signIn: auth.signIn };

  React.useEffect(
    () =>
      auth.onChange(user => {
        if (user) setUser({ id: user.uid, avatar: user.photoURL, name: user.displayName });

        setStatus("restored");
      }),
    []
  );

  if (!user) return <Login login={actions.signIn} status={status} />;

  return <SessionContext.Provider value={{ state, actions }}>{children}</SessionContext.Provider>;
};

export { SessionProvider as Provider, SessionContext as default };
