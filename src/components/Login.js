import { useState ,useEffect,useRef} from "react";
import constants from "../utility/constants";
import axios from "axios";
import { Navigate } from "react-router-dom";
function Login() {

    useEffect(() => {
        let token=localStorage.getItem("token")
        if(token!=null && token.length>0){
            setNavigate(true);
        }else{
            setNavigate(false);
        }
    }, [])

    
    const MRef = useRef(null);
    MRef.current = window.M;

    const [enrollment, setEnrollment] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState(false);

    async function submitForm(event) {
        event.preventDefault();
        console.log(enrollment, password);
        let data = {
            "enrollmentNo": enrollment,
            "password": password
        }
        try {
            const response = await axios.post(constants.API_URL + "/token", data);
            localStorage.setItem("token", response.data.token);
            setNavigate(true);
        } catch (error) {
            if (error.response.status === 404) {
                // handle 404 error
                console.log(error.response.data.message);
                MRef.current.toast({html:error.response.data.message, classes: 'rounded',displayLength:10000});
            } else {
                // handle other errors
                console.log(error.message);
                MRef.current.toast({html:error.response.data.message, classes: 'rounded',displayLength:10000});
            }
        }
    }

    if (navigate) {
        return <Navigate to="/main" replace={true} />;
    }


    return (
        <>
            <section className="container">
                <p className="center-align fs-1 fw-normal txt-col1">Log In</p>
                <div className="row">
                    <form className="col s12 m6 offset-m3" onSubmit={submitForm}>

                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">assignment_ind</i>
                                <input id="enrollment" type="text" className="validate" required onChange={(event) => setEnrollment(event.target.value)} />
                                <label htmlFor="enrollment">Enrollment No.</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">vpn_key</i>
                                <input id="password" type="password" className="validate" required onChange={(event) => setPassword(event.target.value)} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="center-align">
                            <button className="btn waves-effect waves-light btn-1" type="submit" >Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    );
}
export default Login;