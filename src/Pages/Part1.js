
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from 'react-router-dom';
import handleApprove from "../Service/patch";
import {  CircularProgress } from "@mui/material";
import { Link } from 'react-router-dom';
import indianStates from '../state.json'

import { useContext } from "react";
// import { DarkContext } from "../../scenes/global/DarkBar";
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

const apiUrl = process.env.REACT_APP_API_URL;

function Part1(){
    const [parentAccordionExpanded, setParentAccordionExpanded] = useState(true);
    const [merchantExpanded, setMerchantExpanded] = useState(true); 
    const classes = useStyles();


    const handleParentAccordionToggle = () => {

        setParentAccordionExpanded(!parentAccordionExpanded);
      };
      const handleMerchantAccordionToggle = () => {
        setMerchantExpanded(!merchantExpanded);
      };
    
      const accordionStyle = {
        width: "100%", // Ensure full width
        marginTop: "15px",
      };
    
    return (
        <>
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > :not(style)": { m: 1 },
          }}
        >
          {/* Parent Accordion */}
          <Accordion
            expanded={parentAccordionExpanded}
            onChange={handleParentAccordionToggle}
            sx={{ width: "100%", marginTop: "15px" }}
          >
            <AccordionSummary
              className="accordionHeader"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="parent-panel-content"
              id="parent-panel-header"
            >
              <Typography
                variant="h5"
                component="h1"
                gutterBottom

                sx={{ color: "text.secondary", my: 2 }}
              >
                Part 1: Merchant and Qualified Security Assessor Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: 'center',
                  "& > :not(style)": { m: 1 },
                }}
              >
                <Accordion
                  expanded={merchantExpanded}
                  onChange={handleMerchantAccordionToggle}
                  sx={accordionStyle}
                >
                  <AccordionSummary
              className="accordionHeader"
              expandIcon={<ExpandMoreIcon />}
                    aria-controls="merchant-panel-content"
                    id="merchant-panel-header"
                  >
                    <Typography
                      variant="h5" // Adjust the variant as needed
                      component="h1" // The semantic element to be used
                      gutterBottom // Adds a bottom margin to the Typography
                      sx={{
                        color: "text.secondary", // Attractive light black color
                        my: 2, // Margin top and bottom, adjust as needed
                      }}
                    >
                      1.A: Merchant Organization Information
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <TextField
                         
                          fullWidth
                          label="Company Name"
                          type="text"
                          className={classes.formField}
 
                        
                        />
                      </Grid>
                      <Grid item xs={3} >
                        <TextField
                        fullWidth
                          label="DBA (doing business as)"
                              type="text"                         
                         
                          required
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                         fullWidth
                          label="Contact Name"
                         type="num"

                          required
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                        fullWidth
                          
                          label="Title"
                           type="text"
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                         
                          label="Telephone"
                          type="num"
                         
                          required
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                        fullWidth
                          label="E-mail"
                          type="email"
                          required
                        />
                      </Grid>

                      <Grid item xs={12} md={2}>
                        <TextField
                        
                          label="Country"
                         
                          required
                        />
                      </Grid>

                      <Grid item xs={12} md={2}>
                        <FormControl fullWidth>
                          <InputLabel id="state-province-label">
                            State/Province
                          </InputLabel>
                          <Select
                            // value={
                            //   formData && formData.length > 0
                            //     ? editState
                            //     : state
                            // }
                            // inputlabelprops={{
                            //   shrink: true,
                            // }}
                            required
                            label="State/Province"

                            // onChange={
                            //   formData && formData.length > 0
                            //     ? (e) => setEditState(e.target.value)
                            //     : handleStateChange
                            // }
                            MenuProps={{
                              classes: { paper: classes.menu },
                            }}
                          >
                            {indianStates.India.states.map(
                              (indianState, index) => (
                                <MenuItem key={index} value={indianState.name}>
                                  {indianState.name}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} md={2}>
                        <TextField
                          
                          ullWidth
                          label="City"
                          type="text"
                          required
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                        
                          fullWidth
                          label="URL"
                          type="url"
                          required
                        />
                      </Grid>

                      <Grid item xs={12} md={2}>
                        <TextField
                         
                          fullWidth
                          label="Pincode"
                          type="num"
                          required
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <TextField
                         
                          label="Business Address"
                           type="text"
                          required
                        />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Box>

           
            </AccordionDetails>
          </Accordion>
          <Box style={{display:'flex',justifyContent:'flex-end',marginRight:'70px' }}>
            <Link to="/part2"><Button variant="outlined" color="success">Save & Next</Button>&nbsp;
</Link>
          </Box>
        </Box>
        </>
    )
}
export default Part1;