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
          backgroundColor: "transparent", // Clear background for blend
        },
        head: {
          // Special styling for header row
          backgroundColor: "#001c30", // Matches header background color
        },
      },
    },
    MuiMenuList: {
      // Styles for the menu list
      styleOverrides: {
        root: {
          backgroundColor: "transparent", // Clear background for blend
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
          justifyContent: "center", // Centering for aesthetics
          alignItems: "center", // Centering for aesthetics
          textAlign: "center", // Centering for aesthetics
        },
        head: {
          // Header cells specifically
          display: "flex", // Centering for aesthetics
          fontWeight: "bold", // Bold for emphasis
          fontSize: "0.7vw", // Slightly larger for importance
          paddingLeft: "0", // Spacing for aesthetics
          justifyContent: "space-between", // Centering for aesthetics
          backgroundColor: "#001c30 !important", // Clear background for blend
          color: "white", // White text for contrast
          ".Mui-TableHeadCell-Content":{

            display: "flex",
            justifyContent: "space-between",
            paddingRight: "0.5vw",
            '&-Wrapper': {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "100%",
            margin: "auto",
          },
          "&-Labels": {
            display: "flex",
            justifyContent: "space-between",

            height: "100%",
            width: "100%",
            margin: "auto",
            color: "white",
            fontWeight: "bold",
            fontSize: "0.7vw",
            paddingLeft: "0",
            backgroundColor: "#001c30 !important",
          },
      },
        },
      },
    },
    MuiButtonBase: {
      // Styles for the sort label
      styleOverrides: {
        root: {
          height: "100%", // Full height for clickability
          padding: "0 !important", // No padding for aesthetics
          "&-MuiIconButton-root": {
            backgroundColor: "#001c30", // Dark background for contrast
          },
        },
      },
    },
    MuiBox: {
      // Styles for the sort box
      styleOverrides: {
        root: {
          height: "100%", // Full height for clickability
          padding: "0", // No padding for aesthetics
          margin: "0", // No margin for aesthetics
          display: "flex", // Centering for aesthetics
          alignItems: "center", // Centering for aesthetics
          justifyContent: "center", // Centering for aesthetics
        },
      },
    },
    MuiBadge: {
      // Styles for the sort badge
      styleOverrides: {
        root: {
          height: "100%", // Full height for clickability
          padding: "5px", // No padding for aesthetics
          margin: "0", // No margin for aesthetics
          display: "flex", // Centering for aesthetics
          alignItems: "center", // Centering for aesthetics
          justifyContent: "center", // Centering for aesthetics
          svg: {
            height: "100%", // Full height for clickability
            fontSize: "1.1vw", // Responsive font size
            margin: "0", // No margin for aesthetics
            padding: "0", // No padding for aesthetics
            fill: "white ", // White text for contrast
            strokeWidth: "0.5px", // Thinner stroke for aesthetics
            opacity: "1", // Slightly transparent for aesthetics
          },
        },
      },
    },

    MuiSvgIcon: {
      // Styles for the sort icon
      styleOverrides: {
        root: {
          fontSize: "1.1vw", // Responsive font size
          fill: "white ", // White text for contrast
          strokeWidth: "0.5px", // Thinner stroke for aesthetics
          opacity: "1", // Slightly transparent for aesthetics
          height: "100%",
          margin: "0",
          padding: "0 ",
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
    MuiTable: {
      // Styles for the table
      styleOverrides: {
        root: {
          maxWidth: "100%", // Full width
          height: "100%", // Full height
          backgroundColor: "transparent", // Clear background for blend
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontSize: "0.6vw", // Responsive font size
          fontWeight: "normal", // Regular weight for readability
          color: "#001c30", // Dark text for contrast
          backgroundColor: "transparent", // Clear background for blend
          "&:focus": {
            backgroundColor: "transparent", // Clear background for blend
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
      },
      { accessorKey: "lastName", header: "Last Name", Cell: RenderedCell },
      {
        accessorKey: "startDate",
        header: "Start Date",
        Cell: RenderedCell,

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
      { accessorKey: "department", header: "Department", Cell: RenderedCell },
      { accessorKey: "birthDate", header: "Date of Birth", Cell: RenderedCell },
      { accessorKey: "street", header: "Street", Cell: RenderedCell },
      { accessorKey: "city", header: "City", Cell: RenderedCell },
      { accessorKey: "abbreviation", header: "State", Cell: RenderedCell },
      { accessorKey: "zip", header: "Zip Code", Cell: RenderedCell },
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
    paginationDisplayMode: "default",
    muiPaginationProps: {
      color: "primary",
      variant: "outlined",
      shape: "rounded",
      rowsPerPageOptions: [10, 25, 50, 100],
    },
    manualSortBy: false,
    enableColumnFilters: false,
    debugColumns: true,
    debugTable: true,
    debugPagination: true,
    debugFilters: true,
    defaultColumn: {
      size: 290,
      height: "100px",
      align: "center",
      headerAlign: "center",
    },
  });

  // Renders the table within a theme provider to apply custom styles.
  return (
    <ThemeProvider theme={theme}>
      <MaterialReactTable className={style.tableContainer} table={table} />
    </ThemeProvider>
  );
}
