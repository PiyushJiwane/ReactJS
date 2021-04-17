import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

function DialogeComponent() {
  const [showDialoge, setShowDialoge] = useState(false);
  return (
    <div>
      <Button
        onClick={() => setShowDialoge(true)}
        variant="outlined"
        color="secondary"
      >
        Show Dialoge
      </Button>
      <Dialog
        open={showDialoge}
        onClose={() => setShowDialoge(false)}
        disableBackdropClick
        onEnter={() => console.log("on enter")}
        onEntering={() => console.log("On Entering")}
        onEntered={() => console.log("on entered")}
        onExit={() => console.log("on Exit")}
        onExiting={() => console.log("on Exiting")}
        onExited={() => console.log("on exited")}
      >
        <DialogTitle>Dialoge Title</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            A paragraph is a series of related sentences developing a central
            idea, called the topic. Try to think about paragraphs in terms of
            thematic unity: a paragraph is a sentence or a group of sentences
            that supports one central, unified idea. Paragraphs add one idea at
            a time to your broader argument.
          </DialogContentText>
          <DialogActions>
            <Button variant="contained" color="secondary">
              Agree
            </Button>
            <Button variant="contained" onClick={() => setShowDialoge(false)}>
              Cancle
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogeComponent;
