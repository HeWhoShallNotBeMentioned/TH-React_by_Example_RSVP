import React from 'react';
import PropTypes from 'prop-types';

const Guest = props =>

  
  <li>
    <span>{props.name}</span>
  <label><input type="checkbox" checked={props.isConfirmed}/> Confirmed </label>
  <button>edit</button>
  <button>remove</button>
  </li>;

Guest.propTypes = {
  guests: PropTypes.array.isRequired,
}

export default Guest;
