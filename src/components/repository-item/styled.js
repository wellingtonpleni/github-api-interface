import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 350px;
  height: 150px;
  align-content: center;
  background-color: #010101;
  color: #FFF;
  
  &&:hover {
    background-color: #555555;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
  
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #FFF;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #FF0150;
`;
