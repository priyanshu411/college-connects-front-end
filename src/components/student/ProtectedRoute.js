import { useEffect, useState } from "react";
import axios from 'axios';
import constants from "../../utility/constants";
import { Navigate} from 'react-router-dom';

function ProtectedRoute(props) {
    const [userDetails, setUserDetails] = useState({});
    const [redirectToSignIn, setRedirectToSignIn] = useState(false);
    const ChildComponent=props.Component;

    async function fetchData(token) {
        await axios.get(constants.API_URL + "/api/user", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            setUserDetails(response.data);
        })
        .catch((error) => {
            localStorage.removeItem('token');
            console.log(error);
            setRedirectToSignIn(true);
        });
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token != null) {
            fetchData(token);
        } else {
            setRedirectToSignIn(true);
        }
    }, []);

    if (redirectToSignIn) {
        return <Navigate to="/login" replace={true} />;
    }

    return (
        <>
        <ChildComponent data={userDetails}/>
        </>
    );
}

export default ProtectedRoute;
