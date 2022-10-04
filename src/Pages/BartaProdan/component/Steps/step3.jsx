import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";

import {
  renderButton,
  renderInputField,
  renderText,
} from "../common/DisplayComponent";


const Step4 = ({ state, handleChange, handleNext, handlePrev }) => {

  return (

    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Others Info",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>



      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={4} sm={4}>
          {renderInputField({
            state,
            name: "cross",
            label: "Cross COW",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={4} sm={4}>
          {renderInputField({
            state,
            name: "crossmilk",
            label: "Cross avg milk",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={4} sm={4}>
          {renderInputField({
            state,
            name: "native",
            label: "Native COW",
            onChange: handleChange,
          })}
        </Grid>

      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={4} sm={4}>
          {renderInputField({
            state,
            name: "nativemilk",
            label: "Native avg milk",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={4} sm={4}>
          {renderInputField({
            state,
            name: "HF",
            label: "Cross HF",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={4} sm={4}>
          {renderInputField({
            state,
            name: "nativeHF",
            label: "Native HF",
            onChange: handleChange,
          })}
        </Grid>

      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={4} sm={4}>
          {renderInputField({
            state,
            name: "bullcalf",
            label: "Bull CALF",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={4} sm={4}>
          {renderInputField({
            state,
            name: "hfcalf",
            label: "HF CALF",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={4} sm={4}>
          {renderInputField({
            state,
            name: "bulls",
            label: "Bulls",
            onChange: handleChange,
          })}
        </Grid>

      </Grid>



      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Finish", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step4;
