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
  TablePagination,
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

      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table" className={style.table}>      
        <TableHead  className={style.MuiTableHead}>    <TablePagination rowsPerPage={10} page={0} count={10}   />

          <TableRow className={style.MuiTableRowHead} >
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
        <TableBody  className={style.MuiTableBody}>
          {datas.map((row,index) => {
            console.log(row)
            return (
            
            <TableRow 
              key={index + JSONDatas.indexOf(row)}
              
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
      
      </Table>
      <TableFooter>
      </TableFooter>  
    </TableContainer></>
  );
}
