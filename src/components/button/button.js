import React from "react";
import styled from 'styled-components'


const ButtonStyle = styled.button`
    marginLeft: ${props => (props.withMargin ? "4px" : "0")};
    background-color: ${props => (props.color && !props.disabled ? props.color  : "white")};
    border-color: ${props => (props.color && !props.disabled  ? props.color  : "white")};
    color: ${props => (props.color && !props.disabled  ? "white"  : "black")};
    border-radius: ${props => (props.color && !props.disabled  ? "4px"  : "4px")};
`;

const Button = ({active,onClick,children,withMargin,color}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      disabled={active}
      withMargin={withMargin}
      color={color}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
