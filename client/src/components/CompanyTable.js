import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('/api/customers')
      .then(res => setRows(res.data))
      .catch(err => console.log(err))
  });

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440, overflow: 'scroll'}}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>기업명</StyledTableCell>
            <StyledTableCell>홈페이지</StyledTableCell>
            <StyledTableCell>연락처</StyledTableCell>
            <StyledTableCell>대표</StyledTableCell>
            <StyledTableCell>수정</StyledTableCell>
            <StyledTableCell>삭제</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.website}</StyledTableCell>
              <StyledTableCell>{row.contact}</StyledTableCell>
              <StyledTableCell>{row.owner}</StyledTableCell>
              <StyledTableCell><Edit/></StyledTableCell>
              <StyledTableCell><Delete/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}