import React from 'react';
import logo from './logo.png';
import './App.css';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

class DropZone extends React.Component {
  constructor() {
     super();
     var user_uuid = localStorage.getItem('user_uuid');
     if (user_uuid) {
     }
     else {
         user_uuid = uuidv4();
         localStorage.setItem("user_uuid", user_uuid);
         
     }
     this.state = {user_uuid: user_uuid};
  }
  
  render() {
    return (
      <div>
        <FilePond
          ref={ref => (this.pond = ref)}
          files={[]}
          allowMultiple={true}
          maxFiles={10}
          server={"http://127.0.0.1:8000/api/v1/file/process/" + localStorage.getItem('user_uuid')}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });
          }}
        />
      </div>
    );
  }
}

export default DropZone; 
