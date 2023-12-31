import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../App.css'
import { useDispatch } from "react-redux";
import { login } from "../Redux/userAction";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Animation from "./Animation";


const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [userValue, setUserValue] = useState([]);
    const initialValues = {
        // id: Date.now(),
        country_code: "",
        phone: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        country_code: Yup.string().required("Please Select a Role"),
        phone: Yup.string().required("Phone Number is required"),
        password: Yup.string().required("password is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        // alert('hello')
        console.log("here");
        console.log(values);

        const user = {
            user: values,

            user_session: {
                device_type: "ios/android",
                device_token: "xxx"
            }

        }
        dispatch(login(user, navigate))
        // navigate('/dashboard');
        console.log(user);
        resetForm();
    };

    // const token = localStorage.getItem('token')

    const handleClick = () => {
        debugger;

        navigate("/");


    }
    return (
        <div>
            <div className="container ">
                <Animation />
                <br />
                <div className="Form">

                    <div className="signupForm">
                        <h1 style={{ color: "white", fontFamily: "cursive" }}>Sign In</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <br />

                                <div className="formField">
                                    {/* <label htmlFor="country_code" className="formLabel">
                                    Country Code
                                </label> */}
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

                                <button className="btn btn-lg btn-success signin_button" type="submit">
                                    Sign In
                                </button>


                            </Form>
                        </Formik>
                        <br />
                        <h5><Button className="signup_button" onClick={handleClick}>Create an Account</Button></h5>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn