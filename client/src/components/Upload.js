import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Upload.css';

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    

    fetch('/api/video', {
      method: 'POST',
      body: data,
    }).then(res => res.json())
    .then(result => console.log(result))
    .catch(err => console.error(err))
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleUploadImage}>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
          <button>Upload</button>
      </form>
    );
  }
}

export default Upload;