import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <div className='group'>
      <input
        className='form-input'
        onChange={handleChange}
        value={value}
        {...otherProps}
      />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
