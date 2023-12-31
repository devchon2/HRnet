import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";
import style from "./Table.module.css";
import { createTheme, ThemeProvider } from "@mui/material";


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
    enableColumnFiltersModes: true,
    enableDensityToggle: false,
    enablePagination: true,
    enableToolbar: false,
    enableFullScreenToggle: false,
    manualPagination:false, //optional custom manual pagination
    manualSortBy: false, //optional custom manual sort by
    enableColumnFilters: false, //optional custom column filters
    

    muiTablePaperProps: { //optional custom mui table paper props
      elevation: 4, 
      sx: {
        border: '1px solid #001c30',
        boxShadow: '20px 20px 20px -20px white',
        borderRadius: '15px',
        maxHeight:'95%',
        maxWidth:'65vw',
        margin:'auto',
      },
    },
    

    

    
    muiTableHeadCellProps: { //optional custom mui table head cell props
      sx: {
      color:'white',
      fontSize: '1.5vh',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      
    }},


    muiTableBodyCellProps: { //optional custom mui table body cell props
      sx: {
      textWrap: 'nowrap',
      height: '1vw',
      fontSize: '1.15vh',
      textTransform: 'capitalize',

    },
    },
    
  });

  return (
  <ThemeProvider theme={ createTheme({
    palette: {
      primary: {
        main: "#001c30",
      },
      secondary: {
        main: "#001c30",
      },
    },
  })}>
  <MaterialReactTable  className={style.tableContainer} table={table} />
  </ThemeProvider>
)}