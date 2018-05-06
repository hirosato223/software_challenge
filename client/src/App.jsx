import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  // getUsers() {
  //   axios
  //     .get(`/api/friends/${ownId}`, this.state.authHeader)
  //     .then(res => {
  //       const friendIds = [];
  //       for (let idx in res.data) {
  //         friendIds.push([res.data[idx].id, res.data[idx].username]);
  //       }
  //       this.setState({ allFriends: friendIds });
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
        <p>Hello from app</p>
        {/* TODO: render list of users */}
      </div>
    );
  }
}
