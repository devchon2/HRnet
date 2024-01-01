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
        sortingFn: (rowA, rowB ) => {
          console.log(rowA.original.startDate)
          console.log(rowB.original.startDate)
          const dateASplitted = rowA.original.startDate.split('/');
          const dateBSplitted = rowB.original.startDate.split('/');
          const dateA = new Date(dateASplitted[2], dateASplitted[1], dateASplitted[0]);
          const dateB = new Date(dateBSplitted[2], dateBSplitted[1], dateBSplitted[0]);
          return dateA - dateB;

        },
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
        filterVariant: 'date',
        format: (date) => new Date(date),
        sortingFn: (rowA, rowB ) => {
          console.log(rowA.original.startDate)
          console.log(rowB.original.startDate)
          const dateASplitted = rowA.original.startDate.split('/');
          const dateBSplitted = rowB.original.startDate.split('/');
          const dateA = new Date(dateASplitted[2], dateASplitted[1], dateASplitted[0]);
          const dateB = new Date(dateBSplitted[2], dateBSplitted[1], dateBSplitted[0]);
          return dateA - dateB;

        },
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
  
  <MaterialReactTable  className={style.tableContainer} table={table} />
  
)}