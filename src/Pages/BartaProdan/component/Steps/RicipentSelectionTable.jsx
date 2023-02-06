import * as React from 'react';
import Box from '@mui/material/Box';
import { db } from '../../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { query, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import DataTable from 'react-data-table-component';

const RicipentSelectionTable = (data22) =>  {
  const [todos, setTodos] = React.useState([]);

  console.log("data in selection table", data22);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.title,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "ID",
      selector: (row) => row.id,
    },
    
  ];

  
  return (
    <div>
      <DataTable 
      title= " "
      columns={columns} 
      data={todos} 
      pagination
      fixedHeaderScrollHeight='450px'
      selectableRows
      selectableRowsHighlight
      // subHeader
      // subHeaderComponent={
      //   <input type="text" placeholder="Search" />
      // }
      />

    </div>

  );
}

export default RicipentSelectionTable;