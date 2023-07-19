import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../App.css'
import { useDispatch, useSelector } from "react-redux";
import { Verification } from "../Redux/userAction";
import { Link, useNavigate } from "react-router-dom";


const VerificationPin = () => {
    // debugger;
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    // debugger;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const initialValues = {
        phone_pin: ""
    };



    const validationSchema = Yup.object().shape({
        // phone: Yup.string().required("Phone Number is required"),
        phone_pin: Yup.string().required("phone pin is required"),
    });
    const handleSubmit = (value, { resetForm }) => {
        debugger;

        // alert('hello')
        console.log("here");
        dispatch(Verification(value, navigate, true))
        // navigate('/dashboard');
        setIsVerified(true);
        resetForm();
    };
    // const isAuthenticated = useSelector((state) => state.user);

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigate("/verifyphone");
    //     } else {
    //         navigate("/")
    //     }
    // }, []);

    return (
        <div>
            <div className="container ">
                <br />
                <div className="Form">

                    <div className="signupForm">
                        <h1>Enter Verification Pin</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>

                                <br />
                                <div className="formField">
                                    {/* <label htmlFor="phone" className="formLabel">
                                    Phone
                                </label> */}
                                    {/* <Field
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
                                    /> */}
                                </div>
                                <span></span>

                                <br />

                                <div className="formField">
                                    {/* <label htmlFor="password" className="formLabel">
                                    Password
                                </label> */}
                                    <Field
                                        type="text"
                                        id="pin"
                                        name="phone_pin"
                                        className="form-control formField"
                                        placeholder="Enter 4 digits Verification Pin(0000)"
                                    />
                                    <ErrorMessage
                                        name="phone_pin"
                                        component="span"
                                        className="error errMsg"
                                    />
                                </div>
                                <span></span>
                                <br />

                                <button className="btn btn-lg btn-success " type="submit">
                                    Submit
                                </button>


                            </Form>
                        </Formik>
                        <br />
                        <h5><Link to={'/'}>Create an Account</Link></h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VerificationPin