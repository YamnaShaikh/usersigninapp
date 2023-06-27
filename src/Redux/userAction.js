import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_VERIFICATION_FAIL, USER_VERIFICATION_REQUEST, USER_VERIFICATION_SUCCESS } from "./userConstants";
import axios from "axios";


export const register = (value) => async (dispatch) => {

    try {
        debugger;
        dispatch({
            type: USER_REGISTER_REQUEST,
        });

        // const config = {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "DEVICE-TYPE": ""
        //     },
        // };
        console.log("hello");
        const userData = await axios.post(
            "http://demoapi.gharpar.co/api/v8/registrations.json", value
        );
        debugger;
        console.log(userData);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: userData,
        });
        let usersList = JSON.parse(localStorage.getItem('usersList')) || [];
        usersList.push(value);
        localStorage.setItem('usersList', JSON.stringify(usersList));

        // localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        //debugger;
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.message
        });
    }
};

export const Verification = (value) => async (dispatch) => {

    try {
        debugger;
        dispatch({
            type: USER_VERIFICATION_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        console.log("hello");
        const response = await axios.post(
            "http://demoapi.gharpar.co/api/v8/user_sessions/pin_verification.json", value,
            config
        );
        debugger;
        console.log(response.data);
        dispatch({
            type: USER_VERIFICATION_SUCCESS,
            payload: response.data,
        });

        localStorage.setItem("userInfo", JSON.stringify(response.data));
    } catch (error) {
        //debugger;
        dispatch({
            type: USER_VERIFICATION_FAIL,
            payload:
                error.message
        });
    }
};


export const login = (value) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.post(
            "http://demoapi.gharpar.co/api/v8/user_sessions.json", value,
            config
        );
        // debugger;
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        // localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        // debugger;
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.message,
        });
    }
};