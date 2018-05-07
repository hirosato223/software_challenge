import React from 'react';
import axios from 'axios';
import UserPage from './UserPage.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageType: 'home',
      users: [],
      clickedUserName: '',
      clickedUserCode: ''
    };

    this.clickUser = this.clickUser.bind(this);
  }

  componentWillMount() {
    this.getUsers();
  }

  clickUser(e, name, code) {
    // change the pageType to profile
    this.setState({
      pageType: 'user',
      clickedUserName: name,
      clickedUserCode: code
    });
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
        {this.state.pageType === 'home' && (
          <div>
            <h1>Main page</h1>
            <ul>
              {this.state.users.map((user, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={e => this.clickUser(e, user[0], user[1])}
                  >
                    {user[0]}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {this.state.pageType === 'user' && (
          <UserPage
            name={this.state.clickedUserName}
            code={this.state.clickedUserCode}
          />
        )}
      </div>
    );
  }
}
