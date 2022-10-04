import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {field: 'firstName',headerName: 'First name',width: 130, editable: true,},
  {field: 'lastName',headerName: 'Last name',width: 130, editable: true,},
  {field: 'phone',headerName: 'Mobile No.', width: 120, editable: true,},
];

const rows = [
    { id: 1, lastName: 'Last Name 1', firstName: 'firstName 1', phone: "01777481417" },
    { id: 2, lastName: 'Last Name 2', firstName: 'firstName 2', phone: "01777481417" },
    { id: 3, lastName: 'Last Name 3', firstName: 'firstName 3', phone: "01777481417" },
    { id: 4, lastName: 'Last Name 4', firstName: 'firstName 4', phone: "01777481417" },
    { id: 5, lastName: 'Last Name 5', firstName: 'firstName 5', phone: "01777481417" },
    { id: 6, lastName: 'Last Name 6', firstName: 'firstName 6', phone: "01777481417" },
    { id: 7, lastName: 'Last Name 7', firstName: 'firstName 7', phone: "01777481417" },
    { id: 8, lastName: 'Last Name 8', firstName: 'firstName 8', phone: "01777481417" },
    { id: 9, lastName: 'Last Name 9', firstName: 'firstName 9', phone: "01777481417" },
    { id: 10, lastName: 'Last Name 10', firstName: 'firstName 10', phone: "01777481417" },
    { id: 11, lastName: 'Last Name 11', firstName: 'firstName 11', phone: "01777481417" },
    { id: 12, lastName: 'Last Name 12', firstName: 'firstName 12', phone: "01777481417" },
    { id: 13, lastName: 'Last Name 13', firstName: 'firstName 13', phone: "01777481417" },
    { id: 14, lastName: 'Last Name 14', firstName: 'firstName 14', phone: "01777481417" },
    { id: 15, lastName: 'Last Name 15', firstName: 'firstName 15', phone: "01777481417" },
];

export default function RicipentSelectionTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}




// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 50 },
//   { field: 'firstName', headerName: 'First name', width: 110 },
//   { field: 'lastName', headerName: 'Last name', width: 110 },
//   { field: 'phone', headerName: 'Phone', width: 120 },
// //   {
// //     field: 'fullName',
// //     headerName: 'Full name',
// //     description: 'This column has a value getter and is not sortable.',
// //     sortable: false,
// //     width: 160,
// //     valueGetter: (params) =>
// //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// //   },
// ];

// const rows = [
//   { id: 1, lastName: 'Last Name 1', firstName: 'firstName 1', phone: "01777481417" },
//   { id: 2, lastName: 'Last Name 2', firstName: 'firstName 2', phone: "01777481417" },
//   { id: 3, lastName: 'Last Name 3', firstName: 'firstName 3', phone: "01777481417" },
//   { id: 4, lastName: 'Last Name 4', firstName: 'firstName 4', phone: "01777481417" },
//   { id: 5, lastName: 'Last Name 5', firstName: 'firstName 5', phone: "01777481417" },
//   { id: 6, lastName: 'Last Name 6', firstName: 'firstName 6', phone: "01777481417" },
//   { id: 7, lastName: 'Last Name 7', firstName: 'firstName 7', phone: "01777481417" },
//   { id: 8, lastName: 'Last Name 8', firstName: 'firstName 8', phone: "01777481417" },
//   { id: 9, lastName: 'Last Name 9', firstName: 'firstName 9', phone: "01777481417" },
//   { id: 10, lastName: 'Last Name 10', firstName: 'firstName 10', phone: "01777481417" },
//   { id: 11, lastName: 'Last Name 11', firstName: 'firstName 11', phone: "01777481417" },
//   { id: 12, lastName: 'Last Name 12', firstName: 'firstName 12', phone: "01777481417" },
//   { id: 13, lastName: 'Last Name 13', firstName: 'firstName 13', phone: "01777481417" },
//   { id: 14, lastName: 'Last Name 14', firstName: 'firstName 14', phone: "01777481417" },
//   { id: 15, lastName: 'Last Name 15', firstName: 'firstName 15', phone: "01777481417" },
// ];

// export default function RicipentSelectionTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={10}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//         experimentalFeatures={{ newEditingApi: true }}
//       />
//     </div>
//   );
// }
