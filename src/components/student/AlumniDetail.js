import { useState,useRef,useEffect } from "react";
import axios from "axios";
import constants from "../../utility/constants";
function AlumniDetail() {

    const MRef = useRef(null);
    useEffect(() => {
        MRef.current = window.M;
        let elems = document.querySelectorAll('select');
        MRef.current.FormSelect.init(elems);
    }, [])

    const [company, setCompany] = useState();
    const [github, setgithub] = useState();
    const [linkedIn, setLinkedIn] = useState();
    const [resume, setResume] = useState();
    const [portfolio, setportfolio] = useState();


    function submitDetail(event) {
        event.preventDefault();
        let alumniData = {
            "company": company,
            "resumeUrl": resume,
            "linkedinUserName": linkedIn,
            "githubUserName": github,
            "portfolioUrl": portfolio

        }
        const token = localStorage.getItem('token');
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        // save data
        axios.post(constants.API_URL + "/api/addAlumni", alumniData, {
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

    }

    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <form onSubmit={submitDetail}>
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title center align txt-col1">Alumni details</span>
                                    
                                    <div className="input-field">
                                        <i className="material-icons prefix">apartment</i>
                                        <input id="company" type="text" className="validate" onChange={(event) => setCompany(event.target.value)} />
                                        <label htmlFor="company">Companies</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">summarize</i>
                                        <input id="resume" type="text" className="validate" onChange={(event) => setResume(event.target.value)} />
                                        <label htmlFor="resume">Resume Url</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">group</i>
                                        <input id="linked-in" type="text" className="validate" onChange={(event) => setLinkedIn(event.target.value)} />
                                        <label htmlFor="linked-in">Linked in user name</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id="github" type="text" className="validate" onChange={(event) => setgithub(event.target.value)} />
                                        <label htmlFor="github">Github user name</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">language</i>
                                        <input id="portfolio" type="text" className="validate" onChange={(event) => setportfolio(event.target.value)} />
                                        <label htmlFor="portfolio">Portfolio link</label>
                                    </div>
                                </div>
                                <div className="card-action center-align">
                                    <button className="btn waves-effect waves-light btn-1" type="submit" >Submit
                                        <i className="material-icons right">send</i>
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
export default AlumniDetail;
