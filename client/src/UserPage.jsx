import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      code: this.props.code,
      pageType: 'user',
      friends: []
    };
    this.getFriends = this.getFriends.bind(this);
    this.clickFriend = this.clickFriend.bind(this);
  }

  componentWillMount() {
    this.getFriends();
  }

  getFriends() {
    axios
      .get('/api/getFriends', {
        params: {
          code: this.state.code
        }
      })
      .then(res => {
        const allFriends = [];
        if (res.data.length > 0) {
          for (let idx in res.data) {
            if (res.data[idx]) {
              allFriends.push([res.data[idx].name, res.data[idx].code]);
            }
          }
        }

        this.setState({ friends: allFriends });
      })
      .catch(err => console.log(err));
  }

  clickFriend(e, name, code) {
    console.log(this.state.code);
    // issue get request to database to get clicked user's friends

    // update friends

    this.setState({ code: code, name: name });
    setTimeout(() => {
      this.getFriends();
    }, 500);
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.state.name}'s page!</h1>
        <ul>
          {this.state.friends.map((friend, idx) => {
            return (
              <li
                key={idx}
                onClick={e => this.clickFriend(e, friend[0], friend[1])}
              >
                {friend[0]}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
