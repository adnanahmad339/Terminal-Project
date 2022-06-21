import { useFormik } from "formik";
import { basicSchema } from "../../Components/Schemas/LoginSchema";
import "./Login.css"
import { Link } from "react-router-dom";
 import { login } from "../../redux/apiCalls";
 import { useDispatch, useSelector } from "react-redux";



const Login = () => {
  const dispatch=useDispatch();

  const onSubmit = async (values, actions) => {
    console.log("values", values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  
    login(dispatch, values);
  
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      password: ""
      
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (

    <div className="containerLogin">

<div>

<form onSubmit={handleSubmit} autoComplete="off"  className="formLogin">
     <div style={{fontFamily: "'Urbanist', sans-serif",marginTop:"-20px" ,fontSize: "24px",fontWeight: "300"}}>SIGN IN</div>
      <input
        value={values.username}
        onChange={handleChange}
     id="formInputLogin"
        type="username"
        placeholder="Enter your username"
        onBlur={handleBlur}
        name="username"
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.username && touched.username && <p className="error">{errors.username}</p>}
      
      
        
      <input
    id="formInputLogin"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
    
      <button disabled={isSubmitting} type="submit" className="buttonLogin">
        Submit
      </button>
              <a href="" className="linkLogin">DO NOT YOU REMEMBER THE PASSWORD?</a>
  <Link to="/register" className="linkLogin">
           CREATE A NEW ACCOUNT
          </Link>
    </form>


</div>

    </div>

    
  );
};
export default Login;











// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { login } from "../../redux/apiCalls";
// import { useDispatch, useSelector } from "react-redux";
// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import "./Login.css"



// const SignupSchema = Yup.object().shape({
//   username: Yup.string()
//     .required('Required'),
//   password: Yup.string().required('Required'),
// });

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const { isFetching, error } = useSelector((state) => state.user);

//   const handleClick = (e) => {
//     e.preventDefault();
//     login(dispatch, { username, password });
//   };

//   return(
// <div>
    
//     <Formik
//       initialValues={{
//         username: '',
//         password: '',
//       }}
//       validationSchema={SignupSchema}
//       onSubmit={values => {
//         // same shape as initial values
//         console.log(values);
//       }}
//     >
//       {({ errors, touched }) => (
    
    
//     <div className="containerLogin">
// <div className="wrapperLogin">
// <div className="titleLogin">SIGN IN</div> 
//     <Form className="formLogin">
//           <Field name="username" className="inputLogin"
//           value={username}
//                   onChange={(e) => setUsername(e.target.value)}
                  
//                   />
    
//           {errors.username && touched.username ? (
//             <div className="Error" >{errors.username }</div>
//           ) : null}

//           <Field name="password" className="inputLogin" type="password"
//                  value={password}
//              onChange={(e) => setPassword(e.target.value)}
//                   />
//           {errors.password && touched.password ? <div className="Error" >{errors.password}</div> : null}
//           <button className="buttonLogin" onClick={handleClick} disabled={isFetching}>
//             LOGIN
//           </button>
         

//           {error && <div className="ErrorLogin">Something went wrong...</div>}
//           <a href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
//       <br></br>   <Link to="/register">
//           CREATE A NEW ACCOUNT
//          </Link>
         
//         </Form>
//         </div>
//   </div>
 
//       )}
//     </Formik>
  
// </div>
  
//   )
//           };


// export default Login;













