import { useFormik } from "formik";
import { basicSchema } from "../../Components/Schemas/RegisterSchema";
import "./Register.css"
import axios from "axios";



const Register = () => {


  const onSubmit = async (values, actions) => {
    console.log("Register Form values", values);
    console.log("Actions",actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();

    
    
    axios.post('http://localhost:5000/api/auth/register', values)
      .then(response=>console.log(response.data))
  
      alert("Account Created");
  
  
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
      firstname:"",
      lastname:"",
      email:"",
      username: "",
      password: "",
      confirmpassword:""
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (

    <div className="containerRegister">



<form onSubmit={handleSubmit} autoComplete="off"  className="formRegister">
     <div style={{fontFamily: "'Urbanist', sans-serif",marginTop:"-10px" ,fontSize: "24px",fontWeight: "300"}}>CREATE NEW ACCOUNT</div>
     


<div className="nameRegister">


<div className="firstnameRegister">
     <input
        value={values.firstname}
        onChange={handleChange}
       id="formInputRegister"
        type="firstname"
        placeholder="Enter firstname"
        onBlur={handleBlur}
        name="firstname"
        className={errors.firstname && touched.firstname ? "input-error" : ""}
      />
      {errors.firstname && touched.firstname && <p className="error">{errors.firstname}</p>}

</div>

<div className="lastnameRegister">

      <input
        value={values.lastname}
        onChange={handleChange}
       id="formInputRegister"
        type="lastname"
        placeholder="Enter lastname"
        onBlur={handleBlur}
        name="lastname"
        className={errors.lastname && touched.lastname ? "input-error" : ""}
      />
      {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
</div>

</div>


     <div className="emailRegister">

<div className="insideUsernameRegister">

      <input
        value={values.username}
        onChange={handleChange}
       id="formInputRegister"
        type="username"
        placeholder="Enter username"
        onBlur={handleBlur}
        name="username"
        className={errors.username && touched.username ? "input-error" : ""}
      />
      {errors.username && touched.username && <p className="error">{errors.username}</p>}

</div>
      

<div className="insideEmailRegister">
      <input
        value={values.email}
        onChange={handleChange}
        id="formInputRegister"
        type="email"
        name="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
     </div>

</div>


<div className="passwordRegister">


<div className="insidePasswordRegister">
      <input
    id="formInputRegister"
        type="password"
        placeholder="Enter password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        className={errors.password && touched.password ? "input-error" : "" }
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

</div>


<div className="insideConfirmPasswordRegister">
<input
    id="formInputRegister"
        type="password"
        placeholder="Confirm password"
        value={values.confirmpassword}
        onChange={handleChange}
        onBlur={handleBlur}
        name="confirmpassword"
        className={
          errors.confirmpassword && touched.confirmpassword ? "input-error" : ""
        }
      />
      {errors.confirmpassword && touched.confirmpassword && (
        <p className="error">{errors.confirmpassword}</p>
      )}

</div>
</div>

        
         <div className="agreementRegister">
             By creating an account, I consent to the processing of my personal
             data in accordance with the <b>PRIVACY POLICY</b>
           </div>

    
      <button disabled={isSubmitting} type="submit" className="buttonRegister">
        Submit
      </button>

    </form>


</div>


    
  );
};
export default Register;

























// import { useState } from "react";
// import axios from "axios";
// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import "./Register.css"



// const SignupSchema = Yup.object().shape({
//   firstname: Yup.string()
//      .min(5, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Firstname is Required'),
//    lastname: Yup.string()
//      .min(5, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Lastname is Required'),
//      username:Yup.string()
//      .min(4,"Too short")
//      .max(50, "Too Long")
//      .required("Username is ,Required"),

//     email: Yup.string().email('Invalid email').required('Required'),
//     password:Yup.string()
//     .min(8, "Too Short")
//     .max(20, "Too Long")
//     .required("Passowrd is required"),
//     confirmpassword:Yup.string()
//     .oneOf([Yup.ref("password"),''], "Password must match")
//     .required("Confirm Password")

// });

// const Register = () => {
//   const [firstname, setFirstname] = useState("");  
//   const [lastname, setLastname] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmpassword] = useState("");
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
// const registered={
//   firstname, 
//   lastname, 
//   username,
//   email, 
//   password,
//   confirmpassword
// }
// axios.post('http://localhost:5000/api/auth/register', registered)
// .then(response=>console.log(response.data))
//      };

//     const handleChange=(e)=>{
//       setFirstname(e.target.value);
 
//       console.log(firstname);
  
//     }
//     const handleChangeLastname=(e)=>{
   
//       setLastname(e.target.value);
//       console.log(lastname)
//     }
//     const handleChangeUsername=(e)=>{
   
//       setUsername(e.target.value);
//       console.log(username)
//     }
//     const handleChangeEmail=(e)=>{
   
//       setEmail(e.target.value);
//       console.log(email)
//     }
//     const handleChangePassword=(e)=>{
   
//       setPassword(e.target.value);
//       console.log(password)
//     }
//     const handleChangeConfirmPassword=(e)=>{
   
//       setConfirmpassword(e.target.value);
//       console.log(confirmpassword)
//     }
//   return(
// <div>
    
//     <Formik
    
//       validationSchema={SignupSchema}
//       onSubmit={values => {
    
//         // same shape as initial values
      
//       }}
//     >
//       {({ errors, touched }) => (
    
    
//     <div className="containerRegister">
// <div className="wrapperRegister">
// <div className="titleRegister">CREATE NEW</div> 
//     <Form className="formRegister" onSubmit={handleSubmit}>
//     <div className="nameFieldRegister">
//     <div className="nameFieldinsideRegister">
//           <Field name="firstname" className="inputRegister"
//             placeholder="First Name"
//              value={firstname}
//                   onChange={handleChange}  
//                     />
//         <br />
//           {errors.firstname && touched.firstname ? (
//             <div className="Error" >{errors.firstname }</div>
//           ) : null}
//    </div>
//    <div className="nameFieldinsideRegister">
//           <Field name="lastname" className="inputRegister"
//                 placeholder="Last Name"
//                 value={lastname}
//                 onChange={handleChangeLastname}   />
//           {errors.lastname && touched.lastname ? (
//             <div className="Error" >{errors.lastname }</div>
//           ) : null}

// </div>

// </div>

    
// <div className="nameFieldRegister">
//     <div className="nameFieldinsideRegister">
    
//           <Field name="username" className="inputRegister"  
//           placeholder="User Name"
          
//           value={username}
//           onChange={handleChangeUsername}
                  
//                   />
//           {errors.username && touched.username ? (
//             <div className="Error" >{errors.username }</div>
//           ) : null}

// </div>
//    <div className="nameFieldinsideRegister">
   
//         <Field name="email" className="inputRegister" type="email"
//                 placeholder="Email"
//               value={email}
//             onChange={handleChangeEmail}
//                   />
//           {errors.email && touched.email ? <div className="Error" >{errors.email}</div> : null}
//           </div>

// </div>


// <div className="nameFieldRegister">
//     <div className="nameFieldinsideRegister">
    

//           <Field name="password" className="inputRegister" type="password"
//                   placeholder="Password"
//                 value={password}
//              onChange={handleChangePassword}
//                   />
//           {errors.password && touched.password ? <div className="Error" >{errors.password}</div> : null}
         
//           </div>
//    <div className="nameFieldinsideRegister">
    
//           <Field name="confirmpassword" className="inputRegister" type="confirmpassword"
//                    placeholder="Confirm Password"
//                  value={confirmpassword}
//              onChange={handleChangeConfirmPassword}
//                   />
//           {errors.confirmpassword && touched.confirmpassword ? <div className="Error" >{errors.confirmpassword}</div> : null}

//           </div>

// </div>


//           <div className="agreementRegister">
//             By creating an account, I consent to the processing of my personal
//             data in accordance with the <b>PRIVACY POLICY</b>
//           </div>
         
//                   <button  type="submit"className="buttonRegister">CREATE</button>
                
    
//       </Form>
//         </div>
//   </div>
 
//       )}
//     </Formik>
  
// </div>
  
//   )
//           };


// export default Register;













