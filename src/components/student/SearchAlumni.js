import { useEffect, useRef, useState } from "react";
import axios from "axios";
import constants from "../../utility/constants";
function SearchAlumni() {

    const MRef = useRef(null);
    useEffect(() => {
        MRef.current = window.M;
        let elems = document.querySelectorAll('.collapsible');
        MRef.current.Collapsible.init(elems);
        
    }, [])

    const [userName, setUserName] = useState("");
    const [alumniData, setAlumniData] = useState([]);

    async function searchAlumni() {
        let endpoint;
        if (userName.trim().length > 0) {
            endpoint = "/api/alumni?userName=" + userName;
        } else {
            endpoint = "/api/alumni";
        }
        await axios.get(constants.API_URL + endpoint, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                console.log(response);
                setAlumniData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <>
            <section className="container mt-4">
                <div className="center-align">
                    <div className="input-field row">
                        <div className=" col s12 m4 offset-m3">
                            <input type="text" id="searchInput" className="validate" placeholder="Enter Name"
                                onChange={(event) => setUserName(event.target.value)} />
                        </div>
                        <div className="col">
                            <button className="btn waves-effect waves-light btn-1" onClick={searchAlumni}>Search
                                <i className="material-icons right">search</i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row">
                <ul className="collapsible col s12 m6 offset-m3" >
                    {alumniData.length > 0 ?
                        alumniData.map((data, index) => {
                            return (

                                <li className="m-2" key={index}>
                                    <div className="collapsible-header">{data.userName+" "+data.course}</div>
                                    <div className="collapsible-body">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>{data.userName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td>{data.email}</td>
                                                </tr>
                                                <tr>
                                                    <td>Contact No</td>
                                                    <td>{data.contactNo}</td>
                                                </tr>
                                                <tr>
                                                    <td>Course</td>
                                                    <td>{data.course}</td>
                                                </tr>
                                                <tr>
                                                    <td>Company</td>
                                                    <td>{data.company}</td>
                                                </tr>
                                                <tr>
                                                    <td>Resume</td>
                                                    <td>{data.resume}</td>
                                                </tr>
                                                <tr>
                                                    <td>LinkedIn</td>
                                                    <td>{data.linkedIn}</td>
                                                </tr>
                                                <tr>
                                                    <td>Github</td>
                                                    <td>{data.github}</td>
                                                </tr>
                                                <tr>
                                                    <td>Portfolio</td>
                                                    <td>{data.portfolio}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </li>

                            );
                        })
                        : <p className="center-align fs-3 txt-col2">No record found</p>
                    }
                </ul>
            </section>
        </>
    );
}
export default SearchAlumni;