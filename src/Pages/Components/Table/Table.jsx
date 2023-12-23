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
} from "@mui/material";
import JSONDatas from "../../../utils/mockDatas.json"

export default function EmployeeTable() {
  const list = useSelector((state) => state.database);

  const [datas, setDatas] = useState(list);

  useEffect(() => {
    setDatas(list);
  }
  , [list]);

  return (
    <>
    <TableContainer component={Paper} className={style.tableContainer}>
          <Pagination defaultPage={3}  />

      <Table sx={{ minWidth: 650 }} aria-label="simple table" className={style.table}>      
        <TableHead  className={style.MuiTableHead}>
          <TableRow className={style.MuiTableRow} >
            <TableCell className={style.MuiTableCell} >First Name</TableCell>
            <TableCell className={style.MuiTableCell}>Last Name</TableCell>
            <TableCell className={style.MuiTableCell}>Start Date</TableCell>
            <TableCell className={style.MuiTableCell}>Department</TableCell>
            <TableCell className={style.MuiTableCell}>Date of Birth</TableCell>
            <TableCell className={style.MuiTableCell}>Street</TableCell>
            <TableCell className={style.MuiTableCell}>city</TableCell>
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
              <TableCell >{row.infos.firstName }</TableCell>
              <TableCell>{row.infos.lastName}</TableCell>
              <TableCell>{row.onboarding.startDate}</TableCell>
              <TableCell>{row.onboarding.department}</TableCell>
              <TableCell>{row.infos.birthDate}</TableCell>
              <TableCell>{row.contact.street}</TableCell>
              <TableCell>{row.contact.city}</TableCell>
              <TableCell>{row.contact.state.abbreviation}</TableCell>
              <TableCell>{row.contact.zip}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      <TableFooter>
      </TableFooter>  
      </Table>
      
    </TableContainer></>
  );
}
