import { Box, Container, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import Person from "@material-ui/icons/Person";
import Message from "@material-ui/icons/Message";

function TextFeildComponent() {
  return (
    <Container>
      <Box component="form" mt={3}>
        <TextField
          fullWidth
          placeholder="Enter Your First Name"
          variant="outlined"
          color="secondary"
          label="First Name"
          helperText="First Name should be 16 char long"
          InputProps={{
              startAdornment:(
                  <InputAdornment position="start">
                    <Person/>
                  </InputAdornment>
              )
          }}
        />
        <TextField
          fullWidth
          placeholder="Enter Your Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          label="Last Name"
        />
        <TextField
          fullWidth
          placeholder="Enter Your Message"
          margin="normal"
          variant="outlined"
          color="secondary"
          label="Your Message"
          multiline
          rows={4}
          helperText="Min 144 Characters"
          InputProps={{
            startAdornment:(
                <InputAdornment position="start">
                  <Message/>
                </InputAdornment>
            )
        }}
        />
      </Box>
    </Container>
  );
}

export default TextFeildComponent;
