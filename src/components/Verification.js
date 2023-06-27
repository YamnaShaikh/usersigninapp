import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../App.css'
import { useDispatch } from "react-redux";
import { Verification, login, register } from "../Redux/userAction";
import { Link } from "react-router-dom";


const VerificationPin = () => {
    debugger;
    const dispatch = useDispatch();

    let phone = JSON.parse(localStorage.getItem("usersList"));

    const initialValues = {
        // id: Date.now(),
        phone: phone[0].user.phone,
        phone_pin: ""
    };



    const validationSchema = Yup.object().shape({
        phone: Yup.string().required("Phone Number is required"),
        phone_pin: Yup.string().required("phone pin is required"),
    });
    debugger;
    const handleSubmit = (values, { resetForm }) => {
        alert('hello')
        console.log("here");
        console.log(values);

        const user = {
            user: values,

            user_session: {
                device_type: "ios/android",
                device_token: "xxx"
            }

        }
        dispatch(Verification(user))
        console.log(user);
        // setUserValue([...values]);
        resetForm();
    };

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