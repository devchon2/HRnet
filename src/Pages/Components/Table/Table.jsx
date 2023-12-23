import React, { useState, useEffect } from "react";
import style from "./Table.module.css";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Pagination,
  TableFooter,
  capitalize,
} from "@mui/material";
import JSONDatas from "../../../utils/mockDatas.json"

export default function EmployeeTable() {
  const list = useSelector((state) => state.database);

  const [datas, setDatas] = useState(JSONDatas);

  useEffect(() => {
    setDatas(JSONDatas);
  }
  , [JSONDatas]);

  return (
    <>
    <TableContainer component={Paper} className={style.tableContainer}>
          <Pagination defaultPage={3}  />

      <Table sx={{ minWidth: 650 }}stickyHeader aria-label="simple table" className={style.table}>      
        <TableHead  className={style.MuiTableHead}>
          <TableRow className={style.MuiTableRow} >
            <TableCell className={style.MuiTableCell} >First Name</TableCell>
            <TableCell className={style.MuiTableCell}>Last Name</TableCell>
            <TableCell className={style.MuiTableCell}>Start Date</TableCell>
            <TableCell className={style.MuiTableCell}>Department</TableCell>
            <TableCell className={style.MuiTableCell}>Date of Birth</TableCell>
            <TableCell className={style.MuiTableCell}>Street</TableCell>
            <TableCell className={style.MuiTableCell}>City</TableCell>
            <TableCell className={style.MuiTableCell}>State</TableCell>
            <TableCell className={style.MuiTableCell}>Zip Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((row,index) => {
            console.log(row)
            return (
            
            <TableRow
              key={index + JSONDatas.indexOf(row)}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell >{capitalize(row.infos.firstName) }</TableCell>
              <TableCell>{capitalize(row.infos.lastName)}</TableCell>
              <TableCell>{row.onboarding.startDate}</TableCell>
              <TableCell>{capitalize(row.onboarding.department)}</TableCell>
              <TableCell>{row.infos.birthDate}</TableCell>
              <TableCell>{capitalize(row.contact.street)}</TableCell>
              <TableCell>{capitalize(row.contact.city)}</TableCell>
              <TableCell>{capitalize(row.contact.state.abbreviation)}</TableCell>
              <TableCell>{capitalize(row.contact.zip)}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      <TableFooter>
      </TableFooter>  
      </Table>
      
    </TableContainer></>
  );
}
