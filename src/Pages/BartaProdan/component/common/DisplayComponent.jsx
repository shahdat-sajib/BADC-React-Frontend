import React from "react";
import { Button, MenuItem, TextField, Typography } from "@material-ui/core";
import Card from 'react-bootstrap/Card';

export const renderText = ({ type, label, color, ...rest }) => (
  <Typography variant={type} color={color} {...rest}>
    {label}
  </Typography>
);

export const renderInputField = ({ name, label, type, state, onChange }) => {
  const { data, errors } = state;
  return (
    <TextField
      required
      style={{ textAlign: 'left' }}
      hintText="Type message"
      floatingLabelText="MultiLine and FloatingLabel"
      multiline
      rows={10}
      label={label}
      type={type ? type : "text"}
      variant='outlined'
      color='primary'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
    />
  );
};

export const renderSelect = ({ name, label, options, state, onChange }) => {
  const { data, errors } = state;
  return (
    <TextField
      required
      select
      label={label}
      variant='outlined'
      color='primary'
      size='small'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}>
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.key}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const renderButton = ({ label, variant, color, fullWidth, onClick }) => (
  <Button
    variant={variant ? variant : "outlined"}
    color={color ? color : "primary"}
    fullWidth={fullWidth ? fullWidth : false}
    onClick={onClick}>
    {label}
  </Button>
);
