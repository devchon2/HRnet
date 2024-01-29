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
      // Paper component for the table container.
      styleOverrides: {
        root: {
          // Overrides the default styles for the root element.
          display: "flex",
          flexDirection: "column",
          margin: "2vw 2%",
          borderRadius: "20px",
          height: "fit-content",
          width: "95%",
          maxHeight: "90%",
          backgroundColor: "#001C30 !important",
          "& > .MuiBox-root": {
            height: "5%",
            width: "100%",
            borderRadius: 0,
            backgroundColor: "#001C30",
            "& > .MuiBox-root": {
              backgroundColor: "#001C30",
              height: "100%",
              "& > .MuiBox-root": {
                width: "100%",
                "& > .MuiTablePagination-root": {
                  width: "100%",
                },
              },
            },
          },
        },
      },
    },
    MuiTableContainer: {
      // Table container component.
      styleOverrides: {
        root: {
          flexGrow: 1,
          flexShrink: 1,
          maxWidth: "100%",
        },
      },
    },
    MuiTable: {
      // Table component.
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
    MuiTableHead: {
      // Table head component.
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
    MuiTableFooter: {
      // Table footer component.
      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          height: "95%",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: "white",
          fontSize: "0.8vw",
          fontWeight: "normal",
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
        icon: {
          color: "white",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "white",
          fontSize: "0.8vw",
          fontWeight: "normal",
          "&.Mui-focused": {
            color: "white",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          display: "flex",
          width: "100%",
        },
        head: {
          backgroundColor: "#001C30",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "0.6vw",
          flexShrink: 1,
          flexGrow: 1,
          textAlign: "center",
          alignItems: "center",
          padding: "5px",
        },
        head: {
          color: "#fff",
          backgroundColor: "#001c30 !important",
          justifyContent: "space-around",
          fontSize: "0.7vw",
          "& .Mui-TableHeadCell-Content": {
            justifyContent: "space-between",
            textAlign: "center",
            fontWeight: "bold",

            "&-Labels": {
              position: "relative",
              left: "1vw",
              alignItems: "center",
            },
            "&-Actions": {
              position: "relative",
              fill: "white",
              right: 0,
              "& .MuiIconButton-root": {
                color: "white",
              },
            },
          },
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          "& .MuiTableSortLabel-icon": {
            fill: "white",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#001C30",
          color: "white",
          margin: 0,
          width: "fit-content",
          height: "fit-content",
          position: "absolute",
          borderRadius: "0",
        },
        list: {
          padding: "0",
          margin: "0",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        gutters: {
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          "&:hover": {
            backgroundColor: "#001C30",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: "#001C30",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.MuiIconButton-root": {
            color: "white",
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          width: "100%",
          justifyContent: "space-between",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body2: {
          color: "white",
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
          
            const splittedDateA = rowA.original.startDate.split("/");
            const splittedDateB = rowB.original.startDate.split("/");

            const dateA = splittedDateA[2] + splittedDateA[0]  + splittedDateA[1];
            const dateB = splittedDateB[2] + splittedDateB[0]  + splittedDateB[1];

          console.log(dateA, 'dateA');
          console.log(dateB, 'dateB');
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
          console.log(rowA, 'rowA')
          
          const splittedDateA = rowA.original.birthDate.split("/");
          const splittedDateB = rowB.original.birthDate.split("/");

          const dateA = splittedDateA[2] + splittedDateA[0]  + splittedDateA[1];
          const dateB = splittedDateB[2] + splittedDateB[0]  + splittedDateB[1];

        console.log(dateA, 'dateA');
        console.log(dateB, 'dateB');
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

  const table = useMaterialReactTable({
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
      rowsPerPageOptions: [10, 25, 50, 100],
    },
    manualSortBy: false,
    enableColumnFilters: false,
    debugColumns: true,
    debugTable: true,
    debugPagination: true,
    debugFilters: true,
    defaultColumn: {
      maxsize: 300,
      minsize: 40,
    },
  });

  // Renders the table within a theme provider to apply custom styles.
  return (
    <ThemeProvider theme={theme}>
      <MaterialReactTable className={style.tableContainer} table={table} />
    </ThemeProvider>
  );
}
