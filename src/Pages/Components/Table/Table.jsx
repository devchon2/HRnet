import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";
import JSONDatas from "../../../utils/mockDatas.json";
import style from "./Table.module.css";
import { useSelector } from "react-redux";



export default function EmployeesTable() {
  // const JSONDatas = useSelector((state) => state.database);



  const flated = JSONDatas.flatMap((item) => {
    const { infos, contact, onboarding } = item;
    const { firstName, lastName, birthDate,  } = infos;
    const { street, city, state , zip } = contact;
    const { abbreviation } = state;
    const { startDate,department} = onboarding;
    return {
      firstName,
      lastName,
      birthDate,
      department,
      street,
      city,
      abbreviation,
      zip,
      startDate
    };
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName", //simple recommended way to define a column
        header: "First Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        muiTableHeadCellProps: { sx: { color: "blue" } },
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
        muiTableHeadCellProps: { sx: { color: "red" } },
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorKey: "department",
        header: "Department",
        muiTableHeadCellProps: { sx: { color: "purple" } },
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "birthDate",
        header: "Date of Birth",
        muiTableHeadCellProps: { sx: { color: "purple" } },
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "street",
        header: "Street",
        muiTableHeadCellProps: { sx: { color: "purple" } },
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "city",
        header: "City",
        muiTableHeadCellProps: { sx: { color: "purple" } },
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "abbreviation",
        header: "State",
        muiTableHeadCellProps: { sx: { color: "purple" } },
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "zip",
        header: "Zip Code",
        muiTableHeadCellProps: { sx: { color: "purple" } },
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: flated,
    enableColumnDragging: true,
    enableColumnFilter: true,
    enableColumnSorting: true,
    enableRowSelect: true,
    enableRowExpand: true,
    enablePagination: true,
    enableColumnResize: true,
  

  });

  return <MaterialReactTable rowsp className={style.tableContainer} table={table} />;
}