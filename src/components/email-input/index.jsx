import React from 'react';

import './styles.scss';

export default function EmailInput(props) {
  return (
    <input
      type="text"
      value={props.value}
      className="__email-input"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  )
}