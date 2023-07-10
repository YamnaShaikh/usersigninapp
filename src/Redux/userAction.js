import { json } from "react-router-dom";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_FAIL, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_VERIFICATION_FAIL, USER_VERIFICATION_REQUEST, USER_VERIFICATION_SUCCESS } from "./userConstants";
import axios from "axios";


export const register = (user) => async (dispatch) => {

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
            "http://demoapi.gharpar.co/api/v8/registrations.json", user
        );

        debugger;
        console.log(userData);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: userData,
        });
        localStorage.setItem('userInfo', JSON.stringify(user));

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
        const item = JSON.parse(localStorage.getItem('userInfo'));
        const phone = item.user.phone;
        dispatch({
            type: USER_VERIFICATION_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        console.log("hello");

        const user = {
            user: {
                ...value,
                phone: phone
            },
            user_session: {
                device_type: "ios/android",
                device_token: "xxx"
            }

        }

        const response = await axios.post('http://demoapi.gharpar.co/api/v8/user_sessions/pin_verification.json', user);
        debugger;
        console.log(response.data);
        dispatch({
            type: USER_VERIFICATION_SUCCESS,
            payload: response.data,
        });

        // localStorage.setItem("userInfo", JSON.stringify(response.data));
        const myUser = JSON.parse(localStorage.getItem('userInfo'))
        myUser.auth_token = response.data.auth_token;
        localStorage.setItem('userInfo', JSON.stringify(myUser));
        localStorage.setItem("token", response.data.auth_token);

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
        const data = await axios.post(
            "http://demoapi.gharpar.co/api/v8/user_sessions.json", value,
            config
        );
        // debugger;
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });
        const myUser =
            localStorage.setItem('userInfo', JSON.stringify(data.data));
        localStorage.setItem("token", JSON.stringify(data.data.auth_token));
    } catch (error) {
        // debugger;
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.message,
        });
    }
};

export const signOut = (navigate) => async (dispatch) => {
    try {
        debugger;
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        const token = userInfo.auth_token;
        const config = {
            headers: {
                "AUTH-TOKEN": token,
                "Content-Type": "application/json",
            },
        };
        const response = await axios.post(
            "http://demoapi.gharpar.co/api/v8/user_sessions/logout.json",
            {},
            config
        );
        // dispatch({
        //     type: USER_LOGOUT,
        //     payload: response,
        // });
        if (response.status === 200) {
            localStorage.clear();
            navigate('/signin')
        }


        // localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        // debugger;
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.message,
        });
    }
};
