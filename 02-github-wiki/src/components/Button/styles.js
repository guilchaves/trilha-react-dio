import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;

  height: 24px;
  width: 80%;

  margin-bottom: 20px;

  &:hover {
    background-color: #fafafa;
    opacity: 0.85;
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
  }
`;
