import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import style from "./Table.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom theme for Material UI components, focusing on Table aesthetics.
const theme = createTheme({
  components: {
    MuiPaper: {
      // Customizes the outermost paper layout of the table
      styleOverrides: {
        root: {
          border: "1px solid #001c30", // Dark border for contrast
          boxShadow: "20px 20px 20px -20px white", // Shadow for depth
          borderRadius: "15px", // Rounded corners for modern look
          width: "100%", // Full width
          height: "fit-content", // Height adjusts to content
          margin: "0 5%", // Centering with margin
        },
      },
    },
    MuiTableHead: {
      // Styles for the table header
      styleOverrides: {
        root: {
          height: "3vh", // Fixed height for uniformity
          backgroundColor: "transparent", // Dark background for header
        },
      },
    },
    MuiTableRow: {
      // Styles applied to table rows
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "100%",
        },
        head: {
          // Special styling for header row
          backgroundColor: "#001c30", // Matches header background color
          
        },
      },
    },
    MuiTableCell: {
      // Cell-specific styling
      styleOverrides: {
        root: {
          // Applies to all cells
          fontSize: "0.6vw", // Responsive font size
          fontWeight: "normal", // Regular weight for readability
        },
        head: {
          // Header cells specifically
          fontWeight: "bold", // Bold for emphasis
          fontSize: "0.8vw", // Slightly larger for importance
          paddingLeft: "1vw", // Spacing for aesthetics
          backgroundColor: "#001c30 !important", // Clear background for blend
          color: "white", // White text for contrast
        },
      },
    },
    MuiButtonBase: {
      // Styles for the sort label
      styleOverrides: {
        root: {
          height: "100%", // Full height for clickability
        },
      },
    },
    MuiSvgIcon: {
      // Styles for the sort icon
      styleOverrides: {
        root: {
          fontSize: "1vw", // Responsive font size
          fill: "white ", // White text for contrast
          strokeWidth: "0.5px", // Thinner stroke for aesthetics
        },
        
      },
    },
    MuiPaginationItem: {

      styleOverrides: {
        root: {
          fontSize: "0.6vw", // Responsive font size
          fontWeight: "normal", // Bold for emphasis
          color: "#001c30", // Dark text for contrast
          "&:hover": {
            color: "#001c30", // Dark text for contrast
          },
          "&.Mui-selected": {
            backgroundColor: "#001c30", // Dark background for contrast
            color: "white", // White text for contrast
          },
        },
      },
    },
    
  },
});

/**
 * Functional component to render individual cell content in bold.
 *
 * @param {Object} props - Properties passed to the component.
 * @param {string} props.renderedCellValue - The text content for the cell.
 * @returns {React.ReactElement} - A strong element wrapping the cell value.
 */
const RenderedCell = ({ renderedCellValue }) => (
  <strong>{renderedCellValue}</strong>
);

/**
 * Main functional component to render an employee data table.
 * Utilizes 'MaterialReactTable' for a rich UI experience with custom theming.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.datas - Collection of employee data to be displayed.
 * @returns {React.ReactElement} - The fully configured and styled data table.
 */
export default function EmployeesTable({ datas }) {
  // Defines the column configuration for the table, utilizing useMemo for performance.
  const columns = useMemo(
    () => [
      // Each object within this array configures a column of the table.

      {
        accessorKey: "firstName", // Identifies the data field for this column.
        header: "First Name", // Sets the display name for the header.
        Cell: RenderedCell, // Custom render function for cell content.
        width: 'calc(100/9)%', // Sets the width of the column.
      },
      { accessorKey: "lastName", header: "Last Name", Cell: RenderedCell,        width: 'calc(100/9)%', // Sets the width of the column.
    },
      {
        accessorKey: "startDate",
        header: "Start Date",
        Cell: RenderedCell,
        width: 'calc(100/9)%', // Sets the width of the column.

        // Custom sorting function to handle dates in DD/MM/YYYY format.
        sortingFn: (rowA, rowB) => {
          const dateA = new Date(
            rowA.original.startDate.split("/").reverse().join("-")
          );
          const dateB = new Date(
            rowB.original.startDate.split("/").reverse().join("-")
          );
          return dateA - dateB; // Compares dates for sorting.
        },
      },
      { accessorKey: "department", header: "Department", Cell: RenderedCell, grow:true, width: 'calc(100/9)%', // Sets the width of the column.
    },
      { accessorKey: "birthDate", header: "Date of Birth", Cell: RenderedCell,        width: 'calc(100/9)%', // Sets the width of the column.
    },
      { accessorKey: "street", header: "Street", Cell: RenderedCell,        width: 'calc(100/9)%', // Sets the width of the column.
    },
      { accessorKey: "city", header: "City", Cell: RenderedCell,        width: 'calc(100/9)%', // Sets the width of the column.
    },
      { accessorKey: "abbreviation", header: "State", Cell: RenderedCell,        width: 'calc(100/9)%', // Sets the width of the column.
    },
      { accessorKey: "zip", header: "Zip Code", Cell: RenderedCell,        width: 'calc(100/9)%', // Sets the width of the column.
    },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: datas,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enableHiding: false,
    enableColumnFiltersModes: true,
    enableDensityToggle: true,
    enablePagination: true,
    enableToolbar: false,
    enableFullScreenToggle: false,
    manualPagination: false,
    paginationDisplayMode: "pages",
    manualSortBy: false,
    enableColumnFilters: false,
    debugColumns: true,
    debugTable: true,
    debugPagination: true,
    debugFilters: true,
    defaultColumn: { 
      minSize: 180, 
      maxSize: 1000, 
      size: 300 } //units are in px

  });

  // Renders the table within a theme provider to apply custom styles.
  return (
    <ThemeProvider theme={theme}>
      <MaterialReactTable className={style.tableContainer} table={table} />
    </ThemeProvider>
  );
}
