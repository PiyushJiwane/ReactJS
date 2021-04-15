import {
  Container,
    Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

function TableComponent() {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Piyush</TableCell>
              <TableCell>Jiwane</TableCell>
              <TableCell>jiwanepiyush@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gaurav</TableCell>
              <TableCell>Jiwane</TableCell>
              <TableCell>gauravjiwane22@gmail.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TableComponent;
