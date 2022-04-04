import React from "react";

export const Button = ({ innerText, onClick, disabled }) => (
  <button disabled={disabled} onClick={() => onClick()}>
    {innerText}
  </button>
);
