import React from "react";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";

import {
  renderButton,
  renderInputField,
  renderText,
} from "../common/DisplayComponent";


const Step4 = ({ state, handleChange, handleNext, handlePrev }) => {

  return (

    <Paper style={styles.steps}>
      <Box style={{ marginTop: "-10px", marginBottom: "15px" }}>
        {renderText({
          label: "Type your messages",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid item xs={12} sm={12}>
        {renderInputField({
          state,
          name: "message",
          onChange: handleChange,
        })}
      </Grid>





      <Grid container component={Box} justify='center' className="mt-3">
        <Box className="me-2 bg-success">
        {renderButton({
            label: "SEND",
            onClick: handleNext,
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
