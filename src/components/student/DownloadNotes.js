import { useEffect, useState } from "react";
import axios from "axios";
import constants from "../../utility/constants";
function DownloadNotes() {
    useEffect(() => {
        fetchNotes(localStorage.getItem("token"));
    }, []);

    const [notesDetails, setNotesDetails] = useState([]);
    async function fetchNotes(token) {
        console.log(`Bearer ${token}`);
        await axios.get(constants.API_URL + "/api/notes-details", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log(response);
                setNotesDetails(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <>
            <section className="container" id="blog">
                <div className="row">
                    {
                        notesDetails.map((data, index) => {
                            return (
                                <div className="col s10 offset-s1 m6 l4" key={index}>
                                    <div className="card shadow my-3 mx-2">
                                        <div className="card-content">
                                            <span className="card-title txt-col2">{"Subject"}</span>
                                            <p>{data.description}</p>
                                        </div>
                                        <div className="center-align">
                                            <a
                                                className="waves-effect waves-light btn btn-1"
                                                target="_blank" rel="noreferrer"
                                                href={"http://localhost:8081/api/notes?fileName="+data.fileName}
                                                download
                                            >
                                                <i className="material-icons right">download</i>Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default DownloadNotes;