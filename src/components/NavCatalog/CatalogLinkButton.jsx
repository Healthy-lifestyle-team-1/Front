import React from 'react';
import { Link } from 'react-router-dom';

export const CatalogLinkButton = ({ className, to, children }) => (
  <Link to={to} className={`btn ${className}`} role="button">
    {children}
  </Link>
);
