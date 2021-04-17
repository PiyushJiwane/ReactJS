import { Box, Button, Dialog, TextField, Typography } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import adImg from "./../Images/Screenshot.png";

function DialogComponentEx() {
    const [openDialog, setOpenDialog] = useState(false)
    useEffect(() => {
        const interval=setInterval(()=>{
            setOpenDialog(true)
        },1500)
        return ()=>{
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <Button onClick={()=>setOpenDialog(true)}>Show Offer</Button>
            <Dialog open={openDialog} onClose={()=>setOpenDialog(false)} >
                <Box width="256px" p={2} textAlign="center">
                    <img src={adImg} width="100%" alt="adImg"/>
                    <Typography style={{fontWeight:700,marginTop:10}}>
                        Enter your phone number and avail <span style={{color:"red"}}>10% off</span> on your first order
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        You will receive a discount code via SMS on your phone number
                    </Typography>
                    <TextField variant="outlined" placeholder="Enter Your Name:" fullWidth margin="dense"/>
                    <TextField variant="outlined" placeholder="Enter Your Phone Number:" fullWidth margin="dense"/>
                    <Button variant="contained" color="primary" fullWidth>Submit</Button>
                </Box>
            </Dialog>
        </div>
    )
}

export default DialogComponentEx
