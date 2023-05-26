import { useEffect, useState, useRef } from "react";
import axios from "axios";
import constants from "../utility/constants";
function SignUp() {

  const MRef = useRef(null);
  useEffect(() => {
    MRef.current = window.M;
    let elems = document.querySelectorAll('select');
    MRef.current.FormSelect.init(elems);
  }, [])

  const [name, setName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [passOutYear, setPassOutYear] = useState("");
  const [password, setPassword] = useState("");


  function submitForm(event) {
    event.preventDefault();
    let formdata = {
      "enrollmentNo": enrollment,
      "userName": name,
      "email": email,
      "contactNo": contact,
      "course": course,
      "semester": semester,
      "passOutYear": passOutYear,
      "password": password,
      "userType": constants.USER_ROLE.STUDENT
    }

    // save data
    axios.post(constants.API_URL + "/api/user/create", formdata)
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
            <form onSubmit={submitForm}>
              <div className="card">
                <div className="card-content">
                  <span className="card-title center align txt-col1">Sign Up</span>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">account_circle</i>
                      <input id="name" type="text" className="validate" required onChange={(event) => setName(event.target.value)} />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">assignment_ind</i>
                      <input id="enrollment" type="text" className="validate" required onChange={(event) => setEnrollment(event.target.value)} />
                      <label htmlFor="enrollment">Enrollment No.</label>
                    </div>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">email</i>
                      <input id="email" type="email" className="validate" required onChange={(event) => setEmail(event.target.value)} />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">phone</i>
                      <input id="contact" type="number" className="validate" required onChange={(event) => setContact(event.target.value)} />
                      <label htmlFor="contact">Contact No.</label>
                    </div>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">school</i>
                      <select onChange={(event) => setCourse(event.target.value)}>
                        <option value="" selected disabled>Select Course</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                        <option value="MSC">MSC</option>
                        <option value="M.Tech">M.Tech</option>
                      </select>
                      <label>Course</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
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
                    <div className="input-field col s12">
                      <i className="material-icons prefix">event</i>
                      <input id="passout" type="text" className="validate" required onChange={(event) => setPassOutYear(event.target.value)} />
                      <label htmlFor="passout">Pass out Year</label>
                    </div>
                  </div>
                  <div className="row">
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>



  );
}

export default SignUp;
