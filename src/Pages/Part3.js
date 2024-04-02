
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";
import Signature from '../Components/Form/Signature'
import { useContext } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormGroup,
  Checkbox,
  FormControlLabel,
  FormLabel,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { EditCalendarRounded } from "@mui/icons-material";
import { Link } from 'react-router-dom';

// import { set } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
    accordionHeader: {
      backgroundColor: "#f5f5f5",
      color: "#333",
      fontWeight: "bold",
    },
    accordionHeader1:{
      backgroundColor:'black',
      color:'white',
      fontWeight:"bold"
    },
  
    submitButton: {
      backgroundColor: "#4caf50",
      color: "white",
      "&:hover": {
        backgroundColor: "#388e3c",
      },
    },
    menu: {
      height: "250px",
    },
    // Additional custom styles...
  }));
function Part3(){
    const classes = useStyles();
    const [parentAccordionExpanded, setParentAccordionExpanded] = useState(true);
    const [merchantExpanded, setMerchantExpanded] = useState(true); 

    const handleParentAccordionToggle = () => {

        setParentAccordionExpanded(!parentAccordionExpanded);
      };
      const handleMerchantAccordionToggle = () => {
        setMerchantExpanded(!merchantExpanded);
      };
    

    return (
        <>
         <Accordion 
         expanded={parentAccordionExpanded}
         onChange={handleParentAccordionToggle}
         >
          <AccordionSummary
           
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="accordionHeader"
            >
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ color: "text.secondary", my: 2 }}
            >
              Part 3. PCI DSS Validation
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  3A. Merchant Attestation
                </h2>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  style={{
                    display: "flex",
                    flexDirection: 'row',
                    
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      flex: "1 1 auto",
                      marginRight: "16px",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ width: "auto" }}
                      >
                        Merchant Executive Officer Name:
                      </Typography>
                      <TextField
                        
                        required
                        
                        name="executiveName"
                       
                        label="Executive Officer Name"
                        className={classes.formField}
                        sx={{ width: 200 }}
                        
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      gap: 2,
                      flex: "1 1 auto",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ width: "auto" }}
                      >
                        Title:
                      </Typography>
                      <TextField
                       
                        required
                        
                        name="executiveTitle"
                       
                        className={classes.formField}
                        label="Title"
                        sx={{ width: 200 }}
                       
                      />
                    </Box>
                    <Signature/>

                  </Box>
                </div>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion><br/>
        <Box style={{display:'flex',justifyContent:'flex-end',marginRight:'70px'}}>
           <Link to='/part2'><Button variant="outlined">Previous</Button></Link> &nbsp;<Button variant="outlined" color="success">Final Submit</Button>
          </Box>

        </>
    )
}
export default Part3;