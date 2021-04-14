import { createMuiTheme } from "@material-ui/core";
import { brown, cyan, teal } from "@material-ui/core/colors";

const theme=createMuiTheme({
    typography:{
      fontFamily:[
          "Open Sans Condensed","sans-serif"
      ].join(",")  
    },
    palette:{
        primary:teal,
        secondary:cyan
    }
})

export default theme;