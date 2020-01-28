import React from "react";
import styled from 'styled-components'


const ButtonStyle = styled.button`
    marginLeft: ${props => (props.withMargin ? "4px" : "0")};
`;

const Button = ({active,onClick,children,withMargin}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      disabled={active}
      withMargin={withMargin}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
