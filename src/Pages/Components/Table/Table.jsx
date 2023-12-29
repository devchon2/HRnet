import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";
import style from "./Table.module.css";



export default function EmployeesTable({datas}) {
  

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName", //simple recommended way to define a column
        header: "First Name",
        muiTableHeadCellProps: { sx: { backgroundColor: "#001c30",color:'white' } }, //optional custom mui table head cell props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        muiTableHeadCellProps: { sx: { backgroundColor: "#001c30",color:'white' } }, //optional custom mui table head cell props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
        muiTableHeadCellProps: { sx: { backgroundColor: "#001c30",color:'white' } }, //optional custom mui table head cell props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
      },
      {
        accessorKey: "department",
        header: "Department",
        muiTableHeadCellProps: { sx: { backgroundColor: "#001c30",color:'white' } }, //optional custom mui table head cell props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "birthDate",
        header: "Date of Birth",
        muiTableHeadCellProps: { sx: { backgroundColor: "#001c30",color:'white' } }, //optional custom mui table head cell props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "street",
        header: "Street",
        muiTableHeadCellProps: { sx: { backgroundColor: "#001c30",color:'white' } }, //optional custom mui table head cell props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "city",
        header: "City",
        muiTableHeadCellProps: { sx: { backgroundColor: "#001c30",color:'white' } }, //optional custom mui table head cell props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "abbreviation",
        header: "State",
        muiTableHeadCellProps: { sx: { backgroundColor: "#001c30",color:'white' } }, //optional custom mui table head cell props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      {
        accessorKey: "zip",
        header: "Zip Code",
        muiTableHeadCellProps: { sx: { backgroundColor: "#001c30",color:'white' } }, //optional custom mui table head cell props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render 
      },
      
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: datas,
    enableStickyFooter: true,
    enableStickyHeader: true,
    enableHiding: false,
    enableColumnFilters: false,
    enableDensityToggle: false,
  

  });

  return <MaterialReactTable  className={style.tableContainer} table={table} />;
}