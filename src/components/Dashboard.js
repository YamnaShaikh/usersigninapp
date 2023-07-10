import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { signOut } from '../Redux/userAction'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignout = () => {
        dispatch(signOut(navigate));
        // navigate('/signin')

    }

    const token = localStorage.getItem('token') || null

    useEffect(() => {
        if (token == null || token == undefined) {
            navigate("/signin");
        }
    }, [navigate, token]);

    return (
        <div>
            <h1>Dashboard</h1>
            <Button onClick={handleSignout}>Sign Out</Button>
        </div>
    )
}

export default Dashboard