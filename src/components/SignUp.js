import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../App.css'
import { useDispatch } from "react-redux";
import { register } from "../Redux/userAction";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [userValue, setUserValue] = useState([]);
    const initialValues = {
        // id: Date.now(),
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: "",
        country_code: "",
        phone: ""
    };

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required("first name is required"),
        last_name: Yup.string().required("last name is required"),
        password: Yup.string().required("password is required"),
        password_confirmation: Yup.string().required("confirm password is required "),
        country_code: Yup.string().required("Please Select a Role"),
        phone: Yup.string().required("Phone Number is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log("here");
        console.log(values);
        const user = {
            user: values
        }
        dispatch(register(user))
        console.log(user);
        // setUserValue([...values]);
        navigate('/verifyphone');

        resetForm();
    };

    return (
        <div>
            <div className="container ">
                <br />
                <div className="Form">
                    <div className="signupForm">
                        <h1>Sign Up</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <div className="formField">
                                    {/* <label htmlFor="name" className="formLabel">
                                    First Name
                                </label> */}
                                    <br />
                                    <Field
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        className="form-control formField"
                                        placeholder="First Name"
                                    />
                                    <ErrorMessage
                                        name="first_name"
                                        component="span"
                                        className="error errMsg"
                                    />
                                </div>
                                <span></span>

                                <div className="formField">
                                    {/* <label htmlFor="last_name" className="formLabel">
                                    Last Name
                                </label> */}
                                    <br />
                                    <Field
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        className="form-control formField"
                                        placeholder="Last Name"
                                    />
                                    <ErrorMessage
                                        name="last_name"
                                        component="span"
                                        className="error errMsg"
                                    />
                                </div>
                                <span></span>

                                <div className="formField">
                                    {/* <label htmlFor="password" className="formLabel">
                                    Password
                                </label> */}
                                    <br />
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control formField"
                                        placeholder="Password"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="span"
                                        className="error errMsg"
                                    />
                                </div>
                                <span></span>
                                <br />
                                <div className="formField">
                                    {/* <label htmlFor="password" className="formLabel">
                                    Confirm Password
                                </label> */}
                                    <Field
                                        type="password"
                                        className="form-control formField "
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        placeholder="Confirm Password"
                                    />
                                    <ErrorMessage
                                        name="password_confirmation"
                                        component="span"
                                        className="error errMsg"
                                    />
                                    <span></span>
                                </div>

                                <div className="formField">
                                    {/* <label htmlFor="country_code" className="formLabel">
                                    Country Code
                                </label> */}
                                    <br />
                                    <Field
                                        as="select"
                                        name="country_code"
                                        id="country_code"
                                        className="form-control formField"

                                    >
                                        <option value="">-- Select A Country Code --</option>
                                        <option value="+92">+92</option>
                                        <option value="+91">+91 </option>
                                        <option value="+86">+86</option>
                                    </Field>
                                    <ErrorMessage
                                        name="role"
                                        component="span"
                                        className="error errMsg"
                                    />
                                </div>
                                <span></span>

                                <div className="formField">
                                    {/* <label htmlFor="phone" className="formLabel">
                                    Phone
                                </label> */}
                                    <br />
                                    <Field
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        className="form-control formField"
                                        placeholder="Phone"
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        component="span"
                                        className="error errMsg"
                                    />
                                </div>
                                <span></span>

                                <br />

                                <button className="btn btn-lg btn-success " type="submit">
                                    Sign Up
                                </button>

                            </Form>
                        </Formik>
                        <br />
                        <h5>Already have an account? <Link to={'/signin'}>Click here!</Link></h5>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp