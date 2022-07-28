import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormInputs = styled.View`
  width: 30%;

  ${(props) => props.theme.isLaptop && "width: 45%;"}

  ${(props) => props.theme.isTablet && "width: 70%;"}

  ${(props) => props.theme.isMobileL && "width: 95%;"}

  ${(props) => props.theme.isMobileS && "width: 98%;"}
`;
