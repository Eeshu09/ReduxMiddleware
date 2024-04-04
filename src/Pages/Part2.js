
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector, useSelectorseSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {add} from '../formSlice'
import {Radio,} from '@mui/material';

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

const apiUrl = process.env.REACT_APP_API_URL;
function Part2(){
  const{register,reset,handleSubmit,formState:{errors}}=useForm();
  const{formData}=useSelector((stata)=>stata.formData)
  console.log('dffk',formData)
  const [selectedValue, setSelectedValue] = useState('');
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const dispatch=useDispatch();
  const navigate=useNavigate();



    const [expandedPanel, setExpandedPanel] = useState(null);
    const [businessExpanded, setBusinessExpanded] = useState(true);

    const [editFacilityData, setEditFacilityData] = useState({
        type: "",
        number: "",
        location: "",
      });
    const [rows, setRows] = useState([
        // Start with one empty row
        { type: "", number: "", location: "" },
      ]);
      const [applications, setApplications] = useState([
        { name: "", version: "", vendor: "", isListed: null, expiryDate: "" },
      ]);
      const [editPaymentApplication, setEditPaymentApplication] = useState({
        name: "",
        version: "",
        vendor: "",
        isListed: true,
        expiryDate: "",
      });
      const [serviceProviders, setServiceProviders] = useState([
        { name: "", description: "" },
      ]);
      const [editServiceProvider, setEditServiceProvider] = useState({
        name: "",
        description: "",
      });
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

      const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : false);
      };
    
      const handleAddRow = () => {
        const newRow = { type: "", number: "", location: "" };
        setRows([...rows, newRow]);
      };
    
      const handleInputChange = (e, index, field) => {
        const newRows = [...rows];
        newRows[index][field] = e.target.value;
        setRows(newRows);
      };
      const setEditFacilityData1 = (e, index, field) => {
        const newRows = { ...editFacilityData };
        newRows[index][field] = e.target.value;
        setEditFacilityData(newRows);
      }
    
      const handleAccordionToggle = () => {
        setBusinessExpanded(!businessExpanded);
      };
    
      const handleCheckboxChange = (index, value) => {
        // Set the selected checkbox and make sure the other one is unchecked
        setApplications(
          applications.map((app, i) => {
            if (i === index) {
              return { ...app, isListed: value };
            }
            return app;
          })
        );
      };
    
      const handleInputChange1 = (e, index, field) => {
        const newApplications = [...applications];
        newApplications[index][field] = e.target.value;
        setApplications(newApplications);
      };
      const setEditPaymentApplication1 = (e, index, field) => {
        const newApplications = [...editPaymentApplication];
        newApplications[index][field] = e.target.value;
        setEditPaymentApplication(newApplications);
      }
    
      const addApplicationRow = () => {
        setApplications([
          ...applications,
          { name: "", version: "", vendor: "", isListed: null, expiryDate: "" },
        ]);
      };
    
      const handleAddServiceProvider = () => {
        setServiceProviders([...serviceProviders, { name: "", description: "" }]);
      };
    
      const handleServiceProviderChange = (index, field, value) => {
        const updatedProviders = [...serviceProviders];
        updatedProviders[index][field] = value;
        setServiceProviders(updatedProviders);
      };
      const handleServiceProviderChange1 = (index, field, value) => {
        const updatedProviders = [...editServiceProvider];
        updatedProviders[index, field] = value;
        setEditServiceProvider(updatedProviders);
    
      }
    
      const handleRemoveRow = (index) => {
        if (index > 0) {
          const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
          setRows(newRows);
        }
      };
    
      const handleRemoveApplication = (index) => {
        if (index > 0) {
          const newApplications = applications.filter(
            (_, appIndex) => appIndex !== index
          );
          setApplications(newApplications);
        }
      };
    
      // styles .................................................................................................................
    
      const formStyle = {
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        // backgroundColor: '#f2f2f2',
        border: "1px solid #ccc",
        marginBottom: "10px",
      };
    
      const checkboxGroupStyle = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "20px",
      };
    
      const checkboxStyle = {
        display: "flex",
        flexDirection: "column",
        // backgroundColor: '#fff',
        padding: "10px",
        // border: '1px solid #ccc',
        borderRadius: "4px",
      };
      const formSectionStyle = {
        // backgroundColor: '#f2f2f2',
        padding: "20px",
        marginBottom: "10px",
      };
    
      const checkboxContainerStyle = {
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
      };
    
      const checkboxLabelStyle = {
        display: "block",
        fontWeight: "bold",
        margin: "0 0 10px 0",
      };
    
      const noteStyle = {
        backgroundColor: "lightyellow",
        borderLeft: "5px solid #ffeb3b",
        padding: "10px",
        marginTop: "20px",
      };
      const inputTextStyle = {
        width: "100%",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box", 
      };
    
      const detailsStyle = {
        padding: "20px",
        borderTop: "1px solid #000",
      };
    
