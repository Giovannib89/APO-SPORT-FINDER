// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const FieldTextarea = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="inputs ">
      <textarea
        className="contact__form__block__third__content"
        // React - state
        value={value}
        onChange={handleChange}
        // Basic information
        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
        cols="30"
        rows="3"
        maxLength="255"
      />

    </div>
  );
};

FieldTextarea.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FieldTextarea.defaultProps = {
  value: '',
  type: '',
};

// == Export
export default FieldTextarea;
