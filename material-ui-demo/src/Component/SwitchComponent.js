import { Container, FormControlLabel, Grid, Switch, Typography } from "@material-ui/core";
import React,{useState} from "react";


function SwitchComponent() {
    const [autoplay, setAutoplay] = useState(false)
  return (
    <Container>
        <FormControlLabel label="auto play : " control={<Switch onChange={e=>setAutoplay(e.target.checked)}/>}/>
        <Typography>{autoplay?"play all videos":"dont play"}</Typography>
    </Container>
  );
}

export default SwitchComponent;
