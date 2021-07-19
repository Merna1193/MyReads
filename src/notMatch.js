import React from 'react';
import { Link } from 'react-router-dom';

const NotMatch = () => (
  <div>
    <h1>
      Error Please try again
    </h1>
    <div>
      <Link to="/">Back To Home</Link>
    </div>
  </div>
);

export default NotMatch;
