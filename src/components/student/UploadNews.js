import { useEffect, useRef, useState } from "react";
import axios from "axios";
import constants from "../../utility/constants";
function UploadNews() {
    const MRef = useRef(null);
    useEffect(() => {
        MRef.current = window.M;
        let elems = document.querySelectorAll('select');
        MRef.current.FormSelect.init(elems);
    }, [])


    const [tittle, setTittle] = useState('');
    const [description, SetDescription] = useState('');
    const [course, setCourse] = useState('');
    const [semester, setSemester] = useState('');
    const [date, setDate] = useState('');


    function uploadNews(event) {
        event.preventDefault();
        if (course !== "" && semester !== "") {

            let newsdata = {
                "newsTittle": tittle,
                "newsDetail": description,
                "newsDate": date,
                "course": course,
                "semester": semester,
            }
            const token = localStorage.getItem('token');
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            // save data
            axios.post(constants.API_URL + "/api/uploadNews", newsdata, {
                headers: headers
            })
                .then(response => {
                    console.log(response);
                    MRef.current.toast({ html: response.data.message, classes: 'rounded bg-1', displayLength: 5000 });
                    event.target.reset();
                })
                .catch(error => {
                    console.log(error);
                    if (error.response) {
                        MRef.current.toast({ html: error.response.data.message, classes: 'rounded bg-1', displayLength: 5000 });
                    } else {
                        MRef.current.toast({ html: error.message, classes: 'rounded bg-1', displayLength: 5000 });
                    }

                });
        } else {
            MRef.current.toast({ html: "Please select course or semester", classes: 'rounded bg-1', displayLength: 5000 });
        }

    }


    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <form onSubmit={uploadNews}>
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title center align txt-col1">Upload News</span>
                                    <div className="input-field">
                                        <i className="material-icons prefix">title</i>
                                        <input id="tittle" type="text" className="validate" required onChange={(event) => setTittle(event.target.value)} />
                                        <label htmlFor="tittle">Tittle</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">school</i>
                                        <select onChange={(event) => setCourse(event.target.value)} >
                                            <option value="" selected disabled>Select Course</option>
                                            <option value="BCA">BCA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="MSC">MSC</option>
                                            <option value="M.Tech">M.Tech</option>
                                        </select>
                                        <label>Course</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">class</i>
                                        <select onChange={(event) => setSemester(event.target.value)}>
                                            <option value="" selected disabled>Select semester</option>
                                            <option value="I">I</option>
                                            <option value="II">II</option>
                                            <option value="III">III</option>
                                            <option value="IV">IV</option>
                                            <option value="V">V</option>
                                            <option value="VI">VI</option>
                                        </select>
                                        <label>semester</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">description</i>
                                        <input id="desc" type="text" className="validate" required onChange={(event) => SetDescription(event.target.value)} />
                                        <label htmlFor="desc">Description</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">calendar_month</i>
                                        <input id="date" type="date" className="validate" required onChange={(event) => setDate(event.target.value)} />
                                        <label htmlFor="date">Date</label>
                                    </div>
                                </div>
                                <div className="card-action center-align">
                                    <button className="btn waves-effect waves-light btn-1" type="submit" >Upload
                                        <i className="material-icons right">upload</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
export default UploadNews;