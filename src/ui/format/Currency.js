import React from "react";

const Currency = ({ children = 0 }) => (
  <span>{children.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span>
);

export default Currency;
