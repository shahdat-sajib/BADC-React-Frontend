import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import RicipentSelectionTable from "./RicipentSelectionTable";
import { db } from '../../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { query, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import DataTable from 'react-data-table-component';


const Step2 = ({ state, handleChange, handleNext, handlePrev, data }) => {
  const [todos, setTodos] = React.useState([]);
  const [sortedArrayForOne, setSortedArrayForOne] = React.useState([]);

  // console.log("data in selection table", data);
  
  if(data.whichCard === '2'){
    console.log("option 2 detected>>>>>>>>>>>>>>>");
  }

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

  // React.useEffect(() => {
  //   if (todos.length > 0) {
  //     handleMapArray();
  //   }
  // }, [todos]);

  console.log("todos data::::::::::::::::::::::::", todos);

  const handleMapArray = () => {
    todos.map(todo => {
      if (todo.type === 1) {
        setSortedArrayForOne([...sortedArrayForOne, todo]);
        console.log("type 1 found >>>>>>>>>>>>>>>>>>>>>");
      }
    });
  };

  const DataList = ({data}) => {
    const mappedData = data.map((item) => {
      if (item.type === 1) {
        return <p>1 is found</p>
      } else {
        return <p>{item.type} is found</p>
      }
    });}

  console.log("sorted array test>>>>>>>>>>>>>", sortedArrayForOne);

  // if(data.whichCard === '1'){
  //   console.log("option 1 detected>>>>>>>>>>>>>>>");
  // }

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
    <Paper style={styles.steps}>
      <Box style={{ marginTop: "-50px", marginBottom: "10px" }}>
        {renderText({
          // label: "Select Ricipents Number",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {DataList}

      {/* <div>
        <RicipentSelectionTable/>
      </div> */}
      <div>
        <DataTable
          title=" "
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
