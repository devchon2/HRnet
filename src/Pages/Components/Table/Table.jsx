import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export default function EmployeeTable() {
  const list = useSelector((state) => state.database);

  const [ datas, setDatas ] = useState(list);

  useEffect(() => {
    setDatas(list);
  }
  , [list]);

  console.log(datas);
  console.log(list);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Start Date</TableCell>
          <TableCell>Department</TableCell>
          <TableCell>Date of Birth</TableCell>
          <TableCell>Street</TableCell>
          <TableCell>city</TableCell>
          <TableCell>State</TableCell>
          <TableCell>Zip Code</TableCell>
        </TableHead>
        <TableBody>
          {datas.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.infos.firstName}</TableCell>
              <TableCell>{row.infos.lastName}</TableCell>
              <TableCell>{row.onboarding.startDate}</TableCell>
              <TableCell>{row.onboarding.department}</TableCell>
              <TableCell>{row.infos.dateoofbirth}</TableCell>
              <TableCell>{row.contact.street}</TableCell>
              <TableCell>{row.contact.city}</TableCell>
              <TableCell>{row.contact.state}</TableCell>
              <TableCell>{row.contact.zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
