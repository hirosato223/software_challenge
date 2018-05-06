import React from 'react';
import axios from 'axios';
import UserPage from './UserPage.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user,
      pageType: 'home',
      users: []
    };

    this.clickUser = this.clickUser.bind(this);
  }

  clickUser() {
    console.log('user clicked!');
    // issue get request to database to get clicked user's friends

    // update friends

    // update username
  }

  render() {
    return (
      <div>
        <h1>Welcome to the {this.state.name}'s page!</h1>
      </div>
    );
  }
}
