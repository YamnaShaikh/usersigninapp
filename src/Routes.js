import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Person } from "@mui/icons-material";
import Dashboard from "./components/Dashboard";
import VerificationPin from "./components/Verification";

const token = localStorage.getItem("token");

// Function to check if the user is authenticated
const isAuthenticated = () => {
    return token !== null; // Replace this with your actual authentication logic
};

// Define the routes
const routes = [
    // {
    //     type: "collapse",
    //     name: "Dashboard",
    //     key: "dashboard",
    //     icon: <Person />,
    //     route: "/dashboard",
    //     component: <Dashboard />,
    //     // Restrict access to authenticated users only
    //     private: true,
    // },
    {
        type: "collapse",
        name: "",
        key: "addUser",
        icon: <Person />,
        route: "/verifyphone",
        component: <VerificationPin isAuthenticated={isAuthenticated} />,
        // Restrict access to authenticated users only
        private: true,
    },
    {
        type: "collapse",
        name: "Sign In",
        key: "sign-in",
        icon: <Person />,
        route: "/signin",
        component: <SignIn />,
        // Allow access to all users (unauthenticated and authenticated)
        private: false,
    },
    {
        type: "collapse",
        name: "Sign Up",
        key: "sign-up",
        icon: <Person />,
        route: "/",
        component: () => (token == null ? <SignUp /> : <Dashboard />),
        // Allow access to all users (unauthenticated and authenticated)
        private: false,
    },
];

// Filter the routes based on the authentication status
const filteredRoutes = routes.filter(
    (route) => !route.private || isAuthenticated()
);

export default filteredRoutes;








// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import { Person } from "@mui/icons-material";
// import Dashboard from "./components/Dashboard";
// import VerificationPin from "./components/Verification";

// const token = localStorage.getItem("token");
// const routes = [

//     // {
//     //     type: "collapse",
//     //     name: "Dashboard",
//     //     key: "dashboard",
//     //     icon: <Person />,
//     //     route: "/dashboard",
//     //     component: <Dashboard />,
//     // },
//     {
//         type: "collapse",
//         name: "",
//         key: "addUser",
//         icon: <Person />,
//         route: "/verifyphone",
//         component: <VerificationPin isAuthenticated={isAuthenticated} />,
//     },
//     {
//         type: "collapse",
//         name: "Sign In",
//         key: "sign-in",
//         icon: <Person />,
//         route: "/signin",
//         component: <SignIn />,
//     },
//     {
//         type: "collapse",
//         name: "Sign Up",
//         key: "sign-up",
//         icon: <Person />,
//         route: "/",
//         component: () => {
//             {
//                 token == null ? (<SignUp />) : (<Dashboard />)
//             }
//         }


//     },
// ];

// export default routes;
