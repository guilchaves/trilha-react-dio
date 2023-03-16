import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa;
    opacity: 0.6;
    margin-bottom: 24px;
  }

  a {
    color: #6495ed;
    text-decoration: none;
    margin-top: 10px;
    cursor: pointer;
  }

  a.remover {
    color: #ef4226;
    margin-top: 10px;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
