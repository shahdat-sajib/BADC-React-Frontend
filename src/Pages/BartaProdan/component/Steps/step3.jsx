import React from "react";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";

import {
  renderButton,
  renderInputField,
  renderText,
} from "../common/DisplayComponent";
import { TextField } from "@mui/material";
import Requests from '../../../../Requests/SMSApi/SMSApi'


const Step4 = ({ state, handleNext, handlePrev }) => {
  const [text, setText] = React.useState('');

  const handleChange = event => {
    setText(event.target.value);
  };
  console.log(text)

  const [selectedPhone, setSelectedPhone] = React.useState([]);

  React.useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('selectedData')) || [];
    setSelectedPhone(storedData);
    console.log(storedData)
  }, []);
  // console.log(storedData)

  const [data, setData] = React.useState([]);
//   const postdata = {
//     "name":"Shahdat", 
//     "job":"Test engineer automation"
// }

  const sendPostRequest = async (msg, to, apikey) => {
    try {
      apikey = "mqTMUfXgu19P56ZU1lkmMCFy6H0sdZ2HWSsMEB3R"
      msg = text;
      to = selectedPhone;
      const response = await Requests.SMSApi(apikey, msg, to);
      setData(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  React.useEffect(() => {
    console.log("Checking data:::::::::", data);
  }, [data]);

  // React.useEffect(() => {
  //   sendPostRequest();
  // }, []);

  return (

    <Paper style={styles.steps}>
      <Box style={{ marginTop: "-10px", marginBottom: "15px" }}>
        {renderText({
          label: "Type your messages",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <div>
        <TextField onChange={handleChange} style={{ width: "20rem" }} multiline rows={8} id="outlined-basic" label="Message" variant="outlined" />
      </div>

      {/* <duv>
        <Button onClick={sendPostRequest}>
          Send SMS
        </Button>
      </duv> */}

      <Grid container component={Box} justify='center' className="mt-3">
        <Box className="me-2 bg-success">
          {renderButton({
            label: "SEND",
            onClick: sendPostRequest,
            color: "green"
          })}
        </Box>
        <Box>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step4;
