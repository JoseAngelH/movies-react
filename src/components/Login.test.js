import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

test('renders login form', () => {
  render(
    <MemoryRouter>
    <Login />
    </MemoryRouter>);
  
  // Check if the "Inicio de Sesion" text is present
  const heading = screen.getByText(/Inicio de Sesion/i);
  expect(heading).toBeInTheDocument();

  // Check if both input fields are present
  const usuarioInput = screen.getByLabelText(/Usuario/i);
  const passwordInput = screen.getByLabelText(/Contraseña/i);
  expect(usuarioInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('handles form submission with correct data', () => {
  render(
    <MemoryRouter>
    <Login />
    </MemoryRouter>);
  
  const usuarioInput = screen.getByLabelText(/Usuario/i);
  const passwordInput = screen.getByLabelText(/Contraseña/i);

  // Fill in the inputs with correct data
  fireEvent.change(usuarioInput, { target: { value: 'angel123' } });
  fireEvent.change(passwordInput, { target: { value: 'root' } });

  // Click the "Ingresar" button to submit the form
  const submitButton = screen.getByText(/Ingresar/i);
  fireEvent.click(submitButton);

  // Add your assertions for the behavior after form submission with correct data.
});

test('handles form submission with incorrect data', () => {
  render(
    <MemoryRouter>
    <Login />
    </MemoryRouter>);
  
  const usuarioInput = screen.getByLabelText(/Usuario/i);
  const passwordInput = screen.getByLabelText(/Contraseña/i);

  // Fill in the inputs with incorrect data
  fireEvent.change(usuarioInput, { target: { value: 'incorrectUser' } });
  fireEvent.change(passwordInput, { target: { value: 'incorrectPassword' } });

  // Click the "Ingresar" button to submit the form
  const submitButton = screen.getByText(/Ingresar/i);
  fireEvent.click(submitButton);

  // Add your assertions for the behavior after form submission with incorrect data.
});
