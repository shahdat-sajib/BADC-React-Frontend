import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import DataTable from 'react-data-table-component';
import { db } from '../../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { query, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';


const Step2 = ({ state, handleChange, handleNext, handlePrev, data }) => {
  const [sortedArrayForOne, setSortedArrayForOne] = React.useState([]);
  const [todos, setTodos] = React.useState([]);
  const filteredDataForType1 = todos.filter(todo => todo.type === 1);
  const filteredDataForType2 = todos.filter(todo => todo.type === 2);
  const [selectedData, setSelectedData] = React.useState([]);
  const phoneData = selectedData.length ? selectedData.map(data => data.phone) : [];

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

  const handleRowSelect = (state) => {
    setSelectedData(state.selectedRows);
  };
  
  React.useEffect(() => {
    console.log("Selected data from step2::::::",selectedData);
    localStorage.setItem('selectedData', JSON.stringify(phoneData));
  }, [selectedData]);

  //to get this phone number data from local storage
  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem('selectedData')) || [];
  //   setSelectedData(storedData);
  // }, []);

  return (
    <Paper style={styles.steps}>
      <Box style={{ marginTop: "-50px", marginBottom: "10px" }}>
        {renderText({
          // label: "Select Ricipents Number",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {/* {DataList} */}
      <div>
        {(data.whichCard === '1') ? <DataTable
          title=" "
          columns={columns}
          data={filteredDataForType1}
          pagination
          fixedHeaderScrollHeight='450px'
          selectableRows
          selectableRowsHighlight
          onSelectedRowsChange={handleRowSelect}
        /> : <DataTable
          title=" "
          columns={columns}
          data={filteredDataForType2}
          pagination
          fixedHeaderScrollHeight='450px'
          selectableRows
          selectableRowsHighlight
          onSelectedRowsChange={handleRowSelect}
        />}
      </div>

      <Grid container component={Box} justify='center' className="mt-3">
        <Box className="me-2">
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box className="ms-2">{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Paper >
  );
};

export default Step2;
