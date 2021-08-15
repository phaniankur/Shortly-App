import React from 'react'
import Box from './Box';

const Image = (props) => {
    return (
      <Box as="img" maxWidth="100%" {...props}>
        {props.children}
      </Box>
    );
  };

export default Image