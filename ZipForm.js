import React from 'react';

const axios = require('axios');

class ZipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('user_id', localStorage.getItem('user_uuid'));
    data.append('zip_password', this.state.value);
    axios({
      url: "http://127.0.0.1:8000/file/zip/",
      method: "POST",
      data: data,
      responseType: 'blob'
    })
    .then(function(response) {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', localStorage.getItem('user_uuid') + '.zip');
       document.body.appendChild(link);
       link.click();
    })
    .catch(function(error) {
    });
  }

  render() {
    return (
      <div class="is-left">
        <form onSubmit={this.handleSubmit}>
          <div class="field is-left">
              <label class="label is-left"> Password </label>
              <div class="control">
                 <input class="input is-info"
                        type="text"
                        placeholder="Password"
                        value={this.state.value}
                        onChange={this.handleChange} />
              </div>
          </div>
          <div class="control">
             <button class="button is-link">Zip it!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ZipForm; 
