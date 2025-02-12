// import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { Box, FormControl, Input, InputAdornment, InputLabel, Button, FormHelperText } from "@material-ui/core";
// import { AccountCircle } from "@material-ui/icons";
// import "./LoginPage.css";


// const LoginPage = (props) => {

//   const [username, setUsername] = useState("");

//   const history = useNavigate();
//   const dispatch = useDispatch();

//   const getUserURL = process.env.REACT_APP_API_URL + "/v1/signin";
//   const isError = useSelector( state => state.ui.isError);
//   const errorMsg = useSelector( state => state.ui.errorMsg);

//   const handleNameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleSubmit = () => {
//     dispatch(getUser(history, username, getUserURL)) ;
//   };

//   return (
//     <div className="common-page">
//       <header className="login-header">
//           <Box className="content-box">
//             <FormControl variant="standard" className="login-form">
//               <InputLabel htmlFor="input-with-icon-adornment" style={{color:"#666"}}>工號</InputLabel>
//               <Input
//                 id="input-with-icon-adornment"
//                 startAdornment={
//                   <InputAdornment position="start">
//                     <AccountCircle style={{fill:"#255957"}}/>
//                   </InputAdornment>
//                 }
//                 value={username}
//                 onChange={handleNameChange}
//               />
//               {isError && (
//                 <FormHelperText error id="standard-helper-text">
//                   {errorMsg}
//                 </FormHelperText>
//               )}
//             </FormControl>
//             <Button variant="contained" size="small" className="login-btn" onClick={handleSubmit}>
//               Submit
//             </Button>
//           </Box>
//       </header>
//     </div>
//   );
// };

// export default LoginPage;