const onSubmit=(data)=>{
  const data1={...data,Is_application_PA_DSSListed:selectedValue}
  
  dispatch(add(data1));
  navigate('/part3')
  console.log(data);
}
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>     
        <Box
          sx={{
             display: "flex",
            flexDirection: "column",
            "& > :not(style)": { m: 1 },
          }}
        >
          <Accordion
          expanded={parentAccordionExpanded}
          onChange={handleParentAccordionToggle}
           sx={{ width: "100%", marginTop: "15px" }}>
            <AccordionSummary
              className="accordionHeader"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="executive-summary-content"
              id="executive-summary-header"
            >
              <Typography
                variant="h5"
                component="h1"
                gutterBottom
                sx={{ color: "text.secondary", my: 2 }}
              >
                Part 2: Executive Summary
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="form-container">
                <Accordion
                  expanded={expandedPanel === "panelDescription"}
                  onChange={handleAccordionChange("panelDescription")}
                >
                  <AccordionSummary
              className="accordionHeader"
              expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2b-content"
                    id="panel2b-header"
                  >
                    <h2
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginLeft: "7px",
                      }}
                    >
                      Description of Payment Card Business
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails style={detailsStyle}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      How and in what capacity does your business store, process
                      and/or transmit cardholder data?
                    </Typography>

                    <br />

                    <Typography component="div" gutterBottom>
                      We do not Store, Process or Transmit any Card Holder Data.
                      Payment processing has been fully outsourced. Transactions
                      involving Debit / Credit cards are handled by
                      <TextField
                                             
                        variant="outlined"
                        placeholder="Razorpay / CC Avenues"
                        type="text"
                        name="transactionhandler"
                        defaultValue={formData?.[1]?.transactionhandler?? ""}

                        {...register('transactionhandler',{
                          required:'transation is required'
                        })}
                        helperText={
                          <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.transactionhandler?.message}</span>
                        }  

                        
                        style={{
                          width: "auto",
                          marginTop: "-8px",
                          marginLeft: "8px",
                          marginRight: "8px",
                          marginBottom: "10px",
                        }}
                      />
                      For Payment, Card details are entered on
                      <TextField
                      
                        className={classes.formField}
                        size="small"
                        type="text"
                        name="cartDetails"
                        variant="outlined"
                        defaultValue={formData?.[1]?.cardDetails?? ""}

                        placeholder=" Mention here card details"
                        {...register('cardDetails',{
                          required:'cardDetails is required'
                        })}
                        helperText={
                          <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.cardDetails?.message}</span>
                        }  

                        style={{
                          width: "auto",
                          marginTop: "-8px",
                          marginLeft: "8px",
                          marginRight: "8px",
                        }}
                      />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expandedPanel === "panelLocations"}
                  onChange={handleAccordionChange("panelLocations")}
                >
                  <AccordionSummary
              className="accordionHeader"
              expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2b-content"
                    id="panel2b-header"
                  >
                    <h2
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginLeft: "7px",
                      }}
                    >
                      Locations
                    </h2>
                  </AccordionSummary>
                  <p style={{ marginLeft: "20px" }}>
                    List types of facilities (for example, retail outlets,
                    corporate offices, data centers, call centers, etc.) and a
                    summary of locations included in the PCI DSS review.
                  </p>
                  <AccordionDetails

                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow 
                                        >
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                                backgroundColor:"white"
                              }}


                            >
                              Type of facility
                            </TableCell>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                                backgroundColor:'white'

                              }}
                              align="center"
                            >
                              Number of facilities of this type
                            </TableCell>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                                backgroundColor:"white"

                              }}
                              align="center"
                            >
                              Location(s) of facility (city, country)
                            </TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {rows.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">
                                <TextField
                                
                                  
                                  placeholder="Eg-Retail outlets"
                                  name="typeOfFacility"
                                  type="text"
                                  defaultValue={formData?.[1]?.typeOfFacility?? ""}

                                  {...register('typeOfFacility',{
                                    required:'Type of Facility is required'
                                  })}
                                  helperText={
                                    <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.typeOfFacility?.message}</span>
                                  }  
          
                                  fullWidth
                                />
                              </TableCell>
                              <TableCell align="right">
                                <TextField
                                 
                                  name="numberOfFacility"
                                  type="num"
                                  fullWidth
                                  defaultValue={formData?.[1]?.numberOfFacility?? ""}

                                  {...register('numberOfFacility',{
                                    required:'Number of Facility is required'
                                  })}
                                  helperText={
                                    <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.numberOfFacility?.message}</span>
                                  }  
          
                                />
                              </TableCell>
                              <TableCell align="right">
                                <TextField 
                                 
                                  className={classes.formField}
                                  name="location"
                                  type="text"
                                  defaultValue={formData?.[1]?.location?? ""}

                                  
                                  fullWidth
                                  {...register('location',{
                                    required:'location is required'
                                  })}
                                  helperText={
                                    <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.location?.message}</span>
                                  }  
          
                                />
                              </TableCell>

                              <TableCell align="right">
                                {index > 0 && (
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleRemoveRow(index)}
                                    sx={{ ml: 1 }} 
                                  >
                                    Remove
                                  </Button>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

                    <Button
                      startIcon={<AddIcon />}
                      onClick={handleAddRow}
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      Add Row
                    </Button>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
              className="accordionHeader"
              expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <h2
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginLeft: "7px",
                      }}
                    >
                      Payment Application
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                        marginLeft: "5px",
                      }}
                    >
                      Provide the following information regarding the Payment
                      Applications your organization uses:
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                                backgroundColor:'white'

                              }}
                            >
                              Payment Application Name
                            </TableCell>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                                backgroundColor:'white'

                              }}
                            >
                              Version Number
                            </TableCell>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                                backgroundColor:'white'

                              }}
                            >
                              Application Vendor
                            </TableCell>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                                backgroundColor:'white'

                              }}
                            >
                              Is application PA-DSS Listed?
                            </TableCell>
                            <TableCell
                              style={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                                textAlign: "center",
                                backgroundColor:'white'

                              }}
                            >
                              PA-DSS Listing Expiry date (if applicable)
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {applications.map((app, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                <TextField
                                  
                                  className={classes.formField}
                                  name="paymentApplicationName"
                                  type="text"
                                  defaultValue={formData?.[1]?.paymentApplicationName?? ""}

                                  {...register('paymentApplicationName',{
                                    required:'paymentApplicationName is required'
                                  })}
                                  helperText={
                                    <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.paymentApplicationName?.message}</span>
                                  }  
          
                                  
                                  fullWidth
                                 
                                />

                              </TableCell>
                              <TableCell>
                                <TextField
                                 
                                  
                                  name="version"
                                  type="text"
                                  defaultValue={formData?.[1]?.version?? ""}

                                
                                  fullWidth
                                  {...register('version',{
                                    required:'version is required'
                                  })}
                                  helperText={
                                    <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.version?.message}</span>
                                  }  
          
                                 
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                 
                                  
                                  name="vendor"
                                  type="text"
                                  defaultValue={formData?.[1]?.vendor?? ""}

                                  {...register('vendor',{
                                    required:'vendor is required'
                                  })}
                                  helperText={
                                    <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.vendor?.message}</span>
                                  }  
          
                                  fullWidth
                                  
                                />
                              </TableCell>
                              {/* <TableCell>
                                <FormGroup row>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        
                                      />
                                    }
                                    label="Yes"
                                  />
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        
                                      />
                                    }
                                    label="No"
                                  />
                                </FormGroup>
                              </TableCell> */}
                               <TableCell>
                               <FormGroup row>
      <FormControlLabel
        control={
          <Radio
          checked={formData?.[1]?.Is_application_PA_DSSListed === 'yes' || selectedValue === 'yes'}
          value="yes"
            name="yes"
            onChange={handleRadioChange}
          />
        }
        label="Yes"
      />
      <FormControlLabel
        control={
          <Radio
          checked={formData?.[1]?.Is_application_PA_DSSListed === 'no' || selectedValue === 'no'}
            value="no"
            name="no"
            onChange={handleRadioChange}

          />
        }
        label="No"
      />
    </FormGroup>
    </TableCell>
                              <TableCell>
                                <TextField
                                 
                                  name="expiryDate"
                                  fullWidth
                                  type="date" 
                                   {...register('expiryDate',{
                                    required:'expiryDate is required'
                                  })}
                                  defaultValue={formData?.[1]?.expiryDate?? ""}

                                  helperText={
                                    <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.expiryDate?.message}</span>
                                  }  
          
                                 
                                 
                                />
                              </TableCell>
                              <TableCell>
                                {index > 0 && (
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() =>
                                      handleRemoveApplication(index)
                                    }
                                    sx={{ ml: 1 }} 
                                  >
                                    Remove
                                  </Button>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Button
                      startIcon={<AddIcon />}
                      onClick={addApplicationRow}
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "10px" }}
                    >
                      Add Application
                    </Button>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
              className="accordionHeader"
              expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2e-content"
                    id="panel2e-header"
                  >
                    <h2
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginLeft: "7px",
                      }}
                    >
                      Description of Environment
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle1" gutterBottom>
                      Please mention the following here:
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Brief the IT infrastructure of the Merchant's
                      organization:
                    </Typography>
                    <Box>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <TextField
                            
                            className={classes.formField}
                            fullWidth
                            label="Merchant's website URL"
                            variant="outlined"
                            placeholder="http://www.example.com"
                            type="text"
                            name="merchantWebsiteUrl"
                            {...register('merchantWebsiteUrl',{
                            })}
                            defaultValue={formData?.[1]?.merchantWebsiteUrl?? ""}

                            helperText={
                              <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.merchantWebsiteUrl?.message}</span>
                            }  
    
                           

                            
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                           
                            className={classes.formField}
                            fullWidth
                            label="Name of ERP - If any"
                            variant="outlined"
                            placeholder="e.g., Octopot"
                            type="text"
                            name="nameOfErp"
                             {...register('nameOfErp',{
                                    required:'Erp is required'
                                  })}
                                  defaultValue={formData?.[1]?.nameOfErp?? ""}

                                  helperText={
                                    <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.nameOfErp?.message}</span>
                                  }  
          
                                 
                                                      
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            
                            className={classes.formField}
                            fullWidth
                            label="Payment Gateway"
                            variant="outlined"
                            placeholder="e.g., CC Avenues / Razorpay / Billdesk"
                            type="text"
                            name="paymentGateway"
                            {...register('paymentGateWay',{
                              required:'paymentGateWay is required'
                            })}
                            defaultValue={formData?.[1]?.paymentGateWay?? ""}

                            helperText={
                              <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.paymentGateWay?.message}</span>
                            }  
    
                           

                            
                            
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            
                            className={classes.formField}
                            fullWidth
                            label="Any other third party service Provider"
                            variant="outlined"
                            placeholder="e.g., Juspay"
                            name="thirdPartyServiceProvider"
                            type="text"
                            {...register('thirdPartyServiceProider',{
                              required:'thirdPartyServiceProvider is required'
                            })}
                            defaultValue={formData?.[1]?.thirdPartyServiceProvider?? ""}

                            helperText={
                              <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.thirdPartyServiceProvider?.message}</span>
                            }  
    
                           
                          
                            
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
              className="accordionHeader"
              expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2f-content"
                    id="panel2f-header"
                  >
                    <h2
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginLeft: "7px",
                      }}
                    >
                      Third-Party Service Providers
                    </h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl component="fieldset" fullWidth margin="normal">
                      <FormLabel
                        component="legend"
                        style={{ fontWeight: "bold", fontSize: "1rem" }}
                      >
                        Does your company share cardholder data with any
                        third-party service providers?
                      </FormLabel>
                    </FormControl>

                    <>
                      <TableContainer
                        component={Paper}
                        variant="outlined"
                        margin="normal"
                      >
                        <Table aria-label="service providers table">
                          <TableHead>
                            <TableRow>
                              <TableCell
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "1rem",
                                  textAlign: "center",
                                  backgroundColor:'white'
                                  // backgroundColor: isDark ? "white" :"rgba(20,27,45,255)",

                                }}
                              >
                                Name of service provider
                              </TableCell>
                              <TableCell
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "1rem",
                                  textAlign: "center",
                                  backgroundColor:'white'
                                  // backgroundColor: isDark ? "white" :"rgba(20,27,45,255)",

                                }}
                              >
                                Description of services provided
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {serviceProviders.map((provider, index) => (
                              <TableRow key={index}>
                                <TableCell>
                                  <TextField
                                    
                                    name="serviceProvider"
                                    type="text"
                                    defaultValue={formData?.[1]?.serviceProvider?? ""}

                                    {...register('serviceProvider',{
                                      required:'serviceProvider is required'
                                    })}
                                    helperText={
                                      <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.serviceProvider?.message}</span>
                                    }  
            

                                   
                                    fullWidth
                                  />
                                </TableCell>
                                <TableCell>
                                  <TextField
                                   
                                    name="description"
                                    type="text"
                                    defaultValue={formData?.[1]?.description?? ""}

                                    {...register('description',{
                                      required:'description is required'
                                    })}
                                    helperText={
                                      <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.description?.message}</span>
                                    }  
            
                                    fullWidth
                                  />
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>

                      <Button
                        startIcon={<AddIcon />}
                        onClick={handleAddServiceProvider}
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "10px" }}
                      >
                        Add Service Provider
                      </Button>
                    </>
                  </AccordionDetails>
                </Accordion>
              </div>
            </AccordionDetails>
          </Accordion>
          <Box style={{display:'flex',justifyContent:'flex-end',marginRight:'70px'}}>
           <Link to="/"><Button variant="outlined">Previous</Button></Link> &nbsp;{formData && formData[1]?<Button color="primary" variant="outlined" onClick={()=>navigate('/part3')}>Updata</Button>:<Button variant="outlined" color="success" type="submit">Save & Next</Button>}
          </Box>
        </Box>
        </form>

        
        </>
    )
}
export default Part2;