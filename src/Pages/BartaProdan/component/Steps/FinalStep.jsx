import React,{useState} from "react";
import { Box, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { styles } from "../common/styles";
import { renderText, renderButton } from "../common/DisplayComponent";



const FinalStep = ({ data }) => {

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
          label: "Partner Registration Successful",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>


      <div className="d-flex justify-content-around" >
        <Box ml={2} justify='flex-end'>
          {renderButton({
            label: "Back to Home",
            color: "default",
            onClick: gotoHome,
          })}

        </Box>

        <Box ml={2} justify='flex-end'>
          {/* {renderButton({
            label: "VIEW PDF",
            color: "default",
            <Link to="/viewpdf">

            </Link>,
          })} */}
          {/* <button >
            <Link to="/viewpdf">
              <a>VIEW PDF</a>
            </Link>
          </button> */}
          <Button variant="outlined" color="primary">
            {/* <Link to="/viewpdf/${}"> */}
              <a>VIEW DOCUMENT</a>
            {/* </Link> */}
          </Button>
          {/* <Button variant="outlined" color="primary" >
            <Link to="/viewpdf">
              <a>VIEW PDF</a>
            </Link>
          </Button> */}

        </Box>
      </div>

      {/* {JSON.stringify(data, null, 4)} */}
      
      {/* {JSON.stringify(data)} */}

      { console.log(JSON.stringify(data))}
     
      {/* {pdfdata = JSON.stringify(data, null, 4)}
           {console.log(pdfdata)} */}
           {/* {pdfdata.map((newdata)=>{
            return(
              <PdfConversion
              region={newdata}
              />
            )
           })} */}
           

    </Paper>
  );
};

export default FinalStep;
