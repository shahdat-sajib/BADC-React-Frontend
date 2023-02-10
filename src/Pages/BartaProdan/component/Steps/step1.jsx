import React, { useEffect, useState } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import { useNavigate } from 'react-router-dom'
import '../../../../Components/MyCustomCard.css'
import Card from 'react-bootstrap/Card';
import sech from '../../../../Assets/Icons/sech.png'
import manager from '../../../../Assets/Icons/farmar.png'
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";
// import { db } from '../../../../firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import { query, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const Step1 = ({ state, handleChange, handleNext, handleWhichCa, handletyp11 }) => {
  // const [whichCard, setWhichCard] = useState()
  // const [todos, setTodos] = React.useState([]);
  // const [sortedArrayForOne, setSortedArrayForOne] = React.useState([]);

  // React.useEffect(() => {
  //   const q = query(collection(db, "todos"));
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     let todosArray = [];
  //     querySnapshot.forEach((doc) => {
  //       todosArray.push({ ...doc.data(), id: doc.id });
  //     });
  //     setTodos(todosArray);
  //   });
  //   return () => unsub();
  // }, []);

  // console.log("todos from step1::::::::::::::::::::::::", todos);

  // const handleMapArray = () => {
  //   todos.map(todo => {
  //     if (todo.type === 1) {
  //       setSortedArrayForOne([...sortedArrayForOne, todo]);
  //       console.log("type 1 found >>>>>>>>>>>>>>>>>>>>>");
  //     }
  //   });
  // };

  // const filteredData = todos.filter(todo => todo.type === 1);

  // console.log("filtered data step1::::::::::::::::::::::::", filteredData);

  return (
    <Paper style={styles.steps}>
      <Box style={{ marginTop: "-10px", marginBottom: "10px" }}>
        {renderText({
          label: "Select Type of Recipients",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <div className='d-flex mx-3 mt-2' style={{ fontFamily: 'Galada' }}>
        <Card onClick={() => {handleWhichCa("1"); handleNext();}} className='m-2 box cardForHome border-0' style={{ backgroundColor: "lemonchiffon" }}>
          <div><img className='cardImg mt-2' src={sech} alt='cardlogo1' /></div>
          <div className='h6 mt-2'>সেচ গ্রাহকবৃন্দ</div>
        </Card>

        <Card onClick={() => {handleWhichCa("2"); handleNext()}} className=' m-2 box cardForHome border-0' style={{ backgroundColor: "lemonchiffon" }}>
          <div><img className='cardImg mt-2' src={manager} alt='cardlogo1' /></div>
          <div className='h6 mt-2'>স্কিম ম্যানেজারগণ</div>
        </Card>
      </div>

      {/* <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={6} sm={6}>
          {renderSelect({
            state,
            name: "region",
            label: "Region Name",
            options: [
              { key: "Test Region 1", value: "Test Region 1" },
              { key: "Test Region 2", value: "Test Region 2" },
              { key: "Test Region 3", value: "Test Region 3" },
              { key: "Test Region 4", value: "Test Region 4" },
            ],
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={6} sm={6}>
          {renderSelect({
            state,
            name: "area",
            label: "Area Name",
            options: [
              { key: "Test area 1", value: "Test area 1" },
              { key: "Test area 2", value: "Test area 2" },
              { key: "Test area 3", value: "Test area 3" },
              { key: "Test area 4", value: "Test area 4" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={6} sm={6}>
          {renderSelect({
            state,
            name: "cc",
            label: "CC Name",
            options: [
              { key: "Test CC name 1", value: "Test CC name 1" },
              { key: "Test CC name 2", value: "Test CC name 2" },
              { key: "Test CC name 3", value: "Test CC name 3" },
              { key: "Test CC name 4", value: "Test CC name 4" },
            ],
            onChange: handleChange,
          })}
        </Grid>

        <Grid item xs={6} sm={6}>
          {renderInputField({
            state,
            name: "center",
            label: "Center Code",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={6} sm={6}>
          {renderInputField({
            state,
            name: "cp",
            label: "CP Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={6} sm={6}>
          {renderInputField({
            state,
            name: "cpcode",
            label: "CP Code",
            onChange: handleChange,
          })}
        </Grid>
      </Grid> */}

      {/* <Grid container component={Box} justify='center' className="mt-3">
        {renderButton({ label: "Next", onClick: handleNext })}
      </Grid> */}
    </Paper>
  );
};

export default Step1;
