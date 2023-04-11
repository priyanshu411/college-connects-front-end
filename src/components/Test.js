import axios from 'axios';
import { useState } from 'react';
import constants from '../utility/constants';
function Test() {

    let [token, setToken] = useState();

    async function getToken() {
        const config = {
            "userName": "priyanshu",
            "password": "12345"

        };

        try {
            const response = await axios.post(constants.API_URL+"/token", config);
            setToken(response.data.token);
            console.log(response.data.token);
        } catch (error) {
            console.error(error);
        }
    }

    async function testApi() {
        console.log(`Bearer ${token}`);
        await axios.get(constants.API_URL+"/api/student", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <>
            <button onClick={() => getToken()}>get token</button>

            <button onClick={() => testApi()}>student api</button>
        </>
    );
}

export default Test;