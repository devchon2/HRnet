import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import style from "./Table.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";


/**
 * Theme configuration for the table component.
 */
const theme = createTheme({
  components: {
    MuiPaper: {      // Paper component for the table container.

      styleOverrides: {
        root: {          // Overrides the default styles for the root element.

          display: "flex",
          flexDirection: "column",
          margin: "2vw 5%",
          borderRadius: "20px",
          height: "fit-content",
          width: "95%",
          maxHeight: "90%",
          backgroundColor: "#001C30 !important",
          "& > .MuiBox-root": { // Overrides the default styles for the box element.
            height: "5%",
            width: "100%",
            borderRadius: 0,
            backgroundColor: "#001C30",
            "& > .MuiBox-root": { // Overrides the default styles for the children box element.
              backgroundColor: "#001C30",
              height: "100%",
              "& > .MuiBox-root": { // Overrides the default styles for the children box element.
                width: "100%",
                "& > .MuiTablePagination-root": { // Overrides the default styles for the pagination component.
                  width: "100%",
                },
              },
            },
          },
        },
      },
    },
    MuiTableContainer: {      // Table container component.

      styleOverrides: {
        root: {
          flexGrow: 1,
          flexShrink: 1,
          maxWidth: "100%",
        },
      },
    },
    MuiTable: {      // Table component.

      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "100%",
          height: "100%",
        },
      },
    },
    MuiTableHead: {      // Table head component.

      styleOverrides: {
        root: {
          position: "sticky",
          display: "flex",
          width: "100%",
          maxWidth: "100%",
          height: "5%",
          backgroundColor: "#001C30",
        },
      },
    },
    MuiTableFooter: {      // Table footer component.

      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },
    MuiTableBody: {     // Table body component.
      styleOverrides: {
        root: {         // Overrides the default styles for the root element.
          height: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          '&> tr > td': { // Overrides the default styles for the paragraph element.
            display:'flex',
            justifyContent:'center',
            '& > p ':{
            color: 'white',
            fontSize: '0.8vw',
            fontWeight: 'normal',
            justifyContent:'center',
          },
          },
        },
    },
  },
    MuiSelect: {     // Select component.
      styleOverrides: {
        select: {    // Overrides the default styles for the select element.
          color: "white",
          fontSize: "0.8vw",
          fontWeight: "normal",
          "&:focus": { // Overrides the default styles for the focus state.
            backgroundColor: "transparent",
          },
        },
        icon: {   // Overrides the default styles for the icon element.
          color: "white",
        },
      },
    },
    MuiFormLabel: {    // Form label component.
      styleOverrides: { 
        root: {   // Overrides the default styles for the root element.
          color: "white",
          fontSize: "0.8vw",
          fontWeight: "normal",
          "&.Mui-focused": {
            color: "white",
          },
        },
      },
    },
    MuiTableRow: {   // Table row component.
      styleOverrides: {
        root: {  // Overrides the default styles for the root element.
          display: "flex",
          width: "100%",
        },
        head: { // Overrides the default styles for the head element.
          backgroundColor: "#001C30",
        },
      },
    },
    MuiOutlinedInput: {  // Outlined input component.
      styleOverrides: {
        root: { // Overrides the default styles for the root element.
          color: "white",
          fontSize: "0.8vw",
          fontWeight: "normal",
          "& .MuiOutlinedInput-notchedOutline": { // Overrides the default styles for the notched search outline element.
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": { // Overrides the default styles for the notched outline element on hover.
            borderColor: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { // Overrides the default styles for the notched outline element on focus.

            borderColor: "white",

          }
        }
      }
    },

    MuiInputAdornment: { // Input adornment component.
      styleOverrides: {
        root: {
          svg: { // Overrides the default styles for the svg element.
            color: "white",
          },
      },
    },
  },

    MuiTableCell: { // Table cell component.
      styleOverrides: {
        root: { // Overrides the default styles for the root element.
          fontSize: "0.6vw",
          flexShrink: 1,
          flexGrow: 1,
          textAlign: "center",
          alignItems: "center",
          padding: "5px",
        },
        head: { // Overrides the default cells for the head element.
          color: "#fff",
          backgroundColor: "#001c30 !important",
          justifyContent: "space-around",
          fontSize: "0.7vw",
          padding: "5px 2px !important",
          "& .Mui-TableHeadCell-Content": { // Overrides the default styles for the table head cell content element.
            justifyContent: "space-between",
            textAlign: "center",
            fontWeight: "bold",

            "&-Labels": { // Overrides the default styles for the table head cell content labels element.
              position: "relative",
              left: "1vw",
              alignItems: "center",
            },
            "&-Actions": { // Overrides the default styles for the table head cell content Svg element.
              position: "relative",
              fill: "white",
              right: 0,
              "& .MuiIconButton-root": { // Overrides the default styles for the icon button element.
                color: "white",
              },
            },
          },
        },
      },
    },
    MuiTableSortLabel: { // Table sort label component.
      styleOverrides: {
        root: {
          "& .MuiTableSortLabel-icon": { // Overrides the default styles for the table sort label icon element.
            fill: "white",
          },
        },
      },
    },
    MuiMenu: { // Menu component.
      styleOverrides: {
        paper: { // Overrides the default styles for the paper element.
          backgroundColor: "#001C30", 
          color: "white",
          margin: 0,
          width: "fit-content",
          height: "fit-content",
          position: "absolute",
          borderRadius: "0",
        },
        list: { // Overrides the default styles for the list element.
          padding: "0",
          margin: "0",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
      },
    },
    MuiMenuItem: { // Menu item component.
      styleOverrides: {
        gutters: { // Overrides the default styles for the li element.
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          "&:hover": {
            backgroundColor: "#001C30",
          },
        },
      },
    },
    MuiListItemIcon: { // List item icon component.
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiBox: { // Box component.
      styleOverrides: {
        root: { // Overrides the default styles for the root element.
          backgroundColor: "#001C30",
        },
      },
    },
    MuiButtonBase: { // Button base component.
      styleOverrides: {
        root: {
          "&.MuiIconButton-root": { // Overrides the default styles for the icon button element.
            color: "white",
          },
        },
      },
    },
    MuiTablePagination: { // Table pagination block.
      styleOverrides: {
        root: { // Overrides the default styles for the root element.
          width: "100%",
          justifyContent: "space-between",
        },
      },
    },
    MuiTypography: { // Typography component.
      styleOverrides: {
        body2: {
          color: "white",
          position:'absolute',
          left:'50%',
          translate:'-50%',

        },
      },
    },
  },
});



/**
 * Main functional component to render an employee data table.
 * Utilizes 'MaterialReactTable' for a rich UI experience with custom theming.
 *
 * @param {Array} props.datas - Collection of employee data to be displayed.
 * @returns {React.ReactElement} - The fully configured and styled data table.
 */
export default function EmployeesTable({ datas }) {

  /**
 * Functional component to render individual cell content in bold.
 *
 * @param {string} props.renderedCellValue - The text content for the cell.
 * @returns {React.ReactElement} - A strong element wrapping the cell value.
 */
const RenderedCell = ({ renderedCellValue }) => (
  <strong>{renderedCellValue}</strong>
);


  // Defines the column configuration for the table, utilizing useMemo for performance.
  const columns = useMemo(
    () => [
      // Each object within this array configures a column of the table.

      {
        accessorKey: "firstName", // Identifies the data field for this column.
        header: "First Name", // Sets the display name for the header.
        Cell: RenderedCell, // Custom render function for cell content.
      },
      { accessorKey: "lastName", header: "Last Name", Cell: RenderedCell },
      {
        accessorKey: "startDate",
        header: "Start Date",
        Cell: RenderedCell,

        // Custom sorting function to handle dates in DD/MM/YYYY format.
        sortingFn: (rowA, rowB) => {
          const splittedDateA = rowA.original.startDate.split("/");
          const splittedDateB = rowB.original.startDate.split("/");

          const dateA = splittedDateA[2] + splittedDateA[0] + splittedDateA[1];
          const dateB = splittedDateB[2] + splittedDateB[0] + splittedDateB[1];


          return dateA - dateB;
        },
      },
      { accessorKey: "department", header: "Department", Cell: RenderedCell },
      {
        accessorKey: "birthDate",
        header: "Date of Birth",
        Cell: RenderedCell,
        // Custom sorting function to handle dates in DD/MM/YYYY format.
        sortingFn: (rowA, rowB) => {
          console.log(rowA, "rowA");

          const splittedDateA = rowA.original.birthDate.split("/");
          const splittedDateB = rowB.original.birthDate.split("/");

          const dateA = splittedDateA[2] + splittedDateA[0] + splittedDateA[1];
          const dateB = splittedDateB[2] + splittedDateB[0] + splittedDateB[1];

          console.log(dateA, "dateA");
          console.log(dateB, "dateB");
          return dateA - dateB;
        },
      },
      { accessorKey: "street", header: "Street", Cell: RenderedCell },
      { accessorKey: "city", header: "City", Cell: RenderedCell },
      { accessorKey: "abbreviation", header: "State", Cell: RenderedCell },
      { accessorKey: "zip", header: "Zip Code", Cell: RenderedCell },
    ],
    []
  );

  const table = useMaterialReactTable({ // Creates the table instance.
    columns,
    data: datas,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enableHiding: false,
    enableColumnFiltersModes: true,
    enableDensityToggle: false,
    enablePagination: true,
    enableToolbar: false,
    enableFullScreenToggle: true,
    manualPagination: false,
    paginationDisplayMode: "default",
    muiPaginationProps: {
      color: "#001c30",
      variant: "outlined", 
      shape: "rounded",
      rowsPerPageOptions: [10, 25, 50, 100], // Sets the available rows per page options.
    },
    manualSortBy: false,
    enableColumnFilters: false,
    defaultColumn: { // Sets the default column configuration.
      size: 50,
      maxSize: 300,
      minSize: 40,
    },
  });

  // Renders the table within a theme provider to apply custom styles.
  return (
    <ThemeProvider theme={theme}>
      <MaterialReactTable className={style.tableContainer} table={table} />
    </ThemeProvider>
  );
}
