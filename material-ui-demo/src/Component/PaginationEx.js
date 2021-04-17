import { Box, Container, CssBaseline } from "@material-ui/core";
import React from "react";
import Pagination from "@material-ui/lab/Pagination";

function PaginationEx() {
  return (
    <div>
      <CssBaseline />
      <Container component={Box} p={3}>
        <Pagination
          count={10}
          color="secondary"
          variant="outlined"
          shape="rounded"
          size="large"
          showFirstButton
          showLastButton
          hideNextButton={true}
          hidePrevButton={true}
          defaultPage={5}
        />
      </Container>
    </div>
  );
}

export default PaginationEx;
