import React from 'react';

import './styles.scss';

export default function TextInput(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      className={`__text-input ${props.className}`}
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  )
}