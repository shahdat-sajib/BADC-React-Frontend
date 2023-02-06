import React, { Component } from "react";

import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Paper,
  withStyles,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Step1 from "./Steps/step1";
import Step2 from "./Steps/step2";
import Step3 from "./Steps/step3";
import RicipentSelectionTable from "./Steps/RicipentSelectionTable";
import FinalStep from "./Steps/FinalStep";
import { renderText } from "./common/DisplayComponent";
import { styles } from "./common/styles";

class FormComponent extends Component {
  state = {
    data: {
      message: "",
      card: "",
      whichCard: "",
    },
    errors: {},
    steps: [
      { label: "Recipient Type Selection" },
      { label: "Recipients Selection" },
      { label: "Type & Send Message" },
      // { label: "Training" },
    ],
    stepCount: 0,
  };

  render() {
    console.log(this.state.data)

    const { classes } = this.props;

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form submitted");
    };

    const handleWhichCard = (target) => {
      console.log("button clicked");
      const { data, errors } = this.state;
      data["whichCard"] = target;
      this.setState({ data, errors })
    }

    const handleOnChange = ({ target }) => {
      const { data, errors } = this.state;

      target.value.length <= 1
        ? (errors[target.name] = `${target.name} have at least 3 letter`)
        : (errors[target.name] = "");

      data[target.name] = target.value;
      this.setState({ data, errors });
    };

    const handleNextStep = () => {
      let { stepCount } = this.state;
      console.log("stepCount", stepCount);
      stepCount = stepCount + 1;
      this.setState({ stepCount });
    };
    const handleBackStep = () => {
      let { stepCount } = this.state;
      stepCount = stepCount - 1;
      this.setState({ stepCount });
    };


    <RicipentSelectionTable data22={this.state.data} />
    

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handleWhichCa={handleWhichCard}
            />
          );
        case 1:
          return (
            <Step2
              data={this.state.data}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            // image={image}
            // setImage={setImage}
            />
          );
        case 2:
          return (
            <Step3
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
        // case 3:
        //   return (
        //     <Step4
        //       state={this.state}
        //       handleChange={handleOnChange}
        //       handleNext={handleNextStep}
        //       handlePrev={handleBackStep}
        //     />
        //   );
        case 3:
          return <FinalStep data={this.state.data} />;
        default:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handleSubmit={handleSubmit}
              handleWhichCa={handleWhichCard}

            />
          );
      }
    };

    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={12} lg={11} xl={11}>
          <form onSubmit={this.handleSubmit} className={classes.form}>
            <Paper component={Box} mb={1}>
              <Stepper activeStep={this.state.stepCount} alternativeLabel>
                {this.state.steps.map((item) => (
                  <Step key={item.label}>
                    <StepLabel>{item.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Paper>
            {getStepContent(this.state.stepCount)}
          </form>
        </Grid>
      </Grid>
    );
  }
}

FormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormComponent);
