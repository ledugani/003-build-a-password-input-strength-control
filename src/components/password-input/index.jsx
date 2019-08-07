import React from 'react';
import TextInput from '../text-input'

import './styles.scss';

export default function PasswordInput(props) {
  return (
    <TextInput
      type="password"
      value={props.value}
      className="__password-input"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  )
}