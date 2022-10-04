import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import RicipentSelectionTable from "../RicipentSelectionTable";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => { 
  return (
    <Paper style={styles.steps}>
      <Box style={{ marginTop: "-10px", marginBottom: "10px" }}>
        {renderText({
          label: "Select Ricipents Number",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <div>
        <RicipentSelectionTable/>
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
