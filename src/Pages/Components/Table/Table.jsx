
import React, { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import style from "./Table.module.css";

/**
 * EmployeesTable Component
 * @param {Object} props - Component props
 * @param {Array} props.datas - Data to be displayed in the table
 * @returns {React.ReactElement} - Rendered component
 */
export default function EmployeesTable({ datas }) {
  
  // useMemo hook to memoize columns configuration  const columns = useMemo(
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
  
  // Configuration for useMaterialReactTable hook
const table = useMaterialReactTable({
  
  columns, // Column configuration
  data: datas, // Data to be displayed in the table
  enableStickyHeader: true, // Enable sticky header for better readability
  enableHiding: false, // Disable the ability to hide columns
  enableColumnFiltersModes: true, // Enable different filter modes for columns
  enableDensityToggle: true, // Enable toggle for changing row density
  enablePagination: true, // Enable pagination for the table
  enableToolbar: false, // Disable the toolbar
  enableFullScreenToggle: false, // Disable the full screen toggle option
  manualPagination: false, // Disable manual control over pagination
  paginationDisplayMode: 'pages', // Set pagination display mode to 'pages'
  manualSortBy: false, // Disable manual control over sorting
  enableColumnFilters: false, // Disable column filters

  // Custom table paper properties
  muiTablePaperProps: {
    elevation: 4,
    sx: {
      border: '1px solid #001c30',
      boxShadow: '20px 20px 20px -20px white',
      borderRadius: '15px',
      maxHeight: '100%',
      maxWidth: '100%',
      margin: 'auto',
    },
  },

  // Custom table head cell properties
  muiTableHeadCellProps: {
    columns: {
      sx: {
        width: 'fit-content',
      },
    },
    sx: {
      color: 'white',
      fontSize: '1.5vh',
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
  },

  // Custom table body cell properties
  muiTableBodyCellProps: {
    sx: {
      textWrap: 'nowrap',
      height: '1vw',
      fontSize: '1.15vh',
      textTransform: 'capitalize',
      width: 'fit-content',
    },
  },

  // Custom column actions button properties
  muiColumnActionsButtonProps: {
    sx: {
      color: 'white',
      fontSize: '1.5vh',
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
  },

  // Custom pagination properties
  muiPaginationProps: {
    rowsPerPageOptions: [10, 25, 50, 100], // Options for rows per page
    showFirstButton: true, // Show button to jump to the first page
    showLastButton: true, // Show button to jump to the last page
  },

  // Custom table body properties
  muiTableBodyProps: {
    sx: {
      maxHeight: '100%',
      maxWidth: '100%',
      margin: 'auto',
      overflow: 'hidden', // Hide overflow to prevent scrolling
    },
  },
});

// Render the MaterialReactTable with the configured settings
return (
  <MaterialReactTable className={style.tableContainer} table={table} />
);
}
