import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get('/api/getAllUsers')
      .then(res => {
        const allUsers = [];
        for (let idx in res.data) {
          allUsers.push([res.data[idx].name, res.data[idx].code]);
        }
        this.setState({ users: allUsers });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        <p>Hello from app</p>
        <ul>
          {this.state.users.map((user, idx) => {
            return <li key={idx}>{user[0]}</li>;
          })}
        </ul>

        {/* TODO: render list of users */}
      </div>
    );
  }
}
