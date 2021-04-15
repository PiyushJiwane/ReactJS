import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormControl,
  Paper,
} from "@material-ui/core";
import React from "react";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteBorder from "@material-ui/icons/Favorite";

function CheckboxComponent() {
  return (
    <Container>
      <Paper component={Box}>
        <Box component="form">
          <FormControl>
            <FormControlLabel
              label="Keep me remeber"
              control={<Checkbox icon={<FavoriteBorderOutlined />} 
              checkedIcon={<FavoriteBorder/>}/>}
            />
          </FormControl>
        </Box>
      </Paper>
    </Container>
  );
}

export default CheckboxComponent;
