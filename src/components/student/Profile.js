import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import constants from "../../utility/constants";

function Profile() {
    const [user, setUser] = useState({});

    const fetchUser = useCallback(async (token) => {
        console.log("runnnn");
        try {
            const response = await axios.get(constants.API_URL + "/api/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response);
            setUser(response.data);
            console.log(user); // Log the updated user object
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchUser(token);
        }
    }, [fetchUser]);

    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title center align txt-col1">Profile</span>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>{user.userName}</td>
                                        </tr>
                                        <tr>
                                            <td>Enrollment No</td>
                                            <td>{user.enrollmentNo}</td>
                                        </tr>
                                        <tr>
                                            <td>Course</td>
                                            <td>{user.course} ,{user.semester}</td>
                                        </tr>
                                        <tr>
                                            <td>Pass out year</td>
                                            <td>{user.passOutYear}</td>
                                        </tr>
                                        <tr>
                                            <td>User Type</td>
                                            <td>{user.userType}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn waves-effect waves-light btn-1" type="submit" >Edit
                                    <i className="material-icons right">edit</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
