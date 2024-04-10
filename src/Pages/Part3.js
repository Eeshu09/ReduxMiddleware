
// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
// import axios from "axios";
// import "react-datepicker/dist/react-datepicker.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Signature from '../Components/Form/Signature'
// // import {add} from '../Redux/formSlice'
// import { useSelector,useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";

// import "react-toastify/dist/ReactToastify.css";

// import { Link } from 'react-router-dom';

// // import { set } from "react-hook-form";
// const useStyles = makeStyles((theme) => ({
//     accordionHeader: {
//       backgroundColor: "#f5f5f5",
//       color: "#333",
//       fontWeight: "bold",
//     },
//     accordionHeader1:{
//       backgroundColor:'black',
//       color:'white',
//       fontWeight:"bold"
//     },
  
//     submitButton: {
//       backgroundColor: "#4caf50",
//       color: "white",
//       "&:hover": {
//         backgroundColor: "#388e3c",
//       },
//     },
//     menu: {
//       height: "250px",
//     },
//     // Additional custom styles...
//   }));
// function Part3(){
//   const{register,reset,handleSubmit,formState:{errors}}=useForm();
//   const dispatch=useDispatch();
//   // const {formData}=useSelector((state)=>state.formData);
//   // console.log("dlfeof",formData);
//     const classes = useStyles();
//     const [parentAccordionExpanded, setParentAccordionExpanded] = useState(true);
//     const [merchantExpanded, setMerchantExpanded] = useState(true); 

//     const handleParentAccordionToggle = () => {

//         setParentAccordionExpanded(!parentAccordionExpanded);
//       };
//       const handleMerchantAccordionToggle = () => {
//         setMerchantExpanded(!merchantExpanded);
//       };
//       const onSubmit=(data)=>{
//         // dispatch(add(data));
//         // console.log('Data',data);

//       }
    

//     return (
//         <>
//         <form onSubmit={handleSubmit(onSubmit)}>

//          <Accordion 
//          expanded={parentAccordionExpanded}
//          onChange={handleParentAccordionToggle}
//          >
//           <AccordionSummary
           
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3-content"
//             id="panel3-header"
//             className="accordionHeader"
//             >
//             <Typography
//               variant="h5"
//               component="h1"
//               gutterBottom
//               sx={{ color: "text.secondary", my: 2 }}
//             >
//               Part 3. PCI DSS Validation
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Accordion>
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel3a-content"
//                 id="panel3a-header"
//               >
//                 <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
//                   3A. Merchant Attestation
//                 </h2>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: 'row',
                    
//                     width: "100%",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: 2,
//                       flex: "1 1 auto",
//                       marginRight: "16px",
//                     }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <Typography
//                         variant="body1"
//                         component="div"
//                         sx={{ width: "auto" }}
//                       >
//                         Merchant Executive Officer Name:
//                       </Typography>
//                       <TextField
                        
                        
//                         name="executiveOfficerName"
//                        type="text"
//                         label="Executive Officer Name"
//                         defaultValue={formData?.[2]?.executiveOfficerName?? ""}

//                         className={classes.formField}
//                         sx={{ width: 200 }}
//                         {...register("executiveOfficerName", {
//                           required: "Office Name is required",
//                           pattern: {
//                             value: /^[A-Za-z\s]+$/, 
//                             message: "Only alphabetical characters are allowed",
//                           },
//                         })}
//                         helperText={
//                           <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.executiveOfficerName?.message}</span>
//                         } 
                        
//                       />
//                     </Box>
//                   </Box>

//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",

//                       gap: 2,
//                       flex: "1 1 auto",
//                     }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                       <Typography
//                         variant="body1"
//                         component="div"
//                         sx={{ width: "auto" }}
//                       >
//                         Title:
//                       </Typography>
//                       <TextField
                       
//                         reuired
                        
//                         name="qsaCompany"
                       
//                         className={classes.formField}
//                         defaultValue={formData?.[2]?.qsaCompany?? ""}

//                         label="QSA Company"
//                         type="text"
//                         sx={{ width: 200 }}
//                         {...register("qsaCompany", {
//                           required: "qsaCompany is required",
//                           pattern: {
//                             value: /^[A-Za-z\s]+$/, 
//                             message: "Only alphabetical characters are allowed",
//                           },
//                         })}
//                         helperText={
//                           <span style={{position:'absolute',fontSize:'12px',marginLeft:'-10px',marginTop:'-6px',color:'red'}}>{errors.qsaCompany?.message}</span>
//                         } 
                       
//                       />
//                     </Box>
//                     <Signature/>

//                   </Box>
//                 </div>
//               </AccordionDetails>
//             </Accordion>
//           </AccordionDetails>
//         </Accordion><br/>
//         <Box style={{display:'flex',justifyContent:'flex-end',marginRight:'70px'}}>
//            <Link to='/part2'><Button variant="outlined">Previous</Button></Link> &nbsp;
//            {/* {formData && formData[2]?<Button color="primary" variant="outlined">Updata</Button>:<Button variant="outlined" color="success" type="submit">Final Submit</Button>} */}
//           </Box>
//           </form>

//         </>
//     )
// }
// export default Part3;