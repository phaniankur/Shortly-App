import React from "react";
import Box from "./Box";
import { css } from "styled-components";
//import { mq } from "./index";

const Button = ({ startIcon, endIcon, children, variant, ...props }) => {
  const buttonStyles = css`
    outline: 0;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;

  if (variant === "primary") {
    return (
      <Box
        as="button"
        css={[
          (theme) => css`
            padding: 0.75rem 0rem;
            border-radius: 50px;
            font-size: 0.875rem;
            background-color: #2acfcf;
            font-weight: 'bold';
            letter-spacing: 2px;
            min-width: 150px;
            color: white;
            &:hover {
              
                background-color: #BFFCFB;
              }
          `,
          buttonStyles,
        ]}
        color="primary"
        {...props}
      >
        {children}
      </Box>
    );
  }

  if (variant === "secondary") {
    return (
      <Box
        as="button"
        css={[
          (theme) => css`
            padding: 0.75rem 0rem;
            border-radius: 10px;
            font-size: 0.875rem;
            background-color: #2acfcf;
            font-weight: 'bold';
            letter-spacing: 2px;
            min-width: 150px;
            min-height: 50px;
            color: white;
            &:hover {
              
                background-color: #BFFCFB;
              }
          `,
          buttonStyles,
        ]}
        color="primary"
        {...props}
      >
        {children}
      </Box>
    );
  }
  if (variant === "transparent") {
    return (
      <Box
        as="button"
        css={[
          (theme) => css`
            padding: 0.75rem 0rem;
            border-radius: 50px;
            font-size: 0.875rem;
            background-color: transparent;
            font-weight: 'bold';
            letter-spacing: 2px;
            min-width: 150px;
            color: black;
            &:hover {
              
                background-color: #BFFCFB;
              }
          `,
          buttonStyles,
        ]}
        color="primary"
        {...props}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      as="button"
      css={[
        css`
        padding: 0.75rem 0rem;
        border-radius: 50px;
        font-size: 0.875rem;
        text-transform: uppercase;
        background-color: purple;
        font-weight: 300;
        letter-spacing: 2px;
        min-width: 150px;
        color: white;
          
        `,
        buttonStyles,
      ]}
      color="bluish"
      {...props}
    >
      {startIcon && startIcon}
      <span
        css={css`
          line-height: 0;
          margin: 0 0.5rem;
        `}
      >
        {children}
      </span>
      {endIcon && endIcon}
    </Box>
  );
};

export default Button;
