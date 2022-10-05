import React,{useState} from "react";
import { Navigate, useNavigate } from 'react-router-dom'
import { Box, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { styles } from "../common/styles";
import { renderText, renderButton } from "../common/DisplayComponent";



const FinalStep = ({ data }) => {
  let navigate = useNavigate();

  // const pdfdata = JSON.stringify(data)

  const gotoHome = () => {
    console.log("going home")
  }
  const [isChecked, setIsChecked] = useState(false);
  console.log('data check', data);

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "SMS Sent Successfully",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>


      <div justify='center' className="mt-3">
        <Box ml={2} justify='flex-end'>
          {renderButton({
            label: "Back to Home",
            color: "default",
            onClick: (() => { navigate('/') }),
          })}

        </Box>
      </div>

      {/* {JSON.stringify(data, null, 4)} */}
      {/* {JSON.stringify(data)} */}
      {/* { console.log(JSON.stringify(data))} */}
    </Paper>
  );
};

export default FinalStep;
