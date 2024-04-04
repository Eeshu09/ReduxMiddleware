
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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {FormHelperText } from '@material-ui/core'; // Import FormHelperText


import "react-toastify/dist/ReactToastify.css";
import {add} from '../formSlice'

import AddIcon from "@mui/icons-material/Add";
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
  const{register,reset,handleSubmit,formState:{errors}}=useForm();
  const navigate=useNavigate();
  const {formData}=useSelector((state)=>state.formData);
  console.log("formData",formData);
    const [parentAccordionExpanded, setParentAccordionExpanded] = useState(true);
    const [merchantExpanded, setMerchantExpanded] = useState(true);
    const[country,setCountry]=useState('india');
    const classes = useStyles();

    const dispatch=useDispatch();


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
     
      const onSubmit=(data)=>{
        dispatch(add(data));
        // reset();

        console.log("Hello",data);
        navigate('/part2')
      }
      const validateIndianTelephone = (value) => {
        const indianPhoneNumberRegex = /^[6-9]\d{9}$/;
    
        if (!value.match(indianPhoneNumberRegex)) {
          return "Please enter a valid Indian phone number";
        }
        return true; 
      };
    
    
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
                      <Grid item xs={12}md={3} sm={6}>
                        <TextField
                         
                          fullWidth
                          label="Company Name"
                          type="text"
                          name="company-name"
                          defaultValue={formData?.[0]?.companyname ?? ""}

                          className={classes.formField}
                          {...register("companyname", {
                            required: "company-name is required",
                            pattern: {
                              value: /^[A-Za-z\s]+$/, 
                              message: "Only alphabetical characters are allowed",
                            },
                          })}
                          helperText={
                            <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.companyname?.message}</span>
                          }                        />
                      </Grid>
                      <Grid item xs={12}md={3} sm={6}>
                        <TextField
                        fullWidth
                          label="DBA (doing business as)"
                              type="text"  
                              name="dba"   
                              defaultValue={formData?.[0]?.dba ?? ""}

                              {...register("dba", {
                                required: "dba is required",
                                pattern: {
                                  value: /^[A-Za-z\s]+$/, 
                                  message: "Only alphabetical characters are allowed",
                                },
                              })}
                              helperText={
                                <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.dba?.message}</span>
                              }                      
                        />
                      </Grid>
                      <Grid item xs={12}md={3} sm={6}>
                        <TextField
                         fullWidth
                          label="Contact Name"
                         type="text"
                         name="contact-name"
                         defaultValue={formData?.[0]?.contactname?? ""}

                         {...register("contactname", {
                          required: "contact-name is required",
                          pattern: {
                            value: /^[A-Za-z\s]+$/, 
                            message: "Only alphabetical characters are allowed",
                          },
                        })}
                        helperText={
                          <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.contactname?.message}</span>
                        }  

                        />
                      </Grid>
                      <Grid  item xs={12}md={3} sm={6} >
                        <TextField
                        fullWidth
                          
                          label="Title"
                           type="text"
                          name="title"
                          defaultValue={formData?.[0]?.title ?? ""}

                          {...register("title", {
                            required: "title is required",
                            pattern: {
                              value: /^[A-Za-z\s]+$/, 
                              message: "Only alphabetical characters are allowed",
                            },
                          })}
                          helperText={
                            <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.title?.message}</span>
                          }  
                        />
                      </Grid>
                      <Grid item xs={12}md={3} sm={6}>
                        <TextField
                          fullWidth
                         
                          label="Telephone"
                          type="num"
                          name="telephone"
                          defaultValue={formData?.[0]?.telephone ?? ""}

                          {...register("telephone", {
                            required: "Telephone number is required",
                            validate: validateIndianTelephone // Add custom validation function
                          })}
                          helperText={
                            <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.telephone?.message}</span>
                          }                           
                        />
                      </Grid>
                      <Grid item xs={12}md={3} sm={6}>
                        <TextField
                        fullWidth
                          label="E-mail"
                          type="email"
                          name="email"
                          defaultValue={formData?.[0]?.email ?? ""}

                          {...register("email", {
                            required: "email is required",
                            pattern: {
                              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                              message: "Please enter a valid email address",
                            },
                          })}
                          helperText={
                            <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.email?.message}</span>
                          }  
                          
                        />
                      </Grid>

                      <Grid item xs={12} md={2}>
                        <TextField
                        
                          label="Country"
                          type="text"
                           value={country}
                           aria-readonly
                           inputlabelprops={{
                            shrink: true,
                          }}
                          {...register('country',{
                          
                          })}
                        />
                      </Grid>

                      <Grid item xs={12} md={2}>
                        <FormControl fullWidth>
                          <InputLabel id="state-province-label">
                            State/Province
                          </InputLabel>
                          <Select

                            label="State/Province"
                            name="state-province"
                            defaultValue={formData?.[0]?.stateprovince ?? ""}

                            MenuProps={{
                              classes: { paper: classes.menu },
                            }}
                            {...register("stateprovince", {
                              required: 'State is required',
                            })}
                            helperText={
                              <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.stateprovince?.message}</span>
                            }
                            
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
                          name="city"
                          defaultValue={formData?.[0]?.city ?? ""}

                          {...register("city", {
                            required: "city is required",
                          
                          })}
                          helperText={
                            <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.city?.message}</span>
                          }  
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                        
                          fullWidth
                          label="URL"
                          type="url"
                          name="url"
                          defaultValue={formData?.[0]?.url ?? ""}

                          {...register("url", {
                            required: "URL is required",
                            pattern: {
                              value: /^(ftp|http|https):\/\/[^ "]+$/,
                              message: "Please enter a valid URL",
                            },
                          })}
                          helperText={
                            <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.url?.message}</span>
                          }  
                        />
                      </Grid>

                      <Grid item xs={12} md={2}>
                        <TextField
                         
                          fullWidth
                          label="Pincode"
                          type="num"
                          name="Pincode"
                          defaultValue={formData?.[0]?.Pincode ?? ""}

                          {...register("Pincode", {
                            required: "Pincode is required",
                          
                          })}
                          helperText={
                            <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.Pincode?.message}</span>
                          }  
                          
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <TextField
                         
                          label="Business Address"
                           type="text"
                           name="business-address"
                           defaultValue={formData?.[0]?.businessaddress ?? ""}

                           {...register("businessaddress", {
                            required: "business-address is required",
                           
                          })}
                          // error={Boolean(errors.businessaddress)}
                          helperText={
                            <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.businessaddress?.message}</span>
                          }  
                          
                        />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Box>

           
            </AccordionDetails>
          </Accordion>
          <Box style={{display:'flex',justifyContent:'flex-end',marginRight:'70px' }}>
        {formData && formData[0]?<Button color="primary" variant="outlined" onClick={()=>navigate('/part2')}>Update</Button> :<Button variant="outlined" color="success" type="submit">Save & Next</Button>}
          </Box>
        </Box>
        </form>
        </>
    )
}
export default Part1;