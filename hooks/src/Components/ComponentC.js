import React from "react";
import ComponentE from "./ComponentE";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function ComponentC() {
  return (
    <div>
      <UserContext.Provider value={'piyush jiwane'}>
        <ChannelContext.Provider value={'ABC'}>
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentC;
