import { useEffect, useState } from "react";
import axios from 'axios';
import constants from "../../utility/constants";
import { Navigate} from 'react-router-dom';
import UserNavBar from "../navbar/UserNavbar";

function Main() {
    const [userDetails, setUserDetails] = useState({});
    const [redirectToSignIn, setRedirectToSignIn] = useState(false);

    async function fetchData(token) {
        console.log(`Bearer ${token}`);
        await axios.get(constants.API_URL + "/api/user", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response);
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
          <UserNavBar data={userDetails}/>
        </>
    );
}

export default Main;
