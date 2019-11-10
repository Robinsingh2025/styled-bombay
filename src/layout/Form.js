import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Form() {
  return (
    <Link to='/'>
      <Button color='primary' variant='contained'>
        Go Home
      </Button>
    </Link>
  );
}
