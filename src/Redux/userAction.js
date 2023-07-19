// import { json } from "react-router-dom";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAIL, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_VERIFICATION_FAIL, USER_VERIFICATION_SUCCESS } from "./userConstants";
import axios from "axios";


export const register = (user, navigate, isAuthenticated) => async (dispatch) => {

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
            payload: { user: userData, isAuthenticated: isAuthenticated }
        });
        localStorage.setItem('userInfo', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
        {
            isAuthenticated ? (
                navigate('/verifyphone')
            ) : (
                navigate('/')
            )
        }



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

export const Verification = (value, navigate, isVerified) => async (dispatch) => {
    debugger;
    try {
        const item = JSON.parse(localStorage.getItem('userInfo'));
        const phone = item.user.phone;

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
        console.log(response.data);
        dispatch({
            type: USER_VERIFICATION_SUCCESS,
            payload: response.data,
        });
        {
            isVerified ? (
                navigate("/dashboard")
            ) : (
                navigate('/')
            )
        }

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


export const login = (value, navigate) => async (dispatch) => {
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
        // const myUser =
        //     localStorage.setItem('userInfo', JSON.stringify(data.data));
        localStorage.setItem("token", JSON.stringify(data.data.auth_token));

        navigate("/dashboard")

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
        if (userInfo != null) {
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
            if (response.status === 200) {
                localStorage.clear();
                navigate("/signin")
            }
        } else {
            const token = JSON.parse(localStorage.getItem('token'))
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
            if (response.status === 200) {
                localStorage.clear();
                navigate("/signin")
            }
        }

        // dispatch({
        //     type: USER_LOGOUT,
        //     payload: response,
        // });



        // localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        // debugger;
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.message,
        });
    }
};
