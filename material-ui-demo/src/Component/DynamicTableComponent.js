import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";

function DynamicTableComponent() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const loadUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const onChangePage=(e,nextPage)=>{
    setPage(nextPage);
  }

  const onChangeRowsPerPage=(e)=>{
      setRowsPerPage(e.target.value)
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Zipcode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((user) => (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address.zipcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,15,20,50]}
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </Container>
  );
}

export default DynamicTableComponent;
