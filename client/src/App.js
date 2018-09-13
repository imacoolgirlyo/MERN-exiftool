import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api/video')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Videos</h1>
        <h4><Link to="/upload"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Upload Video</Link></h4>
        {this.state.users.map(user =>
          <tr>
            <td><Link to={`/show/${user.id}`}>{user.username}</Link></td>
          </tr>
        )}
      </div>
    );
  }
}

export default App;