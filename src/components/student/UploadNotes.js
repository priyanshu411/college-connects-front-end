import { useState, useRef, useEffect } from "react";
import axios from "axios";
import constants from "../../utility/constants";
import Loader from "../Loader";
function UploadNotes() {
    const MRef = useRef(null);
    useEffect(() => {
        MRef.current = window.M;
        let elems = document.querySelectorAll('select');
        MRef.current.FormSelect.init(elems);
    }, [])

    const [file, setFile] = useState(null);
    const [fileDescription, setFileDescription] = useState('');
    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleDescriptionChange = (event) => {
        setFileDescription(event.target.value);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        if (subject !== "") {
            setLoading(true);
            const formData = new FormData();
            formData.append('notes', file);
            formData.append('description', fileDescription);
            formData.append('subject', subject);

            const token = localStorage.getItem('token');
            const headers = {
                'Authorization': `Bearer ${token}`
            };

            try {
                const response = await axios.post(constants.API_URL + '/api/notes/upload', formData, {
                    headers: headers
                });
                event.target.reset();
                console.log(response.data);
                MRef.current.toast({ html: response.data.message, classes: 'rounded bg-1', displayLength: 5000 });
            } catch (error) {
                MRef.current.toast({ html: error.response.data.message, classes: 'rounded bg-1', displayLength: 5000 });
                console.error(error);
            }finally{
                setLoading(false);
            }
        }
        else {
            MRef.current.toast({ html: "Select Subject", classes: 'rounded bg-1', displayLength: 5000 });
        }
    }




    return (
        <>

            <section className="container">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <form onSubmit={handleSubmit}>
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title center align txt-col1">Upload Notes</span>
                                    <div className="file-field input-field">
                                        <i className="material-icons prefix">article</i>
                                        <input type="file" required onChange={handleFileChange} />
                                        <div className="file-path-wrapper ps-5">
                                            <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                                        </div>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">subject</i>
                                        <select onChange={(event) => setSubject(event.target.value)}>
                                            <option value="" selected disabled>Select Subject</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="English">English</option>
                                            <option value="Physics">Physics</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="DSA">Data Structure</option>
                                            <option value="DBMS">Database</option>
                                            <option value="Compiler">autometa & Compiler</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="OS">Operating System</option>
                                            <option value="Networking">Networking</option>
                                        </select>
                                        <label>Subject</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">description</i>
                                        <input id="description" type="text" className="validate" required onChange={handleDescriptionChange} />
                                        <label htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div className="card-action center-align">
                                    {
                                        loading ? <Loader></Loader>
                                            :
                                            <button className="btn waves-effect waves-light btn-1" type="submit" >Upload
                                                <i className="material-icons right">file_upload</i>
                                            </button>
                                    }

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
export default UploadNotes;