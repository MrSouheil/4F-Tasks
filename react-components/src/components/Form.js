import React, { useState } from 'react';
import Input from './Input';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
  });

  const handleChange = (inputName, inputValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  return (
    <form>
      <Input
        label="Name"
        type="text"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <Input
        label="Last Name"
        type="text"
        value={formData.lastName}
        onChange={(e) => handleChange('lastName', e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      <Input
        label="Confirm Password"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) => handleChange('confirmPassword', e.target.value)}
      />
      <Input
        label="Mobile"
        type="tel"
        value={formData.mobile}
        onChange={(e) => handleChange('mobile', e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
