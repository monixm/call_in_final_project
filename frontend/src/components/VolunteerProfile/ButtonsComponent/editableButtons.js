import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditableButtons extends Component {
  render() {
    return (
      <div className='volunteer-buttons'>
        <Link to='/create_volunteer'>
          <button>Edit profile</button>
        </Link>
        <button>Approve requests</button>
      </div>
    );
  }
}

export default EditableButtons;
