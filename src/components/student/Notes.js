import { useState, } from "react";
import UploadNotes from "./UploadNotes";
import DownloadNotes from "./DownloadNotes"
function Notes() {

    const [notesAction, setNotesAction] = useState(true);
    function handleNotesAction() {
        setNotesAction(!notesAction);
    }
    return (
        <> <div className="center-align my-5">
            {
                notesAction ?
                    <button className="btn waves-effect waves-light btn-2" onClick={handleNotesAction}>download
                        <i className="material-icons right">download</i>
                    </button>
                    :
                    <button className="btn waves-effect waves-light btn-1" onClick={handleNotesAction}>Upload
                        <i className="material-icons right">file_upload</i>
                    </button>
            }
        </div>
            {
                notesAction ? <UploadNotes /> : <DownloadNotes/>  
            }
        </>
    );
}
export default Notes;