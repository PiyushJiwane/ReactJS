import { Box, Container, Icon, Paper } from '@material-ui/core'
import React from 'react'
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined';
import AccountBalanceRounded from '@material-ui/icons/AccountBalanceRounded';

function IconsComponent() {
    return (
        <div>
            <Container>
                <Paper component={Box} p={3}>
                    <Icon color="primary" style={{fontSize:150}}>app_settings_alt</Icon>
                    <Icon style={{fontSize:150,color:orange[700]}}>android</Icon>
                    <span class="material-icons" style={{fontSize:100}}>account_circle</span>
                    <Icon style={{fontSize:300}}>account_circle</Icon>
                    <Icon style={{fontSize:150,color:red[700]}}>supervised_user_circle</Icon>
                    <AccountBalance style={{fontSize:150,color:red[700]}}/>
                    <AccountBalanceOutlined style={{fontSize:150,color:red[700]}}/>
                    <AccountBalanceRounded style={{fontSize:150,color:red[700]}}/>
                </Paper>
            </Container>
        </div>
    )
}

export default IconsComponent
