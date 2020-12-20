import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component<any> {
  render() {
    return (
      <div>
        <Link to="/records/new">
          <i className="fas fa-plus fa-2x"></i>
        </Link>
        <div className="grid">
          <div>Reminders</div>
          <div>Recent</div>
          <div>My Pets</div>
        </div>
      </div>
    );
  }
}

export default Home;
