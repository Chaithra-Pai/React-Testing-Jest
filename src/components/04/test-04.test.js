import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './test-04';

test('Renders form properly', () => {
    const {getByText, getByLabelText} = render(<Form/>);
    const nameLabel = getByText(/Name:/i);
    const ageLabel = getByText(/Age:/i);

    expect(nameLabel).toBeInTheDocument();
    expect(ageLabel).toBeInTheDocument();

    const input = getByLabelText(/Age:/i);
    expect(input).toHaveAttribute('type', 'number');
  })

  test('Button should be disabled for empty name', () => {
    const {getByLabelText, getByRole} = render(<Form/>);
    const nameInput = getByLabelText(/Name:/i);
    fireEvent.change(nameInput, {'target': {'value': ''}}); //e.target.value
    const btn = getByRole('button', {name: 'Submit'});
    expect(btn).toHaveAttribute('disabled');
  })

  test('Button should be enabled for non-empty name', () => {
    const {getByLabelText, getByRole, debug} = render(<Form/>);
    const nameInput = getByLabelText(/Name:/i)
    fireEvent.change(nameInput, {'target': {'value': ''}})
    const btn = getByRole('button', {name: 'Submit'})
    expect(btn).toHaveAttribute('disabled');
    debug(btn)
    fireEvent.change(nameInput, {'target': {'value': 'chaithra'}})
    debug(btn)
    expect(btn).not.toHaveAttribute('disabled');
  })