import { Container, Typography } from "@material-ui/core";
import React, { useState } from "react";

function FirebaseAuth() {
    const [user, setUser] = useState({ loggedIn: false });
    if (!user.loggedIn) {
      return <span>User is logged out</span>;
    }
    return <span>User is logged in</span>;
}

export default FirebaseAuth;
