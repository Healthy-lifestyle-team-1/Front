import React from 'react';
import { Link } from 'react-router-dom';

export const CatalogLinkButton = ({ className, to = "#", children, onClick }) => (
  <Link to={to} className={`btn ${className}`} role="button" onClick={onClick}>
    {children}
  </Link>
);
