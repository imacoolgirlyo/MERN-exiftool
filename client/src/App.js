import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router-dom';
import Upload from './components/Upload';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos:[]
    }};

  componentDidMount() {
    axios.get('/api/video')
      .then(res => {
        this.setState({videos : res.data});
        console.log(this.state.videos)
      })
      // .then(videos => {
      //   this.setState({videos});
      //   console.log(this.state.videos);
      // });
  }

  render() {
    return (
      <div className="App">
        <h1>Videos</h1>
        <Upload/>
        {/* <h4><Link to="/upload"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Upload Video</Link></h4> */}
        <table class="table table-stripe">
          <tbody>
              
                  {this.state.videos.map(video =>
                  <tr>
                    <td><Link to={`/show/${video.model}`}>{video.model}</Link></td>
                  </tr>
                )}
        
            
          </tbody>
          </table>
      </div>
    );
  }
}

export default App;