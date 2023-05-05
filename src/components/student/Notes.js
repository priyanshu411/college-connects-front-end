import { useState,useRef } from "react";
import axios from "axios";
import constants from "../../utility/constants";
function Notes() {
    const MRef = useRef(null);
    MRef.current = window.M;

    const [file, setFile] = useState(null);
    const [fileDescription, setFileDescription] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
      const handleDescriptionChange = (event) => {
        setFileDescription(event.target.value);
      };

      async function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('notes', file);
        formData.append('description', fileDescription);
      
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`
        };
      
        try {
          const response = await axios.post(constants.API_URL + '/api/notes/upload', formData, {
            headers: headers
          });
          event.target.reset();
          MRef.current.toast({ html:response.data.message, classes: 'rounded bg-1', displayLength: 5000 });
          console.log(response.data);
        } catch (error) {
        MRef.current.toast({ html: error.response.data.message, classes: 'rounded bg-1', displayLength: 5000 });
          console.error(error);
        }
      }
      



    return (
        <>
            <section className="container login-card">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <form onSubmit={handleSubmit}>
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title center align txt-col1">Upload Notes</span>
                                    <div class="file-field input-field">
                                        <i className="material-icons prefix">article</i>
                                        <input type="file" required onChange={handleFileChange} />
                                        <div class="file-path-wrapper ps-5">
                                            <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                                        </div>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix">description</i>
                                        <input id="description" type="text" className="validate" required onChange={handleDescriptionChange} />
                                        <label htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div className="card-action center-align">
                                    <button className="btn waves-effect waves-light btn-1" type="submit" >Upload
                                        <i className="material-icons right">file_upload</i>
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
export default Notes;