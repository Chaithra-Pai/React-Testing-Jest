import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toggle from "./test-02";

test("Test theme button toggle", () => {
  
  render(<Toggle />); 
  const buttonEl = screen.getByText(/Current theme/i);   
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);

});

test("Test theme button toggle multiple click", () => {
  
  render(<Toggle />);
  const buttonEl = screen.getByText(/Current theme/i);  
  userEvent.click(buttonEl);
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/light/i);
  
